const fs = require('fs');
const path = require('path');
const readline = require('readline');

// Configuration
const PUBLIC_DIR = path.join(process.cwd(), 'public');
const SRC_DIRS = ['app', 'pages', 'components', 'lib'];
const IMAGE_EXTENSIONS = new Set(['.png', '.jpg', '.jpeg', '.webp', '.svg', '.gif']);
const BACKUP_DIR = path.join(process.cwd(), '_unused_images_backup');

// State
const allImages = new Set(); // Set<string> (relative paths from public root)
const usedImages = new Set(); // Set<string>
const possiblyUsedImages = new Set(); // Set<string>
const dynamicPatterns = []; // Array<{dir: string, pattern: string}> - directories suspected of dynamic usage

// Helper: Get all files recursively
function getAllFiles(dir, extensions = null) {
    let results = [];
    if (!fs.existsSync(dir)) return results;

    const list = fs.readdirSync(dir);
    list.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        if (stat && stat.isDirectory()) {
            results = results.concat(getAllFiles(filePath, extensions));
        } else {
            if (!extensions || extensions.has(path.extname(file).toLowerCase())) {
                results.push(filePath);
            }
        }
    });
    return results;
}

// Step 1: Scan Public Directory for Images
console.log('🔍 Scanning public directory for images...');
const imageFiles = getAllFiles(PUBLIC_DIR, IMAGE_EXTENSIONS);
imageFiles.forEach(file => {
    // Store relative path, e.g., "/images/hero.png"
    const relativePath = '/' + path.relative(PUBLIC_DIR, file).replace(/\\/g, '/');
    allImages.add(relativePath);
});
console.log(`✓ Found ${allImages.size} images in public/`);

// Step 2: Scan Source Code for Usage
console.log('🔍 Scanning source code for usage...');
const srcFiles = [];
SRC_DIRS.forEach(dir => {
    const fullPath = path.join(process.cwd(), dir);
    srcFiles.push(...getAllFiles(fullPath, new Set(['.js', '.jsx', '.ts', '.tsx', '.mdx', '.json'])));
});

srcFiles.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');

    // Exact matches (catch <Image src="/img.png">, url('/img.png'), "img.png")
    allImages.forEach(img => {
        // Check 1: Full path match (e.g. "/images/hero.png")
        if (content.includes(img)) {
            usedImages.add(img);
        }
        // Check 2: Relative path match without leading slash (e.g. "images/hero.png")
        else if (content.includes(img.substring(1))) {
            usedImages.add(img);
        }
    });

    // Dynamic usage detection (Heuristic)
    // Look for template literals constructing paths that might target known image directories
    // e.g. `/images/${slug}.png` or `images/${...}`

    // Find all directory prefixes derived from our known images
    const knownDirs = new Set();
    allImages.forEach(img => {
        knownDirs.add(path.dirname(img).replace(/\\/g, '/')); // e.g., "/images"
    });

    knownDirs.forEach(dir => {
        // Regex to find template literals starting with this directory
        // Matches: `/images/${`, `images/${`
        // We escape the dir for regex safety
        const escapedDir = dir.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

        // Look for: /dir/${ or dir/${ inside backticks
        // We are looking for something like: `.../images/${...` or `...images/${...`
        // Simplified check for the string pattern in the file content
        const dynamicPattern = new RegExp(`${escapedDir.substring(1)}\/\\$\{`, 'g'); // check for "images/${"
        const dynamicPatternAbsolute = new RegExp(`${escapedDir}\/\\$\{`, 'g'); // check for "/images/${"

        if (dynamicPattern.test(content) || dynamicPatternAbsolute.test(content)) {
            // If we find a dynamic construction for this directory, mark all un-used images in this dir as "possibly used"
            allImages.forEach(img => {
                if (path.dirname(img).replace(/\\/g, '/') === dir && !usedImages.has(img)) {
                    possiblyUsedImages.add(img);
                }
            });
        }
    });
});

// Calculate Unused
const unusedImages = [];
allImages.forEach(img => {
    if (!usedImages.has(img) && !possiblyUsedImages.has(img)) {
        unusedImages.push(img);
    }
});

// Report
console.log('\n📊 Summary:');
console.log(`Total Images: ${allImages.size}`);
console.log(`Used: ${usedImages.size}`);
console.log(`Possibly Used (Dynamic): ${possiblyUsedImages.size}`);
console.log(`Unused: ${unusedImages.length}`);

if (possiblyUsedImages.size > 0) {
    console.log('\n⚠️  Possibly Used (Dynamic References):');
    possiblyUsedImages.forEach(img => console.log(`  ? ${img}`));
}

if (unusedImages.length === 0) {
    console.log('\n✅ No unused images found!');
    process.exit(0);
}

console.log('\n❌ Unused Images:');
unusedImages.forEach(img => console.log(`  - ${img}`));

// Handle Deletion
const args = process.argv.slice(2);
const deleteMode = args.includes('--delete');
const dryRun = !deleteMode;

if (dryRun) {
    console.log('\nℹ️  Run with --delete to safely move these files to a backup folder.');
} else {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('\n⚠️  Are you sure you want to move these unused images to backup? (y/N) ', (answer) => {
        if (answer.toLowerCase() === 'y') {
            console.log(`\n📦 Moving files to ${BACKUP_DIR}...`);
            if (!fs.existsSync(BACKUP_DIR)) {
                fs.mkdirSync(BACKUP_DIR, { recursive: true });
            }

            unusedImages.forEach(img => {
                const srcPath = path.join(PUBLIC_DIR, img);
                const destPath = path.join(BACKUP_DIR, img);
                const destDir = path.dirname(destPath);

                if (!fs.existsSync(destDir)) {
                    fs.mkdirSync(destDir, { recursive: true });
                }

                try {
                    // Check if file still exists (it might have been moved already if duplicates in list?)
                    if (fs.existsSync(srcPath)) {
                        fs.renameSync(srcPath, destPath);
                        console.log(`  Moved: ${img}`);
                    }
                } catch (e) {
                    console.error(`  Failed to move: ${img}`, e);
                }
            });
            console.log('\n✅ Reuse successful!');
        } else {
            console.log('\n🚫 Operation cancelled.');
        }
        rl.close();
    });
}

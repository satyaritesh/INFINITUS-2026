import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Font Test - Infinitus 2026',
    description: 'Testing custom fonts',
}

export default function FontTestPage() {
    return (
        <div className="min-h-screen bg-[#030014] p-8 text-white">
            <h1 className="text-4xl mb-8 text-center">Font Test Page</h1>

            <div className="space-y-8 max-w-4xl mx-auto">
                {/* Default font */}
                <div className="p-4 border border-white/20 rounded">
                    <p className="text-sm text-gray-400 mb-2">Default Font (Inter)</p>
                    <p className="text-3xl">The quick brown fox jumps over the lazy dog</p>
                </div>

                {/* Space Grotesk */}
                <div className="p-4 border border-white/20 rounded">
                    <p className="text-sm text-gray-400 mb-2">Space Grotesk (font-space)</p>
                    <p className="text-3xl font-space">The quick brown fox jumps over the lazy dog</p>
                </div>

                {/* Lobster Two */}
                <div className="p-4 border border-green-500/20 rounded bg-green-500/5">
                    <p className="text-sm text-gray-400 mb-2">Lobster Two (font-lobster-two)</p>
                    <p className="text-3xl font-lobster-two">The quick brown fox jumps over the lazy dog</p>
                    <p className="text-xl font-lobster-two italic mt-2">Italic: The quick brown fox jumps over the lazy dog</p>
                </div>

                {/* Red Rose */}
                <div className="p-4 border border-red-500/20 rounded bg-red-500/5">
                    <p className="text-sm text-gray-400 mb-2">Red Rose (font-red-rose)</p>
                    <p className="text-3xl font-red-rose">The quick brown fox jumps over the lazy dog</p>
                    <p className="text-xl font-red-rose font-bold mt-2">Bold: The quick brown fox jumps over the lazy dog</p>
                </div>

                {/* CSS Variables Check */}
                <div className="p-4 border border-blue-500/20 rounded bg-blue-500/5">
                    <p className="text-sm text-gray-400 mb-2">CSS Variables Test</p>
                    <p style={{ fontFamily: 'var(--font-lobster-two)' }} className="text-2xl mb-2">
                        Direct CSS var(--font-lobster-two)
                    </p>
                    <p style={{ fontFamily: 'var(--font-red-rose)' }} className="text-2xl">
                        Direct CSS var(--font-red-rose)
                    </p>
                </div>

                <div className="p-4 border border-yellow-500/20 rounded bg-yellow-500/5">
                    <p className="text-sm text-gray-400 mb-4">Inspect this page in DevTools and check:</p>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Network tab → Filter &quot;font&quot; to see if fonts are loading</li>
                        <li>Elements tab → Inspect text → Check computed styles for font-family</li>
                        <li>Console → Run: getComputedStyle(document.body).getPropertyValue(&quot;--font-lobster-two&quot;)</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

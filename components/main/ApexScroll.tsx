"use client";
import {
    useScroll,
    useTransform,
    motion,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import confetti from "canvas-confetti";

const games = [
    { title: "Rope Maze", image: "/images/ApexTrails/Rope maze .png" },
    { title: "Red Light & Green Light", image: "/images/ApexTrails/red light green light .png" },
    { title: "Mingle", image: "/images/ApexTrails/Mingle.png" },
    { title: "Apex Trail - The Final Vault Run", image: "/images/ApexTrails/Apex trails 2.0.png" },
];

const TimelineItem = ({
    item,
    index,
    activeCard,
}: {
    item: { title: string; image: string };
    index: number;
    activeCard: number[];
}) => {
    // Only visual update based on active state passed from parent
    const isActive = activeCard.includes(index);

    return (
        <div
            className={`flex items-center justify-between w-full mb-20 ${index % 2 === 0 ? "flex-row-reverse" : ""
                }`}
        >
            {/* Empty space for the other side */}
            <div className="w-5/12" />

            {/* Center Dot */}
            <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center z-40">
                <div className={`h-4 w-4 rounded-full border border-neutral-300 dark:border-neutral-700 p-2 transition-colors duration-200 ${isActive ? "bg-white dark:bg-white inset-0 shadow-[0_0_20px_rgba(255,255,255,0.5)]" : "bg-neutral-200 dark:bg-neutral-800"
                    }`} />
            </div>

            {/* Content Card */}
            <div
                className={`w-5/12 transition-all duration-500 flex ${index % 2 === 0 ? "justify-end text-right pr-8" : "justify-start text-left pl-8"} ${isActive ? "opacity-100 scale-100" : "opacity-30 scale-95"
                    }`}
            >
                <div className={`relative h-40 w-64 rounded-lg overflow-hidden border-2 transition-colors duration-500 ${isActive ? "border-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.5)]" : "border-transparent"}`}>
                    <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                    />
                </div>
            </div>
        </div>
    );
};

export default function ApexScroll() {
    const ref = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLDivElement>(null);
    const [height, setHeight] = useState(0);
    const [activeCard, setActiveCard] = useState<number[]>([]);

    const [cardPositions, setCardPositions] = useState<number[]>([]);

    const updateHeight = () => {
        if (buttonRef.current && ref.current) {
            const containerRect = ref.current.getBoundingClientRect();
            const buttonRect = buttonRef.current.getBoundingClientRect();
            // Calculate distance from container top to the CENTER of the button
            const newHeight = buttonRect.top - containerRect.top + (buttonRect.height / 2);
            setHeight(newHeight);

            // Measure card positions
            // Assume the first children in ref.current are the timeline items
            const itemElements = Array.from(ref.current.children).slice(0, games.length);
            const positions = itemElements.map((el) => {
                const rect = (el as HTMLElement).getBoundingClientRect();
                // Get the center of the item relative to container top
                return (rect.top + rect.height / 2) - containerRect.top;
            });
            setCardPositions(positions);
        }
    };

    useEffect(() => {
        // Initial update
        // We need a slight delay to ensure images/layout are stable if that matters,
        // but typically useLayoutEffect or just resizing handles it.
        const timer = setTimeout(updateHeight, 100);

        const resizeObserver = new ResizeObserver(() => {
            updateHeight();
        });

        if (containerRef.current) {
            resizeObserver.observe(containerRef.current);
        }

        window.addEventListener('resize', updateHeight);

        return () => {
            clearTimeout(timer);
            resizeObserver.disconnect();
            window.removeEventListener('resize', updateHeight);
        };
    }, []); // Removed [games] dependency as it is constant here

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start center", "end center"],
    });

    const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
    const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

    // Robust fast-scroll handling: derive active cards from exact ray position
    useEffect(() => {
        const unsubscribe = scrollYProgress.on("change", (latest) => {
            const currentRayHeight = latest * height;

            // Find all cards whose center position is reached or passed by the ray
            const newActiveCards = cardPositions.reduce<number[]>((acc, pos, index) => {
                if (currentRayHeight >= pos) {
                    acc.push(index);
                }
                return acc;
            }, []);

            setActiveCard((prev) => {
                if (prev.length === newActiveCards.length &&
                    prev.every((val, index) => val === newActiveCards[index])) {
                    return prev;
                }
                return newActiveCards;
            });
        });
        return () => unsubscribe();
    }, [scrollYProgress, height, cardPositions]);

    // Confetti effect for the final game
    useEffect(() => {
        const finalGameIndex = games.findIndex(g => g.title === "Apex Trail – The Final Vault Run");
        if (activeCard.includes(finalGameIndex)) {
            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 }
            });
        }
    }, [activeCard]);

    return (
        <div
            className="w-full md:px-10"
            ref={containerRef}
        >
            <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10 w-full flex flex-col justify-center items-center font-red-rose">
                <h2 className="text-lg md:text-4xl mb-4 text-white max-w-4xl">
                    Apex Trials Journey
                </h2>
                <p className="text-neutral-500 text-3xl text-center w-full max-w-sm">
                    Experience the ultimate competition through these stages.
                </p>
            </div>

            <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
                {games.map((item, index) => (
                    <TimelineItem
                        key={index}
                        item={item}
                        index={index}
                        activeCard={activeCard}
                    />
                ))}

                {/* The Ray */}
                <div
                    style={{
                        height: height + "px",
                    }}
                    className="absolute left-1/2 -translate-x-1/2 top-0 overflow-hidden w-[6px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,black_0%,black_90%,transparent_100%)] "
                >
                    <motion.div
                        style={{
                            height: heightTransform,
                            opacity: opacityTransform,
                        }}
                        className="absolute inset-x-0 top-0 w-full bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
                    />
                </div>
            </div>
            <div ref={buttonRef} className="flex justify-center mt-10 mb-20 scale-150 ">
                <Link
                    href="https://unstop.com/p/apex-trails-20-infinitus-2026-srm-university-srmap-andhra-pradesh-1638306"
                    target="_blank"
                    className="relative inline-flex h-12 lg:h-16 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                >
                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-8 py-1 text-sm font-medium text-white backdrop-blur-3xl font-red-rose hover:bg-slate-900 transition-colors text-2xl lg:w-64 lg:text-xl">
                        Register Now
                    </span>
                </Link>
            </div>
            <div
                className="slider-apex before:absolute before:left-0 before:z-10 before:h-full before:w-[100px] before:bg-gradient-to-r before:from-[#000] before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-[100px] after:bg-gradient-to-l after:from-[#000] after:to-transparent">
                <div className="slider-track-apex gap-8">
                    {games.concat(games).map((game, index) => (
                        <div key={index} className="slide-apex">
                            <div
                                className="relative group rounded-[22px] bg-white/5 dark:bg-zinc-900/30 backdrop-blur-sm border border-white/10 h-full w-full flex flex-col items-center justify-center text-center overflow-hidden hover:border-purple-500/50 transition-colors duration-300">
                                <div
                                    className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <h3
                                    className="relative z-10 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 font-red-rose mb-2">
                                    {game.title}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

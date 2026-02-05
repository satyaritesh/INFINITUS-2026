"use client";

import React from 'react';
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from 'next/image';

export const ThreeDMarquee = ({
    images,
    className,
}: {
    images: string[];
    className?: string;
}) => {
    // Determine columns based on window width
    const [columns, setColumns] = React.useState(2);

    React.useEffect(() => {
        const updateColumns = () => {
            if (window.innerWidth < 1024) {
                setColumns(2); // Phone/Tablet -> 2 columns
            } else {
                setColumns(4); // Desktop -> 4 columns
            }
        };

        updateColumns();
        window.addEventListener("resize", updateColumns);
        return () => window.removeEventListener("resize", updateColumns);
    }, []);


    // Split the images array into equal parts based on columns
    const chunkSize = Math.ceil(images.length / columns);
    const chunks = Array.from({ length: columns }, (_, colIndex) => {
        const start = colIndex * chunkSize;
        return images.slice(start, start + chunkSize);
    });

    return (
        <div
            className={cn(
                "group mx-auto block h-[600px] w-full overflow-hidden bg-black [mask-image:linear-gradient(to_bottom,transparent,white_20%,white_80%,transparent)]",
                className,
            )}
        >
            <div className="flex size-full items-center justify-center p-20" style={{ perspective: "1000px" }}>
                <div
                    className="size-full shrink-0 scale-75 lg:scale-100 transform-gpu"
                    style={{
                        transform: "rotateX(20deg) rotateZ(-20deg) skewY(8deg)",
                        transformStyle: "preserve-3d",
                    }}
                >
                    <div
                        style={{
                            transformStyle: "preserve-3d",
                        }}
                        className={cn(
                            "relative grid size-full origin-center gap-8",
                            columns === 2 ? "grid-cols-2" : "grid-cols-4"
                        )}
                    >
                        {chunks.map((subarray, colIndex) => (
                            <motion.div
                                animate={{ y: colIndex % 2 === 0 ? ["-20%", "0%"] : ["0%", "-20%"] }}
                                transition={{
                                    duration: 20,
                                    repeat: Infinity,
                                    ease: "linear",
                                    repeatType: "reverse",
                                }}
                                key={colIndex + "marquee"}
                                className="flex flex-col items-center gap-8"
                            >
                                {subarray.map((image, imageIndex) => (
                                    <div className="relative flex flex-col items-center justify-center w-full" key={imageIndex + image}>
                                        <Image
                                            src={image}
                                            alt={`Image ${imageIndex + 1}`}
                                            width={400}
                                            height={300}
                                            className="aspect-[4/3] w-full max-w-[400px] rounded-xl object-cover ring-1 ring-white/10 shadow-2xl transition-all duration-300 hover:scale-105 -lg:w-[17rem]"
                                        />
                                    </div>
                                ))}
                                {/* Duplicate for seamless loop */}
                                {subarray.map((image, imageIndex) => (
                                    <div className="relative flex flex-col items-center justify-center w-full" key={imageIndex + image + "dup"}>
                                        <Image
                                            src={image}
                                            alt={`Image ${imageIndex + 1}`}
                                            width={400}
                                            height={300}
                                            className="aspect-[4/3] w-full max-w-[400px] rounded-2xl object-cover ring-1 ring-white/10 shadow-2xl transition-all duration-300 hover:scale-105"
                                        />
                                    </div>
                                ))}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

const GridLineHorizontal = ({
    className,
    offset,
}: {
    className?: string;
    offset?: string;
}) => {
    return (
        <div
            style={
                {
                    "--background": "#ffffff",
                    "--color": "rgba(0, 0, 0, 0.2)",
                    "--height": "1px",
                    "--width": "5px",
                    "--fade-stop": "90%",
                    "--offset": offset || "200px", //-100px if you want to keep the line inside
                    "--color-dark": "rgba(255, 255, 255, 0.2)",
                    maskComposite: "exclude",
                } as React.CSSProperties
            }
            className={cn(
                "absolute left-[calc(var(--offset)/2*-1)] h-[var(--height)] w-[calc(100%+var(--offset))]",
                "bg-[linear-gradient(to_right,var(--color),var(--color)_50%,transparent_0,transparent)]",
                "[background-size:var(--width)_var(--height)]",
                "[mask:linear-gradient(to_left,var(--background)_var(--fade-stop),transparent),_linear-gradient(to_right,var(--background)_var(--fade-stop),transparent),_linear-gradient(black,black)]",
                "[mask-composite:exclude]",
                "z-30",
                "dark:bg-[linear-gradient(to_right,var(--color-dark),var(--color-dark)_50%,transparent_0,transparent)]",
                className,
            )}
        ></div>
    );
};

const GridLineVertical = ({
    className,
    offset,
}: {
    className?: string;
    offset?: string;
}) => {
    return (
        <div
            style={
                {
                    "--background": "#ffffff",
                    "--color": "rgba(0, 0, 0, 0.2)",
                    "--height": "5px",
                    "--width": "1px",
                    "--fade-stop": "90%",
                    "--offset": offset || "150px", //-100px if you want to keep the line inside
                    "--color-dark": "rgba(255, 255, 255, 0.2)",
                    maskComposite: "exclude",
                } as React.CSSProperties
            }
            className={cn(
                "absolute top-[calc(var(--offset)/2*-1)] h-[calc(100%+var(--offset))] w-[var(--width)]",
                "bg-[linear-gradient(to_bottom,var(--color),var(--color)_50%,transparent_0,transparent)]",
                "[background-size:var(--width)_var(--height)]",
                "[mask:linear-gradient(to_top,var(--background)_var(--fade-stop),transparent),_linear-gradient(to_bottom,var(--background)_var(--fade-stop),transparent),_linear-gradient(black,black)]",
                "[mask-composite:exclude]",
                "z-30",
                "dark:bg-[linear-gradient(to_bottom,var(--color-dark),var(--color-dark)_50%,transparent_0,transparent)]",
                className,
            )}
        ></div>
    );
};

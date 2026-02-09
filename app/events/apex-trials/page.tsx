"use client";

import React from "react";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";
import StarsCanvas from "@/components/main/StarCanvas";
import ApexScroll from "@/components/main/ApexScroll";

const ApexTrials = () => {
    return (
        <div className="flex flex-col overflow-x-hidden">
            <Navbar />
            <StarsCanvas />
            <div className="container mx-auto px-4 py-20 z-[20]">

                <h1 className="text-[40px] md:text-[60px] font-semibold font-red-rose text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 text-center pt-20 pb-10">
                    APEX TRIALS 2.0
                </h1>

                <div className="px-4 md:px-10 mb-20 text-center">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-red-rose mb-8 welcome-text text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 inline-block">
                        What Is Apex Trails?
                    </h2>
                    <p className="text-xl md:text-xl lg:text-3xl text-gray-200 font-space leading-relaxed text-left mx-auto">
                        Inspired by the high-stakes survival challenges of <span className="text-purple-400 font-semibold inline">Squid Game</span>, Apex Trails 2.0 is a national-level competitive arena that puts strategy, mental agility, decision-making, and teamwork at the forefront—followed by precision, coordination, and controlled physical effort. Across three intense days, participants face 29 unique games spread across nine game rooms, each designed with unexpected rules, twists, and rising pressure. From mind games, logic puzzles, memory trials, and deduction rounds to carefully crafted movement-based challenges, every decision counts. A single mistake can lead to elimination, while adaptability and smart strategy ensure survival. The competition concludes with <span className="text-cyan-400 font-semibold inline">The Final Vault Run</span>, where finalists race against time, crack logic-based vaults, and complete precision tasks to claim ultimate victory. <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 inline">Think fast. Adapt faster. Survive longer. Become the Champion.</span>
                    </p>
                </div>

            </div>
            <ApexScroll />
            <Footer />
        </div>
    );
};

export default ApexTrials;

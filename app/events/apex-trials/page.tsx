"use client";

import React from "react";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";
import Link from "next/link";
import StarsCanvas from "@/components/main/StarCanvas";


const games = [
    { title: "Pop n Run", description: "A high-energy team challenge where players race to collect and pop their assigned colored balloons. Balloons must be popped only by sitting on them inside a marked box. The team that finishes popping all balloons first wins." },
    { title: "Rope Maze", description: "Participants navigate through a rope maze without touching any ropes. Bells attached to the ropes detect mistakes. Players who touch the ropes or fail to finish within the time limit are eliminated." },
    { title: "The Floor is Lava!", description: "A reflex-based elimination game where players rush to safe zones only when the host announces “The Floor is Lava.” The number of safe spots reduces each round, eliminating slower players until winners remain." },
    { title: "Red or Blue?", description: "A fast-thinking confusion game where players must react based on word meaning or text color depending on the round’s rule. Quick decisions and focus are key, as one wrong move results in elimination." },
    { title: "Memory Dash", description: "A team-based memory challenge where participants briefly view a sequence of images and then write them in correct order. Teams with the highest accuracy and fastest submission advance." },
    { title: "Countdown", description: "A teamwork and time-sense game where teams estimate exactly five minutes without using clocks or timers. The team closest to 300 seconds without exceeding it is declared the winner." },
    { title: "Red Light & Green Light", description: "Players move forward during “Green Light” and freeze immediately when “Red Light” is called. Anyone caught moving is eliminated" },
    { title: "Running Man", description: "Two teams hop across a marked box track from opposite ends. When players meet, they play rock-paper-scissors. The winner continues while the loser returns, and the first team to reach the end wins." },
    { title: "Puzzle Hunt Relay", description: "Teams collect hidden puzzle pieces by completing small physical and focus-based tasks. The first team to correctly assemble the full puzzle wins." },
    { title: "Target Toss", description: "Players take turns throwing balls into marked target circles from a distance. Special zones offer higher points. The team with the highest total score wins." },
    { title: "The Sacrifice Game", description: "A deduction-based team game where players identify a hidden traitor among them. Correct identification allows safe players to advance, while wrong choices lead to elimination." },
    { title: "Warships", description: "A strategy-based team game played on a grid where teams secretly place their ships. Captains take turns calling grid positions to hit opponent ships. The first team to sink the required number of ships wins." },
    { title: "Mingle", description: "Players move freely while music plays. When the music stops, they must quickly form groups of a called number. Players who fail to form correct groups are eliminated each round." },
    { title: "Tower of Titans", description: "Teams race to build the tallest and most stable tower using cups and plates within a time limit. After building, teams attempt to knock down opponent towers. The last standing tower wins." },
    { title: "Path Finder", description: "One team member navigates a grid while teammates guide verbally. Teams must find the correct path with the fewest mistakes in the shortest time." },
    { title: "Quizfinity", description: "A fast-paced quiz covering fest-related, campus-based, and aptitude questions. Scores are based on accuracy and speed, and the highest scorer wins." },
    { title: "End Game", description: "A final multi-stage challenge featuring traditional korean mini-games played in sequence. Teams must complete all stages within the shortest time to win the game." },
    { title: "Steal or No Steal?", description: "A bluff-based elimination game where players decide whether to steal a hidden card. Each decision determines who survives the round until the required number of players remain." },
    { title: "Blindfolded Stacking", description: "One player is blindfolded and stacks cups on a tray held by their partner. Teams are judged based on speed and stability without dropping cups." },
    { title: "Auction Mystery Arena", description: "Teams use fake money to bid for mystery mini-games. Winning games earns points, while failed attempts increase risk and reward in later rounds." },
    { title: "Cipher Clash", description: "Teams decode simple ciphers within a limited time. Speed, accuracy, and teamwork determine the winners." },
    { title: "Hoop Hustle", description: "Players use hula hoops attached to ropes to pull a ball into their basket without stepping into the play area. Eliminations occur each round until one winner remains." },
    { title: "Pass the Picture", description: "A drawing relay where players pass an image only through sketches. The final player guesses the original image, and accuracy decides the winner." },
    { title: "Blow Battle", description: "Teams blow lightweight balls using only breath to score goals on a special table setup. The team with the highest number of goals wins." },
    { title: "Feud Rounds", description: "A quiz-style game where teams guess the most popular answers to survey questions. Higher-ranked answers earn more points." },
    { title: "Murder Mystery", description: "Teams analyze a fictional crime case using printed clues and evidence. Logical reasoning and correct identification of the culprit decide the winner." },
    { title: "Catch", description: "A throwing and catching elimination game where dropped catches result in player elimination. Special rounds add twists to increase difficulty and excitement." },
    { title: "Battle Bridge", description: "Players cross a bridge of chairs while balancing a ball on a plate as opponents attempt to distract them. Each successful crossing earns points." },
    { title: "Apex Trail – The Final Vault Run", description: "The Final Vault Run is the championship round of Apex Trails 2.0. Two finalists race through a zig-zag cone course, unlock a logic-based vault, and complete a target-throw challenge. The first to finish all stages and hoist the Apex Trails flag is declared the Champion." },
];

const ApexTrials = () => {
    return (
        <div className="flex flex-col min-h-screen bg-[#030014] overflow-x-hidden">
            <StarsCanvas />
            <Navbar />
            <div className="container mx-auto px-4 py-20 z-[20]">

                <h1 className="text-[40px] md:text-[60px] font-semibold font-red-rose text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 text-center pt-20 pb-10">
                    APEX TRIALS 2.0
                </h1>

                <div className="max-w-4xl mx-auto px-4 mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-red-rose mb-6 welcome-text text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                        What Is Apex Trails?
                    </h2>
                    <p className="text-lg md:text-xl lg:text-2xl text-gray-200 font-space leading-relaxed">
                        Apex Trails 2.0 is a pulse-pounding national-level game arena where speed, strategy, intelligence, and teamwork collide. From high-energy physical challenges to mind-bending puzzles and bluff-based eliminations, every round pushes players to their limits. With rising intensity, shrinking chances, and nonstop action, only the sharpest and toughest survive—culminating in an epic final run where one champion rises above all.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-10">
                    {games.map((game, index) => (
                        <div key={index} className="relative group rounded-[22px] p-6 sm:p-10 bg-white/10 dark:bg-zinc-900/50 backdrop-blur-sm border border-white/20 h-full flex flex-col overflow-hidden hover:border-purple-500/50 transition-colors duration-300">
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <h3 className="relative z-10 text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-6 font-red-rose">
                                {index + 1}. {game.title}
                            </h3>
                            <p className="relative z-10 text-gray-200 font-sans text-lg lg:text-xl leading-relaxed flex-grow">
                                {game.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center mt-20 mb-10 scale-150 ">
                    <Link
                        href="https://google.com" // Placeholder, user will update
                        target="_blank"
                        className="relative inline-flex h-12 lg:h-16 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                    >
                        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-8 py-1 text-sm font-medium text-white backdrop-blur-3xl font-red-rose hover:bg-slate-900 transition-colors text-2xl lg:w-64 lg:text-xl">
                            Register Now
                        </span>
                    </Link>
                </div>

            </div>
            <Footer />
        </div>
    );
};

export default ApexTrials;

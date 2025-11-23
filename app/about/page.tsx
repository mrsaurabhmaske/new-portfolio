"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
    return (
        <div className="min-h-screen flex items-center justify-center p-8 pt-20 font-[family-name:var(--font-geist-sans)] relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] -translate-y-1/2 -z-10" />

            <main className="flex flex-col md:flex-row gap-16 items-center max-w-6xl mx-auto w-full z-10">
                {/* Left Column - Image */}
                <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    className="relative group"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-500">Test</div>
                    <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full overflow-hidden border-4 border-white/10 bg-gray-800 flex items-center justify-center">
                        <Image
                            src="/profile.png"
                            alt="Saurabh Maske"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </motion.div>

                {/* Right Column - Content */}
                <div className="flex gap-8 items-start">
                    {/* Vertical Text */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        className="hidden md:block writing-vertical-rl text-gray-500 tracking-[0.2em] text-sm font-medium rotate-180 h-full max-h-[200px]"
                    >
                        ABOUT ME
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                        className="flex flex-col gap-6 max-w-lg"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                            Need a Creative Product? <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">I can Help You!</span>
                        </h1>

                        <p className="text-gray-400 text-lg leading-relaxed">
                            Passionate Full Stack Web Developer with a robust command of Frontend and Backend technologies. Skilled in the MERN stack and willing to start a career with an organization that provides an opportunity to improve skills and knowledge gained as well as to grow along with the organization's goal.
                        </p>

                        <div className="flex gap-4 mt-4">
                            <button className="px-8 py-3 rounded bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/25">
                                HIRE ME
                            </button>
                            <button className="px-8 py-3 rounded border border-white/20 text-white font-semibold hover:bg-white/5 transition-colors">
                                DOWNLOAD CV
                            </button>
                        </div>
                    </motion.div>
                </div>
            </main>
        </div>
    );
}

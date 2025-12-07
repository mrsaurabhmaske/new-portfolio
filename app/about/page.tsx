"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./about.module.scss";

export default function About() {
    return (
        <div className={styles.aboutContainer}>
            {/* Background Glow */}
            <div className={styles.glow} />

            <main className={styles.contentWrapper}>
                {/* Left Column - Image */}
                <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    className={styles.imgGroup}
                >
                    <div className={styles.imgGlow} />
                    <div className={styles.imgContainer}>
                        <Image
                            src="/profile.png"
                            alt="Saurabh Maske"
                            fill
                            className={styles.image}
                            priority
                        />
                    </div>
                </motion.div>

                {/* Right Column - Content */}
                <div className={styles.textColumn}>
                    {/* Vertical Text */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        className={styles.verticalText}
                    >
                        ABOUT ME
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                        className={styles.textBlock}
                    >
                        <h1 className={styles.heading}>
                            Need a Creative Product? <br />
                            <span className={styles.highlight}>I can Help You!</span>
                        </h1>

                        <p className={styles.description}>
                            Passionate Full Stack Web Developer with a robust command of Frontend and Backend technologies. Skilled in the MERN stack and willing to start a career with an organization that provides an opportunity to improve skills and knowledge gained as well as to grow along with the organization's goal.
                        </p>

                        <div className={styles.actions}>
                            <button className={styles.btnHire}>
                                HIRE ME
                            </button>
                            <button className={styles.btnCV}>
                                DOWNLOAD CV
                            </button>
                        </div>
                    </motion.div>
                </div>
            </main>
        </div>
    );
}


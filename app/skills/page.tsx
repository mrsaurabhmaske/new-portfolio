"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    FaReact, FaNodeJs, FaPython, FaAws, FaDocker, FaGithub, FaGitlab,
    FaHtml5, FaCss3Alt, FaJs
} from "react-icons/fa";
import {
    SiNextdotjs, SiExpress, SiMongodb, SiPostgresql, SiStorybook,
    SiAntdesign, SiKubernetes, SiJenkins,
    SiIntellijidea, SiTypescript, SiScikitlearn, SiWebpack, SiVite
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import styles from "./skills.module.scss";

// Define the Icon Type because it's a component
type IconType = React.ElementType;

type SkillItem = {
    name: string;
    icon: IconType;
};

const skills: SkillItem[] = [
    { name: "ReactJS", icon: FaReact },
    { name: "Next.js", icon: SiNextdotjs },
    { name: "NodeJS", icon: FaNodeJs },
    { name: "ExpressJS", icon: SiExpress },
    { name: "TypeScript", icon: SiTypescript },
    { name: "MongoDB", icon: SiMongodb },
    { name: "PostgreSQL", icon: SiPostgresql },
    { name: "HTML5", icon: FaHtml5 },
    { name: "CSS3", icon: FaCss3Alt },
    { name: "JavaScript", icon: FaJs },
    { name: "Python", icon: FaPython },
    { name: "Micro Frontend", icon: SiWebpack }, // Using Webpack as proxy for MF
];

const tools: SkillItem[] = [
    { name: "AWS", icon: FaAws },
    { name: "Docker", icon: FaDocker },
    { name: "Kubernetes", icon: SiKubernetes },
    { name: "Github", icon: FaGithub },
    { name: "Gitlab", icon: FaGitlab },
    { name: "Jenkins", icon: SiJenkins },
    { name: "VS Code", icon: VscVscode },
    { name: "IntelliJ", icon: SiIntellijidea },
    { name: "Storybook", icon: SiStorybook },
    { name: "ANT Design", icon: SiAntdesign },
    { name: "SCORM", icon: SiScikitlearn }, // Placeholder or generic
    { name: "Vite", icon: SiVite },
];

export default function Skills() {
    const [activeTab, setActiveTab] = useState<'skills' | 'tools'>('skills');

    const activeData = activeTab === 'skills' ? skills : tools;

    return (
        <div className={styles.pageContainer}>
            <div className={styles.contentWrapper}>

                {/* Left Side: Text & Toggle */}
                <div className={styles.textSection}>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className={styles.title}>
                            What My Programming<br />
                            Skills Include?
                        </h1>
                        <p className={styles.description}>
                            I develop simple, intuitive and responsive user interfaces that help users get things done with less effort and time with those technologies.
                        </p>

                        <div className={styles.toggleContainer}>
                            <button
                                className={`${styles.toggleBtn} ${activeTab === 'skills' ? styles.active : ''}`}
                                onClick={() => setActiveTab('skills')}
                            >
                                Skills
                            </button>
                            <button
                                className={`${styles.toggleBtn} ${activeTab === 'tools' ? styles.active : ''}`}
                                onClick={() => setActiveTab('tools')}
                            >
                                Tools
                            </button>
                        </div>
                    </motion.div>
                </div>

                {/* Right Side: Grid */}
                <div className={styles.gridSection}>
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            className={styles.grid}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.4 }}
                        >
                            {activeData.map((item) => (
                                <motion.div
                                    key={item.name}
                                    className={styles.iconCard}
                                    whileHover={{ scale: 1.1 }}
                                    title={item.name}
                                >
                                    <item.icon />
                                </motion.div>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>

            </div>
        </div>
    );
}

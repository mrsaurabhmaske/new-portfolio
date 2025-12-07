"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./playground.module.scss";

type Example = {
    title: string;
    slug: string;
    description: string;
    longDescription: string;
    status: string;
};

export default function Playground() {
    const [selectedId, setSelectedId] = useState<string | null>(null);

    const examples: Example[] = [
        {
            title: "Big Data Handling",
            slug: "big-data",
            description: "Efficient rendering of large datasets.",
            longDescription: "Demonstrating virtualization and efficient rendering of large datasets to maintain high performance. See how we handle 10,000+ items without lag.",
            status: "Coming Soon"
        },
        {
            title: "Advanced Forms",
            slug: "advanced-forms",
            description: "Complex form handling with validation.",
            longDescription: "Complex form handling with validation, dynamic fields, and multi-step processes using React Hook Form and Zod.",
            status: "Coming Soon"
        },
        {
            title: "Interactive Components",
            slug: "interactive-components",
            description: "Drag-and-drop, sliders, and charts.",
            longDescription: "A collection of highly interactive UI components like drag-and-drop kanban boards, sliders, and data charts.",
            status: "Coming Soon"
        },
        {
            title: "React Virtualized",
            slug: "react-virtualized",
            description: "Optimized list rendering.",
            longDescription: "Optimized list rendering for thousands of items using windowing techniques to ensure 60fps scrolling.",
            status: "Coming Soon"
        },
        {
            title: "Optimized Timers",
            slug: "optimized-timers",
            description: "Precise timing without drift.",
            longDescription: "Precise timing mechanisms for stopwatches, countdowns, and intervals without the common drift found in simple setInterval implementations.",
            status: "Coming Soon"
        },
        {
            title: "Global Counters",
            slug: "global-counters",
            description: "State management examples.",
            longDescription: "State management examples using various libraries (Context, Redux, Zustand) to show different approaches to global state.",
            status: "Coming Soon"
        },
        {
            title: "Drag and Drop",
            slug: "drag-and-drop",
            description: "Kanban board style interfaces.",
            longDescription: "Kanban board style interfaces with smooth drag and drop interactions using dnd-kit or React DnD.",
            status: "Coming Soon"
        },
    ];

    const transition: any = { type: "spring", stiffness: 200, damping: 20 };

    const selectedExample = examples.find(ex => ex.slug === selectedId);

    return (
        <div className={styles.pageContainer}>
            <div className={styles.content}>
                <header className={styles.header}>
                    <h1 className={styles.title}>Playground</h1>
                    <p className={styles.subtitle}>
                        A collection of experiments, patterns, and interactive components.
                        Here I showcase my exploration into advanced React patterns, performance optimization, and creative UI.
                    </p>
                </header>

                <div className={styles.grid}>
                    {examples.map((example) => (
                        <div key={example.slug} className={styles.cardWrapper}>
                            <motion.div
                                layoutId={example.slug}
                                className={styles.cardContainer}
                                onClick={() => setSelectedId(example.slug)}
                                whileHover={{ scale: 1.02 }}
                                transition={transition}
                            >
                                <div className={styles.cardContent}>
                                    <span className={styles.status}>{example.status}</span>
                                    <h2 className={styles.cardTitle}>{example.title}</h2>
                                    <p className={styles.cardDescription}>{example.description}</p>
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {selectedId && selectedExample && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className={styles.overlayBackdrop}
                            onClick={() => setSelectedId(null)}
                        />
                        <div className={styles.overlayContainer} onClick={() => setSelectedId(null)}>
                            <motion.div
                                layoutId={selectedId}
                                className={styles.expandedCardWrapper}
                                onClick={(e) => e.stopPropagation()}
                                transition={transition}
                            >
                                <div className={styles.expandedContent}>
                                    <span className={styles.status}>{selectedExample.status}</span>
                                    <h2 className={styles.cardTitle} style={{ fontSize: '2.5rem' }}>{selectedExample.title}</h2>
                                    <p className={styles.cardDescription} style={{ fontSize: '1.25rem', maxWidth: '80%' }}>
                                        {selectedExample.longDescription}
                                    </p>
                                    <Link
                                        href={`/playground/example/${selectedExample.slug}`}
                                        className={styles.btnProceed}
                                    >
                                        Proceed
                                    </Link>
                                </div>
                            </motion.div>
                        </div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
}



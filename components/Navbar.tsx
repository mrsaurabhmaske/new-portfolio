"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Skills", href: "/skills" },
        { name: "Projects", href: "/projects" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4">
            <div className="glass rounded-full px-6 py-3 md:px-8 md:py-4 flex items-center justify-between gap-8 w-full max-w-4xl relative z-50">
                <Link href="/" className="text-xl md:text-2xl font-bold tracking-wider font-[family-name:var(--font-saira-stencil-one)] z-50 relative">
                    <span className="text-blue-500">Saurabh</span> <span className="text-white">Maske</span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-6 text-sm font-medium text-gray-300">
                    {navLinks.filter(link => link.name !== "Home").map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`transition-colors ${pathname === link.href
                                ? "text-blue-500 font-bold"
                                : "hover:text-white"
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Mobile Hamburger Button */}
                <button
                    className="md:hidden text-white z-50 relative focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <div className="w-6 h-6 flex flex-col justify-center items-center gap-1.5">
                        <motion.span
                            animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                            className="w-full h-0.5 bg-white block transition-transform"
                        />
                        <motion.span
                            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                            className="w-full h-0.5 bg-white block transition-opacity"
                        />
                        <motion.span
                            animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                            className="w-full h-0.5 bg-white block transition-transform"
                        />
                    </div>
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-40 bg-[#030014]/95 backdrop-blur-xl flex flex-col items-center justify-center"
                    >
                        {/* Circular Gradient Background */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-gradient-to-r from-blue-600/30 to-purple-600/30 rounded-full blur-[80px] pointer-events-none" />

                        <div className="flex flex-col items-center gap-8 relative z-50">
                            {navLinks.map((link, index) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 * index }}
                                >
                                    <Link
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className={`text-4xl font-bold tracking-wide transition-colors ${pathname === link.href
                                            ? "text-white"
                                            : "text-gray-400 hover:text-white"
                                            }`}
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 * navLinks.length }}
                            >
                                <Link href="/resume.pdf" className="text-4xl font-bold tracking-wide text-gray-400 hover:text-white transition-colors">
                                    Resume
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}

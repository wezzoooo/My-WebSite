"use client";

import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";

export default function Hero() {
    const scrollTo = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section
            id="hero"
            className="min-h-screen flex items-center justify-center px-4 pb-20 md:pb-28 scroll-mt-24"
        >
            
            <div className="max-w-4xl text-center">

                {/* Greeting */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-xl text-muted-foreground mb-4"
                >
                    Hello, I'm
                </motion.p>

                {/* Name */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-indigo-400 bg-clip-text text-transparent"
                >
                    Mohamed Ezzat
                </motion.h1>

                {/* Role */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-xl md:text-2xl text-muted-foreground mb-6"
                >
                    Front-End Developer • React & Next.js
                </motion.h2>

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-muted-foreground max-w-xl mx-auto mb-8"
                >
                    I build modern, responsive, and user-friendly web applications
                    using React, Next.js, and clean UI principles.
                </motion.p>

                {/* Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="flex items-center justify-center gap-4"
                >
                    <button
                        onClick={() => scrollTo("projects")}
                        className="px-5 py-2 rounded-full bg-primary text-primary-foreground flex items-center gap-2 hover:opacity-90 transition"
                    >
                        View Projects
                        <ArrowDownRight size={16} />
                    </button>

                    <button
                        onClick={() => scrollTo("contact")}
                        className="px-5 py-2 rounded-full border hover:bg-muted transition"
                    >
                        Contact Me
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
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

            <div className="max-w-6xl w-full grid md:grid-cols-2 items-center gap-10">

                {/* Text Content */}
                <div className="text-center md:text-left order-2 md:order-1">

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
                        className="text-muted-foreground max-w-xl mx-auto md:mx-0 mb-8"
                    >
                        I build modern, responsive, and user-friendly web applications
                        using React, Next.js, and clean UI principles.
                    </motion.p>

                    {/* Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="flex items-center justify-center md:justify-start gap-4"
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

                {/* Profile Image */}
                <div className="relative flex justify-center order-1 md:order-2">

                    {/* Glow blob behind */}
                    <div className="absolute w-56 h-56 md:w-72 md:h-72 rounded-full bg-gradient-to-br from-primary/30 to-indigo-400/30 blur-3xl" />

                    <motion.img
                        src="/profile.png"
                        alt="Mohamed Ezzat"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="relative w-56 md:w-80 h-auto object-contain drop-shadow-2xl"
                    />
                </div>

            </div>
        </section>
    );
}
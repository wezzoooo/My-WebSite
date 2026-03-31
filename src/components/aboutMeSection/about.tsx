"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

export default function About() {
    return (
        <section id="about" className="py-24 md:py-32 scroll-mt-24">
            <div className="max-w-3xl mx-auto px-4 text-center">

                {/* Title */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-3xl md:text-4xl font-bold mb-6"
                >
                    About Me
                </motion.h2>

                {/* Text */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-muted-foreground leading-relaxed mb-10"
                >
                    I'm a Front-End Developer passionate about building modern,
                    fast, and visually appealing web applications using React,
                    Next.js, and clean UI principles. I focus on performance,
                    user experience, and elegant UI design.
                </motion.p>

                {/* Social Icons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="flex justify-center gap-4"
                >

                    <a
                        href="https://github.com/wezzoooo"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full border hover:bg-muted transition"
                    >
                        <Icon icon="simple-icons:github" width="20" />
                    </a>

                    <a
                        href="https://linkedin.com/in/YOUR-LINK"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full border hover:bg-muted transition"
                    >
                        <Icon icon="simple-icons:linkedin" width="20" />
                    </a>

                    <a
                        href="mailto:your@email.com"
                        className="p-3 rounded-full border hover:bg-muted transition"
                    >
                        <Icon icon="simple-icons:gmail" width="20" />
                    </a>

                </motion.div>

            </div>
        </section>
    );
}
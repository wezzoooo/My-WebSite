"use client";

import { motion } from "framer-motion";

const skills = [
    "React",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "Tailwind CSS",
    "HTML",
    "CSS",
    "Bootstrap"
];

export default function Skills() {
    return (
        <section id="skills" className="py-24 md:py-32 scroll-mt-24">
            <div className="max-w-5xl mx-auto text-center px-4">

                <h2 className="text-3xl font-bold mb-10">Skills</h2>

                <div className="flex flex-wrap justify-center gap-3">
                    {skills.map((skill, i) => (
                        <motion.div
                            key={skill}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.05 }}
                            className="px-4 py-2 rounded-full border text-sm hover:bg-primary hover:text-primary-foreground transition"
                        >
                            {skill}
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

const skills = [
    { name: "React", icon: "logos:react" },
    { name: "Next.js", icon: "logos:nextjs-icon" },
    { name: "JavaScript", icon: "logos:javascript" },
    { name: "TypeScript", icon: "logos:typescript-icon" },
    { name: "Tailwind CSS", icon: "logos:tailwindcss-icon" },
    { name: "HTML", icon: "logos:html-5" },
    { name: "CSS", icon: "logos:css-3" },
    { name: "Bootstrap", icon: "logos:bootstrap" },
];

export default function Skills() {
    return (
        <section id="skills" className="py-24 md:py-32 scroll-mt-24">
            <div className="max-w-5xl mx-auto text-center px-4">

                <h2 className="text-3xl font-bold mb-10">Skills</h2>

                <div className="flex flex-wrap justify-center gap-4">
                    {skills.map((skill, i) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.05 }}
                            className="flex items-center gap-2 px-4 py-2 rounded-full border text-sm bg-background/60 hover:border-primary hover:-translate-y-1 hover:shadow-md transition"
                        >
                            <Icon icon={skill.icon} width="18" />
                            {skill.name}
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
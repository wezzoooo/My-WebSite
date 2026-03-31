"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

const projects = [
    {
        title: "Facebook Clone",
        desc: "A social media web app inspired by Facebook with modern UI and responsive design.",
        link: "https://facebook-clone-2bpyx2bjf-wezzoooos-projects.vercel.app/",
        tech: ["React", "Tailwind"]
    },
    {
        title: "E-Commerce App",
        desc: "Full-featured e-commerce app with product listing, cart, and clean UI.",
        link: "https://e-commerce26-2.vercel.app",
        tech: ["Next.js", "Tailwind"]
    },
];

export default function Projects() {
    return (
        <section id="projects" className="py-24 md:py-28 scroll-mt-24">
            <div className="max-w-6xl mx-auto px-4">

                {/* Title */}
                <h2 className="text-3xl font-bold text-center mb-12">
                    Projects
                </h2>

                {/* Grid */}
                <div className="grid md:grid-cols-2 gap-6">
                    {projects.map((project, i) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="group relative rounded-2xl border overflow-hidden bg-background/60 backdrop-blur transition transform hover:-translate-y-2"
                        >
                            {/* Content */}
                            <div className="p-6">

                                <h3 className="text-xl font-semibold mb-2">
                                    {project.title}
                                </h3>

                                <p className="text-muted-foreground text-sm mb-4">
                                    {project.desc}
                                </p>

                                {/* Tech */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tech.map((t) => (
                                        <span
                                            key={t}
                                            className="text-xs px-3 py-1 rounded-full border"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                {/* Button */}
                                <a
                                    href={project.link}
                                    target="_blank"
                                    className="inline-flex items-center gap-2 text-sm font-medium hover:text-primary transition"
                                >
                                    Live Demo
                                    <Icon icon="solar:arrow-up-right-linear" width="16" />
                                </a>
                            </div>

                            {/* Hover Effect */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-linear-to-br from-primary/10 to-transparent pointer-events-none" />

                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
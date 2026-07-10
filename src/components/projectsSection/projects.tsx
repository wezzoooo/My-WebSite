"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

const projects = [
    {
        title: "E-Commerce App",
        desc: "Full-featured e-commerce app with product listing, cart, and clean UI.",
        link: "https://e-commerce26-2.vercel.app",
        tech: ["Next.js", "Tailwind"]
    },
    {
        title: "Digital Market Agency",
        desc: "Corporate website for a digital transformation agency, showcasing services, portfolio, and a multi-page business structure.",
        link: "https://companies-digital-market.vercel.app/",
        tech: ["Next.js", "Tailwind"]
    },
    {
        title: "QG Group",
        desc: "Corporate site for an investment and sustainable development firm, with multiple sections for services, sectors, and investor relations.",
        link: "https://qg-group.vercel.app/",
        tech: ["Next.js", "Tailwind"]
    },
    {
        title: "Amigos Restaurant",
        desc: "Modern restaurant website with menu, gallery, and cart pages, built with a bold food-focused design.",
        link: "https://amigos-azure-omega.vercel.app/",
        tech: ["Next.js", "Tailwind"]
    },
    {
        title: "El-Mostafa Education",
        desc: "Landing page for a study-abroad consultancy, featuring destination countries, services, testimonials, and a contact form.",
        link: "https://elmostafa-education.vercel.app/",
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
                    {projects.map((project, i) => {
                        const isLastOdd =
                            projects.length % 2 !== 0 && i === projects.length - 1;

                        return (
                            <motion.div
                                key={project.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className={`group relative rounded-2xl border overflow-hidden bg-background/60 backdrop-blur transition transform hover:-translate-y-2 ${isLastOdd ? "md:col-span-2" : ""
                                    }`}
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
                        );
                    })}
                </div>

            </div>
        </section>
    );
}
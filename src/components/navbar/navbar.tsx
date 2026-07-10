"use client";

import { useEffect, useState } from "react";
import { Home, User, Code2, FolderGit2, Mail, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

const links = [
    { name: "Home", id: "hero", icon: Home },
    { name: "About", id: "about", icon: User },
    { name: "Skills", id: "skills", icon: Code2 },
    { name: "Projects", id: "projects", icon: FolderGit2 },
    { name: "Contact", id: "contact", icon: Mail },
];

export default function Navbar() {
    const { theme, setTheme } = useTheme();

    const [mounted, setMounted] = useState(false);
    const [active, setActive] = useState("hero");

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        const sections = document.querySelectorAll("section");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActive(entry.target.id);
                    }
                });
            },
            { threshold: 0.6 }
        );

        sections.forEach((sec) => observer.observe(sec));
        return () => observer.disconnect();
    }, []);

    const scrollTo = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <motion.div
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="fixed z-50 left-1/2 -translate-x-1/2 bottom-6 md:top-6 md:bottom-auto"
        >
            <div className="flex items-center gap-2 px-3 py-2 rounded-full border bg-background/70 backdrop-blur shadow-lg">

                {links.map((link) => {
                    const Icon = link.icon;
                    const isActive = active === link.id;

                    return (
                        <button
                            key={link.id}
                            onClick={() => scrollTo(link.id)}
                            className={`
                flex items-center gap-1 px-3 py-2 rounded-full text-sm transition
                ${isActive
                                    ? "bg-primary text-primary-foreground"
                                    : "text-muted-foreground hover:text-primary hover:bg-muted"
                                }
              `}
                        >
                            <Icon size={16} />
                            <span className="hidden sm:inline">{link.name}</span>
                        </button>
                    );
                })}

                <div className="w-px h-5 bg-border mx-1" />

                {mounted && (
                    <button
                        onClick={() =>
                            setTheme(theme === "dark" ? "light" : "dark")
                        }
                        className="p-2 rounded-full hover:bg-muted transition"
                    >
                        {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
                    </button>
                )}
            </div>
        </motion.div>
    );
}
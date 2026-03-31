// "use client";

// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { Menu, Moon, Sun } from "lucide-react";
// import { useTheme } from "next-themes";
// import { Button } from "@/components/ui/button";
// import {
//     Sheet,
//     SheetContent,
//     SheetTrigger,
// } from "@/components/ui/sheet";

// const links = [
//     { name: "About", id: "about" },
//     { name: "Skills", id: "skills" },
//     { name: "Projects", id: "projects" },
//     { name: "Contact", id: "contact" },
// ];

// export default function Navbar() {
//     const [scrolled, setScrolled] = useState(false);
//     const { theme, setTheme } = useTheme();

//     useEffect(() => {
//         const handleScroll = () => setScrolled(window.scrollY > 20);
//         window.addEventListener("scroll", handleScroll);
//         return () => window.removeEventListener("scroll", handleScroll);
//     }, []);

//     const scrollTo = (id: string) => {
//         document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
//     };

//     return (
//         <motion.header
//             initial={{ y: -80 }}
//             animate={{ y: 0 }}
//             className={`fixed top-0 w-full z-50 transition ${scrolled
//                     ? "bg-background/70 backdrop-blur border-b"
//                     : "bg-transparent"
//                 }`}
//         >
//             <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">

//                 {/* Logo */}
//                 <h1 className="font-bold text-lg">Mohamed.</h1>

//                 {/* Desktop */}
//                 <div className="hidden md:flex items-center gap-6">
//                     {links.map((link) => (
//                         <button
//                             key={link.id}
//                             onClick={() => scrollTo(link.id)}
//                             className="text-sm text-muted-foreground hover:text-primary transition"
//                         >
//                             {link.name}
//                         </button>
//                     ))}
//                 </div>

//                 {/* Right */}
//                 <div className="flex items-center gap-3">

//                     {/* Theme */}
//                     <Button
//                         variant="ghost"
//                         size="icon"
//                         onClick={() =>
//                             setTheme(theme === "dark" ? "light" : "dark")
//                         }
//                     >
//                         {theme === "dark" ? <Sun /> : <Moon />}
//                     </Button>

//                     {/* Mobile */}
//                     <Sheet>
//                         <SheetTrigger asChild>
//                             <Button variant="ghost" size="icon" className="md:hidden">
//                                 <Menu />
//                             </Button>
//                         </SheetTrigger>

//                         <SheetContent side="right">
//                             <div className="flex flex-col gap-4 mt-10">
//                                 {links.map((link) => (
//                                     <button
//                                         key={link.id}
//                                         onClick={() => scrollTo(link.id)}
//                                         className="text-lg"
//                                     >
//                                         {link.name}
//                                     </button>
//                                 ))}
//                             </div>
//                         </SheetContent>
//                     </Sheet>
//                 </div>
//             </div>
//         </motion.header>
//     );
// }


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
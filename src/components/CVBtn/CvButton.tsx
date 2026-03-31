"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

export default function CvButton() {
    return (
        <motion.a
            href="/Mohamed_Ezzat_CV.pdf"
            download="Mohamed_Ezzat_CV.pdf"
            initial="closed"
            whileHover="open"
            animate="closed"
            variants={{
                closed: { width: 48 },
                open: {
                    width: 160,
                    boxShadow: "0 0 20px rgba(99,102,241,0.4)"
                }
            }}
            transition={{ type: "spring", stiffness: 250, damping: 20 }}
            className="fixed z-50 flex items-center top-6 right-6 md:top-6 md:right-6 bottom-6 md:bottom-auto h-12 w-12 px-3 rounded-full border bg-background/70 backdrop-blur shadow-lg overflow-hidden"
        >
            {/* Icon */}
            <div className="flex items-center justify-center min-w-6">
                <Icon icon="solar:document-bold" width="20" />
            </div>

            {/* Text */}
            <motion.span
                variants={{
                    closed: { opacity: 0, x: -10 },
                    open: { opacity: 1, x: 0 },
                }}
                transition={{ duration: 0.2 }}
                className="ml-2 whitespace-nowrap text-sm"
            >
                Download CV
            </motion.span>
        </motion.a>
    );
}
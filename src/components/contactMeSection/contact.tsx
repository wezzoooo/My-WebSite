"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 scroll-mt-24">
      <div className="max-w-3xl mx-auto px-4 text-center">

        {/* Title */}
        <h2 className="text-3xl font-bold mb-6">Contact Me</h2>

        <p className="text-muted-foreground mb-10">
          Let’s build something great together
        </p>

        {/* Form */}
        <motion.form
          action="https://formsubmit.co/mohamed.elganzore@gmail.com"
          method="POST"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="flex flex-col gap-4 mb-10"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="p-3 rounded-lg border bg-background"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="p-3 rounded-lg border bg-background"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            required
            className="p-3 rounded-lg border bg-background"
          />

          <button
            type="submit"
            className="px-6 py-3 rounded-full bg-primary text-primary-foreground hover:opacity-90 transition"
          >
            Send Message
          </button>
        </motion.form>

        {/* Social Links */}
        <div className="flex justify-center gap-4 flex-wrap">

          {/* Email */}
          <a
            href="mailto:mohamed.elganzore@gmail.com"
            className="p-3 rounded-full border hover:bg-muted transition"
          >
            <Icon icon="mdi:email-outline" width="22" />
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/201020674940"
            target="_blank"
            className="p-3 rounded-full border hover:bg-muted transition"
          >
            <Icon icon="mdi:whatsapp" width="22" />
          </a>

          {/* Messenger */}
          <a
            href="https://m.me/mohamed.ezzat.498163"
            target="_blank"
            className="p-3 rounded-full border hover:bg-muted transition"
          >
            <Icon icon="mdi:facebook-messenger" width="22" />
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/mohamed-elganzoury-b7777a245"
            target="_blank"
            className="p-3 rounded-full border hover:bg-muted transition"
          >
            <Icon icon="mdi:linkedin" width="22" />
          </a>

        </div>

      </div>
    </section>
  );
}
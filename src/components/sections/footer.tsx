"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Github, Linkedin, Send, Loader2 } from "lucide-react";
import { FaReddit, FaDiscord, FaWhatsapp } from "react-icons/fa6";
import emailjs from "@emailjs/browser";

const socialLinks = [
  { icon: Github, href: "https://github.com/xCyberpunkx", label: "Github" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/zine-eddine-rouabah/", label: "LinkedIn" },
  { icon: FaReddit, href: "https://www.reddit.com/user/No_Investigator4261/", label: "Reddit" },
  { icon: FaDiscord, href: "https://discord.com/users/557172887799463937", label: "Discord" },
  { icon: FaWhatsapp, href: "https://wa.me/213540166358", label: "WhatsApp" },
];

export default function Footer() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formData, setFormData] = useState({ name: "", email: "", message: "", website: "" });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Honeypot check: real users never fill this hidden field, bots almost always do.
    // Silently pretend success so bots don't learn to look for a different signal.
    if (formData.website) {
      setStatus("success");
      setFormData({ name: "", email: "", message: "", website: "" });
      setTimeout(() => setStatus("idle"), 5000);
      return;
    }

    setStatus("loading");

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.error("EmailJS credentials are missing");
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
      return;
    }

    try {
      const result = await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          reply_to: formData.email,
          message: formData.message,
          to_email: "rouabah.zineedinee@gmail.com",
        },
        publicKey
      );

      if (result.status !== 200) throw new Error("Failed to send");

      setStatus("success");
      setFormData({ name: "", email: "", message: "", website: "" });
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <footer
      id="contact"
      className="relative pt-32 pb-12 overflow-hidden border-t"
      style={{ backgroundColor: "var(--bg-base)", borderColor: "var(--border-subtle)" }}
    >
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <span
                className="text-[10px] font-technical tracking-[0.2em] uppercase block"
                style={{ color: "var(--text-quaternary)" }}
              >
                INITIATE SYNAPS
              </span>
              <h2
                className="text-[8vw] font-black uppercase tracking-tighter leading-none"
                style={{ color: "var(--text-primary)" }}
              >
                INITIATE<br />
                <span className="text-transparent" style={{ WebkitTextStroke: "1px rgba(59,130,246,0.35)" }}>SYNAPS</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
              <div className="space-y-6">
                <p className="text-[10px] font-bold uppercase tracking-widest" style={{ color: "var(--text-tertiary)" }}>Sitemap</p>
                <ul className="space-y-4">
                  <li><Link href="/about" className="text-xs font-bold uppercase tracking-widest hover:text-blue-400 transition-colors" style={{ color: "var(--text-muted)" }}>About</Link></li>
                  <li><Link href="/services" className="text-xs font-bold uppercase tracking-widest hover:text-blue-400 transition-colors" style={{ color: "var(--text-muted)" }}>Expert Services</Link></li>
                  <li><Link href="/projects" className="text-xs font-bold uppercase tracking-widest hover:text-blue-400 transition-colors" style={{ color: "var(--text-muted)" }}>Project Archive</Link></li>
                </ul>
              </div>
              <div className="space-y-6">
                <p className="text-[10px] font-bold uppercase tracking-widest" style={{ color: "var(--text-tertiary)" }}>Resources</p>
                <ul className="space-y-4">
                  <li><Link href="/blog" className="text-xs font-bold uppercase tracking-widest hover:text-blue-400 transition-colors" style={{ color: "var(--text-muted)" }}>Technical Blog</Link></li>
                  <li><Link href="/learning-journey" className="text-xs font-bold uppercase tracking-widest hover:text-blue-400 transition-colors" style={{ color: "var(--text-muted)" }}>Learning Journey</Link></li>
                  <li><Link href="/#contact" className="text-xs font-bold uppercase tracking-widest hover:text-blue-400 transition-colors" style={{ color: "var(--text-muted)" }}>Get In Touch</Link></li>
                  <li><Link href="/f1" className="text-xs font-bold uppercase tracking-widest hover:text-blue-400 transition-colors" style={{ color: "var(--text-muted)" }}>Formula 1 Stats</Link></li>
                </ul>
              </div>
              <div className="space-y-6">
                <p className="text-[10px] font-bold uppercase tracking-widest" style={{ color: "var(--text-tertiary)" }}>Legal</p>
                <ul className="space-y-4">
                  <li><Link href="/privacy" className="text-xs font-bold uppercase tracking-widest hover:text-blue-400 transition-colors" style={{ color: "var(--text-muted)" }}>Privacy Policy</Link></li>
                  <li><Link href="/terms" className="text-xs font-bold uppercase tracking-widest hover:text-blue-400 transition-colors" style={{ color: "var(--text-muted)" }}>Terms of Service</Link></li>
                </ul>
              </div>
            </div>

            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  data-cursor={social.label.toUpperCase()}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 rounded-full border flex items-center justify-center hover:border-blue-500/50 hover:bg-blue-500/5 transition-all duration-300"
                  style={{ borderColor: "var(--border-default)" }}
                >
                  <social.icon className="w-5 h-5" style={{ color: "var(--text-primary)" }} />
                </motion.a>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <form
              onSubmit={handleSubmit}
              className="space-y-8 p-10 backdrop-blur-sm border rounded-2xl"
              style={{ backgroundColor: "var(--bg-surface)", borderColor: "var(--border-default)", boxShadow: "var(--shadow-card)" }}
            >
              {/* Honeypot field — hidden from real users, bots fill it in anyway */}
              <input
                type="text"
                name="website"
                value={formData.website}
                onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                style={{ position: "absolute", left: "-9999px", width: "1px", height: "1px", opacity: 0 }}
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-xs font-technical uppercase" style={{ color: "var(--text-muted)" }}>Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-transparent border-b py-3 focus:outline-none focus:border-blue-400 transition-colors"
                    style={{ borderColor: "var(--border-strong)", color: "var(--text-primary)" }}
                    placeholder="Your Name"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-technical uppercase" style={{ color: "var(--text-muted)" }}>Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-transparent border-b py-3 focus:outline-none focus:border-blue-400 transition-colors"
                    style={{ borderColor: "var(--border-strong)", color: "var(--text-primary)" }}
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-technical uppercase" style={{ color: "var(--text-muted)" }}>Message</label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-transparent border-b py-4 focus:outline-none focus:border-blue-400 transition-colors resize-none"
                  style={{ borderColor: "var(--border-strong)", color: "var(--text-primary)" }}
                  placeholder="How can we help?"
                />
              </div>
              <button
                type="submit"
                disabled={status === "loading"}
                data-cursor="SEND"
                className="group w-full relative flex items-center justify-center gap-3 py-4 font-bold uppercase tracking-widest hover:bg-blue-500 hover:text-white transition-all duration-500 overflow-hidden disabled:opacity-50 rounded-full"
                style={{ backgroundColor: "var(--text-primary)", color: "var(--bg-base)" }}
              >
                {status === "loading" ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : status === "success" ? (
                  "Sent Successfully"
                ) : status === "error" ? (
                  "Error Sending"
                ) : (
                  <>
                    Send Message
                    <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>

        <div
          className="mt-32 pt-12 border-t flex flex-col md:flex-row items-center justify-between gap-6"
          style={{ borderColor: "var(--border-subtle)" }}
        >
          <p className="text-[9px] font-technical uppercase tracking-[0.4em]" style={{ color: "var(--text-quaternary)" }}>
            © 2026 ROUABAH ZINE EDDINE // ALL RIGHTS RESERVED
          </p>
          <div className="flex gap-8">
            <p className="text-[9px] font-technical uppercase tracking-[0.4em]" style={{ color: "var(--text-quaternary)" }}>BUILT FOR PERFORMANCE // NODE_DZ</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

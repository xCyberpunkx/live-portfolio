"use client";

import React, { useState } from "react";
"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github, Twitter, Linkedin, Instagram, Mail, MapPin, Phone, Send, Loader2 } from "lucide-react";
import { useState } from "react";

const socialLinks = [
  { icon: Github, href: "#", label: "Github" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
];

export default function Footer() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Failed to send');
      
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <footer className="relative bg-black pt-32 pb-12 overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Left Column - Contact Info */}
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <span className="text-[10px] font-technical text-white/20 tracking-[0.2em] uppercase block">INITIATE SYNAPS</span>
              <h2 className="text-[8vw] font-black text-white uppercase tracking-tighter leading-none">
                INITIATE<br />
                <span className="text-transparent" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.2)" }}>SYNAPS</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="group cursor-pointer">
                  <p className="text-xs font-technical text-white/40 uppercase mb-2">Email</p>
                  <a href="mailto:hello@synapse.tech" className="text-lg text-white group-hover:text-blue-400 transition-colors duration-300">
                    hello@synapse.tech
                  </a>
                </div>
                <div className="group cursor-pointer">
                  <p className="text-xs font-technical text-white/40 uppercase mb-2">Phone</p>
                  <a href="tel:+1234567890" className="text-lg text-white group-hover:text-blue-400 transition-colors duration-300">
                    +1 (234) 567-890
                  </a>
                </div>
              </div>
              <div className="space-y-6">
                <div className="group cursor-pointer">
                  <p className="text-xs font-technical text-white/40 uppercase mb-2">Location</p>
                  <p className="text-lg text-white group-hover:text-blue-400 transition-colors duration-300">
                    San Francisco, CA<br />
                    United States
                  </p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:border-white/30 hover:bg-white/5 transition-all duration-300"
                >
                  <social.icon className="w-5 h-5 text-white" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <form onSubmit={handleSubmit} className="space-y-8 p-10 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-xs font-technical text-white/40 uppercase">Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:border-white transition-colors placeholder:text-white/10"
                    placeholder="Your Name"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-technical text-white/40 uppercase">Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:border-white transition-colors placeholder:text-white/10"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-technical text-white/40 uppercase">Message</label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-transparent border-b border-white/10 py-4 text-white focus:outline-none focus:border-white transition-colors resize-none placeholder:text-white/10"
                  placeholder="How can we help?"
                />
              </div>
              <button
                type="submit"
                disabled={status === 'loading'}
                className="group w-full relative flex items-center justify-center gap-3 bg-white text-black py-4 font-bold uppercase tracking-widest hover:bg-blue-400 transition-all duration-500 overflow-hidden disabled:opacity-50"
              >
                {status === 'loading' ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : status === 'success' ? (
                  "Sent Successfully"
                ) : status === 'error' ? (
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

        {/* Bottom Footer */}
        <div className="mt-32 pt-12 border-t border-white/5 flex flex-col md:row items-center justify-between gap-6">
          <p className="text-sm text-white/30 font-technical">
            © 2024 SYNAPSE. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-xs font-technical text-white/20 hover:text-white transition-colors uppercase tracking-widest">Privacy Policy</a>
            <a href="#" className="text-xs font-technical text-white/20 hover:text-white transition-colors uppercase tracking-widest">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}


"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Shield, Award, Users, Stethoscope, Activity, Pill, Heart } from "lucide-react";
import { SITE_CONFIG } from "@/constants";

const floatingIcons = [
  { Icon: Pill, x: "8%", y: "22%", delay: 0 },
  { Icon: Heart, x: "88%", y: "28%", delay: 0.5 },
  { Icon: Activity, x: "5%", y: "65%", delay: 1 },
  { Icon: Stethoscope, x: "91%", y: "62%", delay: 1.5 },
  { Icon: Shield, x: "82%", y: "80%", delay: 0.8 },
];

export function HeroSection() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const fn = (e: MouseEvent) => setMousePos({ x: (e.clientX / window.innerWidth - 0.5) * 20, y: (e.clientY / window.innerHeight - 0.5) * 20 });
    window.addEventListener("mousemove", fn);
    return () => window.removeEventListener("mousemove", fn);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-slate-50 via-blue-50/30 to-white dark:from-[#060b1a] dark:via-[#060f24] dark:to-[#060b1a]">
      <div className="absolute inset-0 animated-grid opacity-40 dark:opacity-20" />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div animate={{ x: mousePos.x * 0.3, y: mousePos.y * 0.3 }} transition={{ type: "spring", stiffness: 50, damping: 20 }}
          className="absolute -top-40 -left-40 w-[700px] h-[700px] bg-blue-400/15 dark:bg-blue-600/10 rounded-full blur-3xl animate-blob" />
        <motion.div animate={{ x: mousePos.x * -0.2, y: mousePos.y * -0.2 }} transition={{ type: "spring", stiffness: 50, damping: 20 }}
          className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-cyan-400/15 dark:bg-cyan-600/10 rounded-full blur-3xl animate-blob-delayed" />
      </div>

      {floatingIcons.map(({ Icon, x, y, delay }, i) => (
        <motion.div key={i} className="absolute hidden lg:flex" style={{ left: x, top: y }}
          initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: delay + 0.5, duration: 0.5, ease: "backOut" }}>
          <motion.div animate={{ y: [0, -12, 0] }} transition={{ duration: 4 + i * 0.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
            className="p-3 rounded-2xl glass-card">
            <Icon className="w-6 h-6 text-blue-500 dark:text-blue-400" strokeWidth={1.5} />
          </motion.div>
        </motion.div>
      ))}

      <div className="relative container-custom pt-32 pb-20 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-500/15 border border-blue-100 dark:border-blue-500/20 text-blue-600 dark:text-blue-400 text-sm font-medium mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
          </span>
          Now Open in Jalna, Maharashtra
        </motion.div>

        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-slate-900 dark:text-white leading-[1.08] tracking-tight mb-6">
          Advanced Clinical<br />
          <span className="gradient-text">Pharmacy & Care</span>
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.25 }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-slate-500 dark:text-slate-400 leading-relaxed mb-10">
          Experience next-generation pharmaceutical care at CVX Pharmacy, Jalna. Expert Medication Therapy Management, NCD care, and evidence-based counseling — because your health deserves more than just medicines.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.35 }}
          className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-14">
          <Link href="/contact" className="group flex items-center gap-2.5 px-7 py-4 text-base font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl hover:shadow-2xl hover:shadow-blue-500/30 hover:-translate-y-1 transition-all duration-300">
            Consult Now <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <a href={SITE_CONFIG.whatsappUrl} target="_blank" rel="noopener noreferrer"
            className="group flex items-center gap-2.5 px-7 py-4 text-base font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-white/10 border border-slate-200 dark:border-white/10 rounded-2xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <MessageCircle className="w-4 h-4 text-green-500" />WhatsApp Us
          </a>
          <Link href="/services" className="group flex items-center gap-2.5 px-7 py-4 text-base font-semibold text-blue-600 dark:text-blue-400 rounded-2xl hover:bg-blue-50 dark:hover:bg-blue-500/10 transition-all duration-300">
            Explore Services <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.45 }}
          className="flex flex-wrap justify-center gap-4">
          {[{ Icon: Shield, text: "Licensed Clinical Pharmacy" }, { Icon: Award, text: "Evidence-Based Care" }, { Icon: Users, text: "Patient-Centered Approach" }].map(({ Icon, text }, i) => (
            <motion.div key={i} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5 + i * 0.1 }}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/80 dark:bg-white/5 border border-slate-100 dark:border-white/10 backdrop-blur-sm">
              <Icon className="w-4 h-4 text-blue-500" />
              <span className="text-sm font-medium text-slate-600 dark:text-slate-300">{text}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

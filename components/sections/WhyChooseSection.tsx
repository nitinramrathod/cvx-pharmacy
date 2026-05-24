"use client";
import { motion } from "framer-motion";
import { Shield, FlaskConical, Clock, Users, Star, Zap, BookOpen, HeartHandshake } from "lucide-react";
import { AnimatedSection, StaggerContainer, staggerItem } from "@/components/animations/AnimatedSection";
const reasons = [
  { icon: FlaskConical, title: "Evidence-Based Practice", description: "Every recommendation is grounded in the latest clinical research, pharmacotherapy guidelines, and peer-reviewed literature.", color: "text-blue-500", bg: "bg-blue-50 dark:bg-blue-500/10" },
  { icon: Shield, title: "Medication Safety First", description: "Comprehensive drug interaction screening and prescription review ensures your medication regimen is safe at all times.", color: "text-cyan-500", bg: "bg-cyan-50 dark:bg-cyan-500/10" },
  { icon: HeartHandshake, title: "Patient-Centered Care", description: "We treat every patient as an individual — understanding your unique health goals, lifestyle, and concerns.", color: "text-rose-500", bg: "bg-rose-50 dark:bg-rose-500/10" },
  { icon: Users, title: "Clinical Pharmacist Expertise", description: "Our qualified clinical pharmacists bring specialized training in therapeutic management, not just dispensing.", color: "text-violet-500", bg: "bg-violet-50 dark:bg-violet-500/10" },
  { icon: BookOpen, title: "Health Education", description: "We empower patients with knowledge about their conditions and medications, enabling informed health decisions.", color: "text-emerald-500", bg: "bg-emerald-50 dark:bg-emerald-500/10" },
  { icon: Clock, title: "Long-Term Relationship", description: "We build ongoing therapeutic relationships to support your long-term health journey — not a one-time visit.", color: "text-amber-500", bg: "bg-amber-50 dark:bg-amber-500/10" },
  { icon: Zap, title: "Rapid Drug Interaction Screening", description: "State-of-the-art pharmacological screening to instantly identify potentially dangerous drug combinations.", color: "text-orange-500", bg: "bg-orange-50 dark:bg-orange-500/10" },
  { icon: Star, title: "Premium Care Experience", description: "From the moment you walk in, experience a clean, private, and welcoming clinical environment designed for comfort.", color: "text-yellow-500", bg: "bg-yellow-50 dark:bg-yellow-500/10" }
];
export function WhyChooseSection() {
  return (
    <section className="section-padding bg-slate-50 dark:bg-[#060f1f] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-400/8 dark:bg-blue-600/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-400/8 dark:bg-cyan-600/5 rounded-full blur-3xl" />
      </div>
      <div className="relative container-custom">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 text-sm font-medium border border-blue-100 dark:border-blue-500/20 mb-4">Why CVX Pharmacy</span>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-slate-900 dark:text-white mb-4">
            Not Just a Pharmacy. <span className="gradient-text">A Clinical Care Partner.</span>
          </h2>
          <p className="max-w-2xl mx-auto text-slate-500 dark:text-slate-400 text-lg">We redefine what a pharmacy means — combining clinical expertise with compassionate, personalized care.</p>
        </AnimatedSection>
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5" staggerDelay={0.07}>
          {reasons.map((r, i) => (
            <motion.div key={i} variants={staggerItem}
              className="group p-6 rounded-2xl bg-white dark:bg-white/3 border border-slate-100 dark:border-white/8 hover:border-blue-200 dark:hover:border-blue-500/20 hover:shadow-lg hover:shadow-blue-500/8 transition-all duration-300 hover:-translate-y-1.5">
              <div className={`w-11 h-11 ${r.bg} rounded-xl flex items-center justify-center mb-4`}>
                <r.icon className={`w-5 h-5 ${r.color}`} strokeWidth={1.8} />
              </div>
              <h3 className="font-display font-semibold text-base text-slate-900 dark:text-white mb-2">{r.title}</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{r.description}</p>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ClipboardList, Search, Target, BookOpen, RefreshCw, CheckCircle2, ArrowRight } from "lucide-react";
import { AnimatedSection, StaggerContainer, staggerItem } from "@/components/animations/AnimatedSection";
const steps = [
  { step: "01", icon: ClipboardList, title: "Comprehensive Medication Review", description: "Complete review of all your medications — prescription, OTC, supplements, and herbal products." },
  { step: "02", icon: Search, title: "Problem Identification", description: "Identify drug-drug interactions, inappropriate dosing, therapeutic duplications, and adverse effects." },
  { step: "03", icon: Target, title: "Personalized Action Plan", description: "Create a customized Medication Action Plan (MAP) with clear goals for each medication." },
  { step: "04", icon: BookOpen, title: "Patient Education", description: "Thorough counseling on medication purpose, administration, side effects, and adherence strategies." },
  { step: "05", icon: RefreshCw, title: "Follow-up & Monitoring", description: "Regular follow-up sessions to assess progress, adjust plans, and ensure optimal outcomes." }
];
export function MTMSection() {
  return (
    <section className="section-padding bg-white dark:bg-[#060b1a] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-400/5 dark:bg-blue-600/5 rounded-full blur-3xl" />
      </div>
      <div className="relative container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection>
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 text-sm font-medium border border-blue-100 dark:border-blue-500/20 mb-4">Medication Therapy Management</span>
            <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-slate-900 dark:text-white mb-6 leading-tight">
              Your Complete <span className="gradient-text">Medication Optimization</span> Journey
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed mb-8">MTM is a clinical service where our pharmacist reviews your entire medication regimen — identifying problems, optimizing therapy, and partnering with you and your doctors for the best possible outcomes.</p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {["Reduces medication errors","Improves health outcomes","Decreases hospitalizations","Lowers healthcare costs","Enhances adherence","Prevents adverse events"].map((b, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-blue-500 flex-shrink-0" />{b}
                </div>
              ))}
            </div>
            <Link href="/services" className="inline-flex items-center gap-2 px-6 py-3 text-base font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl hover:shadow-lg hover:shadow-blue-500/25 hover:-translate-y-0.5 transition-all">
              Start MTM Assessment <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
          <StaggerContainer className="space-y-4" staggerDelay={0.1}>
            {steps.map((s, i) => (
              <motion.div key={i} variants={staggerItem}
                className="flex gap-4 p-5 rounded-2xl bg-slate-50 dark:bg-white/3 border border-slate-100 dark:border-white/8 hover:border-blue-200 dark:hover:border-blue-500/20 hover:shadow-lg hover:shadow-blue-500/8 transition-all">
                <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                  <s.icon className="w-5 h-5 text-white" strokeWidth={1.8} />
                </div>
                <div>
                  <span className="text-xs font-bold text-blue-500 dark:text-blue-400">STEP {s.step}</span>
                  <h4 className="font-display font-semibold text-slate-900 dark:text-white text-sm mb-1">{s.title}</h4>
                  <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{s.description}</p>
                </div>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}

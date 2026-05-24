"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Droplets, Heart, Zap, Wind, Activity, ArrowRight } from "lucide-react";
import { AnimatedSection, StaggerContainer, staggerItem } from "@/components/animations/AnimatedSection";
const conditions = [
  { icon: Droplets, name: "Diabetes Mellitus", type: "Type 1 & Type 2", desc: "Comprehensive glycemic management, HbA1c monitoring, and insulin counseling.", color: "from-teal-500 to-cyan-600" },
  { icon: Heart, name: "Hypertension", type: "Silent Killer", desc: "Blood pressure management, lifestyle modification, and medication optimization.", color: "from-rose-500 to-pink-600" },
  { icon: Activity, name: "Cardiovascular Disease", type: "Heart Health", desc: "Secondary prevention, lipid management, and antiplatelet therapy optimization.", color: "from-red-500 to-orange-600" },
  { icon: Zap, name: "Dyslipidemia", type: "Cholesterol Management", desc: "Statin therapy management, lipid panel interpretation, and lifestyle guidance.", color: "from-amber-500 to-yellow-600" },
  { icon: Wind, name: "Asthma / COPD", type: "Respiratory Care", desc: "Inhaler technique education, exacerbation prevention, and controller therapy.", color: "from-sky-500 to-blue-600" },
  { icon: Activity, name: "Thyroid Disorders", type: "Endocrine Health", desc: "Thyroid hormone therapy optimization and monitoring for hypo/hyperthyroidism.", color: "from-violet-500 to-purple-600" }
];
export function NCDSection() {
  return (
    <section className="section-padding bg-slate-50 dark:bg-[#060f1f] relative overflow-hidden">
      <div className="absolute right-0 top-1/3 w-[500px] h-[500px] bg-rose-400/5 dark:bg-rose-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="relative container-custom">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-rose-50 dark:bg-rose-500/10 text-rose-600 dark:text-rose-400 text-sm font-medium border border-rose-100 dark:border-rose-500/20 mb-4">NCD Care Program</span>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-slate-900 dark:text-white mb-4">
            Specialized Care for <span className="gradient-text">Chronic Conditions</span>
          </h2>
          <p className="max-w-2xl mx-auto text-slate-500 dark:text-slate-400 text-lg">Non-communicable diseases (NCDs) require long-term, expert pharmaceutical management. Our specialized NCD care program ensures you achieve your health targets.</p>
        </AnimatedSection>
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.08}>
          {conditions.map((c, i) => (
            <motion.div key={i} variants={staggerItem}
              className="group p-6 rounded-2xl bg-white dark:bg-white/3 border border-slate-100 dark:border-white/8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1.5">
              <div className="flex items-start gap-4">
                <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${c.color} flex items-center justify-center`}>
                  <c.icon className="w-6 h-6 text-white" strokeWidth={1.8} />
                </div>
                <div>
                  <span className="text-xs font-medium text-slate-400">{c.type}</span>
                  <h3 className="font-display font-semibold text-slate-900 dark:text-white text-base mt-0.5 mb-2">{c.name}</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{c.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </StaggerContainer>
        <AnimatedSection className="text-center mt-12">
          <Link href="/services" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-500 hover:shadow-lg hover:shadow-blue-500/25 hover:-translate-y-0.5 transition-all">
            Explore NCD Care Program <ArrowRight className="w-4 h-4" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}

"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Pill, Heart, MessageCircle, CheckSquare, Leaf, Calendar, FileText, RefreshCw, Droplets, ArrowRight, ChevronDown } from "lucide-react";
import { SERVICES } from "@/constants";
import { AnimatedSection, StaggerContainer, staggerItem } from "@/components/animations/AnimatedSection";
import { CTASection } from "@/components/sections/CTASection";
const iconMap: Record<string, React.ElementType> = { Pill, Heart, MessageCircle, CheckSquare, Leaf, Calendar, FileText, RefreshCw, Droplets };

export function ServicesPageClient() {
  const [expanded, setExpanded] = useState<string | null>(null);
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 bg-gradient-to-b from-slate-50 via-blue-50/20 to-white dark:from-[#060b1a] dark:via-[#060f24] dark:to-[#060b1a] overflow-hidden">
        <div className="absolute inset-0 animated-grid opacity-30 dark:opacity-15" />
        <div className="absolute top-20 right-1/3 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl animate-blob" />
        <div className="relative container-custom text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-500/15 border border-blue-100 dark:border-blue-500/20 text-blue-600 dark:text-blue-400 text-sm font-medium mb-8">
            <span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" /><span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" /></span>
            Clinical Pharmacy Services
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-slate-900 dark:text-white mb-6 leading-tight">
            Comprehensive Clinical<br /><span className="gradient-text">Pharmaceutical Care</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
            className="max-w-2xl mx-auto text-lg md:text-xl text-slate-500 dark:text-slate-400 leading-relaxed">
            From medication therapy management to NCD care and lifestyle counseling — CVX Pharmacy offers a full spectrum of evidence-based clinical pharmacy services.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white dark:bg-[#060b1a]">
        <div className="container-custom">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.07}>
            {SERVICES.map((s) => {
              const Icon = iconMap[s.icon] || Pill;
              const isExpanded = expanded === s.id;
              return (
                <motion.div key={s.id} variants={staggerItem}
                  className="group rounded-2xl bg-slate-50 dark:bg-white/3 border border-slate-100 dark:border-white/8 hover:border-blue-200 dark:hover:border-blue-500/20 hover:shadow-xl hover:shadow-blue-500/8 transition-all duration-300 overflow-hidden">
                  <div className="p-6">
                    <div className={`inline-flex w-12 h-12 rounded-xl bg-gradient-to-br ${s.color} items-center justify-center mb-4 shadow-lg`}>
                      <Icon className="w-6 h-6 text-white" strokeWidth={1.8} />
                    </div>
                    <h3 className="font-display font-semibold text-lg text-slate-900 dark:text-white mb-2">{s.title}</h3>
                    <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-4">{s.description}</p>
                    <ul className="space-y-2 mb-4">
                      {s.features.map((f, fi) => (
                        <li key={fi} className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0" />{f}
                        </li>
                      ))}
                    </ul>
                    <AnimatePresence initial={false}>
                      {isExpanded && (
                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                          <div className="pt-4 border-t border-slate-100 dark:border-white/8">
                            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-3">Our {s.title} service is designed to provide comprehensive, patient-centered care using the latest evidence-based practices. Our clinical pharmacists work closely with you to optimize your health outcomes through personalized intervention plans.</p>
                            <Link href="/contact" className="inline-flex items-center gap-1.5 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-500 px-4 py-2 rounded-lg hover:-translate-y-0.5 transition-all">
                              Book This Service <ArrowRight className="w-3.5 h-3.5" />
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                    <button onClick={() => setExpanded(isExpanded ? null : s.id)}
                      className="flex items-center gap-1.5 text-sm font-medium text-blue-600 dark:text-blue-400 mt-3 hover:gap-2.5 transition-all">
                      {isExpanded ? "Show Less" : "Learn More"}
                      <motion.div animate={{ rotate: isExpanded ? 180 : 0 }} transition={{ duration: 0.3 }}>
                        <ChevronDown className="w-4 h-4" />
                      </motion.div>
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Process section */}
      <section className="section-padding bg-slate-50 dark:bg-[#060f1f]">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-12">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-slate-900 dark:text-white mb-4">How Our <span className="gradient-text">Clinical Process Works</span></h2>
            <p className="text-slate-500 dark:text-slate-400 text-lg max-w-xl mx-auto">A structured, evidence-based approach to your pharmaceutical care.</p>
          </AnimatedSection>
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {["Initial Consultation","Comprehensive Assessment","Personalized Care Plan","Ongoing Support"].map((step, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="text-center p-6 rounded-2xl bg-white dark:bg-white/3 border border-slate-100 dark:border-white/8">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-display font-bold text-lg mx-auto mb-4">{i + 1}</div>
                  <h3 className="font-display font-semibold text-slate-900 dark:text-white text-sm">{step}</h3>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}

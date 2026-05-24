"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { FAQS } from "@/constants";
import { AnimatedSection } from "@/components/animations/AnimatedSection";
export function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="section-padding bg-slate-50 dark:bg-[#060f1f]">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 text-sm font-medium border border-blue-100 dark:border-blue-500/20 mb-4">FAQs</span>
            <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-slate-900 dark:text-white mb-4">Frequently Asked <span className="gradient-text">Questions</span></h2>
            <p className="text-slate-500 dark:text-slate-400 text-lg">Everything you need to know about CVX Pharmacy and our services.</p>
          </AnimatedSection>
          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <AnimatedSection key={i} delay={i * 0.04}>
                <div className="rounded-2xl bg-white dark:bg-white/3 border border-slate-100 dark:border-white/8 overflow-hidden">
                  <button onClick={() => setOpen(open === i ? null : i)}
                    className="w-full flex items-center justify-between p-6 text-left"
                    aria-expanded={open === i}>
                    <span className="font-display font-semibold text-slate-900 dark:text-white text-base pr-4">{faq.question}</span>
                    <motion.div animate={{ rotate: open === i ? 180 : 0 }} transition={{ duration: 0.3 }}
                      className="flex-shrink-0 w-8 h-8 rounded-lg bg-blue-50 dark:bg-blue-500/10 flex items-center justify-center text-blue-500">
                      <ChevronDown className="w-4 h-4" />
                    </motion.div>
                  </button>
                  <AnimatePresence initial={false}>
                    {open === i && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }} className="overflow-hidden">
                        <div className="px-6 pb-6">
                          <div className="h-px bg-slate-100 dark:bg-white/8 mb-4" />
                          <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">{faq.answer}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

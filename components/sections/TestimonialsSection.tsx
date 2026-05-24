"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { TESTIMONIALS } from "@/constants";
import { AnimatedSection } from "@/components/animations/AnimatedSection";
export function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const next = () => setActive((p) => (p + 1) % TESTIMONIALS.length);
  const prev = () => setActive((p) => (p - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  return (
    <section className="section-padding bg-white dark:bg-[#060b1a] overflow-hidden">
      <div className="container-custom">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 text-sm font-medium border border-blue-100 dark:border-blue-500/20 mb-4">Patient Stories</span>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-slate-900 dark:text-white mb-4">Real Results, <span className="gradient-text">Real People</span></h2>
          <p className="max-w-xl mx-auto text-slate-500 dark:text-slate-400 text-lg">Hear from patients who have transformed their health journey with CVX Pharmacy.</p>
        </AnimatedSection>
        <AnimatedSection className="max-w-3xl mx-auto mb-12">
          <div className="relative p-8 md:p-12 rounded-3xl bg-gradient-to-br from-blue-600 to-cyan-600 text-white overflow-hidden">
            <div className="absolute inset-0 animated-grid opacity-10" />
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
            <Quote className="relative w-12 h-12 text-white/30 mb-6" />
            <AnimatePresence mode="wait">
              <motion.div key={active} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }}>
                <p className="relative text-xl md:text-2xl font-light leading-relaxed mb-8 text-white/95">"{TESTIMONIALS[active].content}"</p>
                <div className="relative flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center font-display font-bold text-lg">{TESTIMONIALS[active].avatar}</div>
                    <div>
                      <p className="font-semibold text-white">{TESTIMONIALS[active].name}</p>
                      <p className="text-blue-100 text-sm">{TESTIMONIALS[active].role} · {TESTIMONIALS[active].location}</p>
                    </div>
                  </div>
                  <div className="flex gap-1">{[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}</div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </AnimatedSection>
        <AnimatedSection className="flex items-center justify-center gap-4" delay={0.1}>
          <button onClick={prev} className="w-10 h-10 rounded-full border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-white/5 hover:border-blue-300 dark:hover:border-blue-500/30 transition-all" aria-label="Previous"><ChevronLeft className="w-5 h-5" /></button>
          <div className="flex gap-2">
            {TESTIMONIALS.map((_, i) => (
              <button key={i} onClick={() => setActive(i)} className={`transition-all duration-300 rounded-full ${i === active ? "w-8 h-2.5 bg-blue-500" : "w-2.5 h-2.5 bg-slate-200 dark:bg-white/20 hover:bg-blue-300"}`} aria-label={`Testimonial ${i + 1}`} />
            ))}
          </div>
          <button onClick={next} className="w-10 h-10 rounded-full border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-white/5 hover:border-blue-300 dark:hover:border-blue-500/30 transition-all" aria-label="Next"><ChevronRight className="w-5 h-5" /></button>
        </AnimatedSection>
      </div>
    </section>
  );
}

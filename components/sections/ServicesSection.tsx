"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Pill, Heart, MessageCircle, CheckSquare, Leaf, Calendar, FileText, RefreshCw, Droplets, ArrowRight } from "lucide-react";
import { SERVICES } from "@/constants";
import { AnimatedSection, StaggerContainer, staggerItem } from "@/components/animations/AnimatedSection";
const iconMap: Record<string, React.ElementType> = { Pill, Heart, MessageCircle, CheckSquare, Leaf, Calendar, FileText, RefreshCw, Droplets };
export function ServicesSection() {
  return (
    <section className="section-padding bg-white dark:bg-[#060b1a]">
      <div className="container-custom">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 text-sm font-medium border border-blue-100 dark:border-blue-500/20 mb-4">Our Services</span>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-slate-900 dark:text-white mb-4">
            Clinical Pharmacy <span className="gradient-text">Services</span>
          </h2>
          <p className="max-w-2xl mx-auto text-slate-500 dark:text-slate-400 text-lg">Beyond dispensing medicines — comprehensive clinical pharmaceutical care to optimize your health outcomes.</p>
        </AnimatedSection>
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.08}>
          {SERVICES.slice(0, 6).map((s) => {
            const Icon = iconMap[s.icon] || Pill;
            return (
              <motion.div key={s.id} variants={staggerItem}
                className="group relative p-6 rounded-2xl bg-slate-50 dark:bg-white/3 border border-slate-100 dark:border-white/8 hover:border-blue-200 dark:hover:border-blue-500/30 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 hover:-translate-y-2">
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${s.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                <div className={`relative inline-flex w-12 h-12 rounded-xl bg-gradient-to-br ${s.color} items-center justify-center mb-4 shadow-lg`}>
                  <Icon className="w-6 h-6 text-white" strokeWidth={1.8} />
                </div>
                <h3 className="relative font-display font-semibold text-lg text-slate-900 dark:text-white mb-2">{s.title}</h3>
                <p className="relative text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-4">{s.description}</p>
                <ul className="relative space-y-1.5 mb-4">
                  {s.features.slice(0, 3).map((f, fi) => (
                    <li key={fi} className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0" />{f}
                    </li>
                  ))}
                </ul>
                <Link href="/services" className="relative inline-flex items-center gap-1.5 text-sm font-medium text-blue-600 dark:text-blue-400 group-hover:gap-2.5 transition-all">
                  Learn More <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </motion.div>
            );
          })}
        </StaggerContainer>
        <AnimatedSection className="text-center mt-12" delay={0.2}>
          <Link href="/services" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-blue-600 dark:text-blue-400 border-2 border-blue-200 dark:border-blue-500/30 hover:bg-blue-50 dark:hover:bg-blue-500/10 hover:-translate-y-0.5 transition-all">
            View All Services <ArrowRight className="w-4 h-4" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}

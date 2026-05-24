"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Shield, FlaskConical, Award, BookOpen, Target, Users, Sparkles, ArrowRight, CheckCircle2 } from "lucide-react";
import { AnimatedSection, StaggerContainer, staggerItem } from "@/components/animations/AnimatedSection";
import { CTASection } from "@/components/sections/CTASection";

export function AboutPageClient() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-slate-50 via-blue-50/20 to-white dark:from-[#060b1a] dark:via-[#060f24] dark:to-[#060b1a] overflow-hidden">
        <div className="absolute inset-0 animated-grid opacity-30 dark:opacity-15" />
        <div className="absolute top-20 left-1/4 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-10 right-1/4 w-60 h-60 bg-cyan-400/10 rounded-full blur-3xl animate-blob-delayed" />
        <div className="relative container-custom text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-500/15 border border-blue-100 dark:border-blue-500/20 text-blue-600 dark:text-blue-400 text-sm font-medium mb-8">
            <Sparkles className="w-4 h-4" />Our Story
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-slate-900 dark:text-white mb-6 leading-tight">
            Redefining Pharmacy<br /><span className="gradient-text">for Jalna, Maharashtra</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
            className="max-w-3xl mx-auto text-lg md:text-xl text-slate-500 dark:text-slate-400 leading-relaxed">
            CVX Pharmacy was founded in 2025 with a singular vision: to transform pharmaceutical care in Jalna from a mere medicine-dispensing service into a comprehensive clinical care partnership — one that genuinely improves patient health outcomes.
          </motion.p>
        </div>
      </section>

      {/* Mission Vision Values */}
      <section className="section-padding bg-white dark:bg-[#060b1a]">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Target, title: "Our Mission", description: "To provide comprehensive clinical pharmaceutical care that optimizes medication therapy, improves patient health outcomes, and empowers our community with evidence-based health knowledge.", color: "from-blue-500 to-blue-700" },
              { icon: Sparkles, title: "Our Vision", description: "To be Jalna's leading clinical pharmacy — a trusted healthcare partner where every patient receives individualized, scientifically sound pharmaceutical care that transforms their quality of life.", color: "from-cyan-500 to-teal-600" },
              { icon: BookOpen, title: "Our Values", description: "Evidence-based practice. Patient safety. Continuous learning. Compassionate care. Rational medicine use. Transparency. Building trusting relationships with every patient we serve.", color: "from-violet-500 to-purple-700" }
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="p-8 rounded-2xl bg-slate-50 dark:bg-white/3 border border-slate-100 dark:border-white/8 h-full">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-5`}>
                    <item.icon className="w-6 h-6 text-white" strokeWidth={1.8} />
                  </div>
                  <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white mb-3">{item.title}</h3>
                  <p className="text-slate-500 dark:text-slate-400 leading-relaxed">{item.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-slate-50 dark:bg-[#060f1f]">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-16">
            <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-slate-900 dark:text-white mb-4">Our <span className="gradient-text">Journey</span></h2>
            <p className="text-slate-500 dark:text-slate-400 text-lg max-w-xl mx-auto">From a vision to transform pharmaceutical care in Jalna, to a thriving clinical pharmacy.</p>
          </AnimatedSection>
          <div className="max-w-3xl mx-auto space-y-8">
            {[
              { year: "2025", month: "January", title: "CVX Pharmacy Founded", description: "Established in Choudhary Nagar, Jalna with a vision to bring clinical pharmacy services to the region." },
              { year: "2025", month: "February", title: "MTM Program Launch", description: "Launched Jalna's first dedicated Medication Therapy Management program for chronic disease patients." },
              { year: "2025", month: "March", title: "NCD Care Program", description: "Introduced specialized NCD management services for diabetes, hypertension, and cardiovascular conditions." },
              { year: "2025", month: "April", title: "Digital Counseling Services", description: "Expanded clinical counseling to include WhatsApp-based follow-up and medication adherence support." },
              { year: "2025", month: "Ongoing", title: "Growing Patient Community", description: "Continuing to build Jalna's most trusted clinical pharmacy with 500+ patients enrolled in care programs." }
            ].map((event, i) => (
              <AnimatedSection key={i} delay={i * 0.1} direction="left">
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex flex-col items-center justify-center text-white shadow-lg shadow-blue-500/30 hidden md:flex">
                    <span className="text-xs font-medium opacity-80">{event.month.slice(0,3)}</span>
                    <span className="font-display font-bold text-base leading-tight">{event.year}</span>
                  </div>
                  <div className="flex-1 p-6 rounded-2xl bg-white dark:bg-white/3 border border-slate-100 dark:border-white/8">
                    <h3 className="font-display font-semibold text-lg text-slate-900 dark:text-white mb-2">{event.title}</h3>
                    <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{event.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Clinical Philosophy */}
      <section className="section-padding bg-white dark:bg-[#060b1a]">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-12">
            <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-slate-900 dark:text-white mb-4">Our Clinical <span className="gradient-text">Philosophy</span></h2>
            <p className="text-slate-500 dark:text-slate-400 text-lg max-w-2xl mx-auto">Clinical pharmacy is built on the principle that pharmacists are healthcare providers, not just medicine dispensers.</p>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              { icon: FlaskConical, title: "Evidence-Based Pharmacotherapy", description: "Every clinical decision is grounded in peer-reviewed research, WHO guidelines, and nationally recognized clinical practice standards. We never recommend a medication without evidence backing." },
              { icon: Shield, title: "Medication Safety Culture", description: "We screen every prescription for drug interactions, contraindications, and therapeutic duplications. Our systematic approach prevents medication errors before they reach the patient." },
              { icon: Users, title: "Collaborative Healthcare", description: "We work closely with your physicians, specialists, and other healthcare providers to ensure your care team is aligned and your medication regimen is optimized across all conditions." },
              { icon: Award, title: "Continuous Professional Development", description: "Our pharmacists continually update their knowledge with the latest clinical evidence, therapeutic advances, and pharmaceutical innovations to provide you with the most current care." }
            ].map((pillar, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="flex gap-5 p-6 rounded-2xl bg-slate-50 dark:bg-white/3 border border-slate-100 dark:border-white/8 h-full">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                    <pillar.icon className="w-6 h-6 text-white" strokeWidth={1.8} />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-lg text-slate-900 dark:text-white mb-2">{pillar.title}</h3>
                    <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{pillar.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-slate-50 dark:bg-[#060f1f]">
        <div className="container-custom text-center">
          <AnimatedSection className="mb-12">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-slate-900 dark:text-white mb-4">Meet Our <span className="gradient-text">Clinical Team</span></h2>
            <p className="text-slate-500 dark:text-slate-400 text-lg max-w-xl mx-auto">Qualified, passionate clinical pharmacists committed to your health.</p>
          </AnimatedSection>
          <div className="flex flex-wrap justify-center gap-8">
            <AnimatedSection className="w-full max-w-sm">
              <div className="p-8 rounded-2xl bg-white dark:bg-white/3 border border-slate-100 dark:border-white/8">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-display font-bold text-2xl mx-auto mb-5 shadow-lg shadow-blue-500/30">CX</div>
                <span className="text-xs text-blue-500 dark:text-blue-400 font-medium">B.Pharm</span>
                <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white mt-1 mb-1">Clinical Pharmacist</h3>
                <p className="text-sm text-blue-600 dark:text-blue-400 font-medium mb-1">Founder & Lead Clinical Pharmacist</p>
                <p className="text-xs text-slate-400 mb-4">Medication Therapy Management · NCD Care</p>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">Founded CVX Pharmacy with the mission to bring evidence-based clinical pharmaceutical care to Jalna. Expert in comprehensive medication reviews and chronic disease management.</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}

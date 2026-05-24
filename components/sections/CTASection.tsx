"use client";
import Link from "next/link";
import { ArrowRight, MessageCircle, Phone } from "lucide-react";
import { SITE_CONFIG } from "@/constants";
import { AnimatedSection } from "@/components/animations/AnimatedSection";
export function CTASection() {
  return (
    <section className="section-padding bg-slate-50 dark:bg-[#060f1f]">
      <div className="container-custom">
        <AnimatedSection>
          <div className="relative rounded-3xl bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-600 p-10 md:p-16 text-white overflow-hidden text-center">
            <div className="absolute inset-0 animated-grid opacity-15" />
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-cyan-300/20 rounded-full blur-3xl" />
            <div className="relative">
              <span className="inline-block px-4 py-1.5 rounded-full bg-white/20 text-white text-sm font-medium border border-white/30 mb-6">Start Your Clinical Care Journey</span>
              <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl mb-4 leading-tight">
                Your Health Deserves<br className="hidden sm:block" /> Expert Pharmaceutical Care
              </h2>
              <p className="max-w-2xl mx-auto text-blue-100 text-lg mb-10">Book a consultation with our clinical pharmacists today. Experience the difference between a pharmacy and a clinical care partner.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link href="/contact" className="group flex items-center gap-2.5 px-7 py-4 text-base font-semibold text-blue-600 bg-white rounded-2xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                  Book Consultation <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a href={SITE_CONFIG.whatsappUrl} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2.5 px-7 py-4 text-base font-semibold text-white bg-white/15 border border-white/30 rounded-2xl hover:bg-white/25 transition-all">
                  <MessageCircle className="w-5 h-5" />WhatsApp Now
                </a>
                <a href={`tel:${SITE_CONFIG.phone}`} className="flex items-center gap-2.5 px-7 py-4 text-base font-semibold text-white bg-white/15 border border-white/30 rounded-2xl hover:bg-white/25 transition-all">
                  <Phone className="w-5 h-5" />Call Us
                </a>
              </div>
              <p className="mt-6 text-blue-200 text-sm">📍 Choudhary Nagar, Jalna · Open Mon–Sat 9AM–9PM</p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

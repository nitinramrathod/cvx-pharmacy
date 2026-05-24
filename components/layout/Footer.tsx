import React from "react";
import Link from "next/link";
import { MapPin, Phone, Mail, MessageCircle, Cross, Heart, ArrowRight } from "lucide-react";
import { SITE_CONFIG, NAV_LINKS } from "@/constants";

export function Footer() {
  return (
    <footer className="relative bg-slate-900 dark:bg-[#030710] text-white overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/8 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-600/8 rounded-full blur-3xl" />
      </div>
      <div className="relative container-custom pt-16 pb-8">
        {/* CTA Banner */}
        <div className="mb-16 p-8 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 relative overflow-hidden">
          <div className="absolute inset-0 animated-grid opacity-10" />
          <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-display font-bold text-2xl md:text-3xl text-white mb-2">Ready for Advanced Clinical Care?</h3>
              <p className="text-blue-100">Book your medication therapy consultation today.</p>
            </div>
            <div className="flex gap-3 flex-shrink-0">
              <a href={SITE_CONFIG.whatsappUrl} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 bg-white text-blue-600 font-semibold rounded-xl hover:shadow-lg hover:-translate-y-0.5 transition-all text-sm">
                <MessageCircle className="w-4 h-4" />WhatsApp
              </a>
              <Link href="/contact" className="flex items-center gap-2 px-5 py-2.5 bg-white/20 text-white font-semibold rounded-xl hover:bg-white/30 transition-all text-sm border border-white/30">
                Contact Us <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center">
                <Cross className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="font-display font-bold text-white">CVX </span>
                <span className="font-display font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Pharmacy</span>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-5">Advanced clinical pharmacy & patient care services in Jalna, Maharashtra. Evidence-based pharmacotherapy for better health outcomes.</p>
            <div className="space-y-2.5 text-sm">
              <div className="flex items-start gap-2.5 text-slate-400"><MapPin className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" /><span>{SITE_CONFIG.address}</span></div>
              <a href={`tel:${SITE_CONFIG.phone}`} className="flex items-center gap-2.5 text-slate-400 hover:text-blue-400 transition-colors"><Phone className="w-4 h-4 text-blue-400 flex-shrink-0" />{SITE_CONFIG.phoneDisplay}</a>
              <a href={`mailto:${SITE_CONFIG.email}`} className="flex items-center gap-2.5 text-slate-400 hover:text-blue-400 transition-colors"><Mail className="w-4 h-4 text-blue-400 flex-shrink-0" />{SITE_CONFIG.email}</a>
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white mb-5">Quick Links</h4>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-slate-400 hover:text-blue-400 text-sm transition-colors flex items-center gap-1.5 group">
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />{link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white mb-5">Our Services</h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              {["Medication Therapy Management","NCD Care Program","Clinical Counseling","Diabetes Management","Hypertension Monitoring","Patient Adherence Support","Rational Medicine Use","Wellness Programs"].map((s) => (
                <li key={s} className="flex items-center gap-1.5"><div className="w-1 h-1 bg-blue-500 rounded-full flex-shrink-0" />{s}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white mb-5">Business Hours</h4>
            <div className="space-y-3 text-sm">
              {[{ day: "Monday – Friday", hours: "9 AM – 9 PM" },{ day: "Saturday", hours: "9 AM – 9 PM" },{ day: "Sunday", hours: "10 AM – 6 PM" }].map(({ day, hours }) => (
                <div key={day} className="flex justify-between"><span className="text-slate-400">{day}</span><span className="text-white font-medium">{hours}</span></div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-white/5 rounded-xl border border-white/10">
              <p className="text-xs text-slate-400 mb-2">Emergency Consultation</p>
              <a href={SITE_CONFIG.whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium text-green-400 hover:text-green-300 transition-colors">
                <MessageCircle className="w-4 h-4" />WhatsApp Us
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} CVX Pharmacy, Jalna. All rights reserved.</p>
          <p className="flex items-center gap-1.5">Built with <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" /> for better patient care</p>
        </div>
        <div className="mt-6 p-4 bg-white/3 rounded-xl border border-white/5">
          <p className="text-xs text-slate-500 text-center leading-relaxed">
            <strong className="text-slate-400">Medical Disclaimer:</strong> Content on this website is for educational purposes only and should not be considered as medical advice. Always consult your physician or clinical pharmacist before starting, stopping, or changing any medication. Prescription medicines require a valid prescription from a registered medical practitioner.
          </p>
        </div>
      </div>
    </footer>
  );
}

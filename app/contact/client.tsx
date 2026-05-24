"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone, Mail, MapPin, MessageCircle, Clock, Send,
  CheckCircle2, AlertCircle, ChevronDown,
} from "lucide-react";
import toast from "react-hot-toast";
import { contactSchema, type ContactFormData } from "@/schemas/contact";
import { SITE_CONFIG, SERVICES } from "@/constants";
import { AnimatedSection, StaggerContainer, staggerItem } from "@/components/animations/AnimatedSection";
import { cn } from "@/lib/utils";

const contactCards = [
  {
    icon: Phone,
    label: "Call / WhatsApp",
    value: SITE_CONFIG.phoneDisplay,
    sub: "Mon–Sat 9AM–9PM",
    href: `tel:${SITE_CONFIG.phone}`,
    color: "from-blue-500 to-blue-700",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Chat Instantly",
    sub: "Quick responses guaranteed",
    href: SITE_CONFIG.whatsappUrl,
    color: "from-green-500 to-teal-600",
  },
  {
    icon: Mail,
    label: "Email",
    value: SITE_CONFIG.email,
    sub: "We reply within 24 hrs",
    href: `mailto:${SITE_CONFIG.email}`,
    color: "from-violet-500 to-purple-700",
  },
  {
    icon: MapPin,
    label: "Visit Us",
    value: "Choudhary Nagar",
    sub: "Jalna, Maharashtra 431203",
    href: SITE_CONFIG.whatsappUrl,
    color: "from-rose-500 to-pink-700",
  },
];

const hours = [
  { day: "Monday – Friday", hours: "9:00 AM – 9:00 PM", open: true },
  { day: "Saturday", hours: "9:00 AM – 9:00 PM", open: true },
  { day: "Sunday", hours: "10:00 AM – 6:00 PM", open: true },
];

export function ContactClient() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    // Simulate API call
    await new Promise((r) => setTimeout(r, 1200));
    setSubmitted(true);
    reset();
    toast.success("Message sent! We'll contact you shortly.", {
      icon: "✅",
      duration: 5000,
    });
  };

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 bg-gradient-to-b from-slate-50 via-blue-50/20 to-white dark:from-[#060b1a] dark:via-[#060f24] dark:to-[#060b1a] overflow-hidden">
        <div className="absolute inset-0 animated-grid opacity-30 dark:opacity-15" />
        <div className="absolute top-20 left-1/3 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl animate-blob" />
        <div className="relative container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-500/15 border border-blue-100 dark:border-blue-500/20 text-blue-600 dark:text-blue-400 text-sm font-medium mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
            </span>
            We're Here to Help
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-slate-900 dark:text-white mb-6 leading-tight"
          >
            Get in Touch<br /><span className="gradient-text">with CVX Pharmacy</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
            className="max-w-xl mx-auto text-lg text-slate-500 dark:text-slate-400 leading-relaxed"
          >
            Book a consultation, ask about medicines, or just say hello.
            Our clinical pharmacists are ready to help.
          </motion.p>
        </div>
      </section>

      {/* Contact cards */}
      <section className="py-12 bg-white dark:bg-[#060b1a]">
        <div className="container-custom">
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16" staggerDelay={0.08}>
            {contactCards.map((card, i) => (
              <motion.a
                key={i}
                variants={staggerItem}
                href={card.href}
                target={card.href.startsWith("http") ? "_blank" : undefined}
                rel={card.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group p-6 rounded-2xl bg-slate-50 dark:bg-white/3 border border-slate-100 dark:border-white/8 hover:border-blue-200 dark:hover:border-blue-500/20 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 hover:-translate-y-2 block"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${card.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                  <card.icon className="w-6 h-6 text-white" strokeWidth={1.8} />
                </div>
                <p className="text-xs font-medium text-slate-400 dark:text-slate-500 mb-1">{card.label}</p>
                <p className="font-display font-semibold text-slate-900 dark:text-white text-sm mb-1">{card.value}</p>
                <p className="text-xs text-slate-400 dark:text-slate-500">{card.sub}</p>
              </motion.a>
            ))}
          </StaggerContainer>

          {/* Form + Info grid */}
          <div className="grid lg:grid-cols-5 gap-10">
            {/* Form */}
            <AnimatedSection className="lg:col-span-3">
              <div className="p-8 rounded-2xl bg-slate-50 dark:bg-white/3 border border-slate-100 dark:border-white/8">
                <h2 className="font-display font-bold text-2xl text-slate-900 dark:text-white mb-2">Send us a Message</h2>
                <p className="text-slate-500 dark:text-slate-400 text-sm mb-8">Fill out the form below and we'll get back to you within a few hours.</p>

                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex flex-col items-center text-center py-12"
                    >
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center mb-5 shadow-lg shadow-emerald-500/30">
                        <CheckCircle2 className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white mb-2">Message Sent!</h3>
                      <p className="text-slate-500 dark:text-slate-400 text-sm mb-6">
                        Thank you for reaching out. Our clinical pharmacist will contact you shortly.
                      </p>
                      <button
                        onClick={() => setSubmitted(false)}
                        className="px-5 py-2 text-sm font-semibold text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-500/30 rounded-xl hover:bg-blue-50 dark:hover:bg-blue-500/10 transition-all"
                      >
                        Send Another
                      </button>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      onSubmit={handleSubmit(onSubmit)}
                      className="space-y-5"
                      noValidate
                    >
                      {/* Name */}
                      <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                          Full Name <span className="text-rose-500">*</span>
                        </label>
                        <input
                          {...register("name")}
                          placeholder="Your full name"
                          className={cn(
                            "w-full px-4 py-2.5 rounded-xl border bg-white dark:bg-white/5 text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 transition-all",
                            errors.name
                              ? "border-rose-300 dark:border-rose-500/50 focus:ring-rose-500/30"
                              : "border-slate-200 dark:border-white/10 focus:ring-blue-500/30 focus:border-blue-400 dark:focus:border-blue-500"
                          )}
                        />
                        {errors.name && (
                          <p className="flex items-center gap-1 mt-1.5 text-xs text-rose-500">
                            <AlertCircle className="w-3.5 h-3.5" />{errors.name.message}
                          </p>
                        )}
                      </div>

                      {/* Phone */}
                      <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                          Phone Number <span className="text-rose-500">*</span>
                        </label>
                        <div className="flex">
                          <span className="flex items-center px-3 rounded-l-xl border border-r-0 border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-white/5 text-slate-500 dark:text-slate-400 text-sm">+91</span>
                          <input
                            {...register("phone")}
                            placeholder="10-digit mobile number"
                            maxLength={10}
                            className={cn(
                              "flex-1 px-4 py-2.5 rounded-r-xl border bg-white dark:bg-white/5 text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 transition-all",
                              errors.phone
                                ? "border-rose-300 dark:border-rose-500/50 focus:ring-rose-500/30"
                                : "border-slate-200 dark:border-white/10 focus:ring-blue-500/30 focus:border-blue-400 dark:focus:border-blue-500"
                            )}
                          />
                        </div>
                        {errors.phone && (
                          <p className="flex items-center gap-1 mt-1.5 text-xs text-rose-500">
                            <AlertCircle className="w-3.5 h-3.5" />{errors.phone.message}
                          </p>
                        )}
                      </div>

                      {/* Email */}
                      <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                          Email <span className="text-slate-400 font-normal">(optional)</span>
                        </label>
                        <input
                          {...register("email")}
                          type="email"
                          placeholder="your@email.com"
                          className={cn(
                            "w-full px-4 py-2.5 rounded-xl border bg-white dark:bg-white/5 text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 transition-all",
                            errors.email
                              ? "border-rose-300 dark:border-rose-500/50 focus:ring-rose-500/30"
                              : "border-slate-200 dark:border-white/10 focus:ring-blue-500/30 focus:border-blue-400 dark:focus:border-blue-500"
                          )}
                        />
                        {errors.email && (
                          <p className="flex items-center gap-1 mt-1.5 text-xs text-rose-500">
                            <AlertCircle className="w-3.5 h-3.5" />{errors.email.message}
                          </p>
                        )}
                      </div>

                      {/* Service */}
                      <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                          Service of Interest <span className="text-slate-400 font-normal">(optional)</span>
                        </label>
                        <div className="relative">
                          <select
                            {...register("service")}
                            className="w-full appearance-none px-4 py-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 dark:focus:border-blue-500 transition-all"
                          >
                            <option value="">Select a service…</option>
                            {SERVICES.map((s) => (
                              <option key={s.id} value={s.id}>{s.title}</option>
                            ))}
                          </select>
                          <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                        </div>
                      </div>

                      {/* Message */}
                      <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                          Message <span className="text-rose-500">*</span>
                        </label>
                        <textarea
                          {...register("message")}
                          rows={4}
                          placeholder="Describe your health concern, question, or what you'd like help with…"
                          className={cn(
                            "w-full px-4 py-2.5 rounded-xl border bg-white dark:bg-white/5 text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 transition-all resize-none",
                            errors.message
                              ? "border-rose-300 dark:border-rose-500/50 focus:ring-rose-500/30"
                              : "border-slate-200 dark:border-white/10 focus:ring-blue-500/30 focus:border-blue-400 dark:focus:border-blue-500"
                          )}
                        />
                        {errors.message && (
                          <p className="flex items-center gap-1 mt-1.5 text-xs text-rose-500">
                            <AlertCircle className="w-3.5 h-3.5" />{errors.message.message}
                          </p>
                        )}
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full flex items-center justify-center gap-2.5 px-6 py-3.5 text-base font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl hover:shadow-lg hover:shadow-blue-500/25 hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0 transition-all"
                      >
                        {isSubmitting ? (
                          <>
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                              className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full"
                            />
                            Sending…
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4" /> Send Message
                          </>
                        )}
                      </button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </AnimatedSection>

            {/* Right sidebar */}
            <AnimatedSection className="lg:col-span-2 space-y-5" delay={0.1}>
              {/* Business Hours */}
              <div className="p-6 rounded-2xl bg-slate-50 dark:bg-white/3 border border-slate-100 dark:border-white/8">
                <div className="flex items-center gap-2.5 mb-5">
                  <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-white" strokeWidth={1.8} />
                  </div>
                  <h3 className="font-display font-semibold text-slate-900 dark:text-white">Business Hours</h3>
                </div>
                <div className="space-y-3">
                  {hours.map(({ day, hours: h, open }) => (
                    <div key={day} className="flex items-center justify-between text-sm">
                      <span className="text-slate-500 dark:text-slate-400">{day}</span>
                      <div className="flex items-center gap-2">
                        <span className={`w-1.5 h-1.5 rounded-full ${open ? "bg-emerald-500" : "bg-slate-300"}`} />
                        <span className="font-medium text-slate-700 dark:text-slate-200">{h}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Location */}
              <div className="p-6 rounded-2xl bg-slate-50 dark:bg-white/3 border border-slate-100 dark:border-white/8">
                <div className="flex items-center gap-2.5 mb-4">
                  <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-rose-500 to-pink-600 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-white" strokeWidth={1.8} />
                  </div>
                  <h3 className="font-display font-semibold text-slate-900 dark:text-white">Find Us</h3>
                </div>
                {/* Map placeholder */}
                <div className="w-full h-36 rounded-xl bg-gradient-to-br from-slate-100 to-slate-200 dark:from-white/5 dark:to-white/10 flex flex-col items-center justify-center mb-4 border border-slate-200 dark:border-white/10 overflow-hidden relative">
                  <div className="absolute inset-0 animated-grid opacity-30" />
                  <MapPin className="w-8 h-8 text-blue-500 mb-2 relative" />
                  <span className="text-xs text-slate-500 dark:text-slate-400 relative">Choudhary Nagar, Jalna</span>
                  <a
                    href={`https://maps.google.com/?q=Choudhary+Nagar+Jalna+Maharashtra`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 text-xs font-medium text-blue-600 dark:text-blue-400 hover:underline relative"
                  >
                    Open in Google Maps →
                  </a>
                </div>
                <p className="text-sm text-slate-500 dark:text-slate-400">{SITE_CONFIG.address}</p>
              </div>

              {/* WhatsApp CTA */}
              <a
                href={SITE_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 rounded-2xl bg-gradient-to-r from-green-500 to-teal-500 text-white hover:shadow-lg hover:shadow-green-500/25 hover:-translate-y-1 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-display font-semibold text-sm">WhatsApp Consultation</p>
                  <p className="text-green-100 text-xs mt-0.5">Fastest way to reach us. Usually responds in minutes.</p>
                </div>
              </a>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}

"use client";
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  Search, Filter, Tag, ShieldAlert, MessageCircle, ArrowRight,
  Pill, Heart, Leaf, Activity, Plus, Star, BadgePercent,
} from "lucide-react";
import { MEDICINES, MEDICINE_CATEGORIES, SITE_CONFIG } from "@/constants";
import { AnimatedSection, StaggerContainer, staggerItem } from "@/components/animations/AnimatedSection";
import { CTASection } from "@/components/sections/CTASection";
import { cn } from "@/lib/utils";

const tagColors: Record<string, string> = {
  "Best Seller": "bg-blue-50 dark:bg-blue-500/15 text-blue-600 dark:text-blue-400",
  "Popular": "bg-violet-50 dark:bg-violet-500/15 text-violet-600 dark:text-violet-400",
  "Best Value": "bg-emerald-50 dark:bg-emerald-500/15 text-emerald-600 dark:text-emerald-400",
  "Cardio Care": "bg-rose-50 dark:bg-rose-500/15 text-rose-600 dark:text-rose-400",
  "Wellness": "bg-teal-50 dark:bg-teal-500/15 text-teal-600 dark:text-teal-400",
  "OTC": "bg-amber-50 dark:bg-amber-500/15 text-amber-600 dark:text-amber-400",
  "Diagnostic": "bg-sky-50 dark:bg-sky-500/15 text-sky-600 dark:text-sky-400",
  "Daily Health": "bg-indigo-50 dark:bg-indigo-500/15 text-indigo-600 dark:text-indigo-400",
  "Ayurvedic": "bg-green-50 dark:bg-green-500/15 text-green-600 dark:text-green-400",
  "Respiratory": "bg-cyan-50 dark:bg-cyan-500/15 text-cyan-600 dark:text-cyan-400",
};

export function MedicinesClient() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    return MEDICINES.filter((m) => {
      const matchesCat = activeCategory === "all" || m.category === activeCategory;
      const matchesSearch =
        search === "" ||
        m.name.toLowerCase().includes(search.toLowerCase()) ||
        m.condition.toLowerCase().includes(search.toLowerCase());
      return matchesCat && matchesSearch;
    });
  }, [activeCategory, search]);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 bg-gradient-to-b from-slate-50 via-blue-50/20 to-white dark:from-[#060b1a] dark:via-[#060f24] dark:to-[#060b1a] overflow-hidden">
        <div className="absolute inset-0 animated-grid opacity-30 dark:opacity-15" />
        <div className="absolute top-20 left-1/3 w-80 h-80 bg-cyan-400/10 rounded-full blur-3xl animate-blob" />
        <div className="relative container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-500/15 border border-blue-100 dark:border-blue-500/20 text-blue-600 dark:text-blue-400 text-sm font-medium mb-8"
          >
            <Pill className="w-4 h-4" /> Medicines & Wellness Products
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-slate-900 dark:text-white mb-6 leading-tight"
          >
            Quality Medicines,<br /><span className="gradient-text">Expert Guidance</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
            className="max-w-2xl mx-auto text-lg text-slate-500 dark:text-slate-400 leading-relaxed"
          >
            Browse our curated range of medicines, wellness products, and diagnostics.
            Every product comes with expert pharmacist guidance.
          </motion.p>
        </div>
      </section>

      {/* Disclaimer */}
      <div className="bg-amber-50 dark:bg-amber-500/10 border-b border-amber-100 dark:border-amber-500/20">
        <div className="container-custom py-3 flex items-start gap-2.5 text-sm text-amber-700 dark:text-amber-400">
          <ShieldAlert className="w-4 h-4 flex-shrink-0 mt-0.5" />
          <span>
            <strong>Prescription Required:</strong> Items marked <strong>Rx</strong> require a valid prescription from a registered medical practitioner. All prescription medicines are dispensed only upon verification. Prices shown are indicative — contact us for current availability and pricing.
          </span>
        </div>
      </div>

      {/* Catalog */}
      <section className="section-padding bg-white dark:bg-[#060b1a]">
        <div className="container-custom">
          {/* Search & Filter Bar */}
          <AnimatedSection className="mb-10">
            <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
              {/* Search */}
              <div className="relative w-full md:max-w-xs">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search medicines or conditions…"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/40 transition-all"
                />
              </div>

              {/* Request availability CTA */}
              <a
                href={SITE_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl hover:shadow-lg hover:shadow-blue-500/25 hover:-translate-y-0.5 transition-all whitespace-nowrap"
              >
                <MessageCircle className="w-4 h-4" />
                Request Availability
              </a>
            </div>

            {/* Category pills */}
            <div className="flex flex-wrap gap-2 mt-5">
              {MEDICINE_CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={cn(
                    "px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 border",
                    activeCategory === cat.id
                      ? "bg-blue-600 text-white border-blue-600 shadow-lg shadow-blue-500/25"
                      : "bg-white dark:bg-white/5 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-white/10 hover:border-blue-300 dark:hover:border-blue-500/30"
                  )}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </AnimatedSection>

          {/* Results count */}
          <AnimatedSection className="mb-6" delay={0.05}>
            <p className="text-sm text-slate-400 dark:text-slate-500">
              Showing <span className="font-semibold text-slate-700 dark:text-slate-300">{filtered.length}</span> products
              {activeCategory !== "all" && ` in ${MEDICINE_CATEGORIES.find(c => c.id === activeCategory)?.label}`}
              {search && ` matching "${search}"`}
            </p>
          </AnimatedSection>

          {/* Products Grid */}
          <AnimatePresence mode="wait">
            {filtered.length > 0 ? (
              <StaggerContainer
                key={`${activeCategory}-${search}`}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
                staggerDelay={0.06}
              >
                {filtered.map((med) => (
                  <motion.div
                    key={med.id}
                    variants={staggerItem}
                    className="group relative flex flex-col p-5 rounded-2xl bg-slate-50 dark:bg-white/3 border border-slate-100 dark:border-white/8 hover:border-blue-200 dark:hover:border-blue-500/20 hover:shadow-xl hover:shadow-blue-500/8 transition-all duration-300 hover:-translate-y-1.5"
                  >
                    {/* Discount badge */}
                    {med.discount > 0 && (
                      <div className="absolute -top-2 -right-2 w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-full flex flex-col items-center justify-center text-white shadow-lg">
                        <span className="text-[9px] font-bold leading-none">{med.discount}%</span>
                        <span className="text-[8px] opacity-80">OFF</span>
                      </div>
                    )}

                    {/* Category icon placeholder */}
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/15 to-cyan-500/15 dark:from-blue-500/20 dark:to-cyan-500/20 flex items-center justify-center mb-4">
                      <Pill className="w-6 h-6 text-blue-500 dark:text-blue-400" strokeWidth={1.5} />
                    </div>

                    {/* Tag */}
                    <div className="flex items-center gap-2 mb-2">
                      <span className={cn("px-2 py-0.5 rounded-md text-xs font-medium", tagColors[med.tag] || "bg-slate-100 dark:bg-white/10 text-slate-500 dark:text-slate-400")}>
                        {med.tag}
                      </span>
                      {med.rxRequired && (
                        <span className="px-2 py-0.5 rounded-md text-xs font-bold bg-rose-50 dark:bg-rose-500/15 text-rose-600 dark:text-rose-400 border border-rose-100 dark:border-rose-500/20">
                          Rx
                        </span>
                      )}
                    </div>

                    <h3 className="font-display font-semibold text-slate-900 dark:text-white text-base mb-1 leading-snug">
                      {med.name}
                    </h3>
                    <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed mb-1 flex-1">
                      {med.description}
                    </p>
                    <p className="text-xs text-blue-500 dark:text-blue-400 font-medium mb-3">
                      For: {med.condition}
                    </p>

                    {/* Price */}
                    <div className="flex items-end justify-between mt-auto pt-3 border-t border-slate-100 dark:border-white/8">
                      <div>
                        <div className="flex items-center gap-1.5">
                          <span className="font-display font-bold text-lg text-slate-900 dark:text-white">₹{med.price}</span>
                          <span className="text-xs text-slate-400 line-through">₹{med.mrp}</span>
                        </div>
                        <span className="text-xs text-emerald-600 dark:text-emerald-400 font-medium">
                          Save ₹{med.mrp - med.price}
                        </span>
                      </div>
                      <a
                        href={SITE_CONFIG.whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 px-3 py-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-500/30 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-500/10 transition-all"
                      >
                        Order <ArrowRight className="w-3 h-3" />
                      </a>
                    </div>
                  </motion.div>
                ))}
              </StaggerContainer>
            ) : (
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-20"
              >
                <Search className="w-12 h-12 text-slate-300 dark:text-slate-600 mx-auto mb-4" />
                <p className="text-lg font-medium text-slate-500 dark:text-slate-400 mb-2">No products found</p>
                <p className="text-sm text-slate-400 dark:text-slate-500 mb-6">
                  Try a different search term or category, or request availability via WhatsApp.
                </p>
                <a
                  href={SITE_CONFIG.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl hover:shadow-lg hover:-translate-y-0.5 transition-all"
                >
                  <MessageCircle className="w-4 h-4" /> Request via WhatsApp
                </a>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Request availability note */}
          <AnimatedSection className="mt-16" delay={0.1}>
            <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-500/10 dark:to-cyan-500/10 border border-blue-100 dark:border-blue-500/20 flex flex-col md:flex-row items-center gap-6">
              <div className="flex-1">
                <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white mb-2">
                  Can't find what you need?
                </h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                  Our product catalog represents our most popular items. We stock 1000+ medicines.
                  WhatsApp us with your prescription or medicine name for availability and pricing.
                </p>
              </div>
              <a
                href={SITE_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl hover:shadow-lg hover:shadow-blue-500/25 hover:-translate-y-0.5 transition-all whitespace-nowrap flex-shrink-0"
              >
                <MessageCircle className="w-4 h-4" />
                Request Availability
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <CTASection />
    </>
  );
}

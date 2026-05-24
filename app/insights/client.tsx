"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Clock, Tag, ArrowRight, BookOpen } from "lucide-react";
import { BLOG_POSTS } from "@/constants";
import { AnimatedSection, StaggerContainer, staggerItem } from "@/components/animations/AnimatedSection";
import { CTASection } from "@/components/sections/CTASection";

const categoryColors: Record<string, string> = {
  "Clinical Pharmacology": "bg-blue-50 dark:bg-blue-500/15 text-blue-600 dark:text-blue-400",
  "Diabetes Care": "bg-teal-50 dark:bg-teal-500/15 text-teal-600 dark:text-teal-400",
  "Patient Education": "bg-violet-50 dark:bg-violet-500/15 text-violet-600 dark:text-violet-400",
  "NCD Care": "bg-rose-50 dark:bg-rose-500/15 text-rose-600 dark:text-rose-400",
};

export function InsightsClient() {
  const featured = BLOG_POSTS.find((p) => p.featured);
  const rest = BLOG_POSTS.filter((p) => !p.featured);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 bg-gradient-to-b from-slate-50 via-blue-50/20 to-white dark:from-[#060b1a] dark:via-[#060f24] dark:to-[#060b1a] overflow-hidden">
        <div className="absolute inset-0 animated-grid opacity-30 dark:opacity-15" />
        <div className="absolute top-20 right-1/3 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl animate-blob" />
        <div className="relative container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-500/15 border border-blue-100 dark:border-blue-500/20 text-blue-600 dark:text-blue-400 text-sm font-medium mb-8"
          >
            <BookOpen className="w-4 h-4" /> Clinical Knowledge Center
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-slate-900 dark:text-white mb-6 leading-tight"
          >
            Health Insights &<br /><span className="gradient-text">Clinical Articles</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
            className="max-w-2xl mx-auto text-lg text-slate-500 dark:text-slate-400 leading-relaxed"
          >
            Evidence-based articles on clinical pharmacology, disease management, and patient education
            — written by our team of clinical pharmacists.
          </motion.p>
        </div>
      </section>

      <section className="section-padding bg-white dark:bg-[#060b1a]">
        <div className="container-custom">
          {/* Featured Article */}
          {featured && (
            <AnimatedSection className="mb-14">
              <Link href={`/insights/${featured.id}`}>
                <div className="group relative p-8 md:p-12 rounded-3xl bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-600 text-white overflow-hidden hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-500 hover:-translate-y-1">
                  <div className="absolute inset-0 animated-grid opacity-10" />
                  <div className="absolute -top-20 -right-20 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
                  <div className="relative">
                    <div className="flex flex-wrap items-center gap-3 mb-5">
                      <span className="px-3 py-1 rounded-full bg-white/20 text-white text-xs font-semibold border border-white/30">
                        ⭐ Featured Article
                      </span>
                      <span className="px-3 py-1 rounded-full bg-white/15 text-blue-100 text-xs font-medium">
                        {featured.category}
                      </span>
                    </div>
                    <h2 className="font-display font-bold text-2xl md:text-4xl text-white mb-4 leading-tight max-w-3xl group-hover:text-blue-100 transition-colors">
                      {featured.title}
                    </h2>
                    <p className="text-blue-100 text-base md:text-lg leading-relaxed mb-6 max-w-2xl">
                      {featured.excerpt}
                    </p>
                    <div className="flex flex-wrap items-center gap-4">
                      <div className="flex items-center gap-2 text-blue-200 text-sm">
                        <Clock className="w-4 h-4" />{featured.readTime}
                      </div>
                      <span className="text-blue-200 text-sm">{featured.date}</span>
                      <div className="flex gap-2">
                        {featured.tags.slice(0, 3).map((tag) => (
                          <span key={tag} className="px-2 py-0.5 rounded-md bg-white/15 text-blue-100 text-xs">{tag}</span>
                        ))}
                      </div>
                    </div>
                    <div className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 bg-white text-blue-600 font-semibold rounded-xl text-sm group-hover:shadow-lg transition-all">
                      Read Full Article <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          )}

          {/* Other Articles */}
          <AnimatedSection className="mb-8">
            <h2 className="font-display font-bold text-2xl text-slate-900 dark:text-white">More Articles</h2>
          </AnimatedSection>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.08}>
            {rest.map((post) => (
              <motion.div key={post.id} variants={staggerItem}>
                <Link href={`/insights/${post.id}`} className="block h-full">
                  <div className="group h-full p-6 rounded-2xl bg-slate-50 dark:bg-white/3 border border-slate-100 dark:border-white/8 hover:border-blue-200 dark:hover:border-blue-500/20 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 hover:-translate-y-2 flex flex-col">
                    <div className="flex items-center gap-2 mb-4">
                      <span className={`px-2.5 py-1 rounded-lg text-xs font-medium ${categoryColors[post.category] || "bg-slate-100 text-slate-500"}`}>
                        {post.category}
                      </span>
                    </div>
                    <h3 className="font-display font-bold text-slate-900 dark:text-white text-lg mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-snug flex-1">
                      {post.title}
                    </h3>
                    <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {post.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-slate-100 dark:bg-white/5 text-slate-500 dark:text-slate-400 text-xs">
                          <Tag className="w-2.5 h-2.5" />{tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-white/8 mt-auto">
                      <span className="text-xs text-slate-400">{post.date}</span>
                      <span className="flex items-center gap-1 text-xs text-slate-400">
                        <Clock className="w-3 h-3" />{post.readTime}
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <CTASection />
    </>
  );
}

"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Tag } from "lucide-react";
import { BLOG_POSTS } from "@/constants";
import { AnimatedSection, StaggerContainer, staggerItem } from "@/components/animations/AnimatedSection";
export function BlogPreviewSection() {
  return (
    <section className="section-padding bg-white dark:bg-[#060b1a]">
      <div className="container-custom">
        <AnimatedSection className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-12">
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 text-sm font-medium border border-blue-100 dark:border-blue-500/20 mb-4">Health Insights</span>
            <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-slate-900 dark:text-white">Clinical Knowledge <span className="gradient-text">Center</span></h2>
          </div>
          <Link href="/insights" className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium hover:gap-3 transition-all text-sm flex-shrink-0">
            View All Articles <ArrowRight className="w-4 h-4" />
          </Link>
        </AnimatedSection>
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.08}>
          {BLOG_POSTS.map((post, i) => (
            <motion.div key={post.id} variants={staggerItem} className={i === 0 ? "md:col-span-2 lg:col-span-2" : ""}>
              <Link href={`/insights/${post.id}`} className="block h-full">
                <div className={`h-full p-6 rounded-2xl bg-slate-50 dark:bg-white/3 border border-slate-100 dark:border-white/8 hover:border-blue-200 dark:hover:border-blue-500/20 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 hover:-translate-y-2 ${i === 0 ? "flex flex-col" : ""}`}>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-2.5 py-1 rounded-lg bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-medium">{post.category}</span>
                    {post.featured && <span className="px-2.5 py-1 rounded-lg bg-amber-50 dark:bg-amber-500/10 text-amber-600 dark:text-amber-400 text-xs font-medium">Featured</span>}
                  </div>
                  <h3 className={`font-display font-bold text-slate-900 dark:text-white mb-3 hover:text-blue-600 dark:hover:text-blue-400 transition-colors leading-snug ${i === 0 ? "text-xl md:text-2xl flex-1" : "text-base"}`}>{post.title}</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-slate-100 dark:bg-white/5 text-slate-500 dark:text-slate-400 text-xs">
                        <Tag className="w-2.5 h-2.5" />{tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-white/8">
                    <span className="text-xs text-slate-400">{post.date}</span>
                    <span className="flex items-center gap-1 text-xs text-slate-400"><Clock className="w-3 h-3" />{post.readTime}</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

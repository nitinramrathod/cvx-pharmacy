"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Clock, Tag, ArrowLeft, Share2, MessageCircle, BookOpen, ArrowRight } from "lucide-react";
import { BLOG_POSTS, FEATURED_ARTICLE_CONTENT, SITE_CONFIG } from "@/constants";
import { AnimatedSection } from "@/components/animations/AnimatedSection";
import { CTASection } from "@/components/sections/CTASection";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  author: string;
  featured: boolean;
  tags: string[];
}

function ReadingProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const update = () => {
      const el = document.documentElement;
      const scrolled = el.scrollTop;
      const total = el.scrollHeight - el.clientHeight;
      setProgress(total > 0 ? (scrolled / total) * 100 : 0);
    };
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  return (
    <div className="fixed top-[3px] left-0 right-0 h-1 bg-slate-200/50 dark:bg-white/10 z-[99]">
      <motion.div
        className="h-full bg-gradient-to-r from-cyan-400 to-blue-500"
        style={{ width: `${progress}%` }}
        transition={{ duration: 0.1 }}
      />
    </div>
  );
}

export function ArticleClient({ post }: { post: BlogPost }) {
  const isFeatured = post.id === "streptokinase-vs-alteplase";
  const related = BLOG_POSTS.filter((p) => p.id !== post.id).slice(0, 3);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({ title: post.title, url: window.location.href });
    } else {
      navigator.clipboard.writeText(window.location.href);
    }
  };

  return (
    <>
      <ReadingProgress />

      {/* Hero */}
      <section className="relative pt-28 pb-12 bg-gradient-to-b from-slate-50 via-blue-50/20 to-white dark:from-[#060b1a] dark:via-[#060f24] dark:to-[#060b1a] overflow-hidden">
        <div className="absolute inset-0 animated-grid opacity-20 dark:opacity-10" />
        <div className="absolute top-10 right-1/3 w-80 h-80 bg-blue-400/8 rounded-full blur-3xl" />
        <div className="relative container-custom max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Link href="/insights" className="inline-flex items-center gap-2 text-sm text-blue-600 dark:text-blue-400 hover:gap-3 transition-all mb-6">
              <ArrowLeft className="w-4 h-4" /> Back to Insights
            </Link>

            <div className="flex flex-wrap items-center gap-2 mb-5">
              <span className="px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-500/15 text-blue-600 dark:text-blue-400 text-xs font-medium border border-blue-100 dark:border-blue-500/20">
                {post.category}
              </span>
              {post.featured && (
                <span className="px-3 py-1 rounded-full bg-amber-50 dark:bg-amber-500/15 text-amber-600 dark:text-amber-400 text-xs font-medium border border-amber-100 dark:border-amber-500/20">
                  ⭐ Featured
                </span>
              )}
            </div>

            <h1 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-slate-900 dark:text-white mb-5 leading-tight">
              {post.title}
            </h1>

            <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed mb-6">{post.excerpt}</p>

            <div className="flex flex-wrap items-center gap-5 text-sm text-slate-500 dark:text-slate-400 mb-6">
              <div className="flex items-center gap-1.5">
                <BookOpen className="w-4 h-4" />{post.author}
              </div>
              <span>{post.date}</span>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />{post.readTime}
              </div>
              <button onClick={handleShare}
                className="flex items-center gap-1.5 text-blue-600 dark:text-blue-400 hover:underline">
                <Share2 className="w-4 h-4" /> Share
              </button>
            </div>

            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span key={tag} className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-white/5 text-slate-500 dark:text-slate-400 text-xs">
                  <Tag className="w-3 h-3" />{tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Body */}
      <section className="py-12 bg-white dark:bg-[#060b1a]">
        <div className="container-custom max-w-4xl">
          {isFeatured ? (
            <FeaturedArticleBody />
          ) : (
            <GenericArticleBody post={post} />
          )}
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-16 bg-slate-50 dark:bg-[#060f1f]">
        <div className="container-custom">
          <AnimatedSection className="mb-8">
            <h2 className="font-display font-bold text-2xl text-slate-900 dark:text-white">Related Articles</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {related.map((p, i) => (
              <AnimatedSection key={p.id} delay={i * 0.1}>
                <Link href={`/insights/${p.id}`}>
                  <div className="group h-full p-6 rounded-2xl bg-white dark:bg-white/3 border border-slate-100 dark:border-white/8 hover:border-blue-200 dark:hover:border-blue-500/20 hover:shadow-lg transition-all hover:-translate-y-1">
                    <span className="text-xs text-blue-500 dark:text-blue-400 font-medium">{p.category}</span>
                    <h3 className="font-display font-semibold text-slate-900 dark:text-white text-base mt-2 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-snug">{p.title}</h3>
                    <p className="text-slate-400 text-xs flex items-center gap-1.5"><Clock className="w-3 h-3" />{p.readTime}</p>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}

function FeaturedArticleBody() {
  const a = FEATURED_ARTICLE_CONTENT;
  return (
    <article className="prose-custom">
      <AnimatedSection>
        <div className="p-6 rounded-2xl bg-blue-50 dark:bg-blue-500/10 border border-blue-100 dark:border-blue-500/20 mb-10">
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base">{a.introduction}</p>
        </div>
      </AnimatedSection>

      {a.sections.map((sec, i) => (
        <AnimatedSection key={i} delay={i * 0.05} className="mb-10">
          <h2 className="font-display font-bold text-xl md:text-2xl text-slate-900 dark:text-white mb-4 flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 text-white text-sm font-bold flex items-center justify-center flex-shrink-0">
              {i + 1}
            </span>
            {sec.heading}
          </h2>
          {sec.content.split("\n\n").map((para, pi) => (
            <p key={pi} className="text-slate-600 dark:text-slate-300 leading-relaxed mb-3 text-base">{para}</p>
          ))}
        </AnimatedSection>
      ))}

      {/* Comparison Table */}
      <AnimatedSection className="mb-10">
        <h2 className="font-display font-bold text-xl md:text-2xl text-slate-900 dark:text-white mb-6">
          Quick Comparison: Streptokinase vs Alteplase
        </h2>
        <div className="overflow-x-auto rounded-2xl border border-slate-100 dark:border-white/8">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
                <th className="px-4 py-3 text-left font-semibold">Feature</th>
                <th className="px-4 py-3 text-left font-semibold">Streptokinase</th>
                <th className="px-4 py-3 text-left font-semibold">Alteplase (rt-PA)</th>
              </tr>
            </thead>
            <tbody>
              {a.keyComparison.map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white dark:bg-white/2" : "bg-slate-50 dark:bg-white/4"}>
                  <td className="px-4 py-3 font-medium text-slate-700 dark:text-slate-200 border-b border-slate-100 dark:border-white/5">{row.feature}</td>
                  <td className="px-4 py-3 text-slate-600 dark:text-slate-300 border-b border-slate-100 dark:border-white/5">{row.streptokinase}</td>
                  <td className="px-4 py-3 text-slate-600 dark:text-slate-300 border-b border-slate-100 dark:border-white/5">{row.alteplase}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </AnimatedSection>

      {/* Conclusion */}
      <AnimatedSection>
        <div className="p-6 rounded-2xl bg-slate-50 dark:bg-white/3 border border-slate-100 dark:border-white/8">
          <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white mb-3">Conclusion</h3>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{a.conclusion}</p>
        </div>
      </AnimatedSection>

      {/* Pharmacist note */}
      <AnimatedSection className="mt-8">
        <div className="flex gap-4 p-6 rounded-2xl bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-500/10 dark:to-cyan-500/10 border border-blue-100 dark:border-blue-500/20">
          <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
            <span className="text-white text-lg">💊</span>
          </div>
          <div>
            <p className="font-semibold text-slate-900 dark:text-white text-sm mb-1">CVX Pharmacy Clinical Note</p>
            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
              This article is for educational purposes. If you or a loved one has a history of cardiac events, speak with our clinical pharmacist about your secondary prevention medication regimen during your next visit or via WhatsApp.
            </p>
            <a href={SITE_CONFIG.whatsappUrl} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 mt-3 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline">
              <MessageCircle className="w-3.5 h-3.5" /> Chat with our pharmacist
            </a>
          </div>
        </div>
      </AnimatedSection>
    </article>
  );
}

function GenericArticleBody({ post }: { post: BlogPost }) {
  const bodies: Record<string, string[]> = {
    "diabetes-medication-adherence": [
      "Medication adherence — defined as the extent to which a patient takes medications as prescribed — is arguably the single most impactful modifiable factor in diabetes management. Studies show that only 50% of patients with Type 2 Diabetes adhere to their medication regimens long-term.",
      "Non-adherence in diabetes is associated with poor glycemic control (elevated HbA1c), increased risk of diabetic complications (neuropathy, nephropathy, retinopathy), higher rates of hospitalizations, and significantly increased healthcare costs.",
      "Common barriers to adherence include forgetfulness, complex medication regimens, side effects (especially GI symptoms with metformin), cost concerns, and the asymptomatic nature of hyperglycemia — patients often don't 'feel' the difference when they miss doses.",
      "Practical strategies to improve adherence include: linking medications to daily habits (meals, bedtime), using pill organizers, setting phone reminders, simplifying regimens through once-daily formulations, regular follow-up with a clinical pharmacist, and open discussions about side effects.",
      "At CVX Pharmacy, our Medication Therapy Management program specifically addresses adherence barriers. We conduct comprehensive adherence assessments and develop personalized strategies to help each patient achieve consistent medication use — and ultimately better HbA1c targets.",
    ],
    "rational-medicine-use": [
      "Rational use of medicines, as defined by the WHO, means that patients receive medications appropriate to their clinical needs, in doses that meet their individual requirements, for an adequate period of time, and at the lowest cost to them and their community.",
      "Irrational use of medicines is a widespread global problem. It manifests as polypharmacy (too many medications), use of antibiotics for viral infections, overuse of injections, inappropriate self-medication, and failure to prescribe in accordance with clinical guidelines.",
      "The consequences of irrational medicine use are severe: antimicrobial resistance, adverse drug reactions, drug-drug interactions, treatment failures, medication wastage, and unnecessary financial burden on patients and healthcare systems.",
      "A clinical pharmacist plays a central role in promoting rational medicine use. Through prescription review, medication reconciliation, and patient counseling, we ensure that every medicine prescribed is necessary, effective for the indication, safe for the patient, and administered correctly.",
      "At CVX Pharmacy, we apply the principles of rational medicine use in every patient interaction. Our pharmacists are trained to identify unnecessary medications, flag inappropriate prescribing, recommend cost-effective alternatives (including quality generics), and educate patients on proper use.",
    ],
    "hypertension-silent-killer": [
      "Hypertension — elevated blood pressure persistently above 130/80 mmHg — is called the 'silent killer' because it causes no symptoms in most people yet silently damages blood vessels, the heart, kidneys, and brain over years. In India, approximately 30% of adults have hypertension, and a significant proportion remain undiagnosed.",
      "The consequences of uncontrolled hypertension are devastating: it is the leading risk factor for stroke, the primary cause of heart failure and coronary artery disease, and a major contributor to chronic kidney disease. The global burden of hypertension-related deaths is staggering.",
      "Current JNC 8 and ACC/AHA guidelines recommend lifestyle modifications as first-line therapy: dietary sodium restriction (<2.3g/day), the DASH diet (rich in fruits, vegetables, and low-fat dairy), regular aerobic exercise (150 min/week), weight management, smoking cessation, and alcohol moderation.",
      "Pharmacological management includes multiple drug classes: ACE inhibitors (ramipril, enalapril), ARBs (losartan, telmisartan), calcium channel blockers (amlodipine), and thiazide diuretics (hydrochlorothiazide). Choice depends on comorbidities — ACE inhibitors/ARBs are preferred in diabetics and CKD; beta-blockers are indicated post-MI.",
      "Medication adherence is critical in hypertension management. A clinical pharmacist can help ensure optimal drug selection, monitor for side effects, counsel on lifestyle measures, and conduct regular blood pressure monitoring. At CVX Pharmacy, our NCD Care Program provides comprehensive hypertension management including home BP monitoring guidance and medication optimization.",
    ],
  };

  const paragraphs = bodies[post.id] || [
    "This clinical article is currently being developed by our team of pharmacists. Check back soon for the full evidence-based content.",
    "In the meantime, feel free to contact CVX Pharmacy for personalized guidance on this topic. Our clinical pharmacists are available to answer your questions via WhatsApp or in-person consultation.",
  ];

  return (
    <article>
      {paragraphs.map((para, i) => (
        <AnimatedSection key={i} delay={i * 0.07} className="mb-6">
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base">{para}</p>
        </AnimatedSection>
      ))}
      <AnimatedSection className="mt-8">
        <div className="flex gap-4 p-6 rounded-2xl bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-500/10 dark:to-cyan-500/10 border border-blue-100 dark:border-blue-500/20">
          <div>
            <p className="font-semibold text-slate-900 dark:text-white text-sm mb-1">Need personalized guidance?</p>
            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-3">
              Speak with our clinical pharmacist at CVX Pharmacy for evidence-based advice tailored to your specific situation.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href={SITE_CONFIG.whatsappUrl} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg hover:-translate-y-0.5 transition-all">
                <MessageCircle className="w-3.5 h-3.5" /> WhatsApp Us
              </a>
              <Link href="/contact"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-500/30 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-500/10 transition-all">
                Book Consultation <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </article>
  );
}

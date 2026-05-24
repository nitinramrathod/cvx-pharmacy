"use client";
import { motion } from "framer-motion";
import { Users, Activity, Heart, Package } from "lucide-react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { STATS } from "@/constants";
const iconMap: Record<string, React.ElementType> = { Users, Activity, Heart, Package };
export function StatsSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  return (
    <section className="relative py-16 bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600 overflow-hidden">
      <div className="absolute inset-0 animated-grid opacity-20" />
      <div ref={ref} className="relative container-custom">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {STATS.map((stat, i) => {
            const Icon = iconMap[stat.icon] || Activity;
            return (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="text-center text-white">
                <div className="flex justify-center mb-3">
                  <div className="w-12 h-12 rounded-2xl bg-white/15 flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                </div>
                <div className="font-display font-bold text-4xl md:text-5xl mb-1">
                  {inView ? <CountUp start={0} end={stat.value} duration={2.5} separator="," suffix={stat.suffix} /> : `0${stat.suffix}`}
                </div>
                <p className="text-blue-100 text-sm font-medium">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

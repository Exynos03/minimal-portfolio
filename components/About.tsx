"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      id="about"
      className="scroll-mt-16"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/0 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest lg:sr-only">
          About
        </h2>
      </div>
      <div className="flex flex-col gap-4">
        <p className="text-start text-muted-foreground lg:px-6">
          I am a <span className="font-bold dark:text-white text-customBlack">product minded Frontend Engineer</span> who thrives on ownership.
          Currently at <span className="font-bold dark:text-white text-customBlack">GammaStack</span>, I spearheaded the migration of a major iGaming platform to Next.js, supporting 6k+ concurrent users.
          I also engineered a Micro-Frontend Web Builder that slashed client onboarding by 98%.
        </p>
        <p className="text-start text-muted-foreground lg:px-6">
          Previously at <span className="font-bold dark:text-white text-customBlack">Lean Platform Technologies</span>, I built an A/B testing tool from scratch and optimized performance for 3.5K MAU products, cutting API latency by 65%.
          I don&#39;t just write code—I build scalable solutions that drive real business impact.
        </p>
      </div>
    </motion.section>
  );
}

"use client";

import { motion } from "framer-motion";
import { AppStoreBadges } from "@/components/ui/AppStoreBadges";

export function AppDownloadCTA() {
  return (
    <section className="bg-brand-black py-16 md:py-24">
      <div className="relative mx-auto max-w-[1200px] px-4 text-center md:px-6">
        {/* Floating decorations */}
        <div className="pointer-events-none absolute top-4 left-8 text-4xl opacity-20">
          ⚡
        </div>
        <div className="pointer-events-none absolute right-8 bottom-4 text-4xl opacity-20">
          ⚡
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="mb-4 inline-block rounded-full bg-brand-yellow/10 px-4 py-1.5 font-mono text-xs uppercase tracking-widest text-brand-yellow">
            Instant Energy
          </span>

          <h2 className="mx-auto mb-6 max-w-lg font-heading text-3xl font-bold text-white md:text-[40px]">
            Get the App, Get the{" "}
            <em className="not-italic text-brand-yellow">Power.</em>
          </h2>

          <p className="mx-auto mb-12 max-w-md text-gray-400">
            Download Wattl. now to locate stations and rent powerbanks
            instantly. Join the network that keeps you connected anywhere,
            anytime.
          </p>

          {/* Official app store badges */}
          <AppStoreBadges />

          {/* Leaf accent */}
          <div className="pointer-events-none mt-8 text-3xl opacity-15">
            🍃
          </div>
        </motion.div>
      </div>
    </section>
  );
}

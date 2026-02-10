"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { AppStoreBadges } from "@/components/ui/AppStoreBadges";

export function AppDownloadCTA() {
  return (
    <section className="bg-brand-black py-16 md:py-24">
      <div className="relative mx-auto max-w-[1200px] px-4 text-center md:px-6">
        {/* Kookaburra decoration (top-left) */}
        <div className="pointer-events-none absolute top-4 left-8 opacity-35" aria-hidden="true">
          <Image
            src="/images/decorations/kookaburra.png"
            alt=""
            width={72}
            height={72}
            className="h-[4.2rem] w-[4.2rem] object-contain"
          />
        </div>

        {/* Cockatoo decoration (bottom area) */}
        <div className="pointer-events-none absolute right-8 bottom-4 opacity-30" aria-hidden="true">
          <Image
            src="/images/decorations/cockatoo.png"
            alt=""
            width={60}
            height={60}
            className="h-14 w-14 object-contain"
          />
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
        </motion.div>
      </div>
    </section>
  );
}

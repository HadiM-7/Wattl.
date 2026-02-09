"use client";

import { motion } from "framer-motion";

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

          <p className="mx-auto mb-10 max-w-md text-gray-400">
            Download Wattl. now to locate stations and rent powerbanks
            instantly. Join the network that keeps you connected anywhere,
            anytime.
          </p>

          {/* App store badges */}
          <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 text-sm font-semibold text-brand-black shadow-lg transition-shadow hover:shadow-xl"
              aria-label="Download on the App Store"
            >
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M18.71 19.71a1 1 0 001.42-1.42L12.66 7.26a1 1 0 00-1.32 0l-7.47 11.03a1 1 0 001.42 1.42L12 9.41z" />
              </svg>
              <span className="ml-2">App Store</span>
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 text-sm font-semibold text-brand-black shadow-lg transition-shadow hover:shadow-xl"
              aria-label="Get it on Google Play"
            >
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M3.5 19.5h17v-15h-17z" />
              </svg>
              <span className="ml-2">Google Play</span>
            </motion.a>
          </div>

          {/* Leaf accent */}
          <div className="pointer-events-none mt-8 text-3xl opacity-15">
            🍃
          </div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SquigglyDivider } from "@/components/ui/SquigglyDivider";

const steps = [
  {
    emoji: "📱",
    num: 1,
    title: "Scan the QR Code",
    description:
      "Walk up to any Wattl station and scan the QR code. No app download required, just your phone camera.",
    color: "#FFC600",
  },
  {
    emoji: "🔋",
    num: 2,
    title: "Grab & Charge",
    description:
      "A power bank pops out instantly. It comes with built-in Lightning, USB-C, and Micro-USB cables.",
    color: "#38AAD4",
  },
  {
    emoji: "⚡",
    num: 3,
    title: "Stay Powered Up",
    description:
      "High-speed charging at up to 10W output. Most phones get a meaningful boost in just 15–20 minutes.",
    color: "#208334",
  },
  {
    emoji: "🔄",
    num: 4,
    title: "Return Anywhere",
    description:
      "Done charging? Drop the power bank at any station in our network. Simple half-hourly pricing, capped at $20/day.",
    color: "#F4722B",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
};

const stepVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function HowItWorks() {
  return (
    <>
      <section id="how-it-works" className="relative z-10 bg-brand-blue py-16 pb-24 md:py-24 md:pb-32">
        {/* Waratah decoration */}
        <div className="pointer-events-none absolute top-8 right-4 md:right-12" aria-hidden="true">
          <Image
            src="/images/decorations/waratah.png"
            alt=""
            width={120}
            height={120}
            className="h-20 w-20 object-contain md:h-32 md:w-32"
          />
        </div>
        <div className="mx-auto max-w-[700px] px-4 md:px-6">
          <div className="mb-12 text-center">
            <h2
              className="mb-4 font-heading text-white"
              style={{
                fontSize: "clamp(36px, 6vw, 52px)",
                textShadow: "3px 3px 0 #1A1A1A",
              }}
            >
              How It Works<span className="text-brand-yellow">?</span>
            </h2>
            <p className="mx-auto max-w-xl text-white/80">
              Four simple steps to keep your customers connected.
            </p>
          </div>

          {/* Vertical timeline */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="flex flex-col items-center"
          >
            {steps.map((step, i) => (
              <motion.div key={step.num} variants={stepVariants} className="w-full">
                <div className="flex items-start gap-5">
                  {/* Icon circle */}
                  <div
                    className="flex h-[70px] w-[70px] shrink-0 items-center justify-center rounded-full border-3 border-brand-black text-[32px]"
                    style={{
                      backgroundColor: step.color,
                      boxShadow: "4px 4px 0 #1A1A1A",
                    }}
                  >
                    {step.emoji}
                  </div>

                  {/* Content card */}
                  <div
                    className="flex-1 rounded-card border-3 border-brand-black bg-white p-5 transition-all duration-200 hover:-translate-y-1"
                    style={{ boxShadow: `5px 5px 0 ${step.color}` }}
                  >
                    <p className="mb-1 text-[13px] font-[900] uppercase tracking-[3px] text-brand-black/40">
                      Step {step.num}
                    </p>
                    <h3 className="mb-2 font-heading text-xl text-brand-black">
                      {step.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-brand-black/70" style={{ fontWeight: 600 }}>
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Connector line between steps */}
                {i < steps.length - 1 && (
                  <div className="flex justify-start pl-[33px]">
                    <div
                      className="my-2 h-12 w-1 rounded-full bg-white/30"
                    />
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      <div className="relative z-0">
        <SquigglyDivider color="#FFC600" bg="#FFFFF3" />
      </div>
    </>
  );
}

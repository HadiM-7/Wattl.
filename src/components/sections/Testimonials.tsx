"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Star } from "lucide-react";
import { WaveDivider } from "@/components/ui/WaveDivider";

const testimonials = [
  {
    quote:
      "My phone died right before the headliner at Glastonbury. Wattl literally saved my night. Found a station in seconds, grabbed a bank, and captured the entire finale.",
    name: "Sarah Chen",
    location: "Knockout 2025",
    rotate: "-1deg",
  },
  {
    quote:
      "The fast charging is no joke. 15 minutes and the anxiety around my dead phone vanished. It's not just a convenience; it's essential hospitality gear now.",
    name: "Ash Berry",
    location: "Burwood RSL",
    rotate: "1.5deg",
  },
  {
    quote:
      "Lost my group, phone dead, panic setting in. The Wattl station was a beacon in the dark. Charged up, found my friends, and turned a disaster into the best night ever.",
    name: "Phillip Keynes",
    location: "GYG Restaurant",
    rotate: "-0.5deg",
  },
];

const stats = [
  { value: 5, suffix: "+", label: "LOCATIONS" },
  { value: 200, suffix: "+", label: "PHONES SAVED" },
];

function AnimatedCounter({
  target,
  suffix,
}: {
  target: number;
  suffix: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1500;
    const step = Math.max(1, Math.floor(target / 60));
    const interval = duration / (target / step);

    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref} className="font-mono text-4xl font-bold text-brand-blue md:text-5xl">
      {count}
      {suffix}
    </span>
  );
}

export function Testimonials() {
  return (
    <>
      <section className="bg-brand-off-white py-16 md:py-24">
        <div className="mx-auto max-w-[1200px] px-4 md:px-6">
          {/* Leaf accent */}
          <div className="pointer-events-none mb-4 text-3xl opacity-30">
            🍃
          </div>

          <div className="grid gap-12 md:grid-cols-2 md:items-start">
            {/* Left column — text + stats */}
            <div>
              <h2 className="mb-4 font-heading text-3xl font-bold text-brand-blue md:text-[40px]">
                Saved by{" "}
                <span className="text-brand-black">
                  Wattl
                  <span className="text-brand-yellow">.</span>
                </span>
              </h2>
              <p className="mb-10 max-w-md text-gray-600">
                Real stories from those who stayed connected thanks to our
                stations. When the battery drops, we bring the energy.
              </p>

              {/* Stats */}
              <div className="flex flex-col gap-6">
                {stats.map((stat) => (
                  <div key={stat.label} className="flex flex-col">
                    <AnimatedCounter
                      target={stat.value}
                      suffix={stat.suffix}
                    />
                    <span className="mt-1 font-mono text-xs uppercase tracking-widest text-gray-500">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Bird decoration */}
              <div className="pointer-events-none mt-8 text-3xl opacity-20">
                🐦
              </div>
            </div>

            {/* Right column — testimonial cards */}
            <div className="flex flex-col gap-4">
              {testimonials.map((t, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="rounded-card bg-brand-yellow p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  style={{ transform: `rotate(${t.rotate})` }}
                >
                  <div className="mb-3 flex gap-1">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star
                        key={j}
                        className="h-4 w-4 fill-brand-black text-brand-black"
                      />
                    ))}
                  </div>
                  <p className="mb-4 text-sm leading-relaxed text-brand-black/90">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <p className="text-sm font-semibold text-brand-black">
                    — {t.name}
                  </p>
                  <p className="text-xs text-brand-black/60">{t.location}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <WaveDivider topColor="#FFFFF3" bottomColor="#000000" />
    </>
  );
}

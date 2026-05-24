"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Star } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    quote:
      "The fast charging is no joke. 15 minutes and the anxiety around my dead phone vanished. It's not just a convenience; it's essential hospitality gear now.",
    name: "Ash Berry",
    location: "Burwood RSL",
    rotate: "1.5deg",
    shadowColor: "#003CA7",
  },
  {
    quote:
      "Lost my group, phone dead, panic setting in. The Wattl station was a beacon in the dark. Charged up, found my friends, and turned a disaster into the best night ever.",
    name: "Phillip Keynes",
    location: "GYG Restaurant",
    rotate: "-0.5deg",
    shadowColor: "#E88D9D",
  },
  {
    quote:
      "My phone was dying on the course and so too did the vibes and the Bluetooth speaker. Wattl was able to charge both of em in 30 mins. Super handy.",
    name: "Greg Dillinger",
    location: "Macquarie Links Golf Course",
    rotate: "1deg",
    shadowColor: "#208334",
  },
];

const stats = [
  { value: 50, suffix: "+", label: "LOCATIONS" },
  { value: 20000, suffix: "+", label: "PHONES SAVED" },
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
      <section className="bg-brand-off-white pt-12 pb-20 md:pt-16 md:pb-32">
        <div className="mx-auto max-w-[1200px] px-4 md:px-6">
          {/* Parrot accent */}
          <div className="pointer-events-none mb-4" aria-hidden="true">
            <Image
              src="/images/decorations/parrot.png"
              alt=""
              width={120}
              height={120}
              className="h-28 w-28 object-contain md:h-36 md:w-36"
            />
          </div>

          <div className="grid gap-16 md:grid-cols-2 md:items-start">
            {/* Left column — text + stats */}
            <div>
              <h2 className="mb-4 font-heading text-3xl font-bold text-brand-blue md:text-[40px]">
                Saved by{" "}
                <span className="text-brand-black">
                  Wattl
                  <span className="text-brand-yellow">.</span>
                </span>
              </h2>
              <p className="mb-10 max-w-md text-brand-black/70" style={{ fontWeight: 700 }}>
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

              {/* Kookaburra decoration */}
              <div className="pointer-events-none mt-8" aria-hidden="true">
                <Image
                  src="/images/decorations/kookaburra.png"
                  alt=""
                  width={130}
                  height={130}
                  className="h-28 w-28 object-contain md:h-36 md:w-36"
                />
              </div>
            </div>

            {/* Right column — testimonial cards */}
            <div className="relative flex flex-col gap-6">
              {/* Kangaroo accent behind cards */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="pointer-events-none absolute -top-8 -left-4"
                aria-hidden="true"
              >
                <Image
                  src="/images/decorations/kangaroo.png"
                  alt=""
                  width={120}
                  height={120}
                  className="h-[9rem] w-[9rem] object-contain"
                />
              </motion.div>
              {testimonials.map((t, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="relative rounded-card border-3 border-brand-black bg-brand-yellow p-6 transition-all duration-300 hover:-translate-y-1"
                  style={{
                    transform: `rotate(${t.rotate})`,
                    boxShadow: `5px 5px 0 ${t.shadowColor}`,
                  }}
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
                    {t.name}
                  </p>
                  <p className="text-xs text-brand-black/60">{t.location}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

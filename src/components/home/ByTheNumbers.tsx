"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const stats = [
  { value: 2011, suffix: "", label: "Year Founded", description: "Planted in Columbus, OH" },
  { value: 5, suffix: "+", label: "Home Groups", description: "Meeting weekly throughout the week" },
  { value: 10, suffix: "", label: "Sunday at 10am", description: "Every week at the 4-H Center" },
  { value: 40, suffix: "+", label: "Sermons in Archive", description: "Verse-by-verse through Scripture" },
];

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const end = value;
    const duration = 1800;
    const step = Math.ceil(end / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function ByTheNumbers() {
  return (
    <section className="py-20 bg-brand-dark border-t border-white/5">
      <div className="container-hope">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-label text-white/60 text-center mb-14"
        >
          By the Numbers
        </motion.p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-brand-dark p-10 text-center"
            >
              <p className="font-serif text-white mb-2" style={{ fontSize: "clamp(2.5rem, 5vw, 3.5rem)", lineHeight: 1.1 }}>
                <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="font-sans text-xs font-semibold tracking-widest uppercase text-white/60 mb-2">
                {stat.label}
              </p>
              <p className="font-sans text-xs text-white/40">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

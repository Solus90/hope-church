"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { SanityTestimonial } from "@/sanity/types";

interface Props {
  testimonials: SanityTestimonial[];
}

export default function Testimonials({ testimonials }: Props) {
  const [active, setActive] = useState(0);

  // Reset active index if testimonials change
  useEffect(() => {
    setActive(0);
  }, [testimonials]);

  useEffect(() => {
    if (testimonials.length <= 1) return;
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  if (testimonials.length === 0) return null;

  const current = testimonials[active];

  return (
    <section className="py-24 bg-sandstone">
      <div className="container-hope">
        <div className="max-w-[760px] mx-auto text-center">
          {/* Label */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-label mb-12"
          >
            From the Community
          </motion.p>

          {/* Quote area */}
          <div
            className="relative min-h-[220px] flex items-center justify-center"
            aria-live="polite"
            aria-atomic="true"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={current._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.45 }}
                className="absolute inset-0 flex flex-col items-center justify-center"
              >
                {/* Opening quote mark */}
                <span className="font-serif text-gold text-6xl leading-none mb-4 opacity-30 select-none">
                  &ldquo;
                </span>
                <blockquote
                  className="font-serif text-charcoal text-xl sm:text-2xl leading-relaxed text-center mb-8"
                  style={{ fontStyle: "normal" }}
                >
                  {current.quote}
                </blockquote>
                <div className="flex flex-col items-center gap-1">
                  <p className="font-sans font-semibold text-sm text-charcoal">
                    {current.name}
                  </p>
                  {current.context && (
                    <p className="font-sans text-xs text-charcoal/50">
                      {current.context}
                    </p>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots — only show if more than one testimonial */}
          {testimonials.length > 1 && (
            <div className="flex justify-center gap-2 mt-10">
              {testimonials.map((t, i) => (
                <button
                  key={t._id}
                  onClick={() => setActive(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  aria-current={i === active ? "true" : undefined}
                  className={`transition-all duration-300 ${
                    i === active
                      ? "w-6 h-2 bg-gold"
                      : "w-2 h-2 bg-brand/20 hover:bg-brand/40"
                  } rounded-full`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

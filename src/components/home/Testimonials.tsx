"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// In production these would be managed in Sanity CMS
const testimonials = [
  {
    quote:
      "Hope is the first church where I've genuinely felt like an outsider could belong. We showed up not knowing anyone, and left with dinner plans.",
    name: "Marcus & Priya",
    context: "Joined in 2023",
  },
  {
    quote:
      "As an OSU grad student, I expected to age out of this place quickly. Instead I found a community of people who take both faith and real life seriously.",
    name: "Dr. Sarah K.",
    context: "Graduate Student, Ohio State",
  },
  {
    quote:
      "Our kids ask every week if it's Sunday yet. Hope Kids is that good. The care they take with my children's faith is something I didn't know to look for.",
    name: "The Hendersons",
    context: "Family of four",
  },
  {
    quote:
      "I grew up in the church and walked away. Hope was the first place that felt honest enough to walk back toward. The sermons don't flinch from hard things.",
    name: "Thomas R.",
    context: "Columbus, OH",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

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
          <div className="relative min-h-[220px] flex items-center justify-center" aria-live="polite" aria-atomic="true">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
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
                <blockquote className="font-serif text-charcoal text-xl sm:text-2xl leading-relaxed text-center mb-8" style={{ fontStyle: "normal" }}>
                  {testimonials[active].quote}
                </blockquote>
                <div className="flex flex-col items-center gap-1">
                  <p className="font-sans font-semibold text-sm text-charcoal">
                    {testimonials[active].name}
                  </p>
                  <p className="font-sans text-xs text-charcoal/50">
                    {testimonials[active].context}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-10">
            {testimonials.map((_, i) => (
              <button
                key={i}
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
        </div>
      </div>
    </section>
  );
}

"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function MissionBanner() {
  return (
    <section className="relative py-28 overflow-hidden bg-brand">
      {/* Grain overlay */}
      <div className="grain-overlay" aria-hidden="true" />
      {/* Gold left border */}
      <div className="absolute top-0 left-0 bottom-0 w-1 bg-gold" aria-hidden="true" />

      <div className="container-hope relative z-10">
        <div className="max-w-[760px] mx-auto lg:mx-0">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-label text-white/60 mb-5"
          >
            Our Mission
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-white mb-6"
            style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)", lineHeight: 1.15 }}
          >
            We exist to extend
            <br />
            <span className="text-gold">the welcome of Jesus.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-sans text-white/65 leading-relaxed text-lg mb-10 max-w-lg"
          >
            God made it. We broke it. Jesus fixes it. That&apos;s the story — and
            it&apos;s the reason we gather every Sunday, open our homes every week,
            and care about Columbus in tangible ways.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <Link href="/mission-vision-values" className="btn-primary">
              Mission, Vision &amp; Values
            </Link>
            <Link href="/our-story" className="btn-outline">
              Our Story
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

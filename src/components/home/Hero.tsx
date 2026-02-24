"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface Props {
  heroImageUrl?: string | null;
}

export default function Hero({ heroImageUrl }: Props) {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-brand">
      {/* Background image — only rendered when an image is set in Sanity */}
      {heroImageUrl && (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${heroImageUrl}')` }}
          aria-hidden="true"
        />
      )}
      {/* Brand-blue overlay — always present; doubles as solid bg when no image */}
      <div className="absolute inset-0 bg-brand/75" aria-hidden="true" />
      {/* Deep Harbor gradient at bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none"
        style={{
          background:
            "linear-gradient(to top, rgba(23,58,74,0.85) 0%, transparent 100%)",
        }}
        aria-hidden="true"
      />
      {/* Grain overlay */}
      <div className="grain-overlay" aria-hidden="true" />

      <div className="container-hope relative z-10 pt-[108px]">
        <div className="max-w-[720px]">
          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="section-label text-white/85 mb-6"
          >
            Hope Presbyterian Church · Columbus, OH
          </motion.p>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-serif text-white leading-[1.1] mb-6"
            style={{ fontSize: "clamp(2.5rem, 6vw, 4.75rem)" }}
          >
            Ordinary people.
            <br />
            <em className="text-gold not-italic">Extraordinary</em> welcome.
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="font-sans text-white/90 text-lg leading-relaxed max-w-lg mb-10"
          >
            We won&apos;t do this perfectly — but we hope you experience a small
            glimpse of Jesus&apos; perfect love for you through us.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            <Link href="/visit" className="btn-primary">
              Plan a Visit
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link href="/sermons" className="btn-outline">
              Watch a Sermon
            </Link>
          </motion.div>

          {/* Service info strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-16 flex flex-wrap gap-x-10 gap-y-3"
          >
              <p className="font-sans text-sm text-white/85 flex items-center gap-2">
              <span>🕙</span>
              Sundays at 10:00 AM
            </p>
            <a
              href="https://maps.google.com/?q=2201+Fred+Taylor+Dr,+Columbus,+OH"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-sm text-white/85 flex items-center gap-2 hover:text-white transition-colors duration-200"
            >
              <span>📍</span>
              2201 Fred Taylor Dr, Columbus
            </a>
          </motion.div>
        </div>
      </div>

    </section>
  );
}

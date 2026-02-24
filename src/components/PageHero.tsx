"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export interface PageHeroCTA {
  label: string;
  href: string;
  variant?: "primary" | "outline";
  external?: boolean;
}

interface PageHeroProps {
  label?: string;
  heading: string;
  subheading?: string;
  imageUrl?: string | null;
  ctas?: PageHeroCTA[];
  /** Override the bottom-fade and overlay colour (default: brand-dark #173A4A) */
  accentColor?: string;
  minHeight?: string;
}

export default function PageHero({
  label,
  heading,
  subheading,
  imageUrl,
  ctas = [],
  accentColor = "#173A4A",
  minHeight = "70vh",
}: PageHeroProps) {
  return (
    <section
      className="relative flex items-end overflow-hidden bg-brand-dark pt-[108px]"
      style={{ minHeight }}
    >
      {/* Background image */}
      {imageUrl && (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${imageUrl}')` }}
          aria-hidden="true"
        />
      )}

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-brand-dark/75" aria-hidden="true" />

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background: `linear-gradient(to top, ${accentColor}e6 0%, transparent 100%)`,
        }}
        aria-hidden="true"
      />

      {/* Gold accent rule */}
      <div
        className="absolute top-[108px] left-0 right-0 h-[3px] bg-gold"
        aria-hidden="true"
      />

      <div className="grain-overlay" aria-hidden="true" />

      <div className="container-hope relative z-10 pb-20">
        {label && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="section-label text-white/85 mb-5"
          >
            {label}
          </motion.p>
        )}

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-serif text-white leading-[1.1] mb-5"
          style={{ fontSize: "clamp(2.75rem, 6vw, 5rem)" }}
        >
          {heading}
        </motion.h1>

        {subheading && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-sans text-white/90 text-xl max-w-xl mb-10 leading-relaxed"
          >
            {subheading}
          </motion.p>
        )}

        {ctas.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-wrap gap-4"
          >
            {ctas.map((cta) => {
              const props = cta.external
                ? { target: "_blank" as const, rel: "noopener noreferrer" }
                : {};
              return (
                <Link
                  key={cta.label}
                  href={cta.href}
                  className={cta.variant === "outline" ? "btn-outline" : "btn-primary"}
                  {...props}
                >
                  {cta.label}
                  {cta.variant !== "outline" && (
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  )}
                </Link>
              );
            })}
          </motion.div>
        )}
      </div>
    </section>
  );
}

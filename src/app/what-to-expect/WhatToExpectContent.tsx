"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

interface WhatToExpectContentProps {
  heroImageUrl?: string | null;
}

const MAPS_URL =
  "https://www.google.com/maps/dir/?api=1&destination=2201+Fred+Taylor+Dr,+Columbus,+OH+43210";

const arrivalSteps = [
  {
    label: "Parking",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
      </svg>
    ),
    desc: "Pull into the C-deck garage on Fred Taylor Drive. It's free and just steps from the entrance. Look for Hope Church signs.",
  },
  {
    label: "Entrance",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
      </svg>
    ),
    desc: "Enter through the main doors of the Nationwide & Ohio Farm Bureau 4-H Center. Greeters will be at the door from 9:30am on.",
  },
  {
    label: "Coffee",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
      </svg>
    ),
    desc: "Grab a coffee in the lobby before the service. We gather informally from 9:45am — a great time to meet people.",
  },
  {
    label: "Check-In (Kids)",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    desc: "Hope Kids check-in opens at 9:45am on the lower level. Our team will walk you through the process.",
  },
];

const servicePillars = [
  {
    label: "Worship",
    desc: "We sing together — a mix of hymns and contemporary songs that are theologically rich and accessible.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z" />
      </svg>
    ),
  },
  {
    label: "Scripture",
    desc: "Every sermon is rooted in the Bible. We believe it's the living Word of God — trustworthy, sufficient, and powerful.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    ),
  },
  {
    label: "Community",
    desc: "Sunday isn't just a service — it's a gathering of the church. We linger after because relationships matter.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
  {
    label: "Kids",
    desc: "Hope Kids runs during the sermon for ages infant through 5th grade. Children are always welcome in the main service too.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.87c1.355 0 2.697.055 4.024.165C17.155 8.51 18 9.473 18 10.608v2.513m-3-4.87v-1.5m-6 1.5v-1.5m12 9.75l-1.5.75a3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-1.5-.75V14.25m16.5-4.5v-1.5M3 9.75V8.25" />
      </svg>
    ),
  },
];

const faqs: { q: string; a: string }[] = [
  {
    q: "What should I wear?",
    a: "Whatever you're comfortable in. You'll see people in jeans and people in dress clothes — both are totally welcome.",
  },
  {
    q: "Is there parking?",
    a: "Yes — free parking in the C-deck garage on Fred Taylor Drive.",
  },
  {
    q: "What do you do with my kids?",
    a: "Hope Kids is available for infants through 5th grade during the sermon. It's a safe, fun environment with age-appropriate Bible teaching.",
  },
  {
    q: "Is it okay to ask hard questions?",
    a: "Absolutely. We believe honest questions lead somewhere real. You won't be given easy answers or pressured to believe anything.",
  },
  {
    q: "What denomination are you?",
    a: "We're part of the Evangelical Presbyterian Church (EPC) — a Reformed, evangelical denomination. We hold to historic Christian faith and practice.",
  },
];

function FaqItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.07 }}
      className="border-b border-stone last:border-b-0"
    >
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-start justify-between gap-4 py-6 text-left group"
        aria-expanded={open}
      >
        <span className="font-serif text-charcoal text-lg leading-snug group-hover:text-brand transition-colors duration-200">
          {q}
        </span>
        <span
          className={`flex-shrink-0 mt-0.5 w-6 h-6 flex items-center justify-center text-brand transition-transform duration-300 ${open ? "rotate-45" : ""}`}
          aria-hidden="true"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
        </span>
      </button>
      {open && (
        <p className="font-sans text-sm text-text-secondary leading-relaxed pb-6 pr-10">
          {a}
        </p>
      )}
    </motion.div>
  );
}

export default function WhatToExpectContent({ heroImageUrl: _heroImageUrl }: WhatToExpectContentProps) {
  return (
    <>
      {/* ── Arrival Section ───────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="container-hope">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-xl mb-14"
          >
            <p className="section-label text-brand mb-4">Your first steps</p>
            <h2
              className="font-serif text-charcoal"
              style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)" }}
            >
              Arriving at Hope
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {arrivalSteps.map((step, i) => (
              <motion.div
                key={step.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="border border-stone p-8 flex flex-col"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-11 h-11 bg-brand/10 flex items-center justify-center text-brand flex-shrink-0">
                    {step.icon}
                  </div>
                  <span className="font-sans text-xs font-bold text-gold tracking-widest">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="font-serif text-charcoal text-xl mb-3">{step.label}</h3>
                <p className="font-sans text-sm text-charcoal/65 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── The Service Section ───────────────────────────────── */}
      <section className="relative py-28 overflow-hidden bg-brand-dark">
        <div className="absolute top-0 left-0 bottom-0 w-1 bg-gold" aria-hidden="true" />
        <div className="grain-overlay" aria-hidden="true" />

        <div className="container-hope relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left — heading & description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="section-label text-white/75 mb-5">Sundays at 10:00 AM</p>
              <h2
                className="font-serif text-white mb-6"
                style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)", lineHeight: 1.15 }}
              >
                The Service
              </h2>
              <p className="font-sans text-white/80 leading-relaxed text-lg">
                Our Sunday service is about 90 minutes. We gather for corporate worship, hear Scripture read and preached, and celebrate the Lord&apos;s Supper on the first Sunday of the month.
              </p>
            </motion.div>

            {/* Right — four pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {servicePillars.map((pillar, i) => (
                <motion.div
                  key={pillar.label}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-white/8 border border-white/12 p-7"
                  style={{ backgroundColor: "rgba(255,255,255,0.06)", borderColor: "rgba(255,255,255,0.1)" }}
                >
                  <div className="w-10 h-10 border border-gold/40 flex items-center justify-center text-gold mb-5">
                    {pillar.icon}
                  </div>
                  <h3 className="font-serif text-white text-xl mb-2">{pillar.label}</h3>
                  <p className="font-sans text-sm text-white/65 leading-relaxed">{pillar.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ Section ───────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="container-hope">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Left — heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-1"
            >
              <p className="section-label text-brand mb-4">Common questions</p>
              <h2
                className="font-serif text-charcoal mb-5"
                style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}
              >
                Good questions.
              </h2>
              <p className="font-sans text-sm text-text-secondary leading-relaxed">
                If you have a question we haven&apos;t answered here, reach out — we&apos;d love to hear from you.
              </p>
              <Link
                href="/contact"
                className="mt-6 inline-flex items-center gap-2 font-sans text-sm font-semibold text-brand hover:text-brand-dark transition-colors"
              >
                Ask us directly
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </motion.div>

            {/* Right — FAQ list */}
            <div className="lg:col-span-2">
              {faqs.map((faq, i) => (
                <FaqItem key={faq.q} q={faq.q} a={faq.a} index={i} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA Section ───────────────────────────────────────── */}
      <section className="py-24 bg-sandstone/30" style={{ backgroundColor: "rgba(203,184,157,0.25)" }}>
        <div className="container-hope">
          <div className="max-w-3xl mx-auto text-center">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="section-label text-brand mb-5"
            >
              Come on Sunday
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-serif text-charcoal mb-5"
              style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)" }}
            >
              Ready to visit?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="font-sans text-text-secondary text-lg leading-relaxed mb-10"
            >
              We&apos;d love to have you. Plan your visit and we&apos;ll make sure someone&apos;s looking out for you.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-4 justify-center"
            >
              <Link href="/visit" className="btn-primary">
                Plan a Visit
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-dark inline-flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                Get Directions
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

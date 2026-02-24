"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface VisitContentProps {
  heroImageUrl?: string | null;
}

const MAPS_URL =
  "https://www.google.com/maps/dir/?api=1&destination=2201+Fred+Taylor+Dr,+Columbus,+OH+43210";

const visitorTypes = [
  {
    tag: "First Time Visitor",
    title: "First time visitor",
    desc: "We'd love to meet you. Expect a warm welcome, zero pressure, and a free gift to say thanks for coming.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    accent: "bg-gold",
  },
  {
    tag: "Returning to Church",
    title: "Returning to church",
    desc: "We know that coming back takes courage. Hope is a place that takes faith seriously without taking itself too seriously.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0110.5 3h6a2.25 2.25 0 012.25 2.25v13.5A2.25 2.25 0 0116.5 21h-6a2.25 2.25 0 01-2.25-2.25V15M12 9l3 3m0 0l-3 3m3-3H2.25" />
      </svg>
    ),
    accent: "bg-brand",
  },
  {
    tag: "Exploring Faith",
    title: "Exploring faith",
    desc: "Doubt is welcome here. We're a community of people who believe honest questions lead somewhere real.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
      </svg>
    ),
    accent: "bg-sandstone",
  },
];

const timelineItems = [
  {
    time: "9:45am",
    label: "Gather",
    desc: "Coffee and connection before the service. A great time to meet people.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
  {
    time: "10:00am",
    label: "Worship",
    desc: "40 minutes of music — a mix of hymns and contemporary songs.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z" />
      </svg>
    ),
  },
  {
    time: "10:45am",
    label: "Preach",
    desc: "A 40-minute sermon rooted in Scripture. Practical, honest, and substantive.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    ),
  },
  {
    time: "11:25am",
    label: "Connect",
    desc: "Linger after and meet people. This is when the real community happens.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
  },
];

const serviceInfo = [
  {
    label: "When",
    value: "Sundays at 10:00 AM",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    label: "Where",
    value: "Nationwide & Ohio Farm Bureau 4-H Center",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
      </svg>
    ),
  },
  {
    label: "Address",
    value: "2201 Fred Taylor Dr, Columbus, OH 43210",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
  },
  {
    label: "Parking",
    value: "Free parking in the C-deck garage",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
      </svg>
    ),
  },
];

export default function VisitContent({ heroImageUrl: _heroImageUrl }: VisitContentProps) {
  return (
    <>
      {/* ── Service Info Strip ─────────────────────────────────── */}
      <section className="bg-white border-b border-stone">
        <div className="container-hope">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-stone"
          >
            {serviceInfo.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex items-start gap-4 px-6 py-8"
              >
                <div className="mt-0.5 flex-shrink-0 w-10 h-10 bg-brand/10 flex items-center justify-center text-brand">
                  {item.icon}
                </div>
                <div>
                  <p className="section-label text-text-secondary mb-1">{item.label}</p>
                  <p className="font-sans text-sm font-medium text-charcoal leading-snug">{item.value}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── You Belong Here ───────────────────────────────────── */}
      <section className="py-24" style={{ backgroundColor: "rgba(203,184,157,0.15)" }}>
        <div className="container-hope">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mb-14"
          >
            <p className="section-label text-brand mb-4">You're welcome here</p>
            <h2
              className="font-serif text-charcoal mb-5"
              style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)", lineHeight: 1.15 }}
            >
              You belong here — no matter where you're starting from.
            </h2>
            <p className="font-sans text-text-secondary leading-relaxed text-lg">
              Whether you've never been to church, grew up in one, or left one behind — Hope is a place where you're welcomed as you are. We're a diverse community of people united by the surprising grace of Jesus Christ.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {visitorTypes.map((card, i) => (
              <motion.div
                key={card.tag}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white flex flex-col hover:shadow-lg transition-shadow duration-300"
              >
                <div className={`h-1 ${card.accent}`} />
                <div className="p-8 flex flex-col flex-1">
                  <div className="w-11 h-11 bg-stone flex items-center justify-center text-brand mb-5">
                    {card.icon}
                  </div>
                  <p className="section-label text-text-secondary mb-2">{card.tag}</p>
                  <h3 className="font-serif text-charcoal text-2xl mb-3">{card.title}</h3>
                  <p className="font-sans text-sm text-charcoal/70 leading-relaxed">{card.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What Happens Sunday ───────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="container-hope">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="section-label text-brand mb-4">The service</p>
            <h2
              className="font-serif text-charcoal"
              style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)" }}
            >
              Here&apos;s what a Sunday looks like.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {timelineItems.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative border border-stone p-8 flex flex-col"
              >
                {/* Step number */}
                <span className="font-sans text-xs font-bold text-gold tracking-widest mb-4">
                  0{i + 1}
                </span>
                {/* Icon */}
                <div className="w-10 h-10 bg-brand/10 flex items-center justify-center text-brand mb-5">
                  {item.icon}
                </div>
                {/* Time */}
                <p className="font-sans text-xs font-semibold text-text-secondary tracking-wide uppercase mb-1">
                  {item.time}
                </p>
                {/* Label */}
                <h3 className="font-serif text-charcoal text-xl mb-2">{item.label}</h3>
                {/* Desc */}
                <p className="font-sans text-sm text-charcoal/65 leading-relaxed">{item.desc}</p>
                {/* Connector arrow — hidden on last */}
                {i < timelineItems.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 -translate-y-1/2 z-10">
                    <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-10 text-center"
          >
            <Link href="/what-to-expect" className="btn-outline-dark inline-flex items-center gap-2">
              Full Sunday walkthrough
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── Plan Your Visit CTA ───────────────────────────────── */}
      <section className="relative py-28 overflow-hidden bg-brand-dark">
        <div className="absolute top-0 left-0 bottom-0 w-1 bg-gold" aria-hidden="true" />
        <div className="grain-overlay" aria-hidden="true" />

        <div className="container-hope relative z-10">
          <div className="max-w-2xl">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="section-label text-white/75 mb-5"
            >
              Ready to come?
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-serif text-white mb-5"
              style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)", lineHeight: 1.15 }}
            >
              Ready to come?{" "}
              <span className="text-gold">Let us know.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="font-sans text-white/80 text-lg leading-relaxed mb-10"
            >
              Fill out our visit form and we'll have a welcome gift ready for you and make sure someone&apos;s looking out for you on Sunday morning.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="https://www.hopechurchcolumbus.org/visit"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Fill Out Visit Form
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline inline-flex items-center gap-2"
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

      {/* ── Map / Directions ─────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="container-hope">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left — text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="section-label text-brand mb-4">Getting here</p>
              <h2
                className="font-serif text-charcoal mb-6"
                style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}
              >
                Find us on campus.
              </h2>

              <dl className="space-y-5 mb-8">
                <div>
                  <dt className="font-sans text-xs font-semibold text-text-secondary tracking-widest uppercase mb-1">Venue</dt>
                  <dd className="font-sans text-charcoal text-sm leading-relaxed">Nationwide &amp; Ohio Farm Bureau 4-H Center</dd>
                </div>
                <div>
                  <dt className="font-sans text-xs font-semibold text-text-secondary tracking-widest uppercase mb-1">Address</dt>
                  <dd className="font-sans text-charcoal text-sm leading-relaxed">2201 Fred Taylor Dr, Columbus, OH 43210</dd>
                </div>
                <div>
                  <dt className="font-sans text-xs font-semibold text-text-secondary tracking-widest uppercase mb-1">Parking</dt>
                  <dd className="font-sans text-charcoal text-sm leading-relaxed">
                    Free parking in the C-deck garage on Fred Taylor Drive. The garage is just steps from the entrance — follow the Hope Church signs on Sunday morning.
                  </dd>
                </div>
                <div>
                  <dt className="font-sans text-xs font-semibold text-text-secondary tracking-widest uppercase mb-1">Service Time</dt>
                  <dd className="font-sans text-charcoal text-sm leading-relaxed">Sundays at 10:00 AM. Doors open at 9:30 AM.</dd>
                </div>
              </dl>

              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                Open in Google Maps
              </a>
            </motion.div>

            {/* Right — map placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="relative"
            >
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
                aria-label="Open location in Google Maps"
              >
                <div className="aspect-[4/3] bg-brand/10 border border-brand/20 flex flex-col items-center justify-center gap-4 transition-colors duration-200 group-hover:bg-brand/15">
                  {/* Pin icon */}
                  <div className="w-16 h-16 bg-brand flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </div>
                  <div className="text-center px-6">
                    <p className="font-serif text-charcoal text-xl mb-1">Nationwide &amp; Ohio Farm Bureau 4-H Center</p>
                    <p className="font-sans text-sm text-text-secondary">2201 Fred Taylor Dr, Columbus, OH 43210</p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 font-sans text-xs font-semibold text-brand tracking-wide uppercase transition-opacity group-hover:opacity-80">
                    Open in Maps
                    <svg className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

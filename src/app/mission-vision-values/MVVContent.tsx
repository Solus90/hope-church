"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface MVVContentProps {
  heroImageUrl?: string | null;
}

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const visionPillars = [
  {
    title: "A Rooted Church",
    body: "We want to be the kind of church Columbus can't imagine not having. Deeply embedded, locally known, faithfully present.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    title: "A Sent People",
    body: "The church exists for those not yet in it. We're not a club — we're a mission. Every member is a sent person.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2 .01 7z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    title: "A Transformed City",
    body: "We believe the gospel changes everything: family, work, justice, creativity. We want to see all of that renewed.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zM5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z"
          fill="currentColor"
        />
      </svg>
    ),
  },
];

const values = [
  {
    title: "Word-Driven",
    body: "We believe the Bible is the living Word of God — authoritative, sufficient, and transformative. Everything we do is anchored in Scripture.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
      </svg>
    ),
  },
  {
    title: "Prayer-Fueled",
    body: "We depend on God. Prayer isn't a ritual for us — it's the engine of everything we do, from Sunday services to personal decisions.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
        <path d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z" />
      </svg>
    ),
  },
  {
    title: "Gospel-Centred",
    body: "The good news of Jesus shapes our identity, our community, and our mission. We return to it constantly because we never outgrow it.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
      </svg>
    ),
  },
  {
    title: "Community-Shaped",
    body: "Following Jesus isn't solo. We're shaped together, in covenant with one another, bearing one another's burdens and celebrating each other's joys.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
      </svg>
    ),
  },
  {
    title: "Mission-Minded",
    body: "We exist to extend the welcome of Jesus — locally in Columbus, regionally in Ohio, and globally through our missionary partners.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
  },
  {
    title: "Justice-Seeking",
    body: "The gospel compels us toward mercy and justice. We believe caring for the poor, the vulnerable, and the marginalised is core to who we are as a church.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0 0 12 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 0 1-2.031.352 5.988 5.988 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.97Zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 0 1-2.031.352 5.989 5.989 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.97Z" />
      </svg>
    ),
  },
];

export default function MVVContent({ heroImageUrl }: MVVContentProps) {
  return (
    <main>
      {/* Hero Image */}
      {heroImageUrl && (
        <div className="relative h-64 md:h-80 w-full overflow-hidden">
          <img
            src={heroImageUrl}
            alt="Mission, Vision & Values"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-brand-dark/60" />
        </div>
      )}

      {/* ── Section 1: Mission ─────────────────────────────────── */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-hope">
          <div className="max-w-4xl">
            <motion.p
              {...fadeUp}
              transition={{ duration: 0.5 }}
              className="section-label text-brand mb-6"
            >
              Our Mission
            </motion.p>

            {/* Pull quote */}
            <motion.blockquote
              {...fadeUp}
              transition={{ duration: 0.55, delay: 0.08 }}
              className="relative mb-10"
            >
              <div className="absolute -left-6 top-0 bottom-0 w-1 bg-gold rounded-full hidden md:block" aria-hidden="true" />
              <p className="font-serif text-3xl md:text-5xl text-charcoal leading-snug md:leading-tight">
                "Extending the{" "}
                <em className="not-italic text-brand">welcome</em>{" "}
                of Jesus Christ to Columbus and beyond."
              </p>
            </motion.blockquote>

            <motion.p
              {...fadeUp}
              transition={{ duration: 0.5, delay: 0.16 }}
              className="text-text-secondary text-lg md:text-xl leading-relaxed mb-8 max-w-3xl"
            >
              That's our mission in one sentence. Everything we do — our Sunday
              gatherings, our community groups, our mercy ministry, our global
              partnerships — is an expression of this.
            </motion.p>

            <motion.div
              {...fadeUp}
              transition={{ duration: 0.5, delay: 0.24 }}
              className="border-l-4 border-sandstone pl-6 max-w-2xl"
            >
              <p className="text-charcoal text-base md:text-lg leading-relaxed font-sans italic">
                The gospel is the most radical welcome in history — Jesus receiving
                sinners, foreigners, doubters, and failures. We're a church shaped
                by that welcome.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Section 2: Vision ─────────────────────────────────── */}
      <section className="bg-brand-dark py-20 md:py-28 relative overflow-hidden">
        {/* Subtle background texture */}
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none" aria-hidden="true"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
          }}
        />

        <div className="container-hope relative">
          <div className="max-w-3xl mb-14 md:mb-18">
            <motion.p
              {...fadeUp}
              transition={{ duration: 0.5 }}
              className="section-label text-gold/80 mb-4"
            >
              Our Vision
            </motion.p>
            <motion.h2
              {...fadeUp}
              transition={{ duration: 0.55, delay: 0.08 }}
              className="font-serif text-4xl md:text-5xl text-white mb-6 leading-tight"
            >
              A renewed city, one neighbourhood at a time.
            </motion.h2>
            <motion.p
              {...fadeUp}
              transition={{ duration: 0.5, delay: 0.16 }}
              className="text-white/70 text-lg md:text-xl leading-relaxed"
            >
              We believe the gospel transforms not just individuals but communities.
              Our vision is to see Columbus shaped by the grace and justice of Jesus
              — through churches planted, neighbours served, and lives changed.
            </motion.p>
          </div>

          {/* Vision pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {visionPillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/[0.06] border border-white/10 rounded-2xl p-8 hover:bg-white/[0.09] transition-colors duration-300"
              >
                <div className="text-gold mb-5">{pillar.icon}</div>
                <h3 className="font-serif text-2xl text-white mb-3">{pillar.title}</h3>
                <p className="text-white/65 leading-relaxed text-sm md:text-base">{pillar.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 3: Values ─────────────────────────────────── */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-hope">
          <div className="mb-12 md:mb-16">
            <motion.p
              {...fadeUp}
              transition={{ duration: 0.5 }}
              className="section-label text-brand mb-4"
            >
              Core Values
            </motion.p>
            <motion.h2
              {...fadeUp}
              transition={{ duration: 0.55, delay: 0.08 }}
              className="font-serif text-4xl md:text-5xl text-charcoal max-w-2xl leading-tight"
            >
              What shapes the way we do everything.
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.07 }}
                className="group border border-gray-200 rounded-2xl p-8 hover:border-brand/40 hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center text-brand group-hover:bg-brand group-hover:text-white transition-colors duration-300">
                    {value.icon}
                  </div>
                  <h3 className="font-serif text-xl text-charcoal">{value.title}</h3>
                </div>
                <p className="text-text-secondary leading-relaxed text-sm md:text-base">{value.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 4: Denomination ───────────────────────────── */}
      <section className="bg-brand py-20 md:py-28 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          aria-hidden="true"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
          }}
        />

        <div className="container-hope relative">
          <div className="max-w-3xl mx-auto text-center">
            {/* Cross icon */}
            <motion.div
              {...fadeUp}
              transition={{ duration: 0.5 }}
              className="flex justify-center mb-8"
            >
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                className="text-white/40"
                aria-hidden="true"
              >
                <rect x="17" y="2" width="6" height="36" rx="2" fill="currentColor" />
                <rect x="4" y="12" width="32" height="6" rx="2" fill="currentColor" />
              </svg>
            </motion.div>

            <motion.p
              {...fadeUp}
              transition={{ duration: 0.5, delay: 0.06 }}
              className="section-label text-white/60 mb-4"
            >
              Evangelical Presbyterian Church
            </motion.p>
            <motion.h2
              {...fadeUp}
              transition={{ duration: 0.55, delay: 0.12 }}
              className="font-serif text-3xl md:text-4xl text-white mb-6 leading-tight"
            >
              Reformed. Evangelical. Confessional.
            </motion.h2>
            <motion.p
              {...fadeUp}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-white/75 text-lg leading-relaxed mb-10"
            >
              Hope is a proud member of the Evangelical Presbyterian Church (EPC) — a
              Reformed, evangelical denomination committed to the Westminster Confession
              of Faith. We hold to the historic faith delivered to the saints.
            </motion.p>
            <motion.div
              {...fadeUp}
              transition={{ duration: 0.5, delay: 0.28 }}
            >
              <a
                href="https://epconnect.org"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white font-sans font-semibold text-sm tracking-wide border-b border-white/40 pb-0.5 hover:border-white transition-colors duration-200"
              >
                Learn more about the EPC
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path
                    d="M3 8h10M9 4l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Footer CTA ────────────────────────────────────────── */}
      <section className="bg-sandstone py-16 md:py-20">
        <div className="container-hope">
          <div className="max-w-2xl mx-auto text-center">
            <motion.h2
              {...fadeUp}
              transition={{ duration: 0.5 }}
              className="font-serif text-3xl md:text-4xl text-charcoal mb-5"
            >
              Come and see.
            </motion.h2>
            <motion.p
              {...fadeUp}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-charcoal/70 text-lg leading-relaxed mb-10"
            >
              The best way to understand what we're about is to join us on a Sunday.
              We'd love to meet you.
            </motion.p>
            <motion.div
              {...fadeUp}
              transition={{ duration: 0.5, delay: 0.18 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link href="/visit" className="btn-primary">
                Plan a Visit
              </Link>
              <Link href="/what-we-believe" className="btn-outline-dark">
                What We Believe
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}

"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface OurStoryContentProps {
  heroImageUrl?: string | null;
}

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const milestones = [
  {
    label: "Founded",
    body: "Hope Presbyterian Church is planted near the Ohio State campus, gathering a small group of believers committed to loving the campus and city.",
  },
  {
    label: "EPC Affiliation",
    body: "Hope affiliates with the Evangelical Presbyterian Church (EPC), committing to Reformed theology, the Westminster Confession, and faithful gospel ministry.",
  },
  {
    label: "Ohio State Partnership",
    body: "Hope deepens its relationship with Ohio State University, partnering with Cru to reach students, faculty, and staff across campus.",
  },
  {
    label: "Mercy Ministry",
    body: "Hope launches its mercy ministry, beginning intentional work among Columbus's vulnerable and underserved neighbours.",
  },
  {
    label: "Today",
    body: "Hope continues to gather Sundays at 10am at the Nationwide & Ohio Farm Bureau 4-H Center — still committed to extending the welcome of Jesus.",
  },
];

const stats = [
  { value: "~200", label: "Members" },
  { value: "3", label: "Community Groups" },
  { value: "6", label: "Missionary Partners" },
  { value: "1", label: "City We Love" },
];

export default function OurStoryContent({ heroImageUrl }: OurStoryContentProps) {
  return (
    <main>
      {/* Hero Image */}
      {heroImageUrl && (
        <div className="relative h-64 md:h-80 w-full overflow-hidden">
          <img
            src={heroImageUrl}
            alt="Our Story"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-brand-dark/60" />
        </div>
      )}

      {/* ── Section 1: Opening Narrative ───────────────────────── */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-hope">
          <div className="max-w-4xl">
            <motion.p
              {...fadeUp}
              transition={{ duration: 0.5 }}
              className="section-label text-brand mb-6"
            >
              Our Story
            </motion.p>
            <motion.h1
              {...fadeUp}
              transition={{ duration: 0.55, delay: 0.08 }}
              className="font-serif text-4xl md:text-5xl text-charcoal mb-10 leading-tight"
            >
              Hope started with a question.
            </motion.h1>

            <div className="space-y-6 max-w-3xl">
              <motion.p
                {...fadeUp}
                transition={{ duration: 0.5, delay: 0.14 }}
                className="text-text-secondary text-lg md:text-xl leading-relaxed"
              >
                In the early 2000s, a small group of Christians in Columbus began
                asking what it would look like for a church to be genuinely{" "}
                <em>for</em> this city — not just <em>in</em> it.
              </motion.p>
              <motion.p
                {...fadeUp}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-text-secondary text-lg md:text-xl leading-relaxed"
              >
                What they found was a neighbourhood near Ohio State that felt
                overlooked. A campus full of thousands of students asking big
                questions. And a gospel that had something real to say to both.
              </motion.p>
              <motion.p
                {...fadeUp}
                transition={{ duration: 0.5, delay: 0.26 }}
                className="text-text-secondary text-lg md:text-xl leading-relaxed"
              >
                Hope Presbyterian Church was planted to meet that moment. Not as a
                programme or a project — but as a community of people committed to
                the long, slow work of loving Columbus in the name of Jesus.
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 2: Timeline ────────────────────────────────── */}
      <section className="bg-white pb-20 md:pb-28">
        <div className="container-hope">
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-4 mb-12"
          >
            <div className="w-12 h-px bg-gold" aria-hidden="true" />
            <p className="section-label text-brand">Milestones</p>
          </motion.div>

          {/* Timeline list */}
          <div className="relative pl-6 md:pl-10 border-l-2 border-gray-100">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative mb-10 last:mb-0"
              >
                {/* Dot on the timeline */}
                <div
                  className="absolute -left-[2.85rem] md:-left-[3.35rem] top-1.5 w-4 h-4 rounded-full border-2 border-brand bg-white"
                  aria-hidden="true"
                />

                <p className="font-serif text-xl md:text-2xl text-charcoal mb-2">
                  {milestone.label}
                </p>
                <p className="text-text-secondary leading-relaxed max-w-2xl">
                  {milestone.body}
                </p>
              </motion.div>
            ))}

            {/* Terminal dot */}
            <div
              className="absolute -left-[1.05rem] -bottom-2 w-2 h-2 rounded-full bg-gold"
              aria-hidden="true"
            />
          </div>
        </div>
      </section>

      {/* ── Section 3: Who We Are (stats) ──────────────────────── */}
      <section className="bg-brand-dark py-20 md:py-28 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          aria-hidden="true"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
          }}
        />

        <div className="container-hope relative">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <motion.h2
              {...fadeUp}
              transition={{ duration: 0.55 }}
              className="font-serif text-4xl md:text-5xl text-white mb-6 leading-tight"
            >
              Who we are today.
            </motion.h2>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-14">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="text-center bg-white/[0.06] border border-white/10 rounded-2xl px-6 py-8"
              >
                <p className="font-serif text-4xl md:text-5xl text-gold mb-2">{stat.value}</p>
                <p className="text-white/60 font-sans text-sm tracking-wide uppercase font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          <motion.p
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-white/70 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto text-center"
          >
            We're a congregation of students, families, young professionals, and
            longtime Columbusites. We're diverse in background but united by a
            common faith in Jesus Christ and a common love for this city.
          </motion.p>
        </div>
      </section>

      {/* ── Section 4: EPC / Part of Something Bigger ──────────── */}
      <section className="py-20 md:py-28" style={{ backgroundColor: "rgba(203, 184, 157, 0.15)" }}>
        <div className="container-hope">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
              <motion.div
                {...fadeUp}
                transition={{ duration: 0.5 }}
              >
                <p className="section-label text-brand mb-4">Our Denomination</p>
                <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-6 leading-tight">
                  Part of something bigger.
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-8">
                  Hope is part of the Evangelical Presbyterian Church (EPC) — a
                  denomination of over 600 congregations across North America. We're
                  rooted in Reformed theology, committed to the Westminster Confession,
                  and connected to a network of churches with shared convictions.
                </p>
                <Link
                  href="/what-we-believe"
                  className="inline-flex items-center gap-2 text-brand font-sans font-semibold text-sm tracking-wide border-b border-brand/40 pb-0.5 hover:border-brand transition-colors duration-200"
                >
                  Learn about what we believe
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path
                      d="M3 8h10M9 4l4 4-4 4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </motion.div>

              {/* Decorative panel */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: 0.12 }}
                className="bg-brand-dark rounded-2xl p-10 text-center"
              >
                <svg
                  width="44"
                  height="44"
                  viewBox="0 0 40 40"
                  fill="none"
                  className="text-gold mx-auto mb-6"
                  aria-hidden="true"
                >
                  <rect x="17" y="2" width="6" height="36" rx="2" fill="currentColor" />
                  <rect x="4" y="12" width="32" height="6" rx="2" fill="currentColor" />
                </svg>
                <p className="font-serif text-2xl text-white mb-2">Evangelical</p>
                <p className="font-serif text-2xl text-white mb-6">Presbyterian Church</p>
                <p className="text-white/60 text-sm leading-relaxed font-sans">
                  Reformed · Evangelical · Confessional
                </p>
                <div className="mt-8 pt-6 border-t border-white/10">
                  <a
                    href="https://epconnect.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border border-white/30 text-white/80 hover:text-white hover:border-white/60 font-sans font-medium text-sm px-5 py-2.5 rounded-full transition-colors duration-200"
                  >
                    Visit epconnect.org
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                      <path d="M2 7h10M7.5 2.5 12 7l-4.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer CTA ─────────────────────────────────────────── */}
      <section className="bg-white py-16 md:py-20 border-t border-gray-100">
        <div className="container-hope">
          <div className="max-w-2xl mx-auto text-center">
            <motion.h2
              {...fadeUp}
              transition={{ duration: 0.5 }}
              className="font-serif text-3xl md:text-4xl text-charcoal mb-5"
            >
              Come and be part of the story.
            </motion.h2>
            <motion.p
              {...fadeUp}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-text-secondary text-lg leading-relaxed mb-10"
            >
              We'd love for you to join us on a Sunday. No expectations — just a
              genuine welcome.
            </motion.p>
            <motion.div
              {...fadeUp}
              transition={{ duration: 0.5, delay: 0.18 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link href="/visit" className="btn-primary">
                Plan a Visit
              </Link>
              <Link href="/mission-vision-values" className="btn-outline-dark">
                Mission &amp; Values
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}

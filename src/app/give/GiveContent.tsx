"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface GiveContentProps {
  heroImageUrl?: string | null;
}

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const givingPillars = [
  {
    title: "Local Ministry",
    body: "Your giving supports everything that happens at Hope: Sunday gatherings, community groups, pastoral care, and our mercy ministry among Columbus's most vulnerable.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path
          d="M14 24S4 17.5 4 10.5a5.5 5.5 0 0 1 10-3.11A5.5 5.5 0 0 1 24 10.5C24 17.5 14 24 14 24z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    title: "Global Mission",
    body: "Hope gives generously to support our missionary partners around the world — men and women who've left comfort to bring the gospel to the unreached.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <circle cx="14" cy="14" r="10" stroke="currentColor" strokeWidth="2" />
        <ellipse cx="14" cy="14" rx="4.5" ry="10" stroke="currentColor" strokeWidth="2" />
        <line x1="4" y1="14" x2="24" y2="14" stroke="currentColor" strokeWidth="2" />
        <line x1="5.5" y1="9" x2="22.5" y2="9" stroke="currentColor" strokeWidth="2" />
        <line x1="5.5" y1="19" x2="22.5" y2="19" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: "Church Planting",
    body: "We're committed to planting healthy churches. A portion of every dollar given supports church planting through the EPC.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path
          d="M4 24V12l10-8 10 8v12H4z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <rect x="11" y="16" width="6" height="8" rx="1" stroke="currentColor" strokeWidth="2" />
        <path d="M14 4v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
];

const givingMethods = [
  {
    title: "Give Online",
    body: "The simplest way to give — set up a one-time or recurring gift through our secure online portal.",
    cta: { label: "Give Online", href: "https://www.hopechurchcolumbus.org/give", external: true },
  },
  {
    title: "Text to Give",
    body: "Text 'HOPE' to 73256 to give from your phone. Quick, secure, and takes less than two minutes to set up.",
    cta: null,
  },
  {
    title: "Give by Check",
    body: "Make checks payable to 'Hope Presbyterian Church' and bring them on Sunday or mail to: 2201 Fred Taylor Dr, Columbus, OH 43210.",
    cta: null,
  },
];

export default function GiveContent({ heroImageUrl }: GiveContentProps) {
  return (
    <main>
      {/* Hero */}
      {heroImageUrl && (
        <div className="relative h-64 md:h-80 w-full overflow-hidden">
          <img
            src={heroImageUrl}
            alt="Give"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-brand-dark/60" />
        </div>
      )}

      {/* Section 1: Why We Give */}
      <section className="bg-white py-16 md:py-24">
        <div className="container-hope">
          <div className="max-w-3xl mb-14">
            <motion.p
              {...fadeUp}
              transition={{ duration: 0.5 }}
              className="section-label mb-4"
            >
              Generosity
            </motion.p>
            <motion.h1
              {...fadeUp}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-serif text-4xl md:text-5xl text-charcoal mb-6"
            >
              Giving is an act of worship.
            </motion.h1>
            <motion.p
              {...fadeUp}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-text-secondary text-lg md:text-xl leading-relaxed"
            >
              When we give, we're saying something about where our trust lies. The
              Bible teaches that generous giving is a response to God's generosity to
              us — and a means by which the gospel goes forward in the world.
            </motion.p>
          </div>

          {/* Three pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {givingPillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-brand/10 text-brand flex items-center justify-center">
                  {pillar.icon}
                </div>
                <h2 className="font-serif text-xl text-charcoal">{pillar.title}</h2>
                <p className="text-text-secondary leading-relaxed">{pillar.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: How to Give */}
      <section className="bg-brand-dark py-16 md:py-24">
        <div className="container-hope">
          <div className="text-center mb-14">
            <motion.p
              {...fadeUp}
              transition={{ duration: 0.5 }}
              className="section-label mb-4 text-gold/80"
            >
              Ways to Give
            </motion.p>
            <motion.h2
              {...fadeUp}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-serif text-3xl md:text-4xl text-white"
            >
              Three ways to give.
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {givingMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/10 border border-white/15 rounded-2xl p-8 flex flex-col gap-4"
              >
                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gold/20 text-gold font-sans font-bold text-sm">
                  {index + 1}
                </div>
                <h3 className="font-serif text-xl text-white">{method.title}</h3>
                <p className="text-white/70 leading-relaxed flex-1">{method.body}</p>
                {method.cta && (
                  <a
                    href={method.cta.href}
                    target={method.cta.external ? "_blank" : undefined}
                    rel={method.cta.external ? "noopener noreferrer" : undefined}
                    className="mt-2 inline-flex items-center gap-2 text-gold hover:text-gold/80 font-sans font-medium text-sm transition-colors duration-200"
                  >
                    {method.cta.label}
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                      <path
                        d="M2.5 7h9M8 3.5l3.5 3.5L8 10.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Scripture Quote */}
      <section className="bg-gold py-16 md:py-24">
        <div className="container-hope">
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            {/* Quotation mark */}
            <div
              className="font-serif text-8xl leading-none text-charcoal/20 select-none mb-2"
              aria-hidden="true"
            >
              &ldquo;
            </div>
            <blockquote>
              <p className="font-serif text-2xl md:text-3xl text-charcoal leading-relaxed mb-6">
                Each one must give as he has decided in his heart, not reluctantly or
                under compulsion, for God loves a cheerful giver.
              </p>
              <footer className="font-sans text-charcoal/70 font-medium tracking-wide text-sm uppercase">
                2 Corinthians 9:7 (ESV)
              </footer>
            </blockquote>
          </motion.div>
        </div>
      </section>

      {/* Section 4: Questions */}
      <section className="bg-white py-16 md:py-24">
        <div className="container-hope">
          <div className="max-w-xl mx-auto text-center">
            <motion.p
              {...fadeUp}
              transition={{ duration: 0.5 }}
              className="section-label mb-4"
            >
              Need Help?
            </motion.p>
            <motion.h2
              {...fadeUp}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-serif text-3xl md:text-4xl text-charcoal mb-5"
            >
              Questions about giving?
            </motion.h2>
            <motion.p
              {...fadeUp}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-text-secondary text-lg leading-relaxed mb-10"
            >
              We're happy to help. Reach out to our office and someone will get back
              to you within one business day.
            </motion.p>
            <motion.div
              {...fadeUp}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Link href="/contact" className="btn-primary">
                Contact Us
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}

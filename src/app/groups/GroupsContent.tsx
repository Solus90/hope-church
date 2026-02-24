"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { SanityHomeGroup } from "@/sanity/types";

interface Props {
  groups: SanityHomeGroup[];
}

interface Pillar {
  heading: string;
  body: string;
}

const PILLARS: Pillar[] = [
  {
    heading: "Know & Be Known",
    body: "You can't truly belong to a community you never actually see. Groups are where the anonymity of Sunday morning becomes real relationship.",
  },
  {
    heading: "Grow Together",
    body: "We study Scripture, pray for one another, and help each other apply the gospel to real life. Iron sharpens iron.",
  },
  {
    heading: "Serve Together",
    body: "Groups don't just exist for themselves. Each group is connected to Hope's broader mission — and regularly looks outward together.",
  },
];

function PillarCard({ pillar, index }: { pillar: Pillar; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex flex-col gap-3"
    >
      <div className="divider-gold" />
      <h3 className="font-serif text-xl text-charcoal">{pillar.heading}</h3>
      <p className="font-sans text-text-secondary leading-relaxed">
        {pillar.body}
      </p>
    </motion.div>
  );
}

function TypeBadge({ type }: { type: string }) {
  return (
    <span className="inline-block font-sans text-xs font-semibold tracking-wide uppercase px-3 py-1 bg-brand/10 text-brand">
      {type}
    </span>
  );
}

function GroupCard({ group }: { group: SanityHomeGroup }) {
  const contactHref = `/contact?interest=${encodeURIComponent(group.name)}`;

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5 }}
      className="bg-white border border-stone-200 p-6 flex flex-col gap-4"
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-serif text-xl text-charcoal leading-snug">
          {group.name}
        </h3>
        {group.type && <TypeBadge type={group.type} />}
      </div>

      {group.schedule && (
        <div className="flex items-center gap-2">
          <svg
            className="w-4 h-4 text-text-secondary flex-shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <span className="font-sans text-sm text-text-secondary">
            {group.schedule}
          </span>
        </div>
      )}

      {group.description && (
        <p className="font-sans text-sm text-text-secondary leading-relaxed line-clamp-3">
          {group.description}
        </p>
      )}

      <div className="mt-auto pt-4 border-t border-stone-100">
        <Link
          href={contactHref}
          className="inline-flex items-center gap-2 font-sans text-sm font-semibold text-brand hover:text-brand-dark transition-colors"
        >
          Express Interest
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </Link>
      </div>
    </motion.article>
  );
}

function WhatAreGroupsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container-hope">
        <div className="max-w-3xl mb-16">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="section-label text-brand mb-4"
          >
            Home Groups
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl text-charcoal leading-tight mb-6"
          >
            Community is not optional.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-sans text-lg text-text-secondary leading-relaxed"
          >
            Sunday morning is the gathering of the whole church. But the real
            work of community happens in smaller circles — in homes, over meals,
            in the everyday rhythms of life. That&apos;s what Home Groups are
            for.
          </motion.p>
        </div>

        {/* Three pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {PILLARS.map((pillar, i) => (
            <PillarCard key={pillar.heading} pillar={pillar} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SignUpCTA() {
  return (
    <section className="py-20 bg-brand-dark relative overflow-hidden">
      <div className="grain-overlay" aria-hidden="true" />
      <div className="container-hope relative z-10 text-center max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="divider-gold mx-auto mb-6"
        />
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-serif text-4xl text-white mb-4 leading-tight"
        >
          Ready to find a group?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="font-sans text-white/75 text-lg leading-relaxed mb-10"
        >
          Tell us a bit about yourself and we&apos;ll connect you with the
          right group.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link href="/contact" className="btn-primary">
            Find a Group
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default function GroupsContent({ groups }: Props) {
  if (groups.length === 0) {
    return (
      <>
        <WhatAreGroupsSection />

        {/* Empty state */}
        <section
          className="py-16 border-t border-stone-100"
          style={{ backgroundColor: "rgba(203,184,157,0.15)" }}
        >
          <div className="container-hope text-center">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="section-label text-text-secondary mb-4"
            >
              Coming Soon
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-serif text-3xl text-charcoal mb-4"
            >
              Groups launching soon.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="font-sans text-text-secondary max-w-md mx-auto mb-8"
            >
              We are actively forming Home Groups across Columbus. Sign up below
              and we will reach out as soon as groups are ready.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <Link href="/contact" className="btn-primary">
                Get Notified
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </motion.div>
          </div>
        </section>

        <SignUpCTA />
      </>
    );
  }

  return (
    <>
      <WhatAreGroupsSection />

      {/* ── Groups Grid ───────────────────────────────────────────── */}
      <section className="py-16 bg-white border-t border-stone-100">
        <div className="container-hope">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="section-label text-brand mb-10"
          >
            Find Your Group
          </motion.p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {groups.map((group) => (
              <GroupCard key={group._id} group={group} />
            ))}
          </div>
        </div>
      </section>

      <SignUpCTA />
    </>
  );
}

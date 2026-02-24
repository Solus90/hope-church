"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { SanityStaffMember } from "@/sanity/types";

interface Props {
  staff: SanityStaffMember[];
}

const CATEGORY_ORDER = [
  "Pastoral Staff",
  "Ministry Staff",
  "Elders",
  "Deacons",
] as const;

type Category = (typeof CATEGORY_ORDER)[number];

function getInitials(name: string): string {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((n) => n[0].toUpperCase())
    .join("");
}

function StaffCard({ member }: { member: SanityStaffMember }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5 }}
      className="bg-white border border-stone-200 flex flex-col"
    >
      {/* Photo or initials placeholder */}
      <div className="aspect-square w-full overflow-hidden bg-brand/10 relative">
        {member.photoUrl ? (
          <img
            src={member.photoUrl}
            alt={member.name}
            className="w-full h-full object-cover object-top"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-20 h-20 rounded-full bg-brand flex items-center justify-center">
              <span className="font-serif text-white text-2xl">
                {getInitials(member.name)}
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Details */}
      <div className="p-5 flex flex-col gap-1 flex-1">
        <h3 className="font-serif text-xl text-charcoal leading-snug">
          {member.name}
        </h3>
        <p className="font-sans text-sm text-text-secondary">{member.role}</p>
        {member.email && (
          <a
            href={`mailto:${member.email}`}
            className="font-sans text-xs text-brand hover:text-brand-dark transition-colors mt-2 break-all"
          >
            {member.email}
          </a>
        )}
      </div>
    </motion.div>
  );
}

function EmptyState() {
  return (
    <section className="py-24 bg-white">
      <div className="container-hope text-center">
        <p className="section-label text-text-secondary mb-4">Leadership</p>
        <h2 className="font-serif text-3xl text-charcoal mb-4">
          Leadership bios coming soon
        </h2>
        <p className="font-sans text-text-secondary max-w-md mx-auto">
          We are working on adding our team profiles. Check back soon, or{" "}
          <Link href="/contact" className="text-brand hover:underline">
            contact us
          </Link>{" "}
          if you have questions.
        </p>
      </div>
    </section>
  );
}

export default function LeadershipContent({ staff }: Props) {
  // Group staff by category
  const grouped = CATEGORY_ORDER.reduce<Record<Category, SanityStaffMember[]>>(
    (acc, cat) => {
      acc[cat] = staff.filter((s) => s.category === cat);
      return acc;
    },
    {
      "Pastoral Staff": [],
      "Ministry Staff": [],
      Elders: [],
      Deacons: [],
    }
  );

  const hasAnyStaff = staff.length > 0;
  const hasElders = grouped["Elders"].length > 0;

  return (
    <>
      {/* ── Introduction ──────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="container-hope max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="section-label text-brand mb-4"
          >
            Our Team
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl text-charcoal mb-6 leading-tight"
          >
            Meet the people who shepherd Hope.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-sans text-lg text-text-secondary leading-relaxed"
          >
            Hope is led by a team of pastors and elders who are committed to the
            Word of God and the welfare of this congregation. Below is our
            pastoral staff, ministry team, elders, and deacons.
          </motion.p>
        </div>
      </section>

      {/* ── Staff Grid (or empty state) ────────────────────────────── */}
      {!hasAnyStaff ? (
        <EmptyState />
      ) : (
        <>
          {CATEGORY_ORDER.map((category) => {
            const members = grouped[category];
            if (members.length === 0) return null;

            // Skip Elders from here — rendered after the dark Elders intro block
            if (category === "Elders") return null;

            return (
              <section key={category} className="py-16 bg-white border-t border-stone-100">
                <div className="container-hope">
                  <p className="section-label text-brand mb-10">{category}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {members.map((member) => (
                      <StaffCard key={member._id} member={member} />
                    ))}
                  </div>
                </div>
              </section>
            );
          })}

          {/* ── Elders Intro (bg-brand-dark) ────────────────────────── */}
          {hasElders && (
            <>
              <section className="py-20 bg-brand-dark relative overflow-hidden">
                <div className="grain-overlay" aria-hidden="true" />
                <div className="container-hope relative z-10 max-w-3xl">
                  <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="divider-gold mb-6"
                  />
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="font-serif text-4xl md:text-5xl text-white mb-6 leading-tight"
                  >
                    Our Elders
                  </motion.h2>
                  <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="font-sans text-lg text-white/80 leading-relaxed"
                  >
                    Hope is governed by a plurality of elders — pastors and
                    ruling elders who share responsibility for the spiritual
                    oversight of the congregation. This is the Presbyterian
                    model of church governance.
                  </motion.p>
                </div>
              </section>

              {/* Elders grid — on white */}
              <section className="py-16 bg-white">
                <div className="container-hope">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {grouped["Elders"].map((member) => (
                      <StaffCard key={member._id} member={member} />
                    ))}
                  </div>
                </div>
              </section>
            </>
          )}

          {/* ── Deacons ─────────────────────────────────────────────── */}
          {grouped["Deacons"].length > 0 && (
            <section className="py-16 bg-white border-t border-stone-100">
              <div className="container-hope">
                <p className="section-label text-brand mb-10">Deacons</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {grouped["Deacons"].map((member) => (
                    <StaffCard key={member._id} member={member} />
                  ))}
                </div>
              </div>
            </section>
          )}
        </>
      )}

      {/* ── CTA ───────────────────────────────────────────────────── */}
      <section className="py-16" style={{ backgroundColor: "rgba(203,184,157,0.15)" }}>
        <div className="container-hope text-center">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-serif text-3xl text-charcoal mb-4"
          >
            Questions? Get in touch.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-sans text-text-secondary mb-8"
          >
            We would love to hear from you.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link href="/contact" className="btn-primary">
              Contact Us
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
    </>
  );
}

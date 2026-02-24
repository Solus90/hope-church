"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { SanityHomeGroup } from "@/sanity/types";

interface Props {
  groups: SanityHomeGroup[];
}

export default function HomeGroups({ groups }: Props) {
  if (groups.length === 0) return null;

  return (
    <section className="py-24 bg-harbor">
      <div className="container-hope">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: copy */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-28"
          >
            <p className="section-label text-brand mb-3">Community</p>
            <div className="divider-gold mb-6" />
            <h2
              className="font-serif text-charcoal mb-5"
              style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)" }}
            >
              Life is better together.
            </h2>
            <p className="font-sans text-charcoal/70 leading-relaxed mb-5 max-w-md">
              Hope is a church <em>of</em> home groups — not just a church <em>with</em> home
              groups. The best version of this community is experienced around someone&apos;s
              table, not just in the main gathering.
            </p>
            <p className="font-sans text-charcoal/70 leading-relaxed mb-10 max-w-md">
              Groups meet throughout the week across Columbus. Each one is
              different — different leaders, different rhythms, different mixes of
              people. All of them are trying to do the same thing: seek the truth
              and grace of Jesus together.
            </p>
            <Link href="/groups" className="btn-primary">
              Find a Home Group
            </Link>
          </motion.div>

          {/* Right: group list */}
          <div className="space-y-3">
            {groups.map((group, i) => {
              const href = group.slug ? `/groups/${group.slug}` : "/groups";
              return (
                <motion.div
                  key={group._id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                >
                  <Link
                    href={href}
                    className="group flex items-center justify-between p-5 border border-stone hover:border-brand transition-colors duration-200"
                  >
                    <div>
                      <p className="font-serif text-charcoal text-lg group-hover:text-brand transition-colors duration-200">
                        {group.name}
                      </p>
                      <p className="font-sans text-sm text-charcoal/50 mt-0.5">
                        {group.schedule}
                        {group.type && (
                          <>
                            {" · "}
                            <span className="text-charcoal/40">{group.type}</span>
                          </>
                        )}
                      </p>
                    </div>
                    <svg
                      className="w-4 h-4 text-charcoal/30 group-hover:text-brand group-hover:translate-x-1 transition-all duration-200"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

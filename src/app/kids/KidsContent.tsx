"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface KidsContentProps {
  heroImageUrl?: string | null;
}

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const ageGroups = [
  {
    range: "0–2",
    label: "Nursery",
    body: "A safe, loving environment for infants and toddlers. Staffed by trained volunteers who love caring for little ones.",
    color: "bg-brand/10 text-brand",
  },
  {
    range: "3–5",
    label: "Preschool",
    body: "Simple Bible stories, worship songs, and hands-on activities for our youngest learners. Big truths in small packages.",
    color: "bg-gold/15 text-gold",
  },
  {
    range: "K–2nd",
    label: "Elementary",
    body: "Age-appropriate Bible teaching, games, and discussions that connect Scripture to everyday life. We take kids seriously as people with real faith.",
    color: "bg-sandstone/40 text-charcoal",
  },
  {
    range: "3rd–5th",
    label: "OKC — Older Kids Class",
    body: "Deeper Bible study, meaningful discussion, and age-appropriate discipleship for our older elementary students. Building a foundation for a lifetime of faith.",
    color: "bg-sprout/15 text-charcoal",
  },
];

const safetyPoints = [
  {
    label: "Background checked volunteers",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <path
          d="M11 2L3 6v5c0 4.97 3.47 9.62 8 10.93C16.53 20.62 20 15.97 20 11V6l-9-4z"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinejoin="round"
        />
        <path
          d="M7.5 11l2.5 2.5 4.5-4.5"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: "Secure check-in system",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <rect x="4" y="10" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.75" />
        <path
          d="M7 10V7a4 4 0 0 1 8 0v3"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
        <circle cx="11" cy="15" r="1.25" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: "Trained staff every Sunday",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <circle cx="11" cy="7" r="3.5" stroke="currentColor" strokeWidth="1.75" />
        <path
          d="M4 19c0-3.866 3.134-7 7-7h.5c3.866 0 7 3.134 7 7"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

const firstSundaySteps = [
  {
    step: 1,
    title: "Arrive by 9:45am",
    body: "Check-in opens 15 minutes before the service on the lower level.",
  },
  {
    step: 2,
    title: "Check your child in",
    body: "Our team will help you check your child in and give them a name tag. First-timers get a little welcome gift too.",
  },
  {
    step: 3,
    title: "Enjoy the service",
    body: "Head upstairs to the main service knowing your child is safe, happy, and learning about Jesus.",
  },
  {
    step: 4,
    title: "Pick up after service",
    body: "Come back to the check-in area after the service. You'll need your matching tag to pick up your child.",
  },
];

export default function KidsContent({ heroImageUrl }: KidsContentProps) {
  return (
    <main>
      {/* Hero image (Sanity) */}
      {heroImageUrl && (
        <div className="relative h-64 md:h-80 w-full overflow-hidden">
          <img src={heroImageUrl} alt="Hope Kids" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-brand-dark/60" />
        </div>
      )}

      {/* ── Section 1: Welcome ── */}
      <section className="bg-white py-16 md:py-24">
        <div className="container-hope">
          <div className="max-w-3xl">
            <motion.p {...fadeUp} transition={{ duration: 0.5 }} className="section-label mb-4">
              Hope Kids
            </motion.p>
            <motion.h1
              {...fadeUp}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-serif text-4xl md:text-5xl text-charcoal mb-6"
            >
              A place for your kids to belong.
            </motion.h1>
            <motion.p
              {...fadeUp}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-text-secondary text-lg md:text-xl leading-relaxed mb-6"
            >
              Hope Kids is our Sunday programme for children from birth through 5th grade. It
              runs during the sermon portion of our Sunday service, so parents can fully engage
              in worship while their kids have an age-appropriate experience of their own.
            </motion.p>
            <motion.div
              {...fadeUp}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="inline-flex items-start gap-3 bg-brand/8 border border-brand/20 rounded-xl px-5 py-4"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                className="text-brand mt-0.5 shrink-0"
                aria-hidden="true"
              >
                <circle cx="10" cy="10" r="8.5" stroke="currentColor" strokeWidth="1.5" />
                <path
                  d="M10 9v5M10 7v.5"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                />
              </svg>
              <p className="text-charcoal/80 text-sm leading-relaxed">
                <strong className="font-semibold">Children are always welcome in the main service.</strong>{" "}
                We have a family room available if you need a quieter space.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Section 2: Age Groups (4 classes) ── */}
      <section className="bg-white pb-16 md:pb-24">
        <div className="container-hope">
          <motion.h2
            {...fadeUp}
            transition={{ duration: 0.5 }}
            className="font-serif text-2xl md:text-3xl text-charcoal mb-10"
          >
            Hope Kids classes
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ageGroups.map((group, index) => (
              <motion.div
                key={group.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="border border-gray-200 rounded-2xl p-7 hover:shadow-md transition-shadow duration-300 flex flex-col"
              >
                <div
                  className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-sans font-semibold tracking-wide mb-4 self-start ${group.color}`}
                >
                  {group.range}
                </div>
                <h3 className="font-serif text-xl text-charcoal mb-3">{group.label}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{group.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 3: Hope Youth ── */}
      <section className="bg-brand-dark py-16 md:py-24">
        <div className="container-hope">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div {...fadeUp} transition={{ duration: 0.5 }}>
              <p className="section-label text-gold/80 mb-4">Hope Youth</p>
              <h2 className="font-serif text-3xl md:text-4xl text-white mb-6 leading-tight">
                For students in 6th–12th grade.
              </h2>
              <p className="text-white/85 text-lg leading-relaxed mb-6">
                Youth in 6th–12th grade are encouraged to participate in the entire worship
                experience on Sunday mornings, including the sermon. With parental permission,
                they can also serve on one of Hope's ministry teams — including Hope Kids.
              </p>
              <p className="text-white/75 leading-relaxed mb-10">
                Hope offers a regular youth group on select Sunday evenings to continue the
                faith formation of students in middle school and high school. Check our calendar
                to see when we're meeting next.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/events" className="btn-primary">
                  See Calendar
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <a
                  href="mailto:wes@hopechurchcolumbus.org"
                  className="btn-outline"
                >
                  Contact Wes Piehl
                </a>
              </div>
            </motion.div>

            {/* Info cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  icon: (
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
                      <path d="M12 2L3 7l9 5 9-5-9-5z" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round" />
                      <path d="M3 12l9 5 9-5" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round" />
                      <path d="M3 17l9 5 9-5" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round" />
                    </svg>
                  ),
                  title: "Grades 6–12",
                  body: "Sunday morning worship together with the full congregation, including the sermon.",
                },
                {
                  icon: (
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
                      <circle cx="11" cy="11" r="9" stroke="currentColor" strokeWidth="1.75" />
                      <path d="M11 7v4l3 3" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  ),
                  title: "Sunday Evenings",
                  body: "Select Sunday evenings — youth group gatherings for middle and high school students.",
                },
                {
                  icon: (
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                      <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="1.75" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  ),
                  title: "Serve the Church",
                  body: "With parental permission, youth can serve on Hope's ministry teams, including Hope Kids.",
                },
                {
                  icon: (
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round" />
                      <path d="M22 6l-10 7L2 6" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  ),
                  title: "Questions?",
                  body: (
                    <>
                      Contact{" "}
                      <a
                        href="mailto:wes@hopechurchcolumbus.org"
                        className="text-gold underline underline-offset-2 hover:no-underline"
                      >
                        Wes Piehl
                      </a>{" "}
                      at wes@hopechurchcolumbus.org
                    </>
                  ),
                },
              ].map((card, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="bg-white/[0.06] border border-white/10 rounded-xl p-6"
                >
                  <div className="w-10 h-10 rounded-full bg-gold/20 text-gold flex items-center justify-center mb-4">
                    {card.icon}
                  </div>
                  <h3 className="font-serif text-lg text-white mb-2">{card.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed">{card.body}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 4: Safety ── */}
      <section className="bg-white py-16 md:py-24">
        <div className="container-hope">
          <div className="max-w-3xl mx-auto">
            <motion.p {...fadeUp} transition={{ duration: 0.5 }} className="section-label mb-4">
              Child Safety
            </motion.p>
            <motion.h2
              {...fadeUp}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-serif text-3xl md:text-4xl text-charcoal mb-6"
            >
              Your child's safety is our first priority.
            </motion.h2>
            <motion.p
              {...fadeUp}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-text-secondary text-lg leading-relaxed mb-12"
            >
              Every Hope Kids volunteer undergoes a background check and training before working
              with children. We use a secure check-in system and no child leaves with anyone
              other than their checked-in guardian.
            </motion.p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {safetyPoints.map((point, index) => (
                <motion.div
                  key={point.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex flex-col items-center text-center gap-4 bg-brand/5 border border-brand/15 rounded-2xl p-6"
                >
                  <div className="w-11 h-11 rounded-full bg-brand/10 text-brand flex items-center justify-center">
                    {point.icon}
                  </div>
                  <p className="text-charcoal font-sans text-sm font-medium leading-snug">
                    {point.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 5: First Sunday ── */}
      <section className="bg-sandstone/20 py-16 md:py-24">
        <div className="container-hope">
          <div className="max-w-3xl mx-auto">
            <motion.p {...fadeUp} transition={{ duration: 0.5 }} className="section-label mb-4">
              First Time
            </motion.p>
            <motion.h2
              {...fadeUp}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-serif text-3xl md:text-4xl text-charcoal mb-12"
            >
              First time? Here's what to do.
            </motion.h2>
            <div className="flex flex-col gap-0">
              {firstSundaySteps.map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-6 pb-10 last:pb-0 relative"
                >
                  {index < firstSundaySteps.length - 1 && (
                    <div
                      className="absolute left-[19px] top-10 bottom-0 w-px bg-brand/20"
                      aria-hidden="true"
                    />
                  )}
                  <div className="shrink-0 w-10 h-10 rounded-full bg-brand text-white font-sans font-bold text-sm flex items-center justify-center z-10">
                    {item.step}
                  </div>
                  <div className="pt-1.5">
                    <h3 className="font-serif text-xl text-charcoal mb-2">{item.title}</h3>
                    <p className="text-text-secondary leading-relaxed">{item.body}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 6: CTA ── */}
      <section className="bg-brand py-16 md:py-24">
        <div className="container-hope">
          <div className="max-w-xl mx-auto text-center">
            <motion.p
              {...fadeUp}
              transition={{ duration: 0.5 }}
              className="section-label mb-4 text-white/70"
            >
              Join Us
            </motion.p>
            <motion.h2
              {...fadeUp}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-serif text-3xl md:text-4xl text-white mb-5"
            >
              Ready to bring your family?
            </motion.h2>
            <motion.p
              {...fadeUp}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-white/85 text-lg leading-relaxed mb-10"
            >
              Plan a visit and let us know you're coming. We'll make sure your kids have a
              great first Sunday.
            </motion.p>
            <motion.div
              {...fadeUp}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Link
                href="/visit"
                className="inline-flex items-center gap-2 bg-white text-brand hover:bg-white/90 transition-colors duration-300 font-sans font-semibold px-7 py-3.5 rounded-full text-sm tracking-wide"
              >
                Plan a Visit
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
          </div>
        </div>
      </section>
    </main>
  );
}

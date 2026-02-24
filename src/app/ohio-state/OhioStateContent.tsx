"use client";

import Link from "next/link";
import { motion } from "framer-motion";

// OSU Scarlet — used as a page-level accent alongside the Hope brand
const OSU_SCARLET = "#BA0C2F";

const whoIsHere = [
  {
    tag: "Undergraduates",
    title: "Figuring out what you believe?",
    desc: "College is when the big questions get real. Hope is a place to bring them honestly — and find people who've wrestled with the same ones. We're not afraid of doubt, and we're not interested in easy answers.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
  },
  {
    tag: "Graduate Students",
    title: "In Columbus longer than you planned?",
    desc: "Grad school is isolating — you're past the freshman dorm but not yet settled. Hope has a real community of grad students and young professionals who understand that in-between season.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    ),
  },
  {
    tag: "Faculty & Staff",
    title: "Making Columbus home?",
    desc: "Many of our members are faculty and staff at Ohio State. Hope is where the work of the campus and the life of the city come together — rooted in Jesus, grounded in this neighborhood.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
      </svg>
    ),
  },
];

const serviceDetails = [
  { label: "When", value: "Sundays at 10:00 AM" },
  { label: "Where", value: "Nationwide & Ohio Farm Bureau 4-H Center" },
  { label: "Address", value: "2201 Fred Taylor Dr, Columbus, OH 43210" },
  { label: "Phone", value: "614-526-4194" },
];

interface Props {
  heroImageUrl?: string | null;
}

export default function OhioStateContent({ heroImageUrl }: Props) {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative min-h-[80vh] flex items-end overflow-hidden bg-brand-dark pt-[108px]">
        {/* Background image — only rendered when an image is set in Sanity */}
        {heroImageUrl && (
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${heroImageUrl}')` }}
            aria-hidden="true"
          />
        )}
        {/* Brand-dark overlay — always present; doubles as solid bg when no image */}
        <div className="absolute inset-0 bg-brand-dark/75" aria-hidden="true" />
        {/* Bottom fade into next section */}
        <div
          className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
          style={{ background: "linear-gradient(to top, rgba(23,58,74,0.9) 0%, transparent 100%)" }}
          aria-hidden="true"
        />
        {/* OSU Scarlet top rule — just below the navbar */}
        <div
          className="absolute top-[108px] left-0 right-0 h-[3px]"
          style={{ backgroundColor: OSU_SCARLET }}
          aria-hidden="true"
        />
        <div className="grain-overlay" aria-hidden="true" />

        <div className="container-hope relative z-10 pb-24">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="section-label text-white/60 mb-5"
          >
            Hope Presbyterian Church · Ohio State
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-serif text-white leading-[1.1] mb-5"
            style={{ fontSize: "clamp(2.75rem, 6vw, 5rem)" }}
          >
            Hope at Ohio State.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-sans text-white/75 text-xl max-w-xl mb-10 leading-relaxed"
          >
            Not just <em>near</em> the campus —{" "}
            <em>for</em> the campus.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-wrap gap-4"
          >
            <Link href="/visit" className="btn-primary">
              Plan a Visit
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <a
              href="https://www.cru.org"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              Learn About Cru
            </a>
          </motion.div>
        </div>
      </section>

      {/* ─── FOR THE CAMPUS ─── */}
      <section className="py-24 bg-harbor">
        <div className="container-hope">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Copy */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="section-label text-brand mb-3">Our Posture</p>
              <div className="divider-gold mb-6" />
              <h2
                className="font-serif text-charcoal mb-6"
                style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)" }}
              >
                The university is central to Columbus. It should be central to our church, too.
              </h2>
              <p className="font-sans text-charcoal/70 leading-relaxed mb-5">
                Ohio State plays an integral and significant role in the life of this city. Hope exists to extend the welcome of Jesus across Columbus — and that means the campus is part of our mission, not an afterthought.
              </p>
              <p className="font-sans text-charcoal/70 leading-relaxed mb-10">
                Our congregation includes OSU faculty, staff, graduate students, and undergrads. You won't be the only one, and you won't feel out of place. We've built something for people who take both faith and real life seriously.
              </p>
              <Link href="/visit" className="btn-primary">Join Us This Sunday</Link>
            </motion.div>

            {/* Stats grid */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-px bg-stone"
            >
              {[
                {
                  num: "60K+",
                  label: "Students at Ohio State",
                  sub: "One of the largest universities in the U.S.",
                },
                {
                  num: "1950s",
                  label: "Cru at OSU since",
                  sub: "Decades of campus ministry presence",
                },
                {
                  num: "10 AM",
                  label: "Every Sunday",
                  sub: "At the 4-H Center, just off campus",
                },
                {
                  num: "EPC",
                  label: "Denomination",
                  sub: "Evangelical Presbyterian Church",
                },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="bg-white p-8"
                >
                  <p className="font-serif text-charcoal mb-1" style={{ fontSize: "clamp(1.75rem, 3vw, 2.25rem)" }}>
                    {stat.num}
                  </p>
                  <p className="font-sans text-xs font-semibold tracking-widest uppercase text-brand mb-2">
                    {stat.label}
                  </p>
                  <p className="font-sans text-xs text-charcoal/50 leading-relaxed">{stat.sub}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── WHO'S HERE ─── */}
      <section className="py-24 bg-white">
        <div className="container-hope">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <p className="section-label text-brand mb-3">You'll fit in</p>
            <h2
              className="font-serif text-charcoal"
              style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)" }}
            >
              People from every part of Ohio State are here.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {whoIsHere.map((card, i) => (
              <motion.div
                key={card.tag}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group bg-harbor flex flex-col hover:shadow-xl transition-shadow duration-300"
              >
                {/* OSU Scarlet top accent bar */}
                <div className="h-1" style={{ backgroundColor: OSU_SCARLET }} />
                <div className="p-8 flex flex-col flex-1">
                  <div className="w-12 h-12 bg-stone flex items-center justify-center text-brand mb-5">
                    {card.icon}
                  </div>
                  <p className="section-label text-charcoal/50 mb-2">{card.tag}</p>
                  <h3 className="font-serif text-charcoal text-2xl mb-3">{card.title}</h3>
                  <p className="font-sans text-sm text-charcoal/70 leading-relaxed mb-8 flex-1">
                    {card.desc}
                  </p>
                  <Link
                    href="/visit"
                    className="group/link inline-flex items-center gap-2 font-sans text-sm font-semibold text-brand hover:text-brand-dark transition-colors"
                  >
                    Plan a Visit
                    <svg
                      className="w-4 h-4 transition-transform group-hover/link:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CRU PARTNERSHIP ─── */}
      <section className="relative py-28 overflow-hidden bg-brand">
        <div className="grain-overlay" aria-hidden="true" />
        {/* OSU Scarlet left border */}
        <div
          className="absolute top-0 left-0 bottom-0 w-1"
          style={{ backgroundColor: OSU_SCARLET }}
          aria-hidden="true"
        />

        <div className="container-hope relative z-10">
          <div className="max-w-[760px] mx-auto lg:mx-0">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-label text-white/60 mb-5"
            >
              Our Partnership
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-serif text-white mb-6"
              style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)", lineHeight: 1.15 }}
            >
              Church and campus,
              <br />
              <span className="text-gold">working together.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="font-sans text-white/70 leading-relaxed text-lg mb-5 max-w-[560px]"
            >
              Hope is a church partner with the ministry of Cru at The Ohio State University. Cru is a Christian organization with a presence at OSU since the late 1950s — their mission is to help everyone at OSU know someone who truly follows Jesus.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25 }}
              className="font-sans text-white/70 leading-relaxed text-lg mb-10 max-w-[560px]"
            >
              Many of our leaders are Cru alumni. We don't duplicate what they do — we extend it. Cru reaches the campus; Hope offers a local church community where those roots can grow for the long haul.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Link href="/visit" className="btn-primary">
                Come This Sunday
              </Link>
              <a
                href="https://www.cru.org/us/en/communities/college/ohio-state.html"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                Visit Cru at OSU
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── GATHER WITH US ─── */}
      <section className="py-24 bg-harbor">
        <div className="container-hope">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Copy + details */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="section-label text-brand mb-3">Gather With Us</p>
              <div className="divider-gold mb-6" />
              <h2
                className="font-serif text-charcoal mb-6"
                style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)" }}
              >
                You&apos;re welcome here. Come find out for yourself.
              </h2>
              <p className="font-sans text-charcoal/70 leading-relaxed mb-10">
                We meet every Sunday at 10am at the Nationwide &amp; Ohio Farm Bureau 4-H Center — just off campus on Fred Taylor Drive. Whether you&apos;re exploring faith for the first time or looking for a church home you can actually commit to, show up. We&apos;ll be there.
              </p>

              <div className="space-y-5 mb-10">
                {serviceDetails.map(({ label, value }) => (
                  <div key={label} className="flex gap-5 items-start">
                    <span
                      className="font-sans text-xs font-semibold tracking-widest uppercase text-brand mt-0.5 shrink-0"
                      style={{ width: "4rem" }}
                    >
                      {label}
                    </span>
                    <span className="font-sans text-sm text-charcoal/70 leading-relaxed">{value}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <Link href="/visit" className="btn-primary">
                  Plan Your Visit
                </Link>
                <a
                  href="mailto:operations@hopechurchcolumbus.org"
                  className="btn-outline-dark"
                >
                  Email Us
                </a>
              </div>
            </motion.div>

            {/* Visual panel */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative aspect-[4/3] bg-brand overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-35 group-hover:opacity-45 transition-opacity duration-300"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1562774053-701939374585?w=900&q=80')",
                  }}
                  aria-hidden="true"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center px-8">
                    {/* Pin icon with OSU Scarlet */}
                    <div
                      className="w-16 h-16 mx-auto mb-5 flex items-center justify-center"
                      style={{ backgroundColor: OSU_SCARLET }}
                    >
                      <svg
                        className="w-8 h-8 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.5}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                      </svg>
                    </div>
                    <p className="font-serif text-white text-2xl mb-1">4-H Center</p>
                    <p className="font-sans text-white/60 text-sm mb-1">2201 Fred Taylor Dr</p>
                    <p className="font-sans text-white/40 text-xs">Columbus, OH 43210</p>
                  </div>
                </div>
              </div>

              {/* Gold accent bar */}
              <div className="h-1 bg-gold" />

              {/* Directions link */}
              <a
                href="https://maps.google.com/?q=2201+Fred+Taylor+Dr+Columbus+OH+43210"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 font-sans text-sm font-semibold text-brand hover:text-brand-dark transition-colors"
              >
                Get Directions in Google Maps
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── CONTACT STRIP ─── */}
      <section className="py-20 bg-brand-dark">
        <div className="container-hope text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="section-label text-white/60 mb-4">Questions?</p>
            <h2
              className="font-serif text-white mb-4"
              style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}
            >
              We&apos;d love to talk before you come.
            </h2>
            <p className="font-sans text-white/60 max-w-md mx-auto mb-8 leading-relaxed">
              Reach out any time — a pastor or ministry leader will respond within a business day.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="mailto:operations@hopechurchcolumbus.org" className="btn-primary">
                Email Us
              </a>
              <a href="tel:+16145264194" className="btn-outline">
                614-526-4194
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

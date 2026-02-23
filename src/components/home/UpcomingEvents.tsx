"use client";

import Link from "next/link";
import { motion } from "framer-motion";

// In production this would pull from the Planning Center API
const events = [
  {
    date: { month: "MAR", day: "1" },
    title: "Newcomers Brunch",
    time: "11:30 AM",
    location: "Outside the Worship Space",
    desc: "Grab a donut and meet the pastoral team. No commitment required.",
    href: "/events",
  },
  {
    date: { month: "MAR", day: "8" },
    title: "Hope Kids Volunteer Training",
    time: "9:00 AM",
    location: "Room 104",
    desc: "New volunteer orientation for the spring semester. Contact Wes to RSVP.",
    href: "/events",
  },
  {
    date: { month: "MAR", day: "15" },
    title: "Home Group Leaders Gathering",
    time: "6:00 PM",
    location: "Joe & Amanda Haack's Home",
    desc: "Annual leaders meeting — vision, training, and community.",
    href: "/events",
  },
  {
    date: { month: "MAR", day: "22" },
    title: "She Has A Name Fundraiser Dinner",
    time: "6:30 PM",
    location: "The 4-H Center",
    desc: "Supporting our anti-trafficking ministry partner. Tickets available online.",
    href: "/events",
  },
];

export default function UpcomingEvents() {
  return (
    <section className="py-24 bg-brand-dark text-white">
      <div className="container-hope">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="section-label text-white/60 mb-3">What&apos;s Happening</p>
            <h2
              className="font-serif text-white leading-tight"
              style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)" }}
            >
              Upcoming Events
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link href="/events" className="btn-outline text-white border-white/30 hover:border-white hover:text-white hover:bg-white/10">
              See All Events
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/10">
          {events.map((event, i) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-brand-dark p-8 hover:bg-brand-light transition-colors duration-200 group"
            >
              <div className="flex gap-6">
                {/* Date block */}
                <div className="shrink-0 text-center w-14">
                  <p className="font-sans text-[10px] font-semibold tracking-[0.15em] uppercase text-white/50">
                    {event.date.month}
                  </p>
                  <p className="font-serif text-4xl text-white leading-none">
                    {event.date.day}
                  </p>
                </div>
                {/* Content */}
                <div className="flex-1 border-l border-white/10 pl-6">
                  <h3 className="font-serif text-xl text-white mb-1 group-hover:text-white/80 transition-colors duration-200">
                    {event.title}
                  </h3>
                  <p className="font-sans text-xs text-white/50 mb-3">
                    {event.time} · {event.location}
                  </p>
                  <p className="font-sans text-sm text-white/60 leading-relaxed">
                    {event.desc}
                  </p>
                  <Link
                    href={event.href}
                    className="mt-4 inline-flex items-center gap-1.5 font-sans text-xs font-semibold text-white/70 hover:text-white transition-colors"
                  >
                    Learn more
                    <svg className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

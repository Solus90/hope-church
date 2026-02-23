"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const audiences = [
  {
    tag: "First Timer",
    title: "New to Hope?",
    desc:
      "We know walking into a new church can feel intimidating. Here's everything you need to feel comfortable before you arrive.",
    cta: "Plan Your First Visit",
    href: "/visit",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    accent: "bg-gold",
  },
  {
    tag: "Families",
    title: "Bringing the Kids?",
    desc:
      "Jesus has a high view of children — so do we. Hope Kids offers safe, joyful, age-appropriate Sunday morning classes from nursery through 5th grade.",
    cta: "Learn About Hope Kids",
    href: "/kids",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    accent: "bg-brand",
  },
  {
    tag: "OSU Community",
    title: "Connected to Ohio State?",
    desc:
      "Hope is a church for the campus — not just near it. With faculty, grad students, and undergrads woven into our community, you won't be the only one.",
    cta: "See the OSU Page",
    href: "/ohio-state",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
    accent: "bg-gold",
  },
];

export default function AudienceCards() {
  return (
    <section className="py-24 bg-harbor">
      <div className="container-hope">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="section-label mb-3">Where do you fit?</p>
          <h2 className="font-serif text-charcoal" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)" }}>
            Everyone has a place here.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {audiences.map((card, i) => (
            <motion.div
              key={card.tag}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-white flex flex-col hover:shadow-xl transition-shadow duration-300"
            >
              {/* Top accent bar */}
              <div className={`h-1 ${card.accent}`} />
              <div className="p-8 flex flex-col flex-1">
                {/* Icon */}
                <div className="w-12 h-12 bg-stone flex items-center justify-center text-gold mb-5">
                  {card.icon}
                </div>
                {/* Tag */}
                <p className="section-label mb-2">{card.tag}</p>
                {/* Title */}
                <h3 className="font-serif text-charcoal text-2xl mb-3">{card.title}</h3>
                {/* Desc */}
                <p className="font-sans text-sm text-charcoal/70 leading-relaxed mb-8 flex-1">
                  {card.desc}
                </p>
                {/* CTA */}
                <Link
                  href={card.href}
                  className="group/link inline-flex items-center gap-2 font-sans text-sm font-semibold text-gold hover:text-gold-dark transition-colors"
                >
                  {card.cta}
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
  );
}

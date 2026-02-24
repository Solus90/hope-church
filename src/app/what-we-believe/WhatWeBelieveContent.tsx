"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface WhatWeBelieveContentProps {
  heroImageUrl?: string | null;
}

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const beliefs = [
  {
    title: "Scripture",
    body: "We believe the Bible is the inspired, inerrant Word of God — the supreme authority in all matters of faith and life. It is sufficient to equip us for every good work.",
  },
  {
    title: "God",
    body: "We believe in one God, eternally existing in three persons — Father, Son, and Holy Spirit — equal in power and glory, yet distinct in their roles.",
  },
  {
    title: "Jesus Christ",
    body: "We believe Jesus is fully God and fully man — born of a virgin, lived a sinless life, died as a substitute for sinners, rose bodily from the dead, and ascended to the Father's right hand.",
  },
  {
    title: "Salvation",
    body: "We believe salvation is by grace alone, through faith alone, in Christ alone. God sovereignly saves sinners who trust in Jesus, not on the basis of their own merit or effort.",
  },
  {
    title: "The Church",
    body: "We believe the church is the body of Christ — gathered by the Word, united by the Spirit, and sent into the world as witnesses of the gospel.",
  },
  {
    title: "Sacraments",
    body: "We practice two sacraments: Baptism and the Lord's Supper. These visible signs point to and seal the invisible grace of the gospel.",
  },
  {
    title: "Christian Living",
    body: "We believe Christians are called to lives of holiness, love for neighbour, and engagement with the world — not to earn God's favour but as a response to it.",
  },
  {
    title: "Last Things",
    body: "We believe Jesus will return bodily and visibly. There will be a resurrection of the dead, a final judgment, and an eternal state — for believers, eternal life with God; for unbelievers, eternal separation from him.",
  },
];

export default function WhatWeBelieveContent({ heroImageUrl }: WhatWeBelieveContentProps) {
  return (
    <main>
      {/* Hero */}
      {heroImageUrl && (
        <div className="relative h-64 md:h-80 w-full overflow-hidden">
          <img
            src={heroImageUrl}
            alt="What We Believe"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-brand-dark/60" />
        </div>
      )}

      {/* Section 1: Intro */}
      <section className="bg-white py-16 md:py-24">
        <div className="container-hope">
          <motion.p
            {...fadeUp}
            transition={{ duration: 0.5 }}
            className="section-label mb-4"
          >
            Our Beliefs
          </motion.p>
          <motion.h1
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl text-charcoal mb-6 max-w-3xl"
          >
            We believe the historic Christian faith.
          </motion.h1>
          <motion.p
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-text-secondary text-lg md:text-xl max-w-2xl leading-relaxed"
          >
            Hope Presbyterian Church is confessional — we hold to the Westminster
            Confession of Faith, one of the great summaries of Christian belief.
            Here's a plain-language overview of what we believe.
          </motion.p>
        </div>
      </section>

      {/* Section 2: Belief Categories Grid */}
      <section className="bg-white pb-16 md:pb-24">
        <div className="container-hope">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {beliefs.map((belief, index) => (
              <motion.div
                key={belief.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.07 }}
                className="border border-gray-200 rounded-2xl p-8 hover:border-brand/40 hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-1.5 h-8 rounded-full bg-gold" />
                  <h2 className="font-serif text-2xl text-charcoal">{belief.title}</h2>
                </div>
                <p className="text-text-secondary leading-relaxed">{belief.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Westminster Confession */}
      <section className="bg-brand-dark py-16 md:py-24">
        <div className="container-hope">
          <div className="max-w-3xl mx-auto text-center">
            {/* Decorative cross icon */}
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
                className="text-gold"
                aria-hidden="true"
              >
                <rect x="17" y="2" width="6" height="36" rx="2" fill="currentColor" />
                <rect x="4" y="12" width="32" height="6" rx="2" fill="currentColor" />
              </svg>
            </motion.div>

            <motion.p
              {...fadeUp}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="section-label mb-4 text-gold/80"
            >
              Confessional Faith
            </motion.p>
            <motion.h2
              {...fadeUp}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-serif text-3xl md:text-4xl text-white mb-6"
            >
              Grounded in the Westminster Confession.
            </motion.h2>
            <motion.p
              {...fadeUp}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-white/75 text-lg leading-relaxed mb-10"
            >
              As a congregation of the EPC, Hope subscribes to the Westminster
              Confession of Faith and Catechisms. Written in the 17th century and
              refined over centuries, it remains one of the most thorough and faithful
              summaries of Reformed Christian doctrine.
            </motion.p>
            <motion.div
              {...fadeUp}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <a
                href="https://epconnect.org/westminster-confession-of-faith/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-white/40 text-white hover:bg-white hover:text-brand-dark transition-colors duration-300 font-sans font-medium px-6 py-3 rounded-full text-sm tracking-wide"
              >
                Read the Westminster Confession
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden="true"
                >
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

      {/* Section 4: Questions CTA */}
      <section className="bg-sandstone py-16 md:py-24">
        <div className="container-hope">
          <div className="max-w-2xl mx-auto text-center">
            <motion.p
              {...fadeUp}
              transition={{ duration: 0.5 }}
              className="section-label mb-4"
            >
              Get in Touch
            </motion.p>
            <motion.h2
              {...fadeUp}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-serif text-3xl md:text-4xl text-charcoal mb-5"
            >
              Questions? We'd love to talk.
            </motion.h2>
            <motion.p
              {...fadeUp}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-charcoal/70 text-lg leading-relaxed mb-10"
            >
              Theology can feel abstract. We want it to be real and accessible. If you
              have questions about what we believe — or anything else — reach out to us.
            </motion.p>
            <motion.div
              {...fadeUp}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link href="/contact" className="btn-primary">
                Contact Us
              </Link>
              <Link href="/visit" className="btn-outline">
                Plan a Visit
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}

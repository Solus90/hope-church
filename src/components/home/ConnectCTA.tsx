"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function ConnectCTA() {
  return (
    <section className="py-24 bg-sandstone">
      <div className="container-hope">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {/* Plan a Visit */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-brand p-10 flex flex-col"
          >
            <div className="w-10 h-10 border border-gold flex items-center justify-center mb-6">
              <svg className="w-5 h-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
            </div>
            <h3 className="font-serif text-white text-2xl mb-3">Plan a Visit</h3>
            <p className="font-sans text-sm text-white/60 leading-relaxed mb-8 flex-1">
              Get directions, find out what to expect, and let us know you&apos;re
              coming so we can get a welcome gift ready for you.
            </p>
            <Link href="/visit" className="btn-primary w-full justify-center text-sm">
              I&apos;m Coming
            </Link>
          </motion.div>

          {/* Give */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-gold p-10 flex flex-col"
          >
            <div className="w-10 h-10 border border-white/40 flex items-center justify-center mb-6">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
              </svg>
            </div>
            <h3 className="font-serif text-white text-2xl mb-3">Give Online</h3>
            <p className="font-sans text-sm text-white/80 leading-relaxed mb-8 flex-1">
              Your giving helps extend the welcome of Jesus across Columbus and
              around the world through our missionaries and partners.
            </p>
            <Link
              href="/give"
              className="inline-flex items-center justify-center gap-2 bg-white text-gold font-sans font-semibold text-sm tracking-wide uppercase px-7 py-3.5 w-full transition-all duration-200 hover:bg-cream active:scale-95"
            >
              Give Now
            </Link>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white border border-stone p-10 flex flex-col"
          >
            <div className="w-10 h-10 border border-charcoal/20 flex items-center justify-center mb-6">
              <svg className="w-5 h-5 text-charcoal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
            </div>
            <h3 className="font-serif text-charcoal text-2xl mb-3">Get in Touch</h3>
            <p className="font-sans text-sm text-charcoal/60 leading-relaxed mb-8 flex-1">
              Questions about Hope? Want to talk with a pastor? Reach out and
              someone from our team will respond within one business day.
            </p>
            <Link href="/contact" className="btn-outline-dark w-full justify-center text-sm">
              Contact Us
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

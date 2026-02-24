"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { SanitySermon } from "@/sanity/types";

interface Props {
  sermons: SanitySermon[];
}

function formatDate(dateStr: string): string {
  return new Date(dateStr + "T00:00:00").toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function PlayIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

function ArrowIcon() {
  return (
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
  );
}

function SermonCard({ sermon }: { sermon: SanitySermon }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5 }}
      className="bg-white border border-stone-200 flex flex-col group"
    >
      {/* Thumbnail */}
      <div className="aspect-video w-full overflow-hidden bg-brand/10 relative">
        {sermon.thumbnailUrl ? (
          <img
            src={sermon.thumbnailUrl}
            alt={sermon.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-14 h-14 rounded-full bg-brand/20 flex items-center justify-center">
              <PlayIcon className="w-6 h-6 text-brand ml-1" />
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col gap-2 flex-1">
        <p className="font-sans text-xs text-text-secondary">
          {formatDate(sermon.date)}
        </p>
        {sermon.series && (
          <p className="section-label text-brand">{sermon.series}</p>
        )}
        <h3 className="font-serif text-xl text-charcoal leading-snug flex-1">
          {sermon.title}
        </h3>
        {sermon.scripture && (
          <p className="font-sans text-sm text-text-secondary italic">
            {sermon.scripture}
          </p>
        )}
        {sermon.speaker && (
          <p className="font-sans text-sm text-text-secondary">
            {sermon.speaker}
          </p>
        )}

        {/* Watch link */}
        <div className="mt-4 pt-4 border-t border-stone-100">
          {sermon.videoUrl ? (
            <a
              href={sermon.videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-sans text-sm font-semibold text-brand hover:text-brand-dark transition-colors"
            >
              Watch Sermon
              <ArrowIcon />
            </a>
          ) : (
            <span className="font-sans text-sm text-stone-400">
              Video coming soon
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );
}

function EmptyState() {
  return (
    <section className="py-24 bg-white">
      <div className="container-hope text-center">
        <p className="section-label text-text-secondary mb-4">Sermons</p>
        <h2 className="font-serif text-3xl text-charcoal mb-4">
          Sermons coming soon.
        </h2>
        <p className="font-sans text-text-secondary max-w-md mx-auto">
          Check back after our next Sunday gathering. We will be posting
          sermons here regularly.
        </p>
      </div>
    </section>
  );
}

export default function SermonsContent({ sermons }: Props) {
  const latest = sermons[0] ?? null;
  const archive = sermons.slice(1);

  if (sermons.length === 0) {
    return (
      <>
        <EmptyState />
        <SubscribeSection />
      </>
    );
  }

  return (
    <>
      {/* ── Latest Sermon ─────────────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="container-hope">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-brand-dark overflow-hidden flex flex-col md:flex-row"
          >
            {/* Text side */}
            <div className="flex-1 p-8 md:p-12 flex flex-col justify-center order-2 md:order-1">
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.15 }}
                className="section-label text-gold mb-3"
              >
                Latest Sermon
              </motion.p>

              {latest.series && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.25 }}
                  className="font-sans text-white/70 text-sm mb-2"
                >
                  {latest.series}
                </motion.p>
              )}

              <motion.h2
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="font-serif text-3xl md:text-4xl text-white leading-tight mb-3"
              >
                {latest.title}
              </motion.h2>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 }}
                className="flex flex-wrap gap-x-4 gap-y-1 mb-6"
              >
                {latest.scripture && (
                  <span className="font-sans text-sm text-white/80 italic">
                    {latest.scripture}
                  </span>
                )}
                <span className="font-sans text-sm text-white/60">
                  {formatDate(latest.date)}
                </span>
                {latest.speaker && (
                  <span className="font-sans text-sm text-white/60">
                    {latest.speaker}
                  </span>
                )}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.5 }}
              >
                {latest.videoUrl ? (
                  <a
                    href={latest.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    Watch Sermon
                    <ArrowIcon />
                  </a>
                ) : (
                  <span className="btn-primary opacity-40 cursor-not-allowed pointer-events-none">
                    Watch Sermon
                    <ArrowIcon />
                  </span>
                )}
              </motion.div>
            </div>

            {/* Thumbnail side */}
            <div className="w-full md:w-2/5 aspect-video md:aspect-auto relative order-1 md:order-2 bg-brand/20 flex-shrink-0">
              {latest.thumbnailUrl ? (
                <img
                  src={latest.thumbnailUrl}
                  alt={latest.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center min-h-[220px]">
                  <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center">
                    <PlayIcon className="w-8 h-8 text-white ml-1" />
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Sermon Archive ────────────────────────────────────────── */}
      {archive.length > 0 && (
        <section className="py-16 bg-white border-t border-stone-100">
          <div className="container-hope">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="section-label text-brand mb-10"
            >
              Sermon Archive
            </motion.p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {archive.map((sermon) => (
                <SermonCard key={sermon._id} sermon={sermon} />
              ))}
            </div>
          </div>
        </section>
      )}

      <SubscribeSection />
    </>
  );
}

function SubscribeSection() {
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
          Never miss a sermon.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="font-sans text-white/75 text-lg leading-relaxed mb-10"
        >
          Subscribe to our podcast or YouTube channel to get every sermon
          delivered right to you.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a
            href="https://www.youtube.com/@hopechurchcolumbus"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            YouTube Channel
            <ArrowIcon />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            Apple Podcasts
          </a>
        </motion.div>
      </div>
    </section>
  );
}

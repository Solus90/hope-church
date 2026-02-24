"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { SanitySermon } from "@/sanity/types";

// Format ISO date "2026-02-22" → "February 22, 2026" without timezone shift
function formatSermonDate(isoDate: string): string {
  const [year, month, day] = isoDate.split("-").map(Number);
  return new Date(year, month - 1, day).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

interface Props {
  sermon: SanitySermon | null;
}

export default function LatestSermon({ sermon }: Props) {
  if (!sermon) return null;

  const formattedDate = formatSermonDate(sermon.date);
  const videoHref = sermon.videoUrl ?? "/sermons";
  const thumbnailStyle = sermon.thumbnailUrl
    ? { backgroundImage: `url('${sermon.thumbnailUrl}')` }
    : { backgroundImage: "url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=900&q=80')" };

  return (
    <section className="py-24 bg-harbor">
      <div className="container-hope">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="section-label text-brand mb-3">Latest Sermon</p>
            <div className="divider-gold mb-6" />

            <p className="font-sans text-sm text-charcoal/50 mb-2">
              {sermon.series && `${sermon.series} · `}{formattedDate}
            </p>
            <h2
              className="font-serif text-charcoal mb-4 leading-tight"
              style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)" }}
            >
              {sermon.title}
            </h2>
            {(sermon.scripture || sermon.speaker) && (
              <p className="font-sans text-sm text-brand font-medium mb-5">
                {[sermon.scripture, sermon.speaker].filter(Boolean).join(" · ")}
              </p>
            )}
            {sermon.description && (
              <p className="font-sans text-charcoal/70 leading-relaxed mb-8 max-w-[480px]">
                {sermon.description}
              </p>
            )}

            <div className="flex flex-wrap gap-4">
              <Link href={videoHref} className="btn-primary">
                Watch Now
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                </svg>
              </Link>
              <Link href="/sermons" className="btn-outline-dark">
                Full Archive
              </Link>
            </div>
          </motion.div>

          {/* Sermon card / video thumbnail */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <Link
              href={videoHref}
              className="relative aspect-video bg-brand overflow-hidden group block"
              aria-label={`Watch ${sermon.title}${sermon.series ? ` — ${sermon.series}` : ""}`}
            >
              <div
                className="absolute inset-0 bg-cover bg-center opacity-40 group-hover:opacity-50 transition-opacity duration-300"
                style={thumbnailStyle}
                aria-hidden
              />
              {/* Play button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="w-16 h-16 rounded-full bg-gold/90 flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-200">
                  <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                  </svg>
                </span>
              </div>
              {/* Series / title tag */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-brand/80 backdrop-blur-sm p-4">
                  {sermon.series && (
                    <p className="font-sans text-xs text-gold uppercase tracking-widest mb-1">
                      {sermon.series}
                    </p>
                  )}
                  <p className="font-serif text-white text-lg leading-tight">
                    {sermon.title}
                  </p>
                </div>
              </div>
            </Link>

            {/* Decorative gold bar */}
            <div className="h-1 bg-gold" />
          </motion.div>
        </div>

        {/* Podcast callout */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 pt-10 border-t border-stone flex flex-col sm:flex-row items-start sm:items-center gap-4"
        >
          <div className="w-10 h-10 bg-brand flex items-center justify-center shrink-0">
            <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8.25 4.5a3.75 3.75 0 117.5 0v8.25a3.75 3.75 0 11-7.5 0V4.5z" />
              <path d="M6 10.5a.75.75 0 01.75.75v1.5a5.25 5.25 0 1010.5 0v-1.5a.75.75 0 011.5 0v1.5a6.751 6.751 0 01-6 6.709v2.291h3a.75.75 0 010 1.5h-7.5a.75.75 0 010-1.5h3v-2.291a6.751 6.751 0 01-6-6.709v-1.5A.75.75 0 016 10.5z" />
            </svg>
          </div>
          <div>
            <p className="font-sans text-sm font-semibold text-charcoal">
              Casting Hope Podcast
            </p>
            <p className="font-sans text-sm text-charcoal/60">
              Listen to sermons on the go — available on Apple Podcasts and wherever you listen.
            </p>
          </div>
          <a
            href="https://podcasts.apple.com"
            target="_blank"
            rel="noopener noreferrer"
            className="sm:ml-auto btn-outline-dark shrink-0 text-xs"
          >
            Listen on Apple Podcasts
          </a>
        </motion.div>
      </div>
    </section>
  );
}

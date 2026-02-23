import Link from "next/link";

export const metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
  return (
    <section className="min-h-[calc(100vh-72px)] flex items-center justify-center bg-brand-dark relative overflow-hidden pt-[72px]">
      {/* Grain overlay */}
      <div className="grain-overlay" aria-hidden="true" />

      <div className="container-hope relative z-10 py-24">
        <div className="max-w-xl mx-auto text-center">
          {/* Anchor icon — nautical / harbor theme */}
          <div className="mb-8 flex justify-center">
            <svg
              className="w-16 h-16 text-gold/60"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              <path d="M12 9v12m-8-8a8 8 0 0016 0m1 0h-2m-14 0h-2" />
              <path d="M9 6a3 3 0 106 0 3 3 0 00-6 0" />
            </svg>
          </div>

          {/* 404 */}
          <p className="font-serif text-white/20 text-[8rem] leading-none mb-2 select-none">
            404
          </p>

          <p className="section-label text-gold/80 mb-4">Page Not Found</p>

          <h1 className="font-serif text-white text-2xl sm:text-3xl mb-6 leading-snug">
            This page isn&apos;t in the harbor.
          </h1>

          <p className="font-sans text-white/60 text-sm sm:text-base leading-relaxed mb-10 max-w-md mx-auto">
            The link you followed may be broken, or the page may have moved. Head
            back to the homepage to find your way.
          </p>

          <Link href="/" className="btn-primary inline-flex items-center gap-2">
            Back to Home
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
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

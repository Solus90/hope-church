import Link from "next/link";

interface Props {
  title: string;
  heroImageUrl?: string | null;
}

export default function ComingSoon({ title, heroImageUrl }: Props) {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-brand pt-[108px]">
      {/* Background image — only rendered when an image is set in Sanity */}
      {heroImageUrl && (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${heroImageUrl}')` }}
          aria-hidden="true"
        />
      )}
      {/* Brand-blue overlay — always present; doubles as solid bg when no image */}
      <div className="absolute inset-0 bg-brand/80" aria-hidden="true" />
      {/* Grain overlay */}
      <div className="grain-overlay" aria-hidden="true" />

      <div className="container-hope relative z-10 text-center max-w-xl py-24">
        <p className="section-label text-white/85 mb-4">Under Construction</p>
        <div className="w-10 h-px bg-gold mx-auto mb-6" aria-hidden="true" />
        <h1 className="font-serif text-white mb-5" style={{ fontSize: "clamp(2rem, 5vw, 3.25rem)" }}>
          {title}
        </h1>
        <p className="font-sans text-white/90 leading-relaxed mb-10">
          This page is being built. Check back soon, or head back to the
          homepage to explore Hope Presbyterian Church.
        </p>
        <Link href="/" className="btn-primary">
          Back to Home
        </Link>
      </div>
    </section>
  );
}

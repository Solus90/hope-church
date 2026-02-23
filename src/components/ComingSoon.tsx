import Link from "next/link";

export default function ComingSoon({ title }: { title: string }) {
  return (
    <section className="min-h-screen flex items-center justify-center bg-sandstone pt-[72px]">
      <div className="container-hope text-center max-w-xl py-24">
        <p className="section-label mb-4">Under Construction</p>
        <h1 className="font-serif text-charcoal text-4xl mb-5">{title}</h1>
        <p className="font-sans text-charcoal/60 mb-10">
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

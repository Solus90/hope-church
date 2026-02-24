import Link from "next/link";

const footerLinks = {
  "Plan a Visit": [
    { label: "What to Expect", href: "/what-to-expect" },
    { label: "Directions", href: "/directions" },
    { label: "Hope Kids", href: "/kids" },
  ],
  "About": [
    { label: "Mission & Values", href: "/mission-vision-values" },
    { label: "Our Story", href: "/our-story" },
    { label: "Leadership", href: "/leadership" },
    { label: "What We Believe", href: "/what-we-believe" },
  ],
  "Connect": [
    { label: "Home Groups", href: "/groups" },
    { label: "Ohio State", href: "/ohio-state" },
    { label: "Events", href: "/events" },
    { label: "Sermons", href: "/sermons" },
  ],
  "Resources": [
    { label: "Give", href: "/give" },
    { label: "Hope for the City", href: "/mercy" },
    { label: "News", href: "/news" },
    { label: "Contact", href: "/contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white">
      {/* Main footer */}
      <div className="container-hope py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo-reversed.png"
                alt="Hope Presbyterian Church"
                style={{ height: '96px', width: 'auto', maxWidth: 'none' }}
              />
            </Link>
            <p className="font-sans text-sm text-white/60 leading-relaxed max-w-xs mb-6">
              Ordinary people extending the extraordinary welcome of Jesus.
            </p>
            <div className="space-y-2 text-sm text-white/60 font-sans">
              <p>Sundays at 10:00 AM</p>
              <p>
                Nationwide &amp; Ohio Farm Bureau 4-H Center
                <br />
                2201 Fred Taylor Dr
                <br />
                Columbus, OH 43210
              </p>
            </div>
            <div className="mt-6 space-y-1 text-sm font-sans">
              <a
                href="tel:6145264194"
                className="block text-white/60 hover:text-white transition-colors"
              >
                614-526-4194
              </a>
              <a
                href="mailto:operations@hopechurchcolumbus.org"
                className="block text-white/60 hover:text-white transition-colors"
              >
                operations@hopechurchcolumbus.org
              </a>
            </div>
            {/* Social */}
            <div className="mt-6 flex gap-3">
              <a
                href="https://www.instagram.com/hopechurchcolumbus"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 border border-white/20 flex items-center justify-center text-white/60 hover:border-white hover:text-white transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h3 className="font-sans text-xs font-semibold tracking-[0.15em] uppercase text-white/50 mb-5">
                {heading}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="font-sans text-sm text-white/60 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-hope py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-sans text-xs text-white/40">
            &copy; {new Date().getFullYear()} Hope Presbyterian Church. Affiliated with the{" "}
            <a
              href="https://epc.org"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Evangelical Presbyterian Church (EPC)
            </a>
            .
          </p>
          <div className="flex gap-5">
            <Link href="/child-protection-policy" className="font-sans text-xs text-white/40 hover:text-white/60 transition-colors">
              Child Protection Policy
            </Link>
            <Link href="/accessibility" className="font-sans text-xs text-white/40 hover:text-white/60 transition-colors">
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const nav = [
  {
    label: "Plan a Visit",
    href: "/visit",
    children: [
      { label: "What to Expect", href: "/what-to-expect" },
      { label: "Directions", href: "/directions" },
    ],
  },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "Mission & Values", href: "/mission-vision-values" },
      { label: "Our Story", href: "/our-story" },
      { label: "Leadership", href: "/leadership" },
      { label: "What We Believe", href: "/what-we-believe" },
    ],
  },
  { label: "Sermons", href: "/sermons" },
  {
    label: "Connect",
    href: "/connect",
    children: [
      { label: "Home Groups", href: "/groups" },
      { label: "Hope Kids", href: "/kids" },
      { label: "Ohio State", href: "/ohio-state" },
      { label: "Events", href: "/events" },
    ],
  },
  { label: "Give", href: "/give" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      const firstLink = menuRef.current?.querySelector<HTMLAnchorElement>("a[href]");
      firstLink?.focus();
    } else {
      menuButtonRef.current?.focus();
    }
  }, [mobileOpen]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileOpen) setMobileOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || mobileOpen
            ? "bg-brand shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="container-hope flex items-center justify-between h-[108px]">
          {/* Logo */}
          <Link
            href="/"
            className="shrink-0"
            aria-label="Hope Presbyterian Church home"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo-reversed.png"
              alt="Hope Presbyterian Church"
              style={{ height: '96px', width: 'auto', maxWidth: 'none' }}
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1" role="navigation">
            {nav.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.children && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="flex items-center gap-1 px-4 py-2 font-sans text-sm text-white/90 hover:text-white transition-colors"
                >
                  {item.label}
                  {item.children && (
                    <svg
                      className="w-3 h-3 opacity-60"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </Link>
                <AnimatePresence>
                  {item.children && activeDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 mt-1 min-w-[200px] bg-brand border border-white/10 shadow-xl"
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="block px-5 py-3 font-sans text-sm text-white/80 hover:text-white hover:bg-white/5 transition-colors border-b border-white/5 last:border-0"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Link href="/visit" className="btn-primary text-xs">
              Plan a Visit
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            ref={menuButtonRef}
            className="lg:hidden p-2 text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            <div className="w-6 flex flex-col gap-1.5">
              <span
                className={`block h-0.5 bg-white transition-all duration-300 ${
                  mobileOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`block h-0.5 bg-white transition-all duration-300 ${
                  mobileOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 bg-white transition-all duration-300 ${
                  mobileOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            ref={menuRef}
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Main navigation"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.25 }}
            className="fixed inset-0 z-40 bg-brand pt-[108px] overflow-y-auto lg:hidden"
          >
            <nav className="container-hope py-8">
              {nav.map((item) => (
                <div key={item.label} className="border-b border-white/10">
                  <Link
                    href={item.href}
                    className="block py-4 font-serif text-xl text-white hover:text-white/70 transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <div className="pb-4 pl-4 space-y-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="block py-1.5 font-sans text-sm text-white/60 hover:text-white transition-colors"
                          onClick={() => setMobileOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-8">
                <Link
                  href="/visit"
                  className="btn-primary w-full justify-center"
                  onClick={() => setMobileOpen(false)}
                >
                  Plan a Visit
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

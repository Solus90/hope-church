// Studio layout — intentionally bare so the Sanity Studio fills the full viewport.
// Navbar and Footer are hidden via SiteShell in the root layout.
export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

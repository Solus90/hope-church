"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AlertBanner from "@/components/AlertBanner";
import type { SanityAlertBanner } from "@/sanity/types";

interface Props {
  children: React.ReactNode;
  alertBanner?: SanityAlertBanner | null;
}

export default function SiteShell({ children, alertBanner }: Props) {
  const pathname = usePathname();
  const isStudio = pathname?.startsWith("/studio");

  if (isStudio) {
    // Studio gets the full viewport — no chrome
    return <>{children}</>;
  }

  const hasBanner = !!(alertBanner?.enabled && alertBanner.message);

  return (
    <>
      <AlertBanner banner={alertBanner ?? null} />
      <Navbar hasBanner={hasBanner} />
      <main
        id="main-content"
        tabIndex={-1}
        style={hasBanner ? { paddingTop: "44px" } : undefined}
      >
        {children}
      </main>
      <Footer />
    </>
  );
}

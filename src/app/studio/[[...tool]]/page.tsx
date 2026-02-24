// Pure server component — metadata exports require no "use client" boundary.
// NextStudio is rendered via StudioClient (a separate client component).
import type { Metadata, Viewport } from "next";
import StudioClient from "./StudioClient";

export const dynamic = "force-dynamic";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Hope Studio",
  robots: { index: false, follow: false },
};

export default function StudioPage() {
  return <StudioClient />;
}

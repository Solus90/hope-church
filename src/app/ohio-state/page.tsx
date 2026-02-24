import { pageMetadata } from "@/lib/metadata";
import OhioStateContent from "./OhioStateContent";
import { sanityFetch } from "@/sanity/client";
import { pageHeroQuery } from "@/sanity/queries";
import type { SanityPageHero } from "@/sanity/types";

export const metadata = pageMetadata({
  title: "Hope at Ohio State",
  description:
    "Hope is a church for the Ohio State campus — not just near it. Faculty, grad students, and undergrads are part of our community. Join us Sundays at 10am.",
  path: "/ohio-state",
});

export default async function Page() {
  const hero = await sanityFetch<SanityPageHero | null>(pageHeroQuery, { page: "ohio-state" }, null);
  return <OhioStateContent heroImageUrl={hero?.imageUrl ?? null} />;
}

import ComingSoon from "@/components/ComingSoon";
import { pageMetadata } from "@/lib/metadata";
import { sanityFetch } from "@/sanity/client";
import { pageHeroQuery } from "@/sanity/queries";
import type { SanityPageHero } from "@/sanity/types";

export const metadata = pageMetadata({
  title: "Events",
  description: "Upcoming events at Hope Presbyterian Church. Join us for gatherings, brunches, and community events.",
  path: "/events",
});

export default async function Page() {
  const hero = await sanityFetch<SanityPageHero | null>(pageHeroQuery, { page: "events" }, null);
  return <ComingSoon title="Events" heroImageUrl={hero?.imageUrl ?? null} />;
}

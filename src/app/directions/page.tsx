import ComingSoon from "@/components/ComingSoon";
import { pageMetadata } from "@/lib/metadata";
import { sanityFetch } from "@/sanity/client";
import { pageHeroQuery } from "@/sanity/queries";
import type { SanityPageHero } from "@/sanity/types";

export const metadata = pageMetadata({
  title: "Directions",
  description: "Find Hope Presbyterian Church. We meet at the Nationwide & Ohio Farm Bureau 4-H Center, 2201 Fred Taylor Dr, Columbus, OH 43210.",
  path: "/directions",
});

export default async function Page() {
  const hero = await sanityFetch<SanityPageHero | null>(pageHeroQuery, { page: "directions" }, null);
  return <ComingSoon title="Directions" heroImageUrl={hero?.imageUrl ?? null} />;
}

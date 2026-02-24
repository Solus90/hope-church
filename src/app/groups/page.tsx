import ComingSoon from "@/components/ComingSoon";
import { pageMetadata } from "@/lib/metadata";
import { sanityFetch } from "@/sanity/client";
import { pageHeroQuery } from "@/sanity/queries";
import type { SanityPageHero } from "@/sanity/types";

export const metadata = pageMetadata({
  title: "Home Groups",
  description: "Life is better together. Find a Hope home group meeting throughout Columbus.",
  path: "/groups",
});

export default async function Page() {
  const hero = await sanityFetch<SanityPageHero | null>(pageHeroQuery, { page: "groups" }, null);
  return <ComingSoon title="Home Groups" heroImageUrl={hero?.imageUrl ?? null} />;
}

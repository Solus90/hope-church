import ComingSoon from "@/components/ComingSoon";
import { pageMetadata } from "@/lib/metadata";
import { sanityFetch } from "@/sanity/client";
import { pageHeroQuery } from "@/sanity/queries";
import type { SanityPageHero } from "@/sanity/types";

export const metadata = pageMetadata({
  title: "Our Story",
  description: "The story of Hope Presbyterian Church — planted in Columbus, OH, extending the welcome of Jesus.",
  path: "/our-story",
});

export default async function Page() {
  const hero = await sanityFetch<SanityPageHero | null>(pageHeroQuery, { page: "our-story" }, null);
  return <ComingSoon title="Our Story" heroImageUrl={hero?.imageUrl ?? null} />;
}

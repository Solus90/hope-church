import ComingSoon from "@/components/ComingSoon";
import { pageMetadata } from "@/lib/metadata";
import { sanityFetch } from "@/sanity/client";
import { pageHeroQuery } from "@/sanity/queries";
import type { SanityPageHero } from "@/sanity/types";

export const metadata = pageMetadata({
  title: "News",
  description: "News and updates from Hope Presbyterian Church in Columbus, OH.",
  path: "/news",
});

export default async function Page() {
  const hero = await sanityFetch<SanityPageHero | null>(pageHeroQuery, { page: "news" }, null);
  return <ComingSoon title="News" heroImageUrl={hero?.imageUrl ?? null} />;
}

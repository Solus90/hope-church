import ComingSoon from "@/components/ComingSoon";
import { pageMetadata } from "@/lib/metadata";
import { sanityFetch } from "@/sanity/client";
import { pageHeroQuery } from "@/sanity/queries";
import type { SanityPageHero } from "@/sanity/types";

export const metadata = pageMetadata({
  title: "Sermons",
  description: "Watch and listen to sermons from Hope Presbyterian Church. Verse-by-verse teaching through Scripture.",
  path: "/sermons",
});

export default async function Page() {
  const hero = await sanityFetch<SanityPageHero | null>(pageHeroQuery, { page: "sermons" }, null);
  return <ComingSoon title="Sermons" heroImageUrl={hero?.imageUrl ?? null} />;
}

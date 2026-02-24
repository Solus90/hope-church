import ComingSoon from "@/components/ComingSoon";
import { pageMetadata } from "@/lib/metadata";
import { sanityFetch } from "@/sanity/client";
import { pageHeroQuery } from "@/sanity/queries";
import type { SanityPageHero } from "@/sanity/types";

export const metadata = pageMetadata({
  title: "What to Expect",
  description: "Your first visit to Hope Presbyterian Church. What to expect on a Sunday morning.",
  path: "/what-to-expect",
});

export default async function Page() {
  const hero = await sanityFetch<SanityPageHero | null>(pageHeroQuery, { page: "what-to-expect" }, null);
  return <ComingSoon title="What to Expect" heroImageUrl={hero?.imageUrl ?? null} />;
}

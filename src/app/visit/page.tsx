import ComingSoon from "@/components/ComingSoon";
import { pageMetadata } from "@/lib/metadata";
import { sanityFetch } from "@/sanity/client";
import { pageHeroQuery } from "@/sanity/queries";
import type { SanityPageHero } from "@/sanity/types";

export const metadata = pageMetadata({
  title: "Plan a Visit",
  description: "Plan your first visit to Hope Presbyterian Church. Sundays at 10am. Get directions and know what to expect.",
  path: "/visit",
});

export default async function Page() {
  const hero = await sanityFetch<SanityPageHero | null>(pageHeroQuery, { page: "visit" }, null);
  return <ComingSoon title="Plan a Visit" heroImageUrl={hero?.imageUrl ?? null} />;
}

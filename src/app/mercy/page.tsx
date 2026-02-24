import ComingSoon from "@/components/ComingSoon";
import { pageMetadata } from "@/lib/metadata";
import { sanityFetch } from "@/sanity/client";
import { pageHeroQuery } from "@/sanity/queries";
import type { SanityPageHero } from "@/sanity/types";

export const metadata = pageMetadata({
  title: "Hope for the City",
  description: "Mercy and justice ministry at Hope Presbyterian Church. Serving Columbus through our partners and outreach.",
  path: "/mercy",
});

export default async function Page() {
  const hero = await sanityFetch<SanityPageHero | null>(pageHeroQuery, { page: "mercy" }, null);
  return <ComingSoon title="Hope for the City" heroImageUrl={hero?.imageUrl ?? null} />;
}

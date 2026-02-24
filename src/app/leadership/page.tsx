import ComingSoon from "@/components/ComingSoon";
import { pageMetadata } from "@/lib/metadata";
import { sanityFetch } from "@/sanity/client";
import { pageHeroQuery } from "@/sanity/queries";
import type { SanityPageHero } from "@/sanity/types";

export const metadata = pageMetadata({
  title: "Leadership",
  description: "Meet the pastoral team and leadership of Hope Presbyterian Church.",
  path: "/leadership",
});

export default async function Page() {
  const hero = await sanityFetch<SanityPageHero | null>(pageHeroQuery, { page: "leadership" }, null);
  return <ComingSoon title="Leadership" heroImageUrl={hero?.imageUrl ?? null} />;
}

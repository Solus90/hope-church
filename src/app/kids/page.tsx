import ComingSoon from "@/components/ComingSoon";
import { pageMetadata } from "@/lib/metadata";
import { sanityFetch } from "@/sanity/client";
import { pageHeroQuery } from "@/sanity/queries";
import type { SanityPageHero } from "@/sanity/types";

export const metadata = pageMetadata({
  title: "Hope Kids",
  description: "Hope Kids offers safe, joyful, age-appropriate Sunday morning classes from nursery through 5th grade.",
  path: "/kids",
});

export default async function Page() {
  const hero = await sanityFetch<SanityPageHero | null>(pageHeroQuery, { page: "kids" }, null);
  return <ComingSoon title="Hope Kids" heroImageUrl={hero?.imageUrl ?? null} />;
}

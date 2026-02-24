import ComingSoon from "@/components/ComingSoon";
import { pageMetadata } from "@/lib/metadata";
import { sanityFetch } from "@/sanity/client";
import { pageHeroQuery } from "@/sanity/queries";
import type { SanityPageHero } from "@/sanity/types";

export const metadata = pageMetadata({
  title: "What We Believe",
  description: "Hope Presbyterian Church's beliefs and theological foundations. Affiliated with the Evangelical Presbyterian Church.",
  path: "/what-we-believe",
});

export default async function Page() {
  const hero = await sanityFetch<SanityPageHero | null>(pageHeroQuery, { page: "what-we-believe" }, null);
  return <ComingSoon title="What We Believe" heroImageUrl={hero?.imageUrl ?? null} />;
}

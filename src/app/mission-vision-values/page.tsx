import ComingSoon from "@/components/ComingSoon";
import { pageMetadata } from "@/lib/metadata";
import { sanityFetch } from "@/sanity/client";
import { pageHeroQuery } from "@/sanity/queries";
import type { SanityPageHero } from "@/sanity/types";

export const metadata = pageMetadata({
  title: "Mission, Vision & Values",
  description: "We exist to extend the welcome of Jesus. Learn about Hope Presbyterian Church's mission, vision, and core values.",
  path: "/mission-vision-values",
});

export default async function Page() {
  const hero = await sanityFetch<SanityPageHero | null>(pageHeroQuery, { page: "mission-vision-values" }, null);
  return <ComingSoon title="Mission, Vision & Values" heroImageUrl={hero?.imageUrl ?? null} />;
}

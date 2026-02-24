import ComingSoon from "@/components/ComingSoon";
import { pageMetadata } from "@/lib/metadata";
import { sanityFetch } from "@/sanity/client";
import { pageHeroQuery } from "@/sanity/queries";
import type { SanityPageHero } from "@/sanity/types";

export const metadata = pageMetadata({
  title: "About",
  description: "Learn about Hope Presbyterian Church in Columbus, OH — our story, mission, and community.",
  path: "/about",
});

export default async function Page() {
  const hero = await sanityFetch<SanityPageHero | null>(pageHeroQuery, { page: "about" }, null);
  return <ComingSoon title="About Hope Presbyterian Church" heroImageUrl={hero?.imageUrl ?? null} />;
}

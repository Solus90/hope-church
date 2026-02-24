import PageHero from "@/components/PageHero";
import { pageMetadata } from "@/lib/metadata";
import { sanityFetch } from "@/sanity/client";
import { pageHeroQuery } from "@/sanity/queries";
import type { SanityPageHero } from "@/sanity/types";
import KidsContent from "./KidsContent";

export const metadata = pageMetadata({
  title: "Hope Kids",
  description: "Hope Kids is our Sunday programme for children from birth through 5th grade — a safe, fun, and Bible-centred experience every Sunday.",
  path: "/kids",
});

export default async function Page() {
  const hero = await sanityFetch<SanityPageHero | null>(pageHeroQuery, { page: "kids" }, null);
  return (
    <>
      <PageHero
        label="Hope Kids"
        heading="A place for your kids to belong."
        subheading="Hope Kids runs every Sunday during the sermon — birth through 5th grade. Safe, fun, and genuinely Bible-centred."
        imageUrl={hero?.imageUrl ?? null}
        ctas={[
          { label: "Plan a Visit", href: "/visit", variant: "primary" },
          { label: "What to Expect", href: "/what-to-expect", variant: "outline" },
        ]}
      />
      <KidsContent heroImageUrl={hero?.imageUrl ?? null} />
    </>
  );
}

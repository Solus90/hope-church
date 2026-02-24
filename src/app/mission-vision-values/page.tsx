import PageHero from "@/components/PageHero";
import { pageMetadata } from "@/lib/metadata";
import { sanityFetch } from "@/sanity/client";
import { pageHeroQuery } from "@/sanity/queries";
import type { SanityPageHero } from "@/sanity/types";
import MVVContent from "./MVVContent";

export const metadata = pageMetadata({
  title: "Mission, Vision & Values",
  description: "We exist to extend the welcome of Jesus. Learn about Hope Presbyterian Church's mission, vision, and core values.",
  path: "/mission-vision-values",
});

export default async function Page() {
  const hero = await sanityFetch<SanityPageHero | null>(pageHeroQuery, { page: "mission-vision-values" }, null);
  return (
    <>
      <PageHero
        label="Hope Presbyterian Church"
        heading="Extending the welcome of Jesus."
        subheading="Everything we do flows from one mission: to extend the welcome of Jesus Christ to Columbus and beyond."
        imageUrl={hero?.imageUrl ?? null}
        ctas={[
          { label: "Our Story", href: "/our-story", variant: "primary" },
          { label: "What We Believe", href: "/what-we-believe", variant: "outline" },
        ]}
      />
      <MVVContent heroImageUrl={hero?.imageUrl ?? null} />
    </>
  );
}

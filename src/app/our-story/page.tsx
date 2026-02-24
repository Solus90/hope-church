import PageHero from "@/components/PageHero";
import { pageMetadata } from "@/lib/metadata";
import { sanityFetch } from "@/sanity/client";
import { pageHeroQuery } from "@/sanity/queries";
import type { SanityPageHero } from "@/sanity/types";
import OurStoryContent from "./OurStoryContent";

export const metadata = pageMetadata({
  title: "Our Story",
  description: "Learn the story of Hope Presbyterian Church — planted to love Ohio State and the city of Columbus in the name of Jesus.",
  path: "/our-story",
});

export default async function Page() {
  const hero = await sanityFetch<SanityPageHero | null>(pageHeroQuery, { page: "our-story" }, null);
  return (
    <>
      <PageHero
        label="Our Story"
        heading="A church planted for Columbus."
        subheading="We started with a question: what would it look like for a church to be genuinely for this city — not just in it?"
        imageUrl={hero?.imageUrl ?? null}
        ctas={[
          { label: "What We Believe", href: "/what-we-believe", variant: "primary" },
          { label: "Mission & Values", href: "/mission-vision-values", variant: "outline" },
        ]}
      />
      <OurStoryContent heroImageUrl={hero?.imageUrl ?? null} />
    </>
  );
}

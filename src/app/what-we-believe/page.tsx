import PageHero from "@/components/PageHero";
import { pageMetadata } from "@/lib/metadata";
import { sanityFetch } from "@/sanity/client";
import { pageHeroQuery } from "@/sanity/queries";
import type { SanityPageHero } from "@/sanity/types";
import WhatWeBelieveContent from "./WhatWeBelieveContent";

export const metadata = pageMetadata({
  title: "What We Believe",
  description: "Hope Presbyterian Church holds to the historic Christian faith as summarised in the Westminster Confession of Faith.",
  path: "/what-we-believe",
});

export default async function Page() {
  const hero = await sanityFetch<SanityPageHero | null>(pageHeroQuery, { page: "what-we-believe" }, null);
  return (
    <>
      <PageHero
        label="What We Believe"
        heading="The historic Christian faith."
        subheading="We're confessional. We hold to the Westminster Confession of Faith — one of the great summaries of what Christians have always believed."
        imageUrl={hero?.imageUrl ?? null}
        ctas={[
          { label: "Our Story", href: "/our-story", variant: "outline" },
        ]}
      />
      <WhatWeBelieveContent heroImageUrl={hero?.imageUrl ?? null} />
    </>
  );
}

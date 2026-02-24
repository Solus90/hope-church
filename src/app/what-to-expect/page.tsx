import PageHero from "@/components/PageHero";
import { pageMetadata } from "@/lib/metadata";
import { sanityFetch } from "@/sanity/client";
import { pageHeroQuery } from "@/sanity/queries";
import type { SanityPageHero } from "@/sanity/types";
import WhatToExpectContent from "./WhatToExpectContent";

export const metadata = pageMetadata({
  title: "What to Expect",
  description: "Your first visit to Hope Presbyterian Church. What to expect on a Sunday morning.",
  path: "/what-to-expect",
});

export default async function Page() {
  const hero = await sanityFetch<SanityPageHero | null>(pageHeroQuery, { page: "what-to-expect" }, null);
  return (
    <>
      <PageHero
        label="What to Expect"
        heading="A Sunday morning at Hope."
        subheading="Here's everything you need to know before you arrive — from parking to the service itself."
        imageUrl={hero?.imageUrl ?? null}
        ctas={[
          { label: "Plan a Visit", href: "/visit", variant: "primary" },
          { label: "Get Directions", href: "https://www.google.com/maps/dir/?api=1&destination=2201+Fred+Taylor+Dr,+Columbus,+OH+43210", variant: "outline", external: true },
        ]}
      />
      <WhatToExpectContent heroImageUrl={hero?.imageUrl ?? null} />
    </>
  );
}

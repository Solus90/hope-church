import PageHero from "@/components/PageHero";
import { pageMetadata } from "@/lib/metadata";
import { sanityFetch } from "@/sanity/client";
import { pageHeroQuery } from "@/sanity/queries";
import type { SanityPageHero } from "@/sanity/types";
import VisitContent from "./VisitContent";

export const metadata = pageMetadata({
  title: "Plan a Visit",
  description: "Plan your first visit to Hope Presbyterian Church. Sundays at 10am. Get directions and know what to expect.",
  path: "/visit",
});

export default async function Page() {
  const hero = await sanityFetch<SanityPageHero | null>(pageHeroQuery, { page: "visit" }, null);
  return (
    <>
      <PageHero
        label="Plan a Visit"
        heading="You're welcome here."
        subheading="Sundays at 10:00 AM — Nationwide & Ohio Farm Bureau 4-H Center, Columbus, OH."
        imageUrl={hero?.imageUrl ?? null}
        ctas={[
          { label: "Fill Out Visit Form", href: "https://www.hopechurchcolumbus.org/visit", variant: "primary", external: true },
          { label: "What to Expect", href: "/what-to-expect", variant: "outline" },
        ]}
      />
      <VisitContent heroImageUrl={hero?.imageUrl ?? null} />
    </>
  );
}

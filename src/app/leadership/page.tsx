import PageHero from "@/components/PageHero";
import { pageMetadata } from "@/lib/metadata";
import { sanityFetch } from "@/sanity/client";
import { pageHeroQuery, allStaffQuery } from "@/sanity/queries";
import type { SanityPageHero, SanityStaffMember } from "@/sanity/types";
import LeadershipContent from "./LeadershipContent";

export const metadata = pageMetadata({
  title: "Leadership",
  description:
    "Meet the pastors, elders, and ministry team who shepherd Hope Presbyterian Church in Columbus, OH.",
  path: "/leadership",
});

export default async function Page() {
  const [hero, staff] = await Promise.all([
    sanityFetch<SanityPageHero | null>(pageHeroQuery, { page: "leadership" }, null),
    sanityFetch<SanityStaffMember[]>(allStaffQuery, {}, []),
  ]);
  return (
    <>
      <PageHero
        label="Leadership"
        heading="Shepherds, not celebrities."
        subheading="Hope is led by men and women who are committed to serving this congregation with humility, love, and faithfulness to God's Word."
        imageUrl={hero?.imageUrl ?? null}
        ctas={[{ label: "Contact Us", href: "/contact", variant: "outline" }]}
      />
      <LeadershipContent staff={staff} />
    </>
  );
}

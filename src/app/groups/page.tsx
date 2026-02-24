import PageHero from "@/components/PageHero";
import { pageMetadata } from "@/lib/metadata";
import { sanityFetch } from "@/sanity/client";
import { pageHeroQuery, allHomeGroupsQuery } from "@/sanity/queries";
import type { SanityPageHero, SanityHomeGroup } from "@/sanity/types";
import GroupsContent from "./GroupsContent";

export const metadata = pageMetadata({
  title: "Home Groups",
  description:
    "Find a Home Group at Hope Presbyterian Church. Real community in smaller circles across Columbus.",
  path: "/groups",
});

export default async function Page() {
  const [hero, groups] = await Promise.all([
    sanityFetch<SanityPageHero | null>(pageHeroQuery, { page: "groups" }, null),
    sanityFetch<SanityHomeGroup[]>(allHomeGroupsQuery, {}, []),
  ]);
  return (
    <>
      <PageHero
        label="Home Groups"
        heading="Community happens here."
        subheading="Sunday is where we gather as a church. Home Groups are where we actually do life together."
        imageUrl={hero?.imageUrl ?? null}
        ctas={[{ label: "Find a Group", href: "/contact", variant: "primary" }]}
      />
      <GroupsContent groups={groups} />
    </>
  );
}

import PageHero from "@/components/PageHero";
import { pageMetadata } from "@/lib/metadata";
import { sanityFetch } from "@/sanity/client";
import { pageHeroQuery, allSermonsQuery } from "@/sanity/queries";
import type { SanityPageHero, SanitySermon } from "@/sanity/types";
import SermonsContent from "./SermonsContent";

export const metadata = pageMetadata({
  title: "Sermons",
  description:
    "Listen to and watch sermons from Hope Presbyterian Church in Columbus, OH.",
  path: "/sermons",
});

export default async function Page() {
  const [hero, sermons] = await Promise.all([
    sanityFetch<SanityPageHero | null>(pageHeroQuery, { page: "sermons" }, null),
    sanityFetch<SanitySermon[]>(allSermonsQuery, {}, []),
  ]);
  return (
    <>
      <PageHero
        label="Sermons"
        heading="The Word, preached faithfully."
        subheading="Every sermon is rooted in Scripture. Browse our archive or subscribe to never miss one."
        imageUrl={hero?.imageUrl ?? null}
        ctas={[
          {
            label: "Subscribe on YouTube",
            href: "https://www.youtube.com/@hopechurchcolumbus",
            variant: "primary",
            external: true,
          },
        ]}
      />
      <SermonsContent sermons={sermons} />
    </>
  );
}

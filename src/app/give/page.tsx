import PageHero from "@/components/PageHero";
import { pageMetadata } from "@/lib/metadata";
import { sanityFetch } from "@/sanity/client";
import { pageHeroQuery } from "@/sanity/queries";
import type { SanityPageHero } from "@/sanity/types";
import GiveContent from "./GiveContent";

export const metadata = pageMetadata({
  title: "Give",
  description: "Give online to Hope Presbyterian Church. Your giving helps extend the welcome of Jesus across Columbus and around the world.",
  path: "/give",
});

export default async function Page() {
  const hero = await sanityFetch<SanityPageHero | null>(pageHeroQuery, { page: "give" }, null);
  return (
    <>
      <PageHero
        label="Generosity"
        heading="Give cheerfully. Give generously."
        subheading="Your giving is an act of worship — and it's how the gospel goes forward in Columbus and around the world."
        imageUrl={hero?.imageUrl ?? null}
        ctas={[
          { label: "Give Online", href: "https://www.hopechurchcolumbus.org/give", variant: "primary", external: true },
        ]}
      />
      <GiveContent heroImageUrl={hero?.imageUrl ?? null} />
    </>
  );
}

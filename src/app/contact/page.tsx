import ComingSoon from "@/components/ComingSoon";
import { pageMetadata } from "@/lib/metadata";
import { sanityFetch } from "@/sanity/client";
import { pageHeroQuery } from "@/sanity/queries";
import type { SanityPageHero } from "@/sanity/types";

export const metadata = pageMetadata({
  title: "Contact",
  description: "Get in touch with Hope Presbyterian Church. Questions, pastoral care, or general inquiries.",
  path: "/contact",
});

export default async function Page() {
  const hero = await sanityFetch<SanityPageHero | null>(pageHeroQuery, { page: "contact" }, null);
  return <ComingSoon title="Contact" heroImageUrl={hero?.imageUrl ?? null} />;
}

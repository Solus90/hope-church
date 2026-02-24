import Hero from "@/components/home/Hero";
import AudienceCards from "@/components/home/AudienceCards";
import LatestSermon from "@/components/home/LatestSermon";
import UpcomingEvents from "@/components/home/UpcomingEvents";
import MissionBanner from "@/components/home/MissionBanner";
import HomeGroups from "@/components/home/HomeGroups";
import Testimonials from "@/components/home/Testimonials";
import ByTheNumbers from "@/components/home/ByTheNumbers";
import ConnectCTA from "@/components/home/ConnectCTA";
import { sanityFetch } from "@/sanity/client";
import {
  latestSermonQuery,
  featuredTestimonialsQuery,
  featuredHomeGroupsQuery,
  pageHeroQuery,
  upcomingEventsQuery,
} from "@/sanity/queries";
import type {
  SanitySermon,
  SanityTestimonial,
  SanityHomeGroup,
  SanityPageHero,
  SanityEvent,
} from "@/sanity/types";

export default async function HomePage() {
  const today = new Date().toISOString().split("T")[0];
  const [sermon, testimonials, groups, homeHero, events] = await Promise.all([
    sanityFetch<SanitySermon | null>(latestSermonQuery, {}, null),
    sanityFetch<SanityTestimonial[]>(featuredTestimonialsQuery, {}, []),
    sanityFetch<SanityHomeGroup[]>(featuredHomeGroupsQuery, {}, []),
    sanityFetch<SanityPageHero | null>(pageHeroQuery, { page: "home" }, null),
    sanityFetch<SanityEvent[]>(upcomingEventsQuery, { today }, []),
  ]);

  return (
    <>
      <Hero heroImageUrl={homeHero?.imageUrl ?? null} />
      <AudienceCards />
      <LatestSermon sermon={sermon} />
      <MissionBanner />
      <UpcomingEvents events={events} />
      <HomeGroups groups={groups} />
      <Testimonials testimonials={testimonials} />
      <ByTheNumbers />
      <ConnectCTA />
    </>
  );
}

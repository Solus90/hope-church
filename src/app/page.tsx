import Hero from "@/components/home/Hero";
import AudienceCards from "@/components/home/AudienceCards";
import LatestSermon from "@/components/home/LatestSermon";
import UpcomingEvents from "@/components/home/UpcomingEvents";
import MissionBanner from "@/components/home/MissionBanner";
import HomeGroups from "@/components/home/HomeGroups";
import Testimonials from "@/components/home/Testimonials";
import ByTheNumbers from "@/components/home/ByTheNumbers";
import ConnectCTA from "@/components/home/ConnectCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AudienceCards />
      <LatestSermon />
      <MissionBanner />
      <UpcomingEvents />
      <HomeGroups />
      <Testimonials />
      <ByTheNumbers />
      <ConnectCTA />
    </>
  );
}

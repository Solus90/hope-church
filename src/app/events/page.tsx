import ComingSoon from "@/components/ComingSoon";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Events",
  description: "Upcoming events at Hope Presbyterian Church. Join us for gatherings, brunches, and community events.",
  path: "/events",
});

export default function Page() {
  return <ComingSoon title="Events" />;
}

import ComingSoon from "@/components/ComingSoon";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Directions",
  description: "Find Hope Presbyterian Church. We meet at the Nationwide & Ohio Farm Bureau 4-H Center, 2201 Fred Taylor Dr, Columbus, OH 43210.",
  path: "/directions",
});

export default function Page() {
  return <ComingSoon title="Directions" />;
}

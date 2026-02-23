import ComingSoon from "@/components/ComingSoon";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "News",
  description: "News and updates from Hope Presbyterian Church in Columbus, OH.",
  path: "/news",
});

export default function Page() {
  return <ComingSoon title="News" />;
}

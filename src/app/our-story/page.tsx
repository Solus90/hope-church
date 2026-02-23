import ComingSoon from "@/components/ComingSoon";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Our Story",
  description: "The story of Hope Presbyterian Church — planted in Columbus, OH, extending the welcome of Jesus.",
  path: "/our-story",
});

export default function Page() {
  return <ComingSoon title="Our Story" />;
}

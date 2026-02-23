import ComingSoon from "@/components/ComingSoon";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "What to Expect",
  description: "Your first visit to Hope Presbyterian Church. What to expect on a Sunday morning.",
  path: "/what-to-expect",
});

export default function Page() {
  return <ComingSoon title="What to Expect" />;
}

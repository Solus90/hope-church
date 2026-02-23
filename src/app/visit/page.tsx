import ComingSoon from "@/components/ComingSoon";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Plan a Visit",
  description: "Plan your first visit to Hope Presbyterian Church. Sundays at 10am. Get directions and know what to expect.",
  path: "/visit",
});

export default function Page() {
  return <ComingSoon title="Plan a Visit" />;
}

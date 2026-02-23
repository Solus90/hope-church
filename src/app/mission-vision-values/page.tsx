import ComingSoon from "@/components/ComingSoon";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Mission, Vision & Values",
  description: "We exist to extend the welcome of Jesus. Learn about Hope Presbyterian Church's mission, vision, and core values.",
  path: "/mission-vision-values",
});

export default function Page() {
  return <ComingSoon title="Mission, Vision & Values" />;
}

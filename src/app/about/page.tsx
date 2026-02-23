import ComingSoon from "@/components/ComingSoon";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "About",
  description: "Learn about Hope Presbyterian Church in Columbus, OH — our story, mission, and community.",
  path: "/about",
});

export default function Page() {
  return <ComingSoon title="About Hope Presbyterian Church" />;
}

import ComingSoon from "@/components/ComingSoon";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Home Groups",
  description: "Life is better together. Find a Hope home group meeting throughout Columbus.",
  path: "/groups",
});

export default function Page() {
  return <ComingSoon title="Home Groups" />;
}

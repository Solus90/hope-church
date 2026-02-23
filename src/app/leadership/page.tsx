import ComingSoon from "@/components/ComingSoon";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Leadership",
  description: "Meet the pastoral team and leadership of Hope Presbyterian Church.",
  path: "/leadership",
});

export default function Page() {
  return <ComingSoon title="Leadership" />;
}

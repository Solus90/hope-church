import ComingSoon from "@/components/ComingSoon";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Sermons",
  description: "Watch and listen to sermons from Hope Presbyterian Church. Verse-by-verse teaching through Scripture.",
  path: "/sermons",
});

export default function Page() {
  return <ComingSoon title="Sermons" />;
}

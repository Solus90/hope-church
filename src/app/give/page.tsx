import ComingSoon from "@/components/ComingSoon";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Give",
  description: "Give online to Hope Presbyterian Church. Your giving helps extend the welcome of Jesus across Columbus and around the world.",
  path: "/give",
});

export default function Page() {
  return <ComingSoon title="Give" />;
}

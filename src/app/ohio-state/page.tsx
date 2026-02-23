import ComingSoon from "@/components/ComingSoon";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Ohio State",
  description: "Hope is a church for the Ohio State campus. Connect with faculty, grad students, and undergrads.",
  path: "/ohio-state",
});

export default function Page() {
  return <ComingSoon title="Ohio State" />;
}

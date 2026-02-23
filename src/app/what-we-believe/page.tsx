import ComingSoon from "@/components/ComingSoon";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "What We Believe",
  description: "Hope Presbyterian Church's beliefs and theological foundations. Affiliated with the Evangelical Presbyterian Church.",
  path: "/what-we-believe",
});

export default function Page() {
  return <ComingSoon title="What We Believe" />;
}

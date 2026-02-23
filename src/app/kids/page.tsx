import ComingSoon from "@/components/ComingSoon";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Hope Kids",
  description: "Hope Kids offers safe, joyful, age-appropriate Sunday morning classes from nursery through 5th grade.",
  path: "/kids",
});

export default function Page() {
  return <ComingSoon title="Hope Kids" />;
}

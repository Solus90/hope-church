import ComingSoon from "@/components/ComingSoon";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Hope for the City",
  description: "Mercy and justice ministry at Hope Presbyterian Church. Serving Columbus through our partners and outreach.",
  path: "/mercy",
});

export default function Page() {
  return <ComingSoon title="Hope for the City" />;
}

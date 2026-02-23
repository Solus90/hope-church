import ComingSoon from "@/components/ComingSoon";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Contact",
  description: "Get in touch with Hope Presbyterian Church. Questions, pastoral care, or general inquiries.",
  path: "/contact",
});

export default function Page() {
  return <ComingSoon title="Contact" />;
}

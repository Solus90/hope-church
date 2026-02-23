import { pageMetadata } from "@/lib/metadata";
import OhioStateContent from "./OhioStateContent";

export const metadata = pageMetadata({
  title: "Hope at Ohio State",
  description:
    "Hope is a church for the Ohio State campus — not just near it. Faculty, grad students, and undergrads are part of our community. Join us Sundays at 10am.",
  path: "/ohio-state",
});

export default function Page() {
  return <OhioStateContent />;
}

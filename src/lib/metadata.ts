import type { Metadata } from "next";

const baseUrl = "https://www.hopechurchcolumbus.org";
const siteName = "Hope Presbyterian Church";
const defaultDescription =
  "Ordinary people extending the extraordinary welcome of Jesus. Join us Sundays at 10am at the Nationwide & Ohio Farm Bureau 4-H Center, Columbus, OH.";

export function pageMetadata({
  title,
  description = defaultDescription,
  path = "",
}: {
  title: string;
  description?: string;
  path?: string;
}): Metadata {
  const url = `${baseUrl}${path}`;
  return {
    title,
    description,
    openGraph: {
      title: `${title} | ${siteName}`,
      description,
      url,
      siteName,
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteName}`,
      description,
    },
    ...(path && { alternates: { canonical: url } }),
  };
}

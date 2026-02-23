import { MetadataRoute } from "next";

const baseUrl = "https://www.hopechurchcolumbus.org";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/contact",
    "/directions",
    "/events",
    "/give",
    "/groups",
    "/kids",
    "/leadership",
    "/mercy",
    "/mission-vision-values",
    "/news",
    "/ohio-state",
    "/our-story",
    "/sermons",
    "/visit",
    "/what-to-expect",
    "/what-we-believe",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route || "/"}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }));
}

import { defineField, defineType } from "sanity";

const PAGE_LIST = [
  { title: "Home", value: "home" },
  { title: "About", value: "about" },
  { title: "Plan a Visit", value: "visit" },
  { title: "What to Expect", value: "what-to-expect" },
  { title: "Our Story", value: "our-story" },
  { title: "Mission, Vision & Values", value: "mission-vision-values" },
  { title: "What We Believe", value: "what-we-believe" },
  { title: "Sermons", value: "sermons" },
  { title: "Events", value: "events" },
  { title: "Home Groups", value: "groups" },
  { title: "Hope Kids", value: "kids" },
  { title: "Give", value: "give" },
  { title: "Contact", value: "contact" },
  { title: "Directions", value: "directions" },
  { title: "Leadership", value: "leadership" },
  { title: "Mercy Ministry", value: "mercy" },
  { title: "News", value: "news" },
  { title: "Ohio State", value: "ohio-state" },
];

export default defineType({
  name: "pageHero",
  title: "Page Hero Images",
  type: "document",
  fields: [
    defineField({
      name: "page",
      title: "Page",
      type: "string",
      validation: (Rule) => Rule.required(),
      options: { list: PAGE_LIST },
      description: "Which page this hero image applies to. One document per page.",
    }),
    defineField({
      name: "image",
      title: "Hero Image",
      type: "image",
      options: { hotspot: true },
      description:
        "Optional. Without an image the hero shows solid brand blue. With an image, a blue gradient is overlaid on top.",
    }),
  ],
  preview: {
    select: { title: "page", media: "image" },
    prepare({ title, media }) {
      const labels: Record<string, string> = Object.fromEntries(
        PAGE_LIST.map(({ value, title }) => [value, title])
      );
      return { title: labels[title] ?? title, media };
    },
  },
  orderings: [
    {
      title: "Page",
      name: "pageAsc",
      by: [{ field: "page", direction: "asc" }],
    },
  ],
});

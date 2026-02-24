import { defineField, defineType } from "sanity";

export default defineType({
  name: "homeGroup",
  title: "Home Group",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Group Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name", maxLength: 96 },
    }),
    defineField({
      name: "schedule",
      title: "Schedule",
      type: "string",
      description: 'e.g. "Weekly · Tuesday evenings"',
    }),
    defineField({
      name: "type",
      title: "Group Type",
      type: "string",
      description: 'e.g. "All stages of life" or "Mixed group"',
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "featured",
      title: "Show on Homepage",
      type: "boolean",
      initialValue: true,
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      description: "Lower numbers appear first",
    }),
  ],
  orderings: [
    {
      title: "Display Order",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "schedule",
    },
  },
});

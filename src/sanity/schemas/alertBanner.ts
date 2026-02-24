import { defineField, defineType } from "sanity";

export default defineType({
  name: "alertBanner",
  title: "Alert Banner",
  type: "document",
  fields: [
    defineField({
      name: "enabled",
      title: "Show Banner",
      type: "boolean",
      initialValue: false,
      description: "Toggle the banner on or off without deleting the message.",
    }),
    defineField({
      name: "message",
      title: "Message",
      type: "string",
      description: "The alert text shown to visitors. Keep it brief.",
      validation: (Rule) => Rule.max(160),
    }),
    defineField({
      name: "linkText",
      title: "Link Text (optional)",
      type: "string",
      description: "Label for an optional action link, e.g. 'Learn more'.",
    }),
    defineField({
      name: "linkUrl",
      title: "Link URL (optional)",
      type: "url",
      description: "Where the link should point.",
    }),
  ],
  preview: {
    select: { title: "message", enabled: "enabled" },
    prepare({ title, enabled }) {
      return {
        title: title ?? "(no message set)",
        subtitle: enabled ? "🟢 Active" : "⚫ Inactive",
      };
    },
  },
});

import { defineField, defineType } from "sanity";

export default defineType({
  name: "event",
  title: "Event",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "date",
      title: "Date",
      type: "date",
      validation: (Rule) => Rule.required(),
      options: { dateFormat: "MMMM D, YYYY" },
    }),
    defineField({
      name: "time",
      title: "Time",
      type: "string",
      description: 'e.g. "11:30 AM" or "6:00 – 8:00 PM"',
    }),
    defineField({
      name: "location",
      title: "Location",
      type: "string",
      description: 'e.g. "Outside the Worship Space" or "Room 104"',
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
      description: "Short blurb shown on the home page and events list.",
    }),
    defineField({
      name: "registrationUrl",
      title: "Registration / Details URL",
      type: "url",
      description: "Optional. Link for RSVP or more info.",
    }),
    defineField({
      name: "featuredOnHome",
      title: "Show on Home Page",
      type: "boolean",
      description: "Include this event in the Upcoming Events section on the home page.",
      initialValue: true,
    }),
  ],
  preview: {
    select: { title: "title", date: "date", location: "location" },
    prepare({ title, date, location }) {
      return {
        title,
        subtitle: [date, location].filter(Boolean).join(" · "),
      };
    },
  },
  orderings: [
    {
      title: "Date (Soonest First)",
      name: "dateAsc",
      by: [{ field: "date", direction: "asc" }],
    },
    {
      title: "Date (Latest First)",
      name: "dateDesc",
      by: [{ field: "date", direction: "desc" }],
    },
  ],
});

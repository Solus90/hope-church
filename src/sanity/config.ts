import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemas";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;

export default defineConfig({
  basePath: "/studio",
  projectId,
  dataset,
  title: "Hope Presbyterian Church",
  schema: {
    types: schemaTypes,
  },
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Content")
          .items([
            S.listItem()
              .title("Sermons")
              .schemaType("sermon")
              .child(S.documentTypeList("sermon").title("Sermons")),
            S.listItem()
              .title("Events")
              .schemaType("event")
              .child(
                S.documentTypeList("event")
                  .title("Events")
                  .defaultOrdering([{ field: "date", direction: "asc" }])
              ),
            S.listItem()
              .title("Testimonials")
              .schemaType("testimonial")
              .child(S.documentTypeList("testimonial").title("Testimonials")),
            S.listItem()
              .title("Home Groups")
              .schemaType("homeGroup")
              .child(S.documentTypeList("homeGroup").title("Home Groups")),
            S.listItem()
              .title("Staff & Leadership")
              .schemaType("staffMember")
              .child(S.documentTypeList("staffMember").title("Staff & Leadership")),
            S.divider(),
            S.listItem()
              .title("⚠️ Alert Banner")
              .schemaType("alertBanner")
              .child(
                S.editor()
                  .id("alertBanner")
                  .schemaType("alertBanner")
                  .documentId("alertBanner")
              ),
            S.divider(),
            S.listItem()
              .title("Page Hero Images")
              .schemaType("pageHero")
              .child(S.documentTypeList("pageHero").title("Page Hero Images")),
          ]),
    }),
    visionTool(),
  ],
});

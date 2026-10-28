import { defineArrayMember, defineField, defineType } from "sanity";

export const divisionContent = defineType({
  name: "divisionContent",
  title: "Division",
  type: "document",
  groups: [
    { name: "images", title: "Images", default: true },
    { name: "listings", title: "Listings" },
    { name: "videos", title: "Videos" },
    { name: "info", title: "Highlights & FAQs" },
  ],
  fields: [
    // ---------- Main image ----------
    defineField({
      name: "mainImage",
      title: "Main image",
      description: "Shown in the division banner and on the homepage card. Use a wide (landscape) photo.",
      type: "image",
      options: { hotspot: true },
      group: "images",
    }),

    // ---------- Gallery ----------
    defineField({
      name: "galleryTitle",
      title: "Gallery heading",
      description: 'For example "Our past projects" or "From our store shelves".',
      type: "string",
      group: "images",
    }),
    defineField({
      name: "galleryAspect",
      title: "Gallery photo shape",
      type: "string",
      options: {
        list: [
          { title: "Portrait (taller than wide)", value: "portrait" },
          { title: "Landscape (wider than tall)", value: "landscape" },
        ],
        layout: "radio",
      },
      initialValue: "landscape",
      group: "images",
    }),
    defineField({
      name: "gallery",
      title: "Gallery photos",
      description: "Drag photos to change their order.",
      type: "array",
      group: "images",
      of: [
        defineArrayMember({
          type: "image",
          options: { hotspot: true },
          fields: [
            defineField({
              name: "caption",
              title: "Caption",
              type: "string",
              validation: (rule) => rule.required(),
            }),
          ],
        }),
      ],
    }),

    // ---------- Listings ----------
    defineField({
      name: "listingsTitle",
      title: "Listings heading",
      description: 'For example "Vehicles available now".',
      type: "string",
      group: "listings",
    }),
    defineField({
      name: "listings",
      title: "Listings",
      type: "array",
      group: "listings",
      of: [
        defineArrayMember({
          type: "object",
          name: "listing",
          fields: [
            defineField({
              name: "title",
              title: "Name",
              type: "string",
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "image",
              title: "Photo",
              type: "image",
              options: { hotspot: true },
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "price",
              title: "Price",
              description: 'Optional. For example "₦38,500,000".',
              type: "string",
            }),
            defineField({
              name: "details",
              title: "Details",
              description: 'Short points, for example "Foreign used" or "45,000 km".',
              type: "array",
              of: [defineArrayMember({ type: "string" })],
            }),
            defineField({
              name: "status",
              title: "Status",
              type: "string",
              options: {
                list: ["Available", "Reserved", "Sold"],
                layout: "radio",
              },
            }),
          ],
          preview: {
            select: { title: "title", subtitle: "price", media: "image" },
          },
        }),
      ],
    }),

    // ---------- Videos ----------
    defineField({
      name: "videosTitle",
      title: "Videos heading",
      type: "string",
      group: "videos",
    }),
    defineField({
      name: "videos",
      title: "Videos",
      description: "Use MP4 videos under about 10 MB so they load quickly.",
      type: "array",
      group: "videos",
      of: [
        defineArrayMember({
          type: "object",
          name: "video",
          fields: [
            defineField({
              name: "file",
              title: "Video file",
              type: "file",
              options: { accept: "video/mp4" },
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "poster",
              title: "Cover image",
              description: "The still image shown before the video plays.",
              type: "image",
            }),
            defineField({
              name: "caption",
              title: "Caption",
              type: "string",
              validation: (rule) => rule.required(),
            }),
          ],
          preview: {
            select: { title: "caption", media: "poster" },
          },
        }),
      ],
    }),

    // ---------- Highlights & FAQs ----------
    defineField({
      name: "highlights",
      title: "Highlights",
      description: 'Real numbers only, for example "500+" and "Solar systems installed".',
      type: "array",
      group: "info",
      of: [
        defineArrayMember({
          type: "object",
          name: "highlight",
          fields: [
            defineField({ name: "value", title: "Number", type: "string" }),
            defineField({ name: "label", title: "Label", type: "string" }),
          ],
          preview: { select: { title: "value", subtitle: "label" } },
        }),
      ],
    }),
    defineField({
      name: "faqs",
      title: "FAQs",
      type: "array",
      group: "info",
      of: [
        defineArrayMember({
          type: "object",
          name: "faq",
          fields: [
            defineField({ name: "q", title: "Question", type: "string" }),
            defineField({ name: "a", title: "Answer", type: "text", rows: 3 }),
          ],
          preview: { select: { title: "q" } },
        }),
      ],
    }),
  ],
});
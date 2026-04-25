import { defineArrayMember, defineField, defineType } from "sanity";

export const gallerySectionType = defineType({
  name: "gallerySection",
  title: "Gallery Section",
  type: "document",
  fields: [
    defineField({
      name: "label",
      title: "Section Label",
      type: "string",
      initialValue: "Gallery",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "title",
      title: "Section Heading",
      type: "string",
      initialValue: "Inside Our Clinic & Moments That Matter",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "subtitle",
      title: "Section Subtitle",
      type: "text",
      rows: 2,
      initialValue: "Explore our facilities and highlights from our journey.",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "clinicTabLabel",
      title: "Clinic Tab Label",
      type: "string",
      initialValue: "Clinic Gallery",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "eventTabLabel",
      title: "Events Tab Label",
      type: "string",
      initialValue: "Events & Achievements",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "clinicImages",
      title: "Clinic Images",
      type: "array",
      of: [
        defineArrayMember({
          title: "Clinic Image",
          type: "image",
          options: { hotspot: true },
          fields: [
            defineField({
              name: "alt",
              title: "Alt Text",
              type: "string",
            }),
            defineField({
              name: "description",
              title: "Description",
              type: "text",
              rows: 2,
            }),
          ],
          preview: {
            select: {
              title: "alt",
              media: "asset",
            },
          },
        }),
      ],
    }),
    defineField({
      name: "eventImages",
      title: "Event Images",
      type: "array",
      of: [
        defineArrayMember({
          title: "Event Image",
          type: "image",
          options: { hotspot: true },
          fields: [
            defineField({
              name: "alt",
              title: "Alt Text",
              type: "string",
            }),
            defineField({
              name: "description",
              title: "Description",
              type: "text",
              rows: 2,
            }),
          ],
          preview: {
            select: {
              title: "alt",
              media: "asset",
            },
          },
        }),
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "Gallery Section",
      };
    },
  },
});

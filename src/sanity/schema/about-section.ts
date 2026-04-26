import { defineField, defineType } from "sanity";

export const aboutSectionType = defineType({
  name: "aboutSection",
  title: "About Section",
  type: "document",
  fields: [
    defineField({
      name: "label",
      title: "Section Label",
      type: "string",
      initialValue: "Meet Dr. Raina",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "title",
      title: "Heading",
      type: "string",
      initialValue: "Where Experience Meets Dental Care",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "highlightText",
      title: "Highlighted Text",
      type: "string",
      initialValue: "Dental Care",
      description: "This text is shown in accent color in the heading.",
    }),
    defineField({
      name: "paragraphOne",
      title: "Paragraph One",
      type: "text",
      rows: 4,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "paragraphTwo",
      title: "Paragraph Two",
      type: "text",
      rows: 4,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "ctaLabel",
      title: "CTA Label",
      type: "string",
      initialValue: "Learn More About Us",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "ctaHref",
      title: "CTA Link",
      type: "string",
      initialValue: "/about-us",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "image",
      title: "Section Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Alt Text",
          type: "string",
        }),
      ],
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "label",
      media: "image",
    },
  },
});

import { defineArrayMember, defineField, defineType } from "sanity";

export const testimonialsSectionType = defineType({
  name: "testimonialsSection",
  title: "Testimonials Section",
  type: "document",
  fields: [
    defineField({
      name: "label",
      title: "Section Label",
      type: "string",
      initialValue: "Testimonials",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "title",
      title: "Section Heading",
      type: "string",
      initialValue: "Trusted by Smiles Across Generations",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "subtitle",
      title: "Section Subtitle",
      type: "text",
      rows: 2,
      initialValue: "Honest feedback from patients who trusted us with their treatment journey and smile care.",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "googleReviewsUrl",
      title: "Google Reviews URL",
      type: "url",
      initialValue: "https://www.google.com/maps/search/?api=1&query=Dr.%20Raina%27s%20Dental%20Care%20and%20Implants",
    }),
    defineField({
      name: "items",
      title: "Testimonials",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({
              name: "name",
              title: "Patient Name",
              type: "string",
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "review",
              title: "Review",
              type: "text",
              rows: 4,
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "treatment",
              title: "Treatment Label",
              type: "string",
            }),
            defineField({
              name: "rating",
              title: "Rating",
              type: "number",
              initialValue: 5,
              validation: (rule) => rule.required().min(1).max(5),
            }),
          ],
          preview: {
            select: {
              title: "name",
              subtitle: "treatment",
            },
          },
        }),
      ],
      validation: (rule) => rule.required().min(1),
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "label",
    },
  },
});

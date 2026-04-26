import { defineArrayMember, defineField, defineType } from "sanity";

export const specialistsSectionType = defineType({
  name: "specialistsSection",
  title: "Specialists Section",
  type: "document",
  fields: [
    defineField({
      name: "label",
      title: "Section Label",
      type: "string",
      initialValue: "Our Specialists",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "title",
      title: "Section Heading",
      type: "string",
      initialValue: "Meet the Experts Behind Your Smile",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "highlightText",
      title: "Highlighted Heading Text",
      type: "string",
      initialValue: "Behind Your Smile",
      description: "This text will render in accent color in the heading.",
    }),
    defineField({
      name: "subtitle",
      title: "Section Subtitle",
      type: "text",
      rows: 2,
      initialValue: "A team of experienced dental professionals dedicated to your care.",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "doctors",
      title: "Doctors",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({
              name: "name",
              title: "Doctor Name",
              type: "string",
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "role",
              title: "Doctor Role",
              type: "string",
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "image",
              title: "Doctor Image",
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
              title: "name",
              subtitle: "role",
              media: "image",
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

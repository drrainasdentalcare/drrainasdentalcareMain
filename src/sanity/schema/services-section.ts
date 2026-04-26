import { defineArrayMember, defineField, defineType } from "sanity";

export const servicesSectionType = defineType({
  name: "servicesSection",
  title: "Services Section",
  type: "document",
  fields: [
    defineField({
      name: "label",
      title: "Section Label",
      type: "string",
      initialValue: "Our Services",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "title",
      title: "Section Heading",
      type: "string",
      initialValue: "Complete Dental Care Under One Roof",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "highlightText",
      title: "Highlighted Heading Text",
      type: "string",
      initialValue: "Under One Roof",
      description: "This part will be shown in accent color inside heading.",
    }),
    defineField({
      name: "subtitle",
      title: "Section Subtitle",
      type: "text",
      rows: 2,
      initialValue:
        "Personalized treatment plans, experienced specialists, and modern techniques for every stage of your dental journey.",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "items",
      title: "Service Cards",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({
              name: "title",
              title: "Service Title",
              type: "string",
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "description",
              title: "Service Description",
              type: "text",
              rows: 3,
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "image",
              title: "Service Image",
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

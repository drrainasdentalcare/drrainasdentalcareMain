import { defineField, defineType } from "sanity";

export const onlineConsultationPageType = defineType({
  name: "onlineConsultationPage",
  title: "Online Consultation Page",
  type: "document",
  fields: [
    defineField({
      name: "badge",
      title: "Top Badge",
      type: "string",
      initialValue: "Remote Care",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "title",
      title: "Page Title",
      type: "string",
      initialValue: "Online Consultation",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "consultationFeeLabel",
      title: "Consultation Fee Label",
      type: "string",
      initialValue: "Online Consultation Fee",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "consultationFee",
      title: "Consultation Fee",
      type: "string",
      initialValue: "Rs.2000/-",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "afterPaymentLabel",
      title: "After Payment Label",
      type: "string",
      initialValue: "After Payment",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "afterPaymentText",
      title: "After Payment Text",
      type: "text",
      rows: 3,
      description: "Text shown before the phone number link.",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "phone",
      title: "Contact Phone",
      type: "string",
      initialValue: "+91 8595389394",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "afterPaymentSuffix",
      title: "After Payment Suffix",
      type: "string",
      description: "Text shown after the phone number link.",
      initialValue: "to avail the Online Consultation service.",
    }),
    defineField({
      name: "note",
      title: "Bottom Note",
      type: "string",
      initialValue: "Please share your payment confirmation when you call.",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "qrLabel",
      title: "QR Label",
      type: "string",
      initialValue: "Scan & Pay",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "qrImage",
      title: "QR Image",
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
      subtitle: "badge",
      media: "qrImage",
    },
  },
});

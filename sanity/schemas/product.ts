import { defineField, defineType } from "sanity";
import currencies from "../data/currencies";

export default defineType({
  type: "document",
  name: "Product",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "code",
      title: "Code",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "currency",
      title: "Currency",
      type: "string",
      initialValue: 'USD',
      validation: (Rule) => Rule.required(),
      options: {
        list: [...currencies],
      },
    }),
    defineField({
      name: "price",
      title: "Price",
      type: "number",
      validation: (Rule) => Rule.positive(),
    }),
    defineField({
      name: "selling",
      title: "Selling",
      type: "boolean",
      initialValue: false,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "quantity",
      title: "Quatity",
      type: "number",
      initialValue: 0,
      validation: (Rule) => Rule.required().positive(),
    }),
    defineField({
      name: "images",
      title: "Images",
      type: "array",
      of: [{ name: "image", type: "image" }],
      options: {
        layout: "grid",
      },
      validation: (Rule) => Rule.min(3),
    }),
    defineField({
        name: "category",
        title: "Category",
        type: "reference",
        to: [{type: "category"}],
        validation: (Rule) => Rule.required(),
    })
  ],
});

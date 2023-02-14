import { defineField, defineType } from "sanity";

export default defineType({
  name: "dances",
  title: "Plesovi",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Ime Plesa",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
    }),
    defineField({
      name: "teaching",
      title: "Predajemo",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "image",
      title: "Slika",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "body",
      title: "Body",
      type: "blockContent",
    }),
  ],
});

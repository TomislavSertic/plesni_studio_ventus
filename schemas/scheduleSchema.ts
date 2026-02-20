import { defineField, defineType } from "sanity";

const DAYS_OF_WEEK = [
  { title: "Ponedjeljak", value: "Ponedjeljak" },
  { title: "Utorak", value: "Utorak" },
  { title: "Srijeda", value: "Srijeda" },
  { title: "Četvrtak", value: "Četvrtak" },
  { title: "Petak", value: "Petak" },
  { title: "Subota", value: "Subota" },
  { title: "Nedjelja", value: "Nedjelja" },
];

export default defineType({
  name: "scheduleSchema",
  title: "Raspored",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Naziv Rasporeda",
      type: "string",
      initialValue: "Glavni raspored",
    }),
    defineField({
      name: "isMain",
      title: "Glavni Raspored",
      type: "boolean",
      description:
        "Označi ako je ovo primarni raspored — prikazuje se prvi na stranici. Samo jedan raspored bi trebao biti označen kao glavni.",
      initialValue: false,
    }),
    defineField({
      name: "days",
      title: "Dani",
      type: "array",
      of: [
        {
          type: "object",
          name: "daySchedule",
          title: "Dan",
          preview: {
            select: {
              title: "day",
              classes: "classes",
            },
            prepare({ title, classes }: { title: string; classes: any[] }) {
              const count = Array.isArray(classes) ? classes.length : 0;
              return {
                title,
                subtitle: `${count} sat${count === 1 ? "" : count < 5 ? "a" : "ova"}`,
              };
            },
          },
          fields: [
            defineField({
              name: "day",
              title: "Dan u tjednu",
              type: "string",
              options: {
                list: DAYS_OF_WEEK,
                layout: "dropdown",
              },
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "classes",
              title: "Satovi",
              type: "array",
              of: [
                {
                  type: "object",
                  name: "scheduleClass",
                  title: "Sat",
                  preview: {
                    select: {
                      title: "className",
                      subtitle: "timeStart",
                    },
                    prepare({
                      title,
                      subtitle,
                    }: {
                      title: string;
                      subtitle: string;
                    }) {
                      return {
                        title,
                        subtitle: `Početak: ${subtitle}`,
                      };
                    },
                  },
                  fields: [
                    defineField({
                      name: "className",
                      title: "Naziv Sata",
                      type: "string",
                      validation: (Rule) => Rule.required(),
                    }),
                    defineField({
                      name: "level",
                      title: "Razina",
                      type: "string",
                      options: {
                        list: [
                          { title: "Početna razina", value: "Početna razina" },
                          { title: "Srednja razina", value: "Srednja razina" },
                          {
                            title: "Napredna razina",
                            value: "Napredna razina",
                          },
                          { title: "Sve razine", value: "Sve razine" },
                        ],
                        layout: "dropdown",
                      },
                    }),
                    defineField({
                      name: "classRef",
                      title: "Klasa (link)",
                      type: "reference",
                      to: { type: "classEntry" },
                      description: "Odaberi klasu na koju ovaj sat upućuje",
                    }),

                    defineField({
                      name: "location",
                      title: "Lokacija",
                      type: "string",
                      initialValue: "Magazinska 9a, Zagreb",
                    }),
                    defineField({
                      name: "timeStart",
                      title: "Početak (HH:MM)",
                      type: "string",
                      validation: (Rule) =>
                        Rule.required().regex(/^([01]\d|2[0-3]):[0-5]\d$/, {
                          name: "time format",
                          invert: false,
                        }),
                    }),
                    defineField({
                      name: "timeEnd",
                      title: "Kraj (HH:MM)",
                      type: "string",
                      validation: (Rule) =>
                        Rule.required().regex(/^([01]\d|2[0-3]):[0-5]\d$/, {
                          name: "time format",
                          invert: false,
                        }),
                    }),
                    defineField({
                      name: "note",
                      title: "Napomena (opcionalno)",
                      type: "string",
                      description:
                        "npr. 'od 17.2.2025.' — prikazuje se ispod naziva sata",
                    }),
                  ],
                },
              ],
            }),
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: "title",
    },
  },
});

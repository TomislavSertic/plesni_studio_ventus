// schemas/classEntry.js
export default {
  name: "classEntry",
  title: "Class Entry",
  type: "object",
  fields: [
    {
      name: "class",
      title: "Naziv tečaja",
      type: "string",
      description:
        "Naziv tečaja ili grupa. Ako je objekt prazan, polje može ostati prazno.",
    },
    {
      name: "level",
      title: "Level ili Datum početka",
      type: "string",
      description: "Upiši datum početka tečaja ili level ako tečaj već traje.",
    },
    {
      name: "slug",
      title: "Slug",
      type: "string",
    },
    {
      name: "location",
      title: "Lokacija",
      type: "string",
    },
    {
      name: "timeStart",
      title: "Vrijeme početka",
      type: "string",
      description: "Format: HH:MM",
    },
    {
      name: "timeEnd",
      title: "Vrijeme završetka",
      type: "string",
      description: "Format: HH:MM",
    },
  ],
};

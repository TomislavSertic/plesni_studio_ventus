// schemas/daySchedule.js
export default {
  name: "daySchedule",
  title: "Raspored dana",
  type: "object",
  fields: [
    {
      name: "day",
      title: "Dan",
      type: "string",
      options: {
        list: [
          { title: "Ponedjeljak", value: "Ponedjeljak" },
          { title: "Utorak", value: "Utorak" },
          { title: "Srijeda", value: "Srijeda" },
          { title: "Četvrtak", value: "Četvrtak" },
          { title: "Petak", value: "Petak" },
          { title: "Subota", value: "Subota" },
          { title: "Nedjelja", value: "Nedjelja" },
        ],
      },
    },
    {
      name: "numberOfClasses",
      title: "Broj tečajeva",
      type: "number",
    },
    {
      name: "classes",
      title: "Tečajevi",
      type: "array",
      of: [{ type: "classEntry" }],
      description: `Unosi će biti "popunjeni" ili "prazni" objekti, ovisno o terminu:
    - Ako je tečaj u večernjim satima (nakon 16:00, a prije njega nema unosa) umetnuti su 2 prazna objekta na početak.
    - Ako je tečaj ujutro (prije podne, a nakon njega nema) umetnuti su 2 prazna objekta na kraj.
    - Ako je tečaj oko podne, umetnuti je po jedan prazan objekt prije i nakon.`,
    },
  ],
};

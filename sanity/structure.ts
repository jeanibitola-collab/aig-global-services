import type { StructureResolver } from "sanity/structure";

const divisions = [
  { id: "gadgets", title: "AIG Gadgets" },
  { id: "homes", title: "AIG Homes" },
  { id: "autos", title: "AIG Autos" },
  { id: "xchange", title: "AIG Xchange" },
  { id: "solar", title: "Solar Installation" },
  { id: "industrial-machines", title: "Industrial Machines" },
];

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Divisions")
    .items(
      divisions.map((d) =>
        S.listItem()
          .title(d.title)
          .id(d.id)
          .child(
            S.document()
              .schemaType("divisionContent")
              .documentId(`division-${d.id}`)
              .title(d.title)
          )
      )
    );
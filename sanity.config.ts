"use client";

import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { dataset, projectId } from "./sanity/env";
import { schema } from "./sanity/schemaTypes";
import { structure } from "./sanity/structure";

export default defineConfig({
  basePath: "/studio",
  title: "AIG Global Services",
  projectId,
  dataset,
  schema,
  plugins: [structureTool({ structure })],
  document: {
    // Hide "Create new division" – the six divisions are fixed
    newDocumentOptions: (prev) => prev.filter((item) => item.templateId !== "divisionContent"),
  },
});
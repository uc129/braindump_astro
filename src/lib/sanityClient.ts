import sanityClient from "@sanity/client";

export const client = sanityClient({
  projectId: "q49h505o",
  dataset: "production",
  useCdn: true,
});

import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "SME Data Readiness",
    short_name: "SME Ready",
    description: "A practical business data readiness and transformation self-assessment.",
    start_url: "/",
    display: "standalone",
    background_color: "#f8f7f1",
    theme_color: "#32634f",
    icons: [
      {
        src: "/favicon.svg",
        sizes: "any",
        type: "image/svg+xml"
      }
    ]
  };
}

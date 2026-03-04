import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Wattl. | Portable Power Bank Rentals",
    short_name: "Wattl",
    description:
      "Australia's first dedicated power bank rental network. Grab a charger, stay connected, return it when you're done.",
    start_url: "/",
    display: "standalone",
    background_color: "#FCE79E",
    theme_color: "#FCE79E",
    icons: [
      {
        src: "/icon.png",
        sizes: "192x192",
        type: "image/png",
      },
    ],
  };
}

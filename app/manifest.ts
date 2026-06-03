import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Miles Ni | AI Entrepreneur",
    short_name: "Miles Ni",
    description:
      "Miles Ni — AI Entrepreneur & Multi-Agent Architect. 14 years of full-stack data experience.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#000000",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "64x64",
        type: "image/png",
      },
      {
        src: "/favicon.ico",
        sizes: "64x64",
        type: "image/png",
        purpose: "maskable",
      },
    ],
    categories: ["portfolio", "ai", "quantitative trading"],
    lang: "en",
    dir: "ltr",
    scope: "/",
  };
}

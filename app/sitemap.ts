import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    // Homepage
    {
      url: "https://www.noeljr.com/",
      lastModified: "2026-10-12",
      changeFrequency: "monthly",
      priority: 1.0,
      images: ["https://www.noeljr.com/images/noel-luhanga.jpg"],
    },
    // Work Section
    {
      url: "https://www.noeljr.com/#work",
      lastModified: "2026-10-12",
      changeFrequency: "weekly",
      priority: 0.9,
    },
    // About Section
    {
      url: "https://www.noeljr.com/#about",
      lastModified: "2026-10-12",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    // Process Section
    {
      url: "https://www.noeljr.com/#process",
      lastModified: "2026-10-12",
      changeFrequency: "monthly",
      priority: 0.7,
    },
    // Contact Section
    {
      url: "https://www.noeljr.com/#contact",
      lastModified: "2026-10-12",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    // KIN Project
    {
      url: "https://www.noeljr.com/kin/",
      lastModified: "2026-10-12",
      changeFrequency: "monthly",
      priority: 0.7,
      images: ["https://www.noeljr.com/projects/kin/kin-cover.png"],
    },
    // Goldilocks Project
    {
      url: "https://www.noeljr.com/goldilocks/",
      lastModified: "2026-10-12",
      changeFrequency: "monthly",
      priority: 0.6,
      images: ["https://www.noeljr.com/projects/goldilocks/cover.png"],
    },
    // Lehazin Project
    {
      url: "https://www.noeljr.com/lehazin/",
      lastModified: "2026-10-12",
      changeFrequency: "monthly",
      priority: 0.6,
      images: ["https://www.noeljr.com/projects/lehazin/cover.png"],
    },
    // Sygenius Project
    {
      url: "https://www.noeljr.com/sygenius/",
      lastModified: "2026-10-12",
      changeFrequency: "monthly",
      priority: 0.6,
      images: ["https://www.noeljr.com/projects/sygenius/cover.png"],
    },
    // Timvane Project
    {
      url: "https://www.noeljr.com/timvane/",
      lastModified: "2026-10-12",
      changeFrequency: "monthly",
      priority: 0.6,
      images: ["https://www.noeljr.com/projects/timvane/timvane-cover.png"],
    },
  ];
}

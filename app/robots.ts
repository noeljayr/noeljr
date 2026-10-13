import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: "Googlebot",
        allow: ["/*.css", "/*.js"],
      },
      {
        userAgent: "Bingbot",
        allow: ["/*.css", "/*.js"],
      },
    ],
    sitemap: "https://www.noeljr.com/sitemap.xml",
  };
}

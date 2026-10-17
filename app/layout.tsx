import type { Metadata } from "next";
import "../css/globals.css";

const SITE_URL = "https://www.noeljr.com";
const SHORT_TITLE = "Noel Jr. Luhanga — Product Designer & Developer";
const OG_DESCRIPTION =
  "Product designer and developer specializing in fintech, e-commerce, and edu-tech systems. Building beautiful, user-centered products in Malawi since 2022.";
const OG_IMAGE = "/images/noel-luhanga.jpg";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title:
    "Noel Jr. Luhanga — Product Designer & Developer | UI/UX Design Portfolio",
  description: `${OG_DESCRIPTION} View portfolio and case studies.`,
  keywords: [
    "product designer",
    "UI/UX designer",
    "developer",
    "fintech design",
    "health tech",
    "education tech",
    "Malawi designer",
    "portfolio",
    "web design",
    "app design",
    "system design",
  ],
  authors: [{ name: "Noel Jr. Luhanga" }],
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    url: SITE_URL + "/",
    title: SHORT_TITLE,
    description: OG_DESCRIPTION,
    images: [{ url: OG_IMAGE }],
    locale: "en_US",
    siteName: "Noel Jr. Luhanga Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: SHORT_TITLE,
    description: OG_DESCRIPTION,
    images: [OG_IMAGE],
  },
  other: {
    "geo.region": "MW",
    "geo.placename": "Mzuzu, Malawi",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`h-full antialiased`}
      data-scroll-behavior="smooth"
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Lexend:wght@100..900&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/dist/tabler-icons.min.css"
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

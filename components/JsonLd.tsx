const SITE_URL = "https://www.noeljr.com";
const IMAGE = `${SITE_URL}/images/noel-luhanga.jpg`;

const person = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Noel Jr. Luhanga",
  url: SITE_URL,
  image: IMAGE,
  jobTitle: "Product Designer & Developer",
  description:
    "Product designer and developer specializing in fintech, health, and education systems",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Mzuzu",
    addressCountry: "MW",
  },
  email: "noeljayr01@gmail.com",
  knowsAbout: [
    "UI/UX Design",
    "Product Design",
    "Web Development",
    "Fintech",
    "Health Tech",
    "Education Tech",
    "E-commerce",
    "AI and Automation",
  ],
  alumniOf: {
    "@type": "EducationalOrganization",
    name: "Design & Development",
  },
  award: ["30+ Products Launched", "4+ Years Experience"],
  sameAs: [
    "https://www.linkedin.com/in/noel-jr-luhanga-2890a5229/",
    "https://www.instagram.com/noeljr_io/",
  ],
};

const website = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Noel Jr. Luhanga Portfolio",
  url: SITE_URL,
  description:
    "Portfolio showcasing product design and development work in fintech, health, and education",
  author: {
    "@type": "Person",
    name: "Noel Jr. Luhanga",
  },
};

const service = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Noel Jr. Luhanga Design Services",
  image: IMAGE,
  description:
    "Product design and development services specializing in fintech, health tech, and education technology",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Mzuzu",
    addressCountry: "MW",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "-11.4529",
    longitude: "34.0154",
  },
  url: SITE_URL,
  telephone: "",
  priceRange: "$$",
  openingHours: "Mo-Fr 08:00-17:00",
  email: "noeljayr01@gmail.com",
};

export default function JsonLd() {
  return (
    <>
      {[person, website, service].map((data) => (
        <script
          key={data["@type"]}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            // escape "<" so the JSON can never close the script tag early
            __html: JSON.stringify(data).replace(/</g, "\\u003c"),
          }}
        />
      ))}
    </>
  );
}

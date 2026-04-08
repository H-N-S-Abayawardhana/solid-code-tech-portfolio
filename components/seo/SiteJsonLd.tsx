import { site } from "@/lib/site";

const base = site.url.replace(/\/$/, "");

export function SiteJsonLd() {
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${base}/#organization`,
        name: site.name,
        url: base,
        description: site.description,
        logo: {
          "@type": "ImageObject",
          url: `${base}${site.logoSrc}`,
        },
        sameAs: [site.social.linkedin],
        contactPoint: {
          "@type": "ContactPoint",
          telephone: site.phone,
          email: site.email,
          contactType: "customer service",
          areaServed: "Worldwide",
        },
        address: {
          "@type": "PostalAddress",
          streetAddress: site.address.line1,
          addressLocality: "London",
          postalCode: "EC2A 4NE",
          addressCountry: "GB",
        },
      },
      {
        "@type": "WebSite",
        "@id": `${base}/#website`,
        url: base,
        name: site.name,
        description: site.description,
        inLanguage: "en-GB",
        publisher: { "@id": `${base}/#organization` },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}

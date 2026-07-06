/**
 * Organization + WebSite structured data.
 *
 * This doesn't force sitelinks (only Google's algorithm decides that), but
 * it gives Google the clearest possible signal about who you are, what your
 * site's name/URL is, and — via the `potentialAction` SearchAction — makes
 * you eligible for the search box Google sometimes shows under a result.
 *
 * Render this once, sitewide, e.g. in layout.tsx next to your existing
 * <JsonLd /> import (or replace that file's contents with this).
 */
export default function JsonLd() {
  const siteUrl = "https://zineddine.vercel.app";

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Rouabah Zine Eddine",
    url: siteUrl,
    jobTitle: "Software Engineer",
    image: `${siteUrl}/og-image.png`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Blida",
      addressCountry: "DZ",
    },
    sameAs: [
      "https://github.com/xCyberpunkx",
      "https://www.linkedin.com/in/zine-eddine-rouabah/",
      "https://www.reddit.com/user/No_Investigator4261/",
      "https://discord.com/users/557172887799463937",
      "https://wa.me/213540166358",
    ],
    knowsAbout: [
      "Next.js",
      "Laravel",
      "TypeScript",
      "Full-Stack Web Development",
      "PostgreSQL",
      "React",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Rouabah Zine Eddine Portfolio",
    url: siteUrl,
    inLanguage: "en",
    publisher: {
      "@type": "Person",
      name: "Rouabah Zine Eddine",
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteUrl}/blog?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  // A SiteNavigationElement list is one of the clearer signals for how a
  // site is structured — this mirrors the actual links in navigation.tsx.
  const siteNavigationSchema = {
    "@context": "https://schema.org",
    "@type": "SiteNavigationElement",
    name: ["Home", "About", "Services", "Projects", "Blog", "Formula 1 Stats"],
    url: [
      siteUrl,
      `${siteUrl}/about`,
      `${siteUrl}/services`,
      `${siteUrl}/projects`,
      `${siteUrl}/blog`,
      `${siteUrl}/f1`,
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(siteNavigationSchema) }}
      />
    </>
  );
}

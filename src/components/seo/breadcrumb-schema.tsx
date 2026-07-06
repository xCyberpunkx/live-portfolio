/**
 * Breadcrumb structured data — pairs with your existing <Breadcrumbs />
 * component. Reinforces the same hierarchy Google already needs to build
 * the "site: subpage1 | subpage2 | subpage3" breadcrumb trail it sometimes
 * shows directly in search results (a smaller, more attainable cousin of
 * full sitelinks, and one more signal toward earning the real thing).
 *
 * Usage in app/projects/page.tsx (same pattern for /blog, /about, etc.):
 *
 *   import BreadcrumbSchema from "@/components/seo/breadcrumb-schema";
 *   ...
 *   <BreadcrumbSchema items={[{ name: "Projects", url: "/projects" }]} />
 *   <Breadcrumbs items={[{ label: "Projects", href: "/projects" }]} />
 */
type BreadcrumbItem = {
  name: string;
  url: string; // relative, e.g. "/projects" or "/blog/my-post"
};

export default function BreadcrumbSchema({ items }: { items: BreadcrumbItem[] }) {
  const siteUrl = "https://zineddine.vercel.app";

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteUrl,
      },
      ...items.map((item, i) => ({
        "@type": "ListItem",
        position: i + 2,
        name: item.name,
        item: `${siteUrl}${item.url}`,
      })),
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

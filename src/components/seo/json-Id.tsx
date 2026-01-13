import Script from 'next/script'

export default function JsonLd() {
  const organizationData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Rouabah Zine Eddine',
    url: 'https://zineddine.vercel.app',
    logo: 'https://zineddine.vercel.app/og-image.png',
    sameAs: [
      'https://github.com/xCyberpunkx',
      'https://linkedin.com/in/rouabah-zine-eddine',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '',
      contactType: 'customer service',
      email: 'rouabah.zine.eddine@gmail.com',
    },
  }

  const websiteData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Rouabah Zine Eddine Portfolio',
    url: 'https://zineddine.vercel.app',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://zineddine.vercel.app/search?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  }

  return (
    <>
      <Script
        id="organization-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
      />
      <Script
        id="website-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteData) }}
      />
    </>
  )
}

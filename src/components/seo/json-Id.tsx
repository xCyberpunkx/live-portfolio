import Script from 'next/script'

export default function JsonLd() {
  const personData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Rouabah Zine Eddine',
    url: 'https://zineddine.vercel.app',
    image: 'https://zineddine.vercel.app/og-image.png',
    jobTitle: 'Software Engineer',
    email: 'rouabah.zineedinee@gmail.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Blida',
      addressCountry: 'DZ',
    },
    sameAs: [
      'https://github.com/xCyberpunkx',
      'https://www.linkedin.com/in/zine-eddine-rouabah-992b16265',
    ],
  }

  const websiteData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Rouabah Zine Eddine Portfolio',
    url: 'https://zineddine.vercel.app',
  }

  return (
    <>
      <Script
        id="person-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personData) }}
      />
      <Script
        id="website-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteData) }}
      />
    </>
  )
}

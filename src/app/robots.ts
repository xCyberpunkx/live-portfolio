export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: 'https://zineddine.vercel.app/sitemap.xml',
  }
}

import { MetadataRoute } from 'next'

// UPDATE THIS: Replace with your actual domain
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.bezdrob.com'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/dashboard/', '/api/'],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  }
}

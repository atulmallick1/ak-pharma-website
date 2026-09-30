import type { MetadataRoute } from 'next'
import { getAllPosts } from '@/lib/posts'

const BASE = 'https://www.akpharmagroup.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ['', '/about', '/products', '/defence-supply', '/b2b', '/certifications', '/blog', '/contact', '/privacy-policy']
  const staticPages: MetadataRoute.Sitemap = pages.map((p) => ({
    url: `${BASE}${p || '/'}`,
    changeFrequency: p === '/blog' ? 'weekly' : 'monthly',
    priority: p === '' ? 1 : p === '/privacy-policy' ? 0.2 : 0.8,
  }))
  const posts: MetadataRoute.Sitemap = getAllPosts().map((p) => ({
    url: `${BASE}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: 'monthly',
    priority: 0.7,
  }))
  return [...staticPages, ...posts]
}

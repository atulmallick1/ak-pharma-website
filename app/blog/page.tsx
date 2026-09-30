import type { Metadata } from 'next'
import Link from 'next/link'
import { getAllPosts } from '@/lib/posts'

export const metadata: Metadata = {
  title: 'Blog | AK Pharma Group',
  description:
    'Health guides and pharmaceutical supply articles from AK Pharma Group, a certified supplier to India\'s defence forces and institutions.',
}

function formatDate(date: string) {
  return new Date(date).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })
}

export default function BlogIndexPage() {
  const posts = getAllPosts()

  return (
    <>
      {/* ── Page header ────────────────────────────────────────────────── */}
      <section style={{ backgroundColor: '#0B1F3A', padding: '72px 0 60px' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="overline-light">Blog</span>
          <h1
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: 'clamp(2.5rem, 5vw, 3.8rem)',
              fontWeight: 600,
              color: '#FFFFFF',
              lineHeight: 1.1,
              marginTop: '0.75rem',
              maxWidth: '680px',
            }}
          >
            Health &amp; Supply Notes
          </h1>
          <p style={{ marginTop: '1rem', maxWidth: '560px', fontSize: '16px', lineHeight: 1.7, color: '#9CB4D3' }}>
            Health guides for everyday readers, and articles on how medicines reach
            the forces and institutions we serve.
          </p>
        </div>
      </section>
      <div className="h-1 grad-navy-bar" />

      {/* ── Posts ──────────────────────────────────────────────────────── */}
      <section style={{ backgroundColor: '#F5F7FA', padding: '72px 0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col bg-white p-8 transition-shadow duration-200 hover:shadow-lg"
                style={{ border: '1px solid #E2E8F0', borderTop: '3px solid #1E56A0', borderRadius: '4px' }}
              >
                <span className="overline">{post.category ?? 'Article'}</span>
                <h2
                  className="mt-3 mb-3 transition-colors duration-200 group-hover:text-[#1E56A0]"
                  style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 600, fontSize: '1.5rem', lineHeight: 1.2, color: '#0B1F3A' }}
                >
                  {post.title}
                </h2>
                <p className="flex-1 mb-6" style={{ fontSize: '14px', lineHeight: 1.7, color: '#4B5563' }}>
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between" style={{ fontSize: '12px', color: '#9CA3AF' }}>
                  <span>{formatDate(post.date)}</span>
                  <span>{post.readMinutes} min read</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

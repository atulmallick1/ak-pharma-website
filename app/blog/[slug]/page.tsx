import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { getAllPosts, getPost } from '@/lib/posts'

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) return { title: 'Post not found | AK Pharma Group' }
  return {
    title: `${post.title} | AK Pharma Group`,
    description: post.excerpt,
    openGraph: { title: post.title, description: post.excerpt, type: 'article', publishedTime: post.date },
  }
}

const text = { color: '#374151' }
const mdxComponents = {
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 className="mt-12 mb-4" style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 600, fontSize: 'clamp(1.7rem, 3vw, 2.1rem)', lineHeight: 1.2, color: '#0B1F3A' }} {...props} />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className="mt-8 mb-3" style={{ fontWeight: 600, fontSize: '1.15rem', color: '#0B1F3A' }} {...props} />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => <p className="mt-5 text-[15.5px] leading-[1.8]" style={text} {...props} />,
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a className="font-semibold underline underline-offset-2 hover:no-underline" style={{ color: '#1E56A0' }} {...props} />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => <ul className="mt-5 ml-6 list-disc text-[15.5px] leading-[1.8] space-y-2" style={text} {...props} />,
  ol: (props: React.OlHTMLAttributes<HTMLOListElement>) => <ol className="mt-5 ml-6 list-decimal text-[15.5px] leading-[1.8] space-y-2" style={text} {...props} />,
  strong: (props: React.HTMLAttributes<HTMLElement>) => <strong className="font-semibold" style={{ color: '#0B1F3A' }} {...props} />,
  em: (props: React.HTMLAttributes<HTMLElement>) => <em style={{ color: '#6B7280' }} {...props} />,
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) notFound()

  const articleLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: { '@type': 'Organization', name: 'AK Pharma Group' },
    publisher: { '@type': 'Organization', name: 'AK Pharma Group', url: 'https://www.akpharmagroup.com' },
    mainEntityOfPage: `https://www.akpharmagroup.com/blog/${post.slug}`,
  }

  const formattedDate = new Date(post.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />

      {/* ── Header ─────────────────────────────────────────────────────── */}
      <section style={{ backgroundColor: '#0B1F3A', padding: '56px 0 52px' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/blog" style={{ fontSize: '13px', fontWeight: 600, color: '#7AB3E8' }}>← All articles</Link>
          <span className="overline-light block mt-8">{post.category ?? 'Article'}</span>
          <h1 style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 600, fontSize: 'clamp(2.1rem, 4.5vw, 3.2rem)', lineHeight: 1.1, color: '#FFFFFF', marginTop: '0.75rem' }}>
            {post.title}
          </h1>
          <p style={{ marginTop: '1.25rem', fontSize: '13px', color: '#9CB4D3' }}>
            {formattedDate} · AK Pharma Group · {post.readMinutes} min read
          </p>
        </div>
      </section>
      <div className="h-1 grad-navy-bar" />

      {/* ── Body ───────────────────────────────────────────────────────── */}
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <MDXRemote source={post.content} components={mdxComponents} />

        <div className="mt-16 p-8 text-center" style={{ backgroundColor: '#F5F7FA', border: '1px solid #E2E8F0', borderTop: '3px solid #1E56A0', borderRadius: '4px' }}>
          <span className="overline">Institutional &amp; Defence Supply</span>
          <p className="mt-3 mb-6 mx-auto max-w-md" style={{ fontSize: '14px', lineHeight: 1.7, color: '#4B5563' }}>
            Procuring medicines for a defence unit, hospital, or institution? Talk to our supply team.
          </p>
          <Link href="/contact" className="btn-navy">Contact Us</Link>
        </div>

        <div className="mt-12 pt-8" style={{ borderTop: '1px solid #E2E8F0' }}>
          <Link href="/blog" style={{ fontSize: '14px', fontWeight: 600, color: '#1E56A0' }}>← Back to all articles</Link>
        </div>
      </article>
    </>
  )
}

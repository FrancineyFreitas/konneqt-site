import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

interface Post {
  id: number
  title: {
    rendered: string
  }
  content: {
    rendered: string
  }
  date: string
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url: string
    }>
    author?: Array<{
      name: string
      avatar_urls?: {
        '96': string
      }
    }>
  }
}

async function getPost(slug: string): Promise<Post> {
  const res = await fetch(
    `https://konneqt.io/wp-json/wp/v2/posts?slug=${slug}&_embed`,
    { next: { revalidate: 3600 } }
  )

  if (!res.ok) {
    throw new Error('Failed to fetch post')
  }

  const posts = await res.json()
  
  if (!posts.length) {
    notFound()
  }

  return posts[0]
}

function formatDate(date: string): string {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  let post: Post

  try {
    post = await getPost(params.slug)
  } catch (error) {
    console.error('Error fetching post:', error)
    notFound()
  }

  return (
    <article className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <Link
          href="/news"
          className="inline-flex items-center text-primary hover:text-primary/80 mb-8"
        >
          ← Back to News
        </Link>

        <div className="max-w-3xl mx-auto">
          <header className="mb-8">
            <h1 className="text-4xl font-bold mb-4">{post.title.rendered}</h1>
            <div className="flex items-center space-x-4 text-gray-600">
              {post._embedded?.author?.[0] && (
                <div className="flex items-center space-x-2">
                  {post._embedded.author[0].avatar_urls?.['96'] && (
                    <Image
                      src={post._embedded.author[0].avatar_urls['96']}
                      alt={post._embedded.author[0].name}
                      width={32}
                      height={32}
                      className="rounded-full"
                    />
                  )}
                  <span>{post._embedded.author[0].name}</span>
                </div>
              )}
              <span>•</span>
              <time>{formatDate(post.date)}</time>
            </div>
          </header>

          {post._embedded?.['wp:featuredmedia']?.[0]?.source_url && (
            <div className="relative h-[400px] mb-8">
              <Image
                src={post._embedded['wp:featuredmedia'][0].source_url}
                alt={post.title.rendered}
                fill
                className="object-cover rounded-lg"
              />
            </div>
          )}

          <div
            className="prose max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content.rendered }}
          />
        </div>
      </div>
    </article>
  )
} 
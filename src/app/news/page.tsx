import Link from 'next/link'
import Image from 'next/image'

// This interface defines the structure of a WordPress post
interface Post {
  id: number
  title: {
    rendered: string
  }
  excerpt: {
    rendered: string
  }
  date: string
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url: string
    }>
  }
  slug: string
}

// Fetch posts from WordPress API
async function getPosts(): Promise<Post[]> {
  const res = await fetch(
    'https://your-wordpress-site.com/wp-json/wp/v2/posts?_embed',
    { next: { revalidate: 3600 } } // Revalidate every hour
  )

  if (!res.ok) {
    throw new Error('Failed to fetch posts')
  }

  return res.json()
}

// Format date to a readable string
function formatDate(date: string): string {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default async function NewsPage() {
  let posts: Post[] = []
  
  try {
    posts = await getPosts()
  } catch (error) {
    console.error('Error fetching posts:', error)
  }

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-12">Latest News</h1>

        {posts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600">No posts available at the moment.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                {post._embedded?.['wp:featuredmedia']?.[0]?.source_url && (
                  <div className="relative h-48">
                    <Image
                      src={post._embedded['wp:featuredmedia'][0].source_url}
                      alt={post.title.rendered}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <div className="p-6">
                  <time className="text-sm text-gray-500">
                    {formatDate(post.date)}
                  </time>
                  <h2 className="text-xl font-semibold mt-2 mb-3">
                    <Link
                      href={`/news/${post.slug}`}
                      className="hover:text-primary transition-colors"
                    >
                      {post.title.rendered}
                    </Link>
                  </h2>
                  <div
                    className="text-gray-600 line-clamp-3"
                    dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                  />
                  <Link
                    href={`/news/${post.slug}`}
                    className="inline-block mt-4 text-primary hover:text-primary/80 font-medium"
                  >
                    Read More →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Pagination could be added here */}
      </div>
    </div>
  )
} 
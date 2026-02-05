import { allPosts } from "contentlayer/generated"
import Link from "next/link"

export default function PostsIndexPage() {
  // Fix 1: Convert date strings to Date objects for sorting
  const posts = [...allPosts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return (
    <div className="space-y-8 py-6">
      {posts.map((post) => (
        <article key={post._id} className="prose dark:prose-invert">
          <h2 className="text-2xl font-semibold">
            <Link href={`/posts/${post.slugAsParams}`}>
              {post.title}
            </Link>
          </h2>

          <time className="block text-sm text-muted-foreground">
            {/* Fix 2: Convert date string to Date object for formatting */}
            {new Date(post.date).toLocaleDateString()}
          </time>

          {post.description && <p className="mt-2">{post.description}</p>}
        </article>
      ))}
    </div>
  )
}

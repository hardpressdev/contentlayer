import { allPosts } from "contentlayer/generated"
import Link from "next/link"

export default function PostsIndexPage() {
  const posts = [...allPosts].sort((a, b) => b.date.getTime() - a.date.getTime())

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
            {post.date.toLocaleDateString()}
          </time>

          {post.description && <p className="mt-2">{post.description}</p>}
        </article>
      ))}
    </div>
  )
}

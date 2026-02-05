import { allPosts } from "contentlayer/generated"
import { compareDesc } from "date-fns"
import Link from "next/link"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog",
  description: "All posts sorted by date (latest first).",
}

export default function PostsIndexPage() {
  // Sort posts descending by date (latest first)
  const posts = allPosts
    .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))

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
            {new Date(post.date).toLocaleDateString()}
          </time>

          {post.description && (
            <p className="mt-2">{post.description}</p>
          )}
        </article>
      ))}
    </div>
  )
}

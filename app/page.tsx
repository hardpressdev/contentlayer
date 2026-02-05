import { allPosts } from "@/.contentlayer/generated"
import Link from "next/link"

export default function Home() {
  // Sort posts: Newest (b) minus Oldest (a)
  const posts = allPosts.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })

  return (
    <div className="prose dark:prose-invert">
      {posts.map((post) => (
        <article key={post._id} className="mb-12 last:mb-0">
          <Link href={post.slug}>
            <h2 className="mb-0">
              {post.title}
            </h2>
          </Link>
          {post.description && (
            <p className="mt-1 text-slate-600 dark:text-slate-400">
              {post.description}
            </p>
          )}
        </article>
      ))}
    </div>
  )
}

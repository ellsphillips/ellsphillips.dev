import { allPosts } from "@/.contentlayer/generated"
import Link from "next/link"

export default function PostLayout() {
  return (
    <div className="layout-content">
      <section className="pb-8">
        <h3 className="mb-2 text-2xl font-bold">Search for a post</h3>
        <input
          type="text"
          placeholder="Search"
          className="w-full p-2 mt-2 border rounded dark:border-neutral-600 dark:bg-neutral-800 dark:text-white"
        />
      </section>

      <section>
        <div className="space-y-8">
          {allPosts
            .sort(
              (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
            )
            .map((post) => (
              <div key={post.slug}>
                <Link href={post.slug}>
                  <div className="flex justify-between py-1">
                    <h3 className="text-xl font-bold md:text-2xl text-primary-600 dark:text-primary-300">
                      {post.title}
                    </h3>
                    {post.status === "draft" && (
                      <span className="flex items-center px-2 font-bold text-white rounded-sm bg-neutral-800">
                        DRAFT
                      </span>
                    )}
                  </div>
                  <p className="mt-2 text-lg dark:text-gray-300">
                    {post.description}
                  </p>
                </Link>
              </div>
            ))}
        </div>
      </section>
    </div>
  )
}

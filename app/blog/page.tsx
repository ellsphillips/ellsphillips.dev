import { allPosts } from "@/.contentlayer/generated"
import Section from "@/components/Section"
import Link from "next/link"

export default function PostLayout() {
  return (
    <div className="layout-content">
      <Section>
        <h3 className="mb-2 text-2xl font-bold">Search for a post</h3>
        <input
          type="text"
          placeholder="Search"
          className="w-full p-2 mt-2 border rounded dark:border-neutral-600 dark:bg-neutral-800 dark:text-white"
        />
      </Section>

      <Section>
        <div className="space-y-6">
          {allPosts.map((post) => (
            <div key={post.slug}>
              <Link href={post.slug}>
                <h3 className="text-xl font-bold dark:text-white md:text-2xl">
                  {post.title}
                </h3>
                <p className="mt-2 text-lg dark:text-gray-300">
                  {post.description}
                </p>
              </Link>
            </div>
          ))}
        </div>
      </Section>
    </div>
  )
}

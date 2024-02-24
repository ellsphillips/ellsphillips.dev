import { allPosts } from "contentlayer/generated"
import { Metadata } from "next"
import { notFound } from "next/navigation"

import { MDXContent } from "@/components/MDXComponents"
import TableOfContents from "@/components/TableOfContents"
import { getPartialPost } from "@/lib/contentlayer"

interface PostProps {
  params: {
    slug: string[]
  }
}

async function getPostFromParams(params: PostProps["params"]) {
  const slug = params?.slug?.join("/")
  const post = allPosts.find((post) => post.slugAsParams === slug)

  if (!post) {
    null
  }

  return post ? getPartialPost(post) : null
}

export async function generateMetadata({
  params,
}: PostProps): Promise<Metadata> {
  const post = await getPostFromParams(params)

  if (!post) {
    return {}
  }

  return {
    title: post.title,
    description: post.description,
  }
}

export async function generateStaticParams(): Promise<PostProps["params"][]> {
  return allPosts.map((post) => ({
    slug: post.slugAsParams.split("/"),
  }))
}

export default async function PostPage({ params }: PostProps) {
  const post = await getPostFromParams(params)

  if (!post) {
    notFound()
  }

  return (
    <main className="layout-content">
      <aside className="space-y-6">
        {post.headings ? (
          <div className="sticky block h-0">
            <h2 className="uppercase text-rose-100/30">On this page</h2>

            <TableOfContents headings={post.headings} />
          </div>
        ) : null}
      </aside>
      <article className="prose dark:prose-invert">
        <h1 className="mb-2">{post.title}</h1>
        {post.description && (
          <p className="mt-0 text-xl text-slate-700 dark:text-slate-200">
            {post.description}
          </p>
        )}

        <hr className="my-4" />

        <MDXContent code={post.body.code} />
      </article>
    </main>
  )
}

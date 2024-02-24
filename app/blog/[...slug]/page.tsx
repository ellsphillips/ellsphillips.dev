import { allPosts } from "contentlayer/generated"
import { Metadata } from "next"
import { notFound } from "next/navigation"

import { MDXContent } from "@/components/MDXComponents"
import { getPartialPost } from "@/lib/contentlayer"
import clsx from "clsx"

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
    <article className="py-6 prose dark:prose-invert">
      <h1 className="mb-2">{post.title}</h1>
      {post.description && (
        <p className="mt-0 text-xl text-slate-700 dark:text-slate-200">
          {post.description}
        </p>
      )}

      <hr className="my-4" />

      <div className="space-y-6">
        {post.headings ? (
          <div className="space-y-2 text-sm">
            <div className="uppercase text-rose-100/30">On this page</div>

            {post.headings.map((heading) => {
              return (
                <div key={heading.slug}>
                  <a
                    href={`#${heading.slug}`}
                    className={clsx(
                      "block text-rose-100/50 underline-offset-2 transition-all hover:text-neutral-100 hover:underline hover:decoration-rose-200/50",
                      {
                        "pl-2": heading.heading === 2,
                        "pl-4": heading.heading === 3,
                      },
                    )}
                  >
                    {heading.text}
                  </a>
                </div>
              )
            })}
          </div>
        ) : null}
      </div>

      <MDXContent code={post.body.code} />
    </article>
  )
}

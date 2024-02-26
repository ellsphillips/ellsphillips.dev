import { allPosts } from "contentlayer/generated"
import { Metadata } from "next"
import { notFound } from "next/navigation"

import { MDXContent } from "@/components/MDXComponents"
import Section from "@/components/Section"
import TableOfContents from "@/components/TableOfContents"
import Link from "next/link"

interface PostProps {
  params: {
    slug: string[]
  }
}

async function getPostFromParams(params: PostProps["params"]) {
  const slug = params?.slug?.join("/")
  const post = allPosts.find((post) => post.slugAsParams === slug)

  if (!post) {
    return null
  }

  return {
    ...post,
    headings:
      (post.headings as { heading: number; text: string; slug: string }[]) ??
      null,
  }
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
    <>
      <header className="w-full pb-12">
        <div className="relative px-6 py-20 mx-auto space-y-6 bg-white border-b-0 max-w-7xl dark:bg-neutral-950">
          <div className="absolute inset-y-0 inset-x-4 lg:bg-hero-grid lg:dark:bg-hero-grid-dark bg-12 lg:border-x-[1px] border-black-100 dark:border-white/5 pointer-events-none" />
          <h1 className="text-4xl font-bold dark:text-gray-100">
            {post.title}
          </h1>
          <p className="font-semibold text-slate-800 dark:text-gray-300">
            {post.description}
          </p>
          <span></span>
          <div className="flex items-center space-x-4 text-slate-800 dark:text-gray-300">
            <time>{post.dateFormatted}</time>
            <span>•</span>
            <span>{post.readTime} min read</span>
          </div>
          <div className="flex items-center pt-10 pb-6 text-sm align-baseline text-slate-800 dark:text-gray-400">
            <span className="mr-2">&larr;</span>
            <Link
              href={`/blog`}
              className="hyperlink hover:text-slate-700 dark:hover:text-primary-400"
            >
              Back to blog
            </Link>
          </div>
        </div>

        <Section className="pt-0 pb-2">
          <div className="flex mx-6 min-h-full min-w-0 flex-col items-center justify-center mt-2 overflow-hidden rounded-lg dark:bg-neutral-800 bg-neutral-200 ring-1 ring-inset ring-white/5 aspect-[2/1]">
            {post.thumbnail ? (
              <img
                src={post.thumbnail}
                className="object-cover object-center"
                alt=""
              />
            ) : null}
          </div>
        </Section>
      </header>

      <main className="layout-content">
        <aside className="space-y-6">
          {post.headings ? (
            <div className="sticky hidden h-0 align-top lg:block">
              <h2 className="mb-2 text-xl font-bold uppercase">On this page</h2>
              <TableOfContents headings={post.headings} />
            </div>
          ) : null}
        </aside>
        <article className="h-full prose dark:prose-invert">
          <MDXContent code={post.body.code} />
        </article>
      </main>
    </>
  )
}

import { Post } from "contentlayer/generated"

export const allTagNames = ["Next.js", "MDX", "Next Conf", "React Conf"]
export const allTagSlugs = ["next", "mdx", "next-conf", "react-conf"]

export const getPartialPost = (post: Post) => ({
  title: post.title,
  slug: post.slug,
  dateFormatted: post.dateFormatted,
  description: post.description ?? null,
  body: {
    code: post.body.code,
  },
  headings:
    (post.headings as { heading: number; text: string; slug: string }[]) ??
    null,
})

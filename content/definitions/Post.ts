import { defineDocumentType } from "contentlayer/source-files"
import GithubSlugger from "github-slugger"

// esbuild does not support path aliases
import { formatShortDate } from "../../lib/utils"

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `blog/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    date: { type: "string", required: true },
    description: { type: "string" },
    thumbnail: { type: "string" },
    status: { type: "enum", options: ["draft", "published"], required: true },
  },
  computedFields: {
    headings: {
      type: "json",
      resolve: async (doc) => {
        const slugger = new GithubSlugger()

        const regXHeader = /\n\n(?<flag>#{1,6})\s+(?<content>.+)/g

        const headings = Array.from(doc.body.raw.matchAll(regXHeader)).map(
          ({ groups }) => {
            const flag = groups?.flag
            const content = groups?.content
            return {
              heading: flag?.length,
              text: content,
              slug: content ? slugger.slug(content) : undefined,
            }
          },
        )

        return headings
      },
    },
    dateFormatted: {
      type: "string",
      resolve: (doc) => {
        return formatShortDate(doc.date)
      },
    },
    slug: {
      type: "string",
      resolve: (doc) => `/${doc._raw.flattenedPath}`,
    },
    slugAsParams: {
      type: "string",
      resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/"),
    },
  },
}))

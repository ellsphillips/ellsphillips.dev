import { makeSource } from "contentlayer/source-files"
import { s } from "hastscript"
import rehypeAutolinkHeadings, {
  type Options as AutolinkOptions,
} from "rehype-autolink-headings"
import { Element } from "rehype-autolink-headings/lib"
import rehypeSlug from "rehype-slug"
import remarkGfm from "remark-gfm"

// esbuild does not support path aliases
import { Post } from "./content/definitions/Post"

export default makeSource({
  contentDirPath: "./content",
  documentTypes: [Post],
  mdx: {
    esbuildOptions(options) {
      options.target = "esnext"
      return options
    },
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        {
          behavior: "append",
          test: ["h2", "h3"],
          properties: { class: "heading-link" },
          content: s(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 24 24",
              width: "24",
              height: "24",
              fill: "none",
              stroke: "currentColor",
              "stroke-width": "2",
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              "aria-label": "Anchor link",
            },
            [
              s("line", { x1: "4", y1: "9", x2: "20", y2: "9" }),
              s("line", { x1: "4", y1: "15", x2: "20", y2: "15" }),
              s("line", { x1: "10", y1: "3", x2: "8", y2: "21" }),
              s("line", { x1: "16", y1: "3", x2: "14", y2: "21" }),
            ],
          ) as Element,
        } satisfies Partial<AutolinkOptions>,
      ],
    ],
  },
})

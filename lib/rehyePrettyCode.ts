import { type Options } from "rehype-pretty-code"
import { visit } from "unist-util-visit"

import theme from "./theme"

// div.BLOCK > pre.PRE > code.CODE
const BLOCK =
  "overflow-hidden rounded-lg outline outline-neutral-200 dark:outline-none outline-[1px] bg-neutral-50/50 dark:bg-primary-100/5 shadow-surface-elevation-low ring-1 ring-primary-100/[3%] ring-inset my-6"
const TITLE =
  "mb-0.5 rounded-t-md bg-neutral-500/10 dark:bg-primary-100/10 px-3 py-1 font-mono text-xs text-primary-700/70 dark:text-primary-100/70 shadow-sm"
const PRE = "overflow-x-auto py-2 text-[13px] leading-6 [color-scheme:dark]"
const CODE =
  "grid [&>span]:border-l-4 [&>span]:border-l-transparent [&>span]:pl-2 [&>span]:pr-3 [&>span]:font-bold dark:[&>span]:font-medium dark:[&>span]:[text-shadow:_0.5px_0.5px_0_rgb(0_0_0_/_20%)] [&>span]:[text-shadow:_0.5px_0.5px_0px_rgb(0_0_0_/_50%)]"
const INLINE_BLOCK =
  "whitespace-nowrap border border-primary-200/10 px-1.5 py-px text-[12px] rounded-full bg-white/5 whitespace-nowrap text-primary-300/90"
const INLINE_CODE = ""
const NUMBERED_LINES =
  "[counter-reset:line] before:[&>span]:mr-3 before:[&>span]:inline-block before:[&>span]:w-4 before:[&>span]:text-right before:[&>span]:text-neutral-800/20 dark:before:[&>span]:text-white/20 before:[&>span]:![content:counter(line)] before:[&>span]:[counter-increment:line] [&>span]:[text-shadow-none]"
const HIGHLIGHTED_LINE =
  "!border-l-primary-300/70 bg-primary-200/10 before:!text-neutral-600/70 dark:before:!text-white/70"

export function rehypePrettyCodeClasses() {
  return (tree: any) => {
    visit(
      tree,
      (node: any) =>
        Boolean(
          node.tagName === "code" &&
            Object.keys(node.properties).length === 0 &&
            node.children.some((n: any) => n.type === "text"),
        ),
      (node: any) => {
        const textNode = node.children.find((n: any) => n.type === "text")
        textNode.type = "element"
        textNode.tagName = "code"
        textNode.properties = { className: [INLINE_CODE] }
        textNode.children = [{ type: "text", value: textNode.value }]
        node.properties.className = [INLINE_BLOCK]
        node.tagName = "span"
      },
    )

    visit(
      tree,
      (node: any) =>
        Boolean(
          typeof node?.properties?.["data-rehype-pretty-code-fragment"] !==
            "undefined",
        ),
      (node: any) => {
        if (node.tagName === "span") {
          node.properties.className = [
            ...(node.properties.className || []),
            INLINE_BLOCK,
          ]
          node.children[0].properties.className = [
            ...(node.children[0].properties.className || []),
            INLINE_CODE,
          ]

          return node
        }

        if (node.tagName === "div") {
          node.properties.className = [
            ...(node.properties.className || []),
            BLOCK,
          ]
          node.children = node.children.map((node: any) => {
            if (
              node.tagName === "div" &&
              typeof node.properties?.["data-rehype-pretty-code-title"] !==
                "undefined"
            ) {
              node.properties.className = [
                ...(node.properties.className || []),
                TITLE,
              ]
            }
            if (node.tagName === "pre") {
              node.properties.className = [PRE]
              if (node.children[0].tagName === "code") {
                node.children[0].properties.className = [
                  ...(node.children[0].properties.className || []),
                  CODE,
                ]
                if (
                  typeof node.children[0].properties["data-line-numbers"] !==
                  "undefined"
                ) {
                  node.children[0].properties.className.push(NUMBERED_LINES)
                }
              }
            }

            return node
          })

          return node
        }
      },
    )
  }
}

export const rehypePrettyCodeOptions: Partial<Options> = {
  theme: theme as never as JSON | string,
  tokensMap: {
    fn: "entity.name.function",
    objKey: "meta.object-literal.key",
  },
  onVisitLine(node) {
    // Prevent lines from collapsing in `display: grid` mode, and
    // allow empty lines to be copy/pasted
    if (node.children.length === 0) {
      node.children = [{ type: "text", value: " " }]
    }
    node.properties.className = [""]
  },
  onVisitHighlightedLine(node) {
    node.properties.className.push(HIGHLIGHTED_LINE)
  },
}

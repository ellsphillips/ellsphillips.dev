import cx from "clsx"
import { useMDXComponent } from "next-contentlayer/hooks"
import Image, { type ImageProps } from "next/image"
import Link from "next/link"

export const FOCUS_VISIBLE_OUTLINE = `focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-500/70`

export const LINK_STYLES = `text-neutral-800 dark:text-neutral-100 underline decoration-neutral-200/30 underline-offset-2 transition-all hover:text-primary-800 hover:decoration-neutral-200/50`

const components = {
  h1: (props: any) => (
    <h2
      className="relative mt-3 text-xl font-medium border-t-2 border-neutral-200/5 pt-9 text-neutral-800 dark:text-neutral-100 sm:text-3xl"
      {...props}
    />
  ),
  h2: (props: any) => (
    <h3
      className="relative mt-3 text-xl font-medium border-t-2 border-neutral-200/5 pt-9 text-neutral-800 dark:text-neutral-100 sm:text-2xl"
      {...props}
    />
  ),
  h3: (props: any) => (
    <h4
      className="text-xl font-medium text-neutral-800 dark:text-neutral-100"
      {...props}
    />
  ),
  h4: (props: any) => (
    <h5
      className="text-lg font-medium text-neutral-800 dark:text-neutral-100"
      {...props}
    />
  ),
  p: (props: any) => (
    <p className="my-2 text-neutral-600 dark:text-neutral-300" {...props} />
  ),
  hr: (props: any) => (
    <hr
      className="relative border-t-2 border-neutral-200/5 pt-9 sm:pt-10"
      {...props}
    />
  ),
  a: ({ href = "", ...props }) => {
    if (href.startsWith("http")) {
      return (
        <a
          className={cx(LINK_STYLES, FOCUS_VISIBLE_OUTLINE)}
          href={href}
          target="_blank"
          rel="noopener"
          {...props}
        />
      )
    }

    return (
      <Link
        href={href}
        className={cx(LINK_STYLES, FOCUS_VISIBLE_OUTLINE)}
        {...props}
      />
    )
  },
  ul: (props: any) => (
    <ul
      className="space-y-3 [li>&]:mt-3 [&>li]:relative [&>li]:pl-7 before:[&>li]:absolute before:[&>li]:left-1 before:[&>li]:top-3 before:[&>li]:h-1.5 before:[&>li]:w-1.5 before:[&>li]:rounded-full before:[&>li]:bg-neutral-100/20"
      {...props}
    />
  ),
  ol: (props: any) => (
    <ol className="pl-10 space-y-3 list-decimal" {...props} />
  ),
  strong: (props: any) => <strong className="font-semibold" {...props} />,
  Img: (props: ImageProps) => <Image {...props} />,
  blockquote: (props: any) => (
    <blockquote
      className="border-l-2 border-neutral-200/10 pl-4 text-xl italic xl:!col-start-2 xl:!col-end-3"
      {...props}
    />
  ),
  del: (props: any) => (
    <del
      className="line-through text-neutral-800 dark:text-neutral-100"
      {...props}
    />
  ),
  code: (props: any) => (
    <code
      className="px-1.5 py-0.5 text-neutral-800 dark:text-neutral-100 bg-neutral-200/50 dark:bg-neutral-600/50 rounded font-mono"
      {...props}
    />
  ),
}

interface MdxProps {
  code: string
}

export function MDXContent({ code }: MdxProps) {
  const Component = useMDXComponent(code)
  return <Component components={components} />
}

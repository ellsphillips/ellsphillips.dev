import clsx from "clsx"

export default function TableOfContents({
  headings,
}: {
  headings: { slug: string; text: string; heading: number }[]
}) {
  return (
    <>
      {headings.map((heading) => {
        return (
          <div key={heading.slug}>
            <a
              href={`#${heading.slug}`}
              className={clsx(
                "block text-rose-100/50 underline-offset-2 transition-all hover:text-neutral-100 hover:underline hover:decoration-neutral-200/50",
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
    </>
  )
}

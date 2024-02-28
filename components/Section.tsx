import { cn } from "@/lib/utils"

type SectionProps = {
  children: React.ReactNode
  grid?: boolean
  fade?: boolean
} & React.HTMLAttributes<HTMLDivElement>

export default function Section(props: SectionProps) {
  return (
    <section
      className={cn(
        "relative w-full h-full py-16 border-neutral-900/10 dark:border-white/10 xl:border-y",
        props.className,
      )}
    >
      <div
        className={`absolute inset-0 -z-50 ${
          props.grid &&
          "bg-hero-grid dark:bg-hero-grid-dark bg-8 bg-[bottom_1px_center]"
        }`}
        style={{
          maskImage: props.fade
            ? "linear-gradient(to bottom, black, transparent)"
            : "none",
        }}
      />

      <div className="w-full mx-auto max-w-7xl">{props.children}</div>
    </section>
  )
}

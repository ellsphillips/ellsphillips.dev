export default function Page({ children }: { children: React.ReactNode }) {
  return (
    <div className="px-4 mx-auto max-w-7xl">
      <div className="py-10 mx-px bg-white dark:bg-neutral-950 col-span-full dark:border-x-white/5 border-x-black/5">
        <main>{children}</main>
      </div>
    </div>
  )
}

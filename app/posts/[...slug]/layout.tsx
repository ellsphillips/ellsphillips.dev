export default function PostLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="w-full px-4 mx-auto max-w-7xl md:px-6">
      <div className="w-full max-w-7xl grid-cols-[23rem_auto] gap-8 lg:grid">
        <aside>
          <h2>Post info</h2>
        </aside>
        <main>{children}</main>
      </div>
    </div>
  )
}

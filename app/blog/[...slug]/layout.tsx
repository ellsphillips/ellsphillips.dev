export default function PostLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="layout-content">
      <aside>
        <h2>Post info</h2>
      </aside>
      <main>{children}</main>
    </div>
  )
}

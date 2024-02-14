export default function Page({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-2xl px-4 py-10 mx-auto">
      <main>{children}</main>
    </div>
  )
}

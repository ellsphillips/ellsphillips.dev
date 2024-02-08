import Link from "next/link"

const links = [{ href: "/blog", label: "Blog" }]

export default function Nav() {
  return (
    <nav className="ml-auto text-sm font-medium space-x-6">
      {links.map(({ href, label }) => (
        <Link key={`${href}${label}`} href={href}>
          {label}
        </Link>
      ))}
    </nav>
  )
}

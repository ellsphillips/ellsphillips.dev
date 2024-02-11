import { ThemeToggle } from "@/components/ThemeToggle"
import Link from "next/link"

const links = [{ href: "/blog", label: "Blog" }]

export default function Header() {
  return (
    <header
      className="relative z-50 bg-gradient-to-b from-gray-900/20 to-gray-900/0"
      data-test="header"
    >
      <div className="mx-auto w-full max-w-7xl px-4 md:px-6">
        <div className="flex h-16 items-center justify-between lg:h-20">
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold">
              Elliott Phillips
            </a>
          </div>

          <div className="flex items-center">
            <div className="mr-6 hidden space-x-10 border-r border-neutral-900/10 dark:border-white/10 py-0.5 pr-6 md:block">
              <nav className="font-medium space-x-6">
                {links.map(({ href, label }) => (
                  <Link key={`nav-link-${label}`} href={href}>
                    {label}
                  </Link>
                ))}
              </nav>
            </div>

            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  )
}

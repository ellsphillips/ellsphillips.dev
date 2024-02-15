import Breadcrumbs from "@/components/Breadcrumbs"
import { ThemeToggle } from "@/components/ThemeToggle"

import Link from "next/link"

const links = [{ href: "/blog", label: "Blog" }]

export default function Header() {
  return (
    <header
      className="relative z-50 bg-neutral-50 dark:bg-neutral-900/50"
      data-test="header"
    >
      <div className="w-full px-4 mx-auto max-w-7xl md:px-6">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex items-center">
            <Breadcrumbs />
          </div>

          <div className="flex items-center pr-4">
            <div className="mr-6 hidden space-x-10 border-r border-neutral-900/10 dark:border-white/10 py-0.5 pr-6 md:block">
              <nav className="space-x-6 font-medium">
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

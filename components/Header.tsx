import Breadcrumbs from "@/components/Breadcrumbs"
import { ThemeToggle } from "@/components/ThemeToggle"

import Link from "next/link"

const links = [{ href: "/blog", label: "Blog" }]

export default function Header() {
  return (
    <header className="fixed z-50 w-full bg-neutral-50 dark:bg-neutral-900">
      <div className="w-full px-4 mx-auto max-w-7xl md:px-6">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <div className="block mr-2 font-bold hover:underline md:hidden">
            <Link
              href={"/"}
              style={{ textDecoration: "none" }}
              className="flex items-center justify-center w-6 h-6 p-4 font-mono [&_*]:no-underline border rounded-md border-neutral-900/10 dark:border-white/10 hover:bg-neutral-100 dark:hover:bg-neutral-900"
            >
              ~
            </Link>
          </div>
          <div className="items-center hidden md:flex">
            <Breadcrumbs />
          </div>

          <div className="flex items-center md:pr-4">
            <div className="mr-6 space-x-10 border-r border-neutral-900/10 dark:border-white/10 py-0.5 pr-6 block">
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

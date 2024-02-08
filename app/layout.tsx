import Nav from "@/components/Nav"
import { ThemeProvider } from "@/components/ThemeProvider"
import { ThemeToggle } from "@/components/ThemeToggle"
import "@/styles/globals.css"
import cx from "clsx"
import type { Metadata } from "next"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

const siteMetadata = {
  title: "Elliott Phillips",
  description: `Full stack Software Engineer who values learning and growing with people, teams, and technologies.`,
  domain: `ellsphillips.dev`,
  linkedIn: `@elliott.phillips`,
  meta: `Lead Engineer at Department for Levelling Up`,
}

export const metadata: Metadata = {
  title: {
    template: `%s | ${siteMetadata.title}`,
    default: siteMetadata.title,
  },
  description: siteMetadata.description,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-p-24">
      <body
        className={cx(
          "antialiased bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50 font-sans",
          inter.className,
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="max-w-2xl mx-auto py-10 px-4">
            <header>
              <div className="flex items-center justify-between">
                <ThemeToggle />
                <Nav />
              </div>
            </header>
            <main>{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

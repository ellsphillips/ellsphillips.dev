import Footer from "@/components/Footer"
import Header from "@/components/Header"
import { ThemeProvider } from "@/components/ThemeProvider"
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
          "flex min-h-full flex-col antialiased bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50 font-sans",
          inter.className,
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="pointer-events-none absolute inset-0 flex justify-center">
            <div className="hidden h-full w-full max-w-7xl grid-cols-[30%_70%] gap-3.5 px-4 lg:grid">
              <div className="border-x border-neutral-900/10 dark:border-white/10"></div>
              <div className="border-x border-neutral-900/10 dark:border-white/10"></div>
            </div>
          </div>

          <Header />

          <main className="relative flex grow flex-col">{children}</main>

          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}

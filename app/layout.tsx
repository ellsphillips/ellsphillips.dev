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
          "antialiased font-sans bg-gray-900 selection:bg-purple-500/30 selection:text-red-500",
          inter.className,
        )}
      >
        {children}
      </body>
    </html>
  )
}

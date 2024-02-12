import Footer from "@/components/Footer"
import Header from "@/components/Header"
import { ThemeProvider } from "@/components/ThemeProvider"
import { siteMetadata } from "@/lib/metadata"
import "@/styles/globals.css"

import cx from "clsx"
import type { Metadata } from "next"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    template: `%s | ${siteMetadata.name}`,
    default: siteMetadata.name,
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

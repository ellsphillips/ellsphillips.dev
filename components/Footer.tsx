import { siteMetadata } from "@/lib/metadata"

export default function Footer() {
  return (
    <footer className="relative border-t border-neutral-900/10 dark:border-white/10 py-12">
      <div className="mx-auto w-full max-w-7xl px-4 text-center md:px-6 lg:text-left">
        <div className="mx-auto mb-16 flex max-w-[30%] flex-col justify-between lg:mx-0 lg:text-left">
          <p className="text-xl font-bold">{siteMetadata.name}</p>
          <p className="flex flex-col mt-3 px-3 font-medium text-gray-400 lg:mt-2 lg:px-0">
            {siteMetadata.description}
          </p>
        </div>
        <div className="lg:flex lg:justify-between">
          <a
            className="rounded-sm font-medium text-neutral-500 hover:text-neutral-300 focus:outline focus:outline-2 lg:text-sm"
            href="/contact"
          >
            Get in touch
          </a>
          <p className="mt-8 text-sm text-neutral-500 lg:mt-0">&copy; 2024</p>
        </div>
      </div>
    </footer>
  )
}

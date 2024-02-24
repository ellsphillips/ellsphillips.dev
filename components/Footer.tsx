import { siteMetadata } from "@/lib/metadata"

export default function Footer() {
  return (
    <footer className="relative py-12 border-t border-neutral-900/10 dark:border-white/10">
      <div className="w-full px-4 mx-auto text-center max-w-7xl md:px-6 lg:text-left">
        <div className="mb-16 flex lg:max-w-[30%] flex-col justify-between text-left">
          <p className="text-xl font-bold">{siteMetadata.name}</p>
          <p className="flex flex-col mt-3 font-medium text-gray-400 lg:mt-2 lg:px-0">
            {siteMetadata.description}
          </p>
        </div>
        <div className="flex justify-between">
          <a
            className="font-medium rounded-sm text-neutral-500 hover:text-neutral-300 focus:outline focus:outline-2 lg:text-sm"
            href="/contact"
          >
            Get in touch
          </a>
          <p className="text-sm text-neutral-500">&copy; 2024</p>
        </div>
      </div>
    </footer>
  )
}

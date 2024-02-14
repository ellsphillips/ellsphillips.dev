import { siteMetadata } from "@/lib/metadata"
import "@/styles/globals.css"
import Image from "next/image"

export default function Home() {
  return (
    <>
      <section className="mb-12 mt-64 border-neutral-900/10 dark:border-white/10 md:mt-28 lg:my-28 lg:border-y lg:py-2">
        <div className="mx-auto w-full max-w-7xl px-4 md:px-6">
          <div className="w-full max-w-7xl grid-cols-[24rem_auto] gap-5 lg:grid ">
            <Image
              className="max-w-[calc(100%-1rem)] w-full rounded-xl "
              src="/headshot.jpg"
              alt="Elliott Phillips portrait"
              width={180}
              height={180}
              priority
            />

            <div>
              <h1 className="text-3xl font-extrabold tracking-tight dark:text-white md:text-[40px] md:leading-[1.1] lg:col-span-2 lg:text-[64px] lg:leading-[1.125em]">
                Elliott Phillips
              </h1>
              <div className="mt-8 max-w-lg space-y-6 text-lg leading-[1.4] dark:text-gray-300 md:max-w-xl lg:text-xl">
                <p>{siteMetadata.description}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 border-neutral-900/10 dark:border-white/10 lg:border-y">
        <div className="w-full px-4 mx-auto max-w-7xl md:px-6">
          <h2 className="text-4xl font-bold tracking-tight dark:text-white">
            Latest Posts
          </h2>
          <ul className="mt-6 space-y-6">
            {allPosts.slice(0, 3).map((post) => (
              <li key={post.slug}>
                <Link href={post.slug}>
                  <h3 className="text-xl font-bold dark:text-white md:text-2xl">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-lg dark:text-gray-300">
                    {post.description}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}

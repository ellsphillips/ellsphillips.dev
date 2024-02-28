import { allPosts } from "@/.contentlayer/generated"
import Section from "@/components/Section"
import { siteMetadata } from "@/lib/metadata"

import "@/styles/globals.css"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <>
      <Section className="py-2">
        <div className="w-full px-4 mx-auto max-w-7xl md:px-6">
          <div className="w-full max-w-7xl grid-cols-[24rem_auto] gap-4 xl:grid space-y-12">
            <Image
              className="xl:max-w-[calc(100%-1rem)] max-w-sm w-full rounded-xl"
              src="/headshot.jpg"
              alt="Elliott Phillips portrait"
              width={180}
              height={180}
              priority
            />

            <div>
              <h1 className="text-3xl font-extrabold tracking-tight dark:text-white xl:text-6xl xl:leading-[1.125em]">
                Elliott Phillips
              </h1>
              <p className="mt-4 xl:mt-8 max-w-lg space-y-6 text-lg leading-[1.4] dark:text-gray-300 md:max-w-xl xl:text-xl">
                <p>{siteMetadata.description}</p>
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section>
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
      </Section>
    </>
  )
}

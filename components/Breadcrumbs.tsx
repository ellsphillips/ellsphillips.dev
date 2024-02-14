"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import React from "react"

const Breadcrumbs = () => {
  const paths = usePathname()
  const pathNames = paths?.split("/").filter((path) => path)

  return (
    <ul className="flex items-center py-5 mx-4 font-mono text-xl font-bold">
      <li className="mr-2 font-bold hover:underline ">
        <Link
          href={"/"}
          style={{ textDecoration: "none" }}
          className="flex items-center justify-center w-6 h-6 p-4 font-mono [&_*]:no-underline border rounded-md border-neutral-900/10 dark:border-white/10 hover:bg-neutral-100 dark:hover:bg-neutral-900"
        >
          ~
        </Link>
      </li>
      {(pathNames?.length ?? 0) > 0 && "/"}
      {pathNames?.map((link, index) => {
        let href = `/${pathNames.slice(0, index + 1).join("/")}`

        return (
          <React.Fragment key={index}>
            <li
              className={`hover:underline mx-2 font-bold ${
                paths === href && "text-primary-300"
              }`}
            >
              <Link href={href}>{link}</Link>
            </li>
            {pathNames.length !== index + 1 && "/"}
          </React.Fragment>
        )
      })}
    </ul>
  )
}

export default Breadcrumbs

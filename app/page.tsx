import "@/styles/globals.css"
import Image from "next/image"

export default function Home() {
  return (
    <>
      <div className="flex min-h-screen flex-col items-center justify-center p-24 gap-y-2">
        <h1 className="font-bold text-2xl">Elliott Phillips</h1>
        <p className="text-primary-400 font-bold">
          made with <span className=" text-secondary-400">&hearts;</span> built
          with
        </p>

        <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-transparent before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-primary-600 after:via-primary-300 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-secondary-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-secondary-600 after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#from-sky-900] dark:invert"
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
        </div>
      </div>
    </>
  )
}

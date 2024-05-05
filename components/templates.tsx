// import { IBM_Plex_Sans } from 'next/font/google'
// import { Arimo } from 'next/font/google'

// ibm_plex_sans({
//   subsets: ['latin'],
//   display: 'swap',
// })

// arimo({
//   subsets: ['latin'],
//   display: 'swap',
// })

import Link from "next/link";

export function Template() {
  return (
    <>
      <div className="bg-slate-900/30 rounded-md shadow-lg overflow-hidden shadow-gray-900 border-2 border-gray-900">
        <div className="relative h-[200px] sm:h-[250px] lg:h-[300px]">
          <img
            alt="Classic Theme"
            className="object-cover w-full h-full"
            height="300"
            src="/placeholder.svg"
            style={{
              aspectRatio: "450/300",
              objectFit: "cover",
            }}
            width="450"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent" />
          <div className="absolute bottom-4 left-4 text-gray-50 dark:text-gray-50">
            <h3 className="text-xl font-bold">Classic</h3>
            <p className="text-sm">A timeless and elegant theme</p>
          </div>
        </div>
        <div className="p-6">
          <div className="flex justify-between">
            <Link
              className="inline-flex h-9 items-center justify-center rounded-md bg-gray-50 px-4 text-sm font-medium text-gray-950 shadow transition-colors hover:bg-gray-50/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-300 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-800 dark:text-gray-50 dark:hover:bg-gray-800/90 dark:focus-visible:ring-gray-300"
              href="#"
            >
              See Now
            </Link>
            <Link
              className="inline-flex h-9 items-center justify-center rounded-md border border-gray-500  bg-gray-950 px-4 text-sm font-medium shadow-sm transition-colors hover:bg-gray-800 hover:text-gray-50 text-gray-300 "
              href="#"
            >
              Use Now
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

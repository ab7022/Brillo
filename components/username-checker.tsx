/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/JnCEU22EnE9
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Inter } from 'next/font/google'

inter({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
export function usernameChecker() {
  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
        <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-lg dark:bg-gray-900">
          <div className="space-y-4">
            <div className="text-center">
              <h2 className="text-2xl font-bold">Choose your username</h2>
              <p className="text-gray-500 dark:text-gray-400">Enter a username to get the URL for your website.</p>
            </div>
            <form className="space-y-4">
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="username">
                  Username
                </label>
                <input
                  className="block w-full rounded-md border border-gray-200 border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400 dark:border-gray-800"
                  id="username"
                  placeholder="Enter a username"
                  type="text"
                />
              </div>
              <button
                className="w-full rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                type="submit"
              >
                Check Availability
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="fixed inset-0 z-40 bg-black/50" />
    </>
  )
}
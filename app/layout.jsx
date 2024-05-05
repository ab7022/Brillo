// This is the root layout component for your Next.js app.
// Learn more: https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#root-layout-required
import './globals.css'

import { Arimo } from 'next/font/google'
import { Rubik } from 'next/font/google'
const arimo = Arimo({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-arimo',
})
const rubik = Rubik({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-rubik',
})

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body className={arimo.variable + ' ' + rubik.variable}>
        {children}
      </body>
    </html>
  )
}
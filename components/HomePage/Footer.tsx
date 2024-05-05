import Link from "next/link";

export default function Footer() {
    return(
        <footer className="flex flex-col gap-4 bg-purple-950/50 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-gray-700">
        <p className="text-sm text-gray-400">
          © 2024 Portfolio Builder. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm hover:underline underline-offset-4 text-gray-400"
            href="#"
          >
            Terms of Service
          </Link>
          <Link
            className="text-sm hover:underline underline-offset-4 text-gray-400"
            href="#"
          >
            Privacy
          </Link>
        </nav>
      </footer>
    )
}
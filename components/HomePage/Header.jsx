import Link from "next/link";

export default function Header() {
    return(
        <header className="flex fixed w-full h-16 items-center justify-between border-b  bg-transparent px-6 backdrop-blur-md z-50 backdrop-brightness-75">
        <Link
          className="flex items-center gap-2 font-semibold text-gray-50"
          href="/"
        >
          <PocketIcon className="h-6 w-6" />
          <span>Portfolio Builder</span>
        </Link>
        <div className="flex items-center gap-10">
        <Link
            className="text-sm font-medium text-gray-400 transition-colors hover:text-white"
            href="/"
          >
            Home
          </Link>
          <Link
            className="text-sm font-medium text-gray-400 transition-colors hover:text-white"
            href="/templates"
          >
            Templates
          </Link>
          <Link
            className="text-sm font-medium text-gray-400 transition-colors hover:text-white "
            href="#"
          >
            Pricing
          </Link>
          <Link
            className="inline-flex h-9 items-center justify-center rounded-md bg-[#2563eb] px-4 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-[#1e40af] "
            href="#"
          >
            Login
          </Link>

        </div>
      </header>
    )
}
function PocketIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 3h16a2 2 0 0 1 2 2v6a10 10 0 0 1-10 10A10 10 0 0 1 2 11V5a2 2 0 0 1 2-2z" />
        <polyline points="8 10 12 14 16 10" />
      </svg>
    );
  }
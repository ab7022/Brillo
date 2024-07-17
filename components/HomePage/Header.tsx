"use client";
import {
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenu,
} from "@/components/ui/dropdown-menu";
import { useState, useEffect } from "react";
import { signIn, signOut } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
export default function Header({ session }: { session: any }) {
  const pathname = usePathname();
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (session?.user?.email) {
      setUsername(session.user.email);
    }
  }, [session]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const navLinks = [
    { href: "/", label: "Home", icon: "🏠" },
    { href: "/pricing", label: "Pricing", icon: "💲" }, // Adjust the href as per your routing setup
    { href: "/templates", label: "Portfolio Templates", icon: "📁" },
    { href: "/dashboard", label: "Dashboard", icon: "📊" },
    { href: "myaccount", label: "Manage Profile", icon: "👤" },
    {
      href: "/contact-us",
      label: "Contact Us",
      icon: "❓",
    },
  ];

  return (
    <div className="md:mx-auto md:w-full mx-1 mt-12 flex justify-center items-center  ">
      <section className="flex w-full md:max-w-6xl max-w-sm p-2 md:mx-auto mx-1 justify-between z-50 fixed md:top-6 top-4 m-4 h-20 items-center py-2 rounded-lg border border-gray-300 md:px-2 bg-gray-600 bg-opacity-70 backdrop-blur-md backdrop-filter antialiased">
        <Link href="/">
          <p className="flex items-center gap-2 font-semibold text-gray-50">
            <img className="md:h-24 md:w-40 h-28 w-36" src="Eazyfolio.png" />
            {/* <span className="text-xl">EazyFolio</span> */}
          </p>
        </Link>
        <nav className="hidden md:flex items-center space-x-2">
          {navLinks.map((link) => (
            <NavLink
              key={link.href}
              href={link.href}
              active={pathname === link.href}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          {!session ? (
            <Link href="#" passHref>
              <p
                className="hidden md:inline-flex h-10 items-center justify-center rounded-md bg-[#2563eb] px-6 text-base font-medium text-gray-50 shadow transition-colors hover:bg-[#1e40af]"
                onClick={() => signIn()}
              >
                Login
              </p>
            </Link>
          ) : (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  className="rounded-full mr-2  hidden md:inline-flex w-12 h-12 border-white shadow-gray-900 shadow-lg"
                  size="icon"
                  variant="ghost"
                >
                  <img
                    className="rounded-full border w-full h-full border-white shadow-2xl border-solid shadow-gray-100"
                    src={
                      session?.user?.image
                        ? session.user.image
                        : `https://ui-avatars.com/api/?name=${encodeURIComponent(
                            session?.user?.name
                          )}&background=112&color=fff`
                    }
                    alt="User avatar"
                    style={{
                      aspectRatio: "1/1",
                      objectFit: "cover",
                    }}
                    onError={(e) => {
                      console.error("Image load error:", e);
                      e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
                        session?.user?.name
                      )}&background=112&color=fff`;
                    }}
                  />
                  <span className="sr-only">Toggle user menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => signOut()}>
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-50 focus:outline-none"
          >
            {menuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </section>
      {menuOpen && (
        <div className="md:hidden h-screen flex flex-col justify-between bg-gray-500 bg-opacity-70 backdrop-blur-lg backdrop-filter text-gray-100 w-full py-2 fixed top-0 left-0 right-0 bottom-0 z-40 shadow-lg border border-gray-300 border-opacity-50">
          <div className="flex flex-col items-start w-full mt-28 px-6">
            {navLinks.map((link, index) => (
              <div key={link.href} className="w-full max-w-sm">
                <NavLink href={link.href} active={pathname === link.href}>
                  <span className="mr-3 text-xl">{link.icon}</span>
                  <span className=" text-xl font-medium">{link.label}</span>
                </NavLink>
                {index < navLinks.length - 1 && (
                  <div className="border-b border-gray-300 border-opacity-20 w-full my-2"></div>
                )}
              </div>
            ))}
            {!session && (
              <p
                className="text-md font-medium bg-gray-800 text-gray-100 transition-colors hover:text-white p-3 hover:bg-gray-700 rounded w-full text-center mt-4"
                onClick={() => signIn()}
              >
                Login
              </p>
            )}
          </div>
          {session && (
            <div className="flex sticky z-50 -mt-8 items-center flex-row justify-between space-x-3 p-4 bg-gray-800 bg-opacity-30 backdrop-blur-md">
              <div className="flex flex-row justify-center items-center gap-4">
                <img
                  className="rounded-full w-10 h-10 border border-gray-300"
                  src={
                    session.user?.image ||
                    `https://ui-avatars.com/api/?name=${encodeURIComponent(
                      session.user?.name || ""
                    )}&background=112&color=fff`
                  }
                  alt="User avatar"
                />
                <span className="text-md font-semibold text-gray-100">
                  {session.user?.name || session.user?.email}
                </span>
              </div>
              <div className="flex flex-row justify-center items-center">
                <p
                  className="text-sm font-medium text-gray-100 bg-gray-800 transition-colors hover:text-white p-3 hover:bg-gray-700 rounded w-full text-center "
                  onClick={() => signOut()}
                >
                  Logout
                </p>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function NavLink({
  href,
  active,
  children,
}: {
  href: string;
  active?: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link href={href}>
      <p
        className={`text-base font-medium text-gray-100 transition-colors hover:text-white p-3 hover:bg-gray-700 hover:bg-opacity-30 rounded-lg flex items-center ${
          active ? "text-white bg-gray-700 bg-opacity-30" : ""
        }`}
      >
        {children}
      </p>
    </Link>
  );
}

function PocketIcon(
  props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
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

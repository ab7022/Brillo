"use client";
import {
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuContent,
  DropdownMenu,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { signIn, signOut } from "next-auth/react";
import Link from "next/link";
import Image from 'next/image'
export default function Header({ session }) {

  return (
    <header className="flex op-0 left-0 z-50 fixed  md:h-20 h-16 items-center justify-between border-b w-full bg-transparent px-6 backdrop-blur-md  backdrop-brightness-75">
      <Link
        className="flex items-center gap-2 font-semibold text-gray-50"
        href="/"
      >
        <PocketIcon className="h-6 w-6" />
        <span>Brillo</span>
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
        {!session ? (
          <Link
            className="inline-flex h-9 items-center justify-center rounded-md bg-[#2563eb] px-4 text-sm font-medium mr-4  text-gray-50 shadow transition-colors hover:bg-[#1e40af] "
            href="#"
            onClick={() => {
              signIn();
            }}
          >
            Login
          </Link>
        ) : (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                className="rounded-full w-10 mr-4 border-white shadow-gray-900 shadow-lg"
                size="icon"
                variant="ghost"
              >
                <img
                  className="rounded-full border w-full border-white shadow-2xl border-solid shadow-gray-100"
                  src={
                    `https://ui-avatars.com/api/?name=${session?.user?.name[0]}&background=112&color=fff`      ||               session?.user?.image 

                  }
                  style={{
                    aspectRatio: "32/32",
                    objectFit: "cover",
                  }}
                />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem> {session.user.name}</DropdownMenuItem>

              <DropdownMenuItem>
                <Link href="/myaccount">
                  My Account
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onClick={() => {
                  signOut();
                }}
              >
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </div>
    </header>
  );
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

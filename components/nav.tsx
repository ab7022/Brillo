
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuContent,
  DropdownMenu,
} from "@/components/ui/dropdown-menu";
import { CardContent, Card } from "@/components/ui/card";
import { JSX, SVGProps } from "react";

export function nav() {
  return (
    <div
      key="1"
      className="flex min-h-screen flex-col bg-black dark:bg-black animate-gradient-x"
    >
      <header className="flex h-16 items-center justify-between backdrop-blur-md bg-white/50 px-6 dark:bg-gray-900/50 dark:backdrop-blur-md">
        <Link
          className="flex items-center gap-2 font-semibold text-gray-50"
          href="#"
        >
          <PocketIcon className="h-6 w-6" />
          <span>Portfolio Builder</span>
        </Link>
        <div className="flex items-center gap-4">
          <Link
            className="text-sm font-medium text-gray-400 transition-colors hover:text-gray-50 dark:text-gray-400 dark:hover:text-gray-50"
            href="#"
          >
            Templates
          </Link>
          <Link
            className="text-sm font-medium text-gray-400 transition-colors hover:text-gray-50 dark:text-gray-400 dark:hover:text-gray-50"
            href="#"
          >
            Pricing
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="rounded-full" size="icon" variant="ghost">
                <img
                  alt="Avatar"
                  className="rounded-full"
                  height="32"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "32/32",
                    objectFit: "cover",
                  }}
                  width="32"
                />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>My Account</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Link
            className="inline-flex h-9 items-center justify-center rounded-md bg-[#2563eb] px-4 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-[#1e40af] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#1e40af] disabled:pointer-events-none disabled:opacity-50 dark:bg-[#0369a1] dark:text-gray-50 dark:hover:bg-[#075985] dark:focus-visible:ring-[#0369a1]"
            href="#"
          >
            Login
          </Link>
        </div>
      </header>
      <main className="flex-1">
        <section className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2 md:gap-12">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter text-gray-50 sm:text-4xl md:text-5xl">
                  Create Your Portfolio Website
                </h1>
                <p className="text-gray-400 md:text-xl">
                  Showcase your work, skills, and achievements with a
                  professional portfolio website. Our easy-to-use builder helps
                  you create a stunning online presence in minutes.
                </p>
                <div className="flex flex-col gap-2 sm:flex-row">
                  <Link
                    className="inline-flex h-10 items-center justify-center rounded-md bg-[#2563eb] px-6 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-[#1e40af] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#1e40af] disabled:pointer-events-none disabled:opacity-50 dark:bg-[#0369a1] dark:text-gray-50 dark:hover:bg-[#075985] dark:focus-visible:ring-[#0369a1]"
                    href="#"
                  >
                    Get Started
                  </Link>
                  <Link
                    className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200  bg-white/10 px-6 text-sm font-medium shadow-sm transition-colors hover:bg-[#2563eb]/10 hover:text-gray-50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#1e40af] disabled:pointer-events-none disabled:opacity-50  dark:bg-gray-950/10 dark:hover:bg-[#0369a1]/10 dark:hover:text-gray-50 dark:focus-visible:ring-[#0369a1] "
                    href="#"
                  >
                    View Templates
                  </Link>
                </div>
              </div>
              <div>
                <img
                  alt="Portfolio Builder"
                  className="rounded-lg"
                  height="480"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "640/480",
                    objectFit: "cover",
                  }}
                  width="640"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-24 lg:py-32 bg-[#f1f5f9]/10 dark:bg-gray-800/10">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-4xl text-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter text-gray-50 sm:text-4xl md:text-5xl">
                  Customizable Templates
                </h2>
                <p className="text-gray-400 md:text-xl">
                  Choose from a variety of professionally designed templates to
                  create a portfolio that reflects your unique style and brand.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                <Card className="group overflow-hidden rounded-lg">
                  <Link className="absolute inset-0 z-10" href="#">
                    <span className="sr-only">View Minimal Template</span>
                  </Link>
                  <img
                    alt="Minimal Template"
                    className="aspect-[4/3] w-full object-cover transition-all group-hover:scale-105"
                    height="300"
                    src="/placeholder.svg"
                    width="400"
                  />
                  <CardContent className="p-4">
                    <h3 className="text-lg font-semibold text-gray-50">
                      Minimal
                    </h3>
                    <p className="text-sm text-gray-400">
                      A clean and modern design.
                    </p>
                  </CardContent>
                </Card>
                <Card className="group overflow-hidden rounded-lg">
                  <Link className="absolute inset-0 z-10" href="#">
                    <span className="sr-only">View Creative Template</span>
                  </Link>
                  <img
                    alt="Creative Template"
                    className="aspect-[4/3] w-full object-cover transition-all group-hover:scale-105"
                    height="300"
                    src="/placeholder.svg"
                    width="400"
                  />
                  <CardContent className="p-4">
                    <h3 className="text-lg font-semibold text-gray-50">
                      Creative
                    </h3>
                    <p className="text-sm text-gray-400">
                      A visually striking design.
                    </p>
                  </CardContent>
                </Card>
                <Card className="group overflow-hidden rounded-lg">
                  <Link className="absolute inset-0 z-10" href="#">
                    <span className="sr-only">View Professional Template</span>
                  </Link>
                  <img
                    alt="Professional Template"
                    className="aspect-[4/3] w-full object-cover transition-all group-hover:scale-105"
                    height="300"
                    src="/placeholder.svg"
                    width="400"
                  />
                  <CardContent className="p-4">
                    <h3 className="text-lg font-semibold text-gray-50">
                      Professional
                    </h3>
                    <p className="text-sm text-gray-400">
                      A sleek and polished design.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-4xl">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter text-gray-50 sm:text-4xl md:text-5xl">
                  Showcase Your Work
                </h2>
                <p className="text-gray-400 md:text-xl">
                  Upload your best work samples, add descriptions, and let your
                  portfolio shine. Our builder makes it easy to present your
                  projects in a visually appealing way.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                <Card className="group overflow-hidden rounded-lg">
                  <Link className="absolute inset-0 z-10" href="#">
                    <span className="sr-only">View Project 1</span>
                  </Link>
                  <img
                    alt="Project 1"
                    className="aspect-[4/3] w-full object-cover transition-all group-hover:scale-105"
                    height="300"
                    src="/placeholder.svg"
                    width="400"
                  />
                  <CardContent className="p-4">
                    <h3 className="text-lg font-semibold text-gray-50">
                      Project 1
                    </h3>
                    <p className="text-sm text-gray-400">
                      A description of the project.
                    </p>
                  </CardContent>
                </Card>
                <Card className="group overflow-hidden rounded-lg">
                  <Link className="absolute inset-0 z-10" href="#">
                    <span className="sr-only">View Project 2</span>
                  </Link>
                  <img
                    alt="Project 2"
                    className="aspect-[4/3] w-full object-cover transition-all group-hover:scale-105"
                    height="300"
                    src="/placeholder.svg"
                    width="400"
                  />
                  <CardContent className="p-4">
                    <h3 className="text-lg font-semibold text-gray-50">
                      Project 2
                    </h3>
                    <p className="text-sm text-gray-400">
                      A description of the project.
                    </p>
                  </CardContent>
                </Card>
                <Card className="group overflow-hidden rounded-lg">
                  <Link className="absolute inset-0 z-10" href="#">
                    <span className="sr-only">View Project 3</span>
                  </Link>
                  <img
                    alt="Project 3"
                    className="aspect-[4/3] w-full object-cover transition-all group-hover:scale-105"
                    height="300"
                    src="/placeholder.svg"
                    width="400"
                  />
                  <CardContent className="p-4">
                    <h3 className="text-lg font-semibold text-gray-50">
                      Project 3
                    </h3>
                    <p className="text-sm text-gray-400">
                      A description of the project.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-24 lg:py-32 bg-gradient-to-br from-[#1f2937] to-[#0f172a]">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-4xl text-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter text-gray-50 sm:text-4xl md:text-5xl">
                  Pricing
                </h2>
                <p className="text-gray-400 md:text-xl">
                  Choose from our affordable pricing plans to find the perfect
                  fit for your needs.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                <Card className="group overflow-hidden rounded-lg bg-gray-900/10 p-6 text-left shadow-lg transition-all hover:bg-gray-900/20">
                  <CardContent className="space-y-4">
                    <h3 className="text-2xl font-bold text-gray-50">Starter</h3>
                    <p className="text-gray-400">
                      Perfect for individuals and small businesses.
                    </p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-bold text-gray-50">
                        $9
                      </span>
                      <span className="text-sm text-gray-400">/month</span>
                    </div>
                    <ul className="space-y-2 text-gray-400">
                      <li>
                        <CheckIcon className="mr-2 inline-block h-4 w-4 text-green-500" />
                        1 portfolio website
                      </li>
                      <li>
                        <CheckIcon className="mr-2 inline-block h-4 w-4 text-green-500" />
                        5 GB storage
                      </li>
                      <li>
                        <CheckIcon className="mr-2 inline-block h-4 w-4 text-green-500" />
                        Custom domain
                      </li>
                      <li>
                        <CheckIcon className="mr-2 inline-block h-4 w-4 text-green-500" />
                        Basic analytics
                      </li>
                    </ul>
                    <Link
                      className="inline-flex h-10 items-center justify-center rounded-md bg-[#2563eb] px-6 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-[#1e40af] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#1e40af] disabled:pointer-events-none disabled:opacity-50 dark:bg-[#0369a1] dark:text-gray-50 dark:hover:bg-[#075985] dark:focus-visible:ring-[#0369a1]"
                      href="#"
                    >
                      Get Started
                    </Link>
                  </CardContent>
                </Card>
                <Card className="group overflow-hidden rounded-lg bg-gray-900/10 p-6 text-left shadow-lg transition-all hover:bg-gray-900/20">
                  <CardContent className="space-y-4">
                    <h3 className="text-2xl font-bold text-gray-50">Pro</h3>
                    <p className="text-gray-400">
                      For growing businesses and freelancers.
                    </p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-bold text-gray-50">
                        $19
                      </span>
                      <span className="text-sm text-gray-400">/month</span>
                    </div>
                    <ul className="space-y-2 text-gray-400">
                      <li>
                        <CheckIcon className="mr-2 inline-block h-4 w-4 text-green-500" />
                        3 portfolio websites
                      </li>
                      <li>
                        <CheckIcon className="mr-2 inline-block h-4 w-4 text-green-500" />
                        20 GB storage
                      </li>
                      <li>
                        <CheckIcon className="mr-2 inline-block h-4 w-4 text-green-500" />
                        Custom domain
                      </li>
                      <li />
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function CheckIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function PocketIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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

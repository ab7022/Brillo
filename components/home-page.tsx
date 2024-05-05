/**
 * v0 by Vercel.
 * @see https://v0.dev/t/WGVOjr1si6k
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";
import { CardContent, Card } from "@/components/ui/card";
import { Gradient, Rings, BackgroundCircles } from "../components/Gradient";
export default function Component() {
  return (
    <div className="flex min-h-screen flex-col bg-black dark:bg-black animate-gradient-x">
      <header className="flex fixed w-full h-16 items-center justify-between border-b  bg-transparent px-6 backdrop-blur z-50">
        <Link
          className="flex items-center gap-2 font-semibold text-gray-50"
          href="#"
        >
          <PocketIcon className="h-6 w-6" />
          <span>Portfolio Builder</span>
        </Link>
        <div className="flex items-center gap-10">
          <Link
            className="text-sm font-medium text-gray-400 transition-colors hover:text-white"
            href="#"
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
            className="inline-flex h-9 items-center justify-center rounded-md bg-[#2563eb] px-4 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-[#1e40af] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#1e40af] disabled:pointer-events-none disabled:opacity-50 dark:bg-[#0369a1] dark:text-gray-50 dark:hover:bg-[#075985] dark:focus-visible:ring-[#0369a1]"
            href="#"
          >
            Login
          </Link>
        </div>
      </header>
      <main className="flex-1">
        <section className="py-12 md:py-24 lg:py-32 h-screen">
          <div className="container px-4 md:px-6">
            <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2 md:gap-12">
              <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tighter text-gray-50 sm:text-xl md:text-7xl">
                  Create Your{" "}
                  <span className="text-purple-500 mx-1 font-extrabold text-6xl relative inline-block stroke-current">
                    Portfolio
                    <svg
                      className="absolute -bottom-0.5 w-full max-h-2"
                      viewBox="0 0 55 5"
                      xmlns="http://www.w3.org/2000/svg"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M0.652466 4.00002C15.8925 2.66668 48.0351 0.400018 54.6853 2.00002"
                        stroke-width="2"
                      ></path>
                    </svg>
                  </span>{" "}
                  Website
                </h1>
                <p className="text-gray-400 md:text-2xl">
                  Showcase your work, skills, and achievements with a
                  professional portfolio website. Our easy-to-use builder helps
                  you create a stunning online presence in minutes.
                </p>
                <div className="flex flex-col gap-4 sm:flex-row ">
                  <Link
                    className="inline-flex h-10 items-center justify-center rounded-md bg-[#2b52ff] px-6 text-base font-semibold text-gray-50 shadow-sm shadow-gray-200 transition-colors hover:bg-[#5347ff]  "
                    href="https://www.chefify.live"
                  >
                    Get Started{" "}
                    <svg
                      className="ml-2 -mr-1 w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </Link>
                  <div className=" hidden md:flex md:relative md:-inset-3/4 md:top-96 md:z-50">
                    <Rings />
                    {/* <BackgroundCircles parallaxRef={undefined}/> */}
                    {/* <Gradient/> */}
                  </div>

                  <Link
                    className="inline-flex h-10 items-center justify-center text-white rounded-md border border-[#2563eb] bg-white/10 px-6 text-sm font-medium shadow-sm transition-colors hover:bg-[#2563eb]/10 hover:text-gray-50 focus-visible:outline-none focus-visible:ring-1"
                    href="#"
                  >
                    View Templates
                  </Link>
                </div>
              </div>
              <div>
                <img
                  alt="Portfolio Builder"
                  className="rounded-lg shadow-[0px_20px_207px_10px_rgba(165,_39,_255,_0.48)]"
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
        <section className="py-12 md:py-24 lg:py-32 bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-slate-900/5 via-purple-700/30 to-slate-900/5">
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
              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 ">
                <Card className="group overflow-hidden rounded-lg ">
                  {/* <Link className="absolute inset-0 z-10" href="#">
                    <span className="sr-only text-orange-400">
                      View Minimal Template
                    </span>
                  </Link> */}
                  <img
                    alt="Minimal Template"
                    className="aspect-[4/3] w-full object-cover transition-all group-hover:scale-105"
                    height="300"
                    src="/placeholder.svg"
                    width="400"
                  />
                  <CardContent className="p-4">
                    <h3 className="text-lg font-semibold text-gray-700">
                      Minimal
                    </h3>
                    <p className="text-sm text-gray-400">
                      A clean and modern design.
                    </p>
                  </CardContent>
                </Card>
                <Card className="group overflow-hidden rounded-lg">
                  {/* <Link className="absolute inset-0 z-10" href="#">
                    <span className="sr-only">View Creative Template</span>
                  </Link> */}
                  <img
                    alt="Creative Template"
                    className="aspect-[4/3] w-full object-cover transition-all group-hover:scale-105"
                    height="300"
                    src="/placeholder.svg"
                    width="400"
                  />
                  <CardContent className="p-4">
                    <h3 className="text-lg font-semibold text-gray-700">
                      Creative
                    </h3>
                    <p className="text-sm text-gray-400">
                      A visually striking design.
                    </p>
                  </CardContent>
                </Card>
                <Card className="group overflow-hidden rounded-lg">
                  {/* <Link className="absolute inset-0 z-10" href="#">
                    <span className="sr-only">View Professional Template</span>
                  </Link> */}
                  <img
                    alt="Professional Template"
                    className="aspect-[4/3] w-full object-cover transition-all group-hover:scale-105"
                    height="300"
                    src="/placeholder.svg"
                    width="400"
                  />
                  <CardContent className="p-4">
                    <h3 className="text-lg font-semibold text-gray-700">
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
        <section className="py-12 md:py-24 lg:py-32 bg-gradient-to-l from-slate-900/10 via-purple-900/80 to-slate-900/10">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-4xl">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter text-center text-gray-50 sm:text-4xl md:text-5xl">
                  Showcase Your Work
                </h2>
                <p className="text-gray-400 md:text-xl text-center">
                  Upload your best work samples, add descriptions, and let your
                  portfolio shine. Our builder makes it easy to present your
                  projects in a visually appealing way.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                <Card className="group overflow-hidden rounded-lg">
                  {/* <Link className="absolute inset-0 z-10" href="#">
                    <span className="sr-only">View Project 1</span>
                  </Link> */}
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
                  {/* <Link className="absolute inset-0 z-10" href="#">
                    <span className="sr-only">View Project 2</span>
                  </Link> */}
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
                  {/* <Link className="absolute inset-0 z-10" href="#">
                    <span className="sr-only">View Project 3</span>
                  </Link> */}
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
        <section className="py-12 md:py-24 lg:py-32  bg-gradient-to-tl from-purple-950/10  via-violet-950/60 to-purple-900/10">
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
              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 ">
                <Card className="group overflow-hidden rounded-lg bg-gray-900/10 p-4 text-left transition-all hover:bg-gray-900/10 h-full w-full bg-gray-600 bg-clip-padding backdrop-filter  backdrop-blur-lg bg-opacity-20 backdrop-saturate-300 backdrop-contrast-100 drop-shadow-2xl shadow-md shadow-gray-600">
                  <CardContent className="space-y-4 ">
                    <h3 className="text-2xl font-bold text-gray-50">
                      Freemium
                    </h3>
                    <p className="text-gray-400">
                      Free plan for testing purpose
                    </p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-bold text-gray-50">
                        $0
                      </span>
                      <span className="text-sm text-gray-400">/Month</span>
                    </div>
                    <ul className="space-y-2">
                      <li className="text-gray-200">1 Live websites</li>
                      <li className="text-gray-200">15 days Validity</li>
                      <li className="text-gray-500">Custom domain</li>
                      <li className="text-gray-500">Resume Generation</li>
                      <li className="text-gray-500">Customer Support</li>
                      <li className="text-gray-500">Analytics</li>
                      <li className="text-gray-500">Ai Features</li>
                      <li className="text-gray-500">SEO Optimization</li>
                      <li className="text-gray-500">Extra customisation</li>
                      <li className="text-gray-500">Developer Support</li>

                      <li className="h-1"></li>
                    </ul>
                    <Link
                      className="inline-flex h-10 items-center justify-center rounded-md bg-[#2563eb] px-6 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-[#1e40af] "
                      href="#"
                    >
                      Get Started
                    </Link>
                  </CardContent>
                </Card>
                <Card className="shadow-md shadow-gray-600 group overflow-hidden rounded-lg bg-gray-900/10 p-4 text-left  transition-all hover:bg-gray-900/10 h-full w-full bg-gray-600 bg-clip-padding backdrop-filter  backdrop-blur-lg bg-opacity-20 backdrop-saturate-300 backdrop-contrast-100">
                  <CardContent className="space-y-4">
                    <h3 className="text-2xl font-bold text-gray-50">Pro</h3>
                    <p className="text-gray-400">
                      Perfect for individuals and students{" "}
                    </p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-bold text-gray-50">
                        $3
                      </span>
                      <span className="text-sm text-gray-400">/Month</span>
                    </div>
                    <ul className=" text-gray-400 space-y-2">
                      <li className="text-gray-200">2 Live websites</li>
                      <li className="text-gray-200">1 Month Validity</li>
                      <li className="text-gray-200">Custom domain</li>
                      <li className="text-gray-200">Resume Generation</li>
                      <li className="text-gray-200">Customer Support</li>
                      <li className="text-gray-200">Analytics</li>
                      <li className="text-gray-500">Ai Features</li>
                      <li className="text-gray-500">SEO Optimization</li>
                      <li className="text-gray-500">Extra customisation</li>
                      <li className="text-gray-500">Developer Support</li>

                      <li className="h-1"></li>
                    </ul>
                    <Link
                      className="inline-flex h-10 items-center justify-center rounded-md bg-[#2563eb] px-6 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-[#1e40af] "
                      href="#"
                    >
                      Get Started
                    </Link>
                  </CardContent>
                </Card>

                <Card className=" shadow-md shadow-gray-600 group overflow-hidden rounded-lg bg-gray-900/10 p-4 text-left  transition-all hover:bg-gray-900/10 h-full w-full bg-gray-600 bg-clip-padding backdrop-filter  backdrop-blur-lg bg-opacity-20 backdrop-saturate-300 backdrop-contrast-100">
                  <CardContent className="space-y-4">
                    <h3 className="text-2xl font-bold text-gray-50">Premium</h3>
                    <p className="text-gray-400">
                      Suitable for freelancers and working professionals.
                    </p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-bold text-gray-50">
                        $10
                      </span>
                      <span className="text-sm text-gray-400">/Year</span>
                    </div>
                    <ul className="space-y-2 text-gray-200">
                      <li>5 Live websites</li>
                      <li>1 Year Validity</li>
                      <li>Custom domain</li>
                      <li>Resume Generation</li>
                      <li>24*7 Customer Support</li>
                      <li>Analytics</li>
                      <li>Ai Features</li>
                      <li>SEO Optimization</li>
                      <li>Extra customisation</li>
                      <li>Developer Support</li>
                      <li className="h-1"></li>
                    </ul>
                    <Link
                      className="inline-flex h-10 items-center justify-center rounded-md bg-[#2563eb] px-6 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-[#1e40af] "
                      href="#"
                    >
                      Get Started
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
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
    </div>
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

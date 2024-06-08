import { Rings } from "./Rings";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="py-12 md:py-24 lg:py-32 sm:h-screen md:mt-12">
      <div className="container px-4 md:px-6">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2 md:gap-12">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tightest text-gray-50 sm:text-xl md:text-7xl">
              Create Your{" "}
              <span className="text-purple-500 mx-1 font-extrabold text-6xl relative inline-block stroke-current pb-1">
                Portfolio
                <svg
                  className="absolute -bottom-0.5 w-full max-h-2"
                  viewBox="0 0 55 5"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0.652466 4.00002C15.8925 2.66668 48.0351 0.400018 54.6853 2.00002"
                    strokeWidth="2"
                  ></path>
                </svg>
              </span>{" "}
              Website
            </h1>
            <p className="text-gray-400 md:text-2xl">
              Showcase your work, skills, and achievements with a professional
              portfolio website. Our easy-to-use builder helps you create a
              stunning online presence in minutes.
            </p>
            <div className="hidden absolute top-[55.25rem] left-10 right-10 h-0.25 bg-n-6 pointer-events-none xl:block" />{" "}
            <div className="flex flex-col gap-4 sm:flex-row ">
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md bg-[#2b52ff] px-12 text-base font-semibold text-gray-50 shadow-sm shadow-gray-200 transition-colors hover:bg-[#5347ff] mr-12 "
                href="/templates"
              >
                Get Started{" "}
                <svg
                  className="ml-2 -mr-1 w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </Link>
              <div className=" hidden md:flex md:relative md:-inset-3/4 md:top-96 mt-20 md:z-50">
                <Rings />
              </div>
              {/* 
                <Link
                  className="inline-flex h-10 items-center justify-center text-white rounded-md border border-[#2563eb] bg-white/10 px-6 text-sm font-medium shadow-sm transition-colors hover:bg-[#2563eb]/10 hover:text-gray-50 focus-visible:outline-none focus-visible:ring-1"
                  href="#"
                >
                  View Templates
                </Link> */}
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
  );
}

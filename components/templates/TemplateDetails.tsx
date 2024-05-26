"use client";
import Link from "next/link";
import Footer from "../HomePage/Footer";
import { useEffect, useState } from "react";
import UsernameChecker from "../Username-checker";
import axios from "axios";

export default function TemplateDetails({ id, template, session }) {
  const [username, setUsername] = useState("");
  const [showUsernameModal, setShowUsernameModal] = useState(false);

  const toggleModal = () => {
    setShowUsernameModal(!showUsernameModal);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const sessionEmail = session?.user?.email || "";

        const url2 = "http://localhost:3000/api/user/username";
        const response = await axios.get(url2, {
          headers: {
            Authorization: sessionEmail,
          },
        });

        if (response.status === 200) {
          const fetchedUsername = response.data.username;
          setUsername(fetchedUsername);
          console.log(fetchedUsername);
        } else {
          console.error("Failed to fetch user data:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [session]);

  const handleGenerateWebsiteClick = () => {
    if (!username) {
      setShowUsernameModal(true);
    } else {
      console.log("All checks passed");
      // Add your logic to generate a website here
    }
  };
  return (
    <>
      <div className="flex flex-col min-h-[100dvh]">
        <main className="flex-1">
          {showUsernameModal && (<UsernameChecker toggleModal={toggleModal} session={session} />)}
          <section className="w-full pt-12 md:pt-24 lg:pt-32">
            <div className="container space-y-10 xl:space-y-16">
              <div className="grid gap-6 lg:grid-cols-[1fr_550px] lg:gap-12 xl:grid-cols-[1fr_600px]">
                <img
                  alt="Project"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full shadow-2xl shadow-blue-400"
                  height="400"
                  src={template.img}
                  width="600"
                />
                <div className="flex flex-col justify-center space-y-4">
                  <div className="space-y-2">
                    <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                      {template.heading}
                    </h1>
                    <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                      {template.description}
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 min-[400px]:flex-row">
                    <button
                      className="group/button relative inline-flex items-center justify-center overflow-hidden rounded-md bg-gray-900 px-4 py-1.5 text-xs font-normal text-white transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:shadow-gray-900/30"
                      onClick={handleGenerateWebsiteClick}
                    >
                      <span className="text-sm"> Generate a website</span>
                      <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]">
                        <div className="relative h-full w-8 bg-white/20" />
                      </div>
                    </button>
                    <Link
                      className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200  bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 "
                      href="#"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
              <div className="grid gap-10 sm:px-10 md:gap-16 md:grid-cols-2">
                <div className="space-y-4">
                  <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                    Project Details
                  </div>
                  <div className="grid gap-2">
                    <h2 className="text-2xl font-bold">About the Project</h2>
                    <p className="text-gray-500 dark:text-gray-400">
                      {template.description}
                    </p>
                  </div>
                  <div className="grid gap-2">
                    <h3 className="text-xl font-bold">Tools Used</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      The Acme Website Builder is built using React, Next.js,
                      and Tailwind CSS.
                    </p>
                  </div>

                  <div className="grid gap-2">
                    <h3 className="text-xl font-bold">Project Goals</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      The primary goals of the Acme Website Builder project were
                      to create a user-friendly platform that would allow anyone
                      to build a professional-looking website.
                    </p>
                  </div>
                  <div className="grid gap-2">
                    <h3 className="text-xl font-bold">Sections Included</h3>
                    <ul className="list-disc pl-6 text-gray-500 dark:text-gray-400">
                      <li>Hero Section</li>
                      <li>About the Project</li>
                      <li>Tools Used</li>
                      <li>Client Information</li>
                      <li>Project Goals</li>
                      <li>Project Gallery</li>
                    </ul>
                  </div>
                </div>
                <div className="grid gap-4">
                  <div className=" rounded-lg flex items-center justify-center text-center bg-gray-200 text-xl font-bold py-2">
                    Project Gallery
                  </div>
                  <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                    <img
                      alt="Project Image 1"
                      className="aspect-video overflow-hidden rounded-xl object-cover object-center"
                      height="300"
                      src={template.img}
                      width="400"
                    />
                    <img
                      alt="Project Image 2"
                      className="aspect-video overflow-hidden rounded-xl object-cover object-center"
                      height="300"
                      src={template.img}
                      width="400"
                    />
                    <img
                      alt="Project Image 3"
                      className="aspect-video overflow-hidden rounded-xl object-cover object-center"
                      height="300"
                      src={template.img}
                      width="400"
                    />
                    <img
                      alt="Project Image 4"
                      className="aspect-video overflow-hidden rounded-xl object-cover object-center"
                      height="300"
                      src={template.img}
                      width="400"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
            <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
              <div className="space-y-3">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Explore the Acme Website Builder
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Create stunning websites without writing a single line of
                  code. Try the Acme Website Builder today.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
                <Link
                  className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 "
                  href="#"
                >
                  Try the Builder
                </Link>
                <Link
                  className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 "
                  href="#"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}

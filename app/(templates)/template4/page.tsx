"use client";
import {
  GithubButton,
  ResumeButton,
} from "@/components/AllTemplates/template4/components/common/Buttons";
import { ThemeProvider } from "next-themes";
import React from "react";
import Image from "next/image";

import Navbar from "@/components/AllTemplates/template4/components/Navbar";
import "./global.css";
import "./syntax-highlighting.css";
function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      disableTransitionOnChange
      enableSystem={true}
      attribute="class"
    >
      {children}
    </ThemeProvider>
  );
}
export default function Template4({ data }: any) {
  const firstName = data?.basicInfo?.[0]?.first_name || "";
  const lastName = data?.basicInfo?.[0].last_name || "";
  const designation = data?.basicInfo?.[0]?.designation || "";
  const profile = data?.basicInfo?.[0]?.profile || "";
  const intro = data?.basicInfo?.[0]?.intro || "";
  const email = data?.basicInfo?.[0]?.email || "";
  const resume = data?.basicInfo?.[0]?.resume || "";
  const github = data?.socialProfiles?.[0]?.github || "";
  const linkedin = data?.socialProfiles?.[0]?.linkedin || "";
  const projects = data?.project;
  const software_proficiency = data?.skill?.[0]?.software_proficiency;
  const programming_technical_skills =
    data?.skill?.[0]?.programming_technical_skills;
  const language_soft_skills = data?.skill?.[0]?.language_soft_skills;
  const interests_others_skills = data?.skill?.[0]?.interests_others_skills;
  const business_administrative_skills =
    data?.skill?.[0]?.business_administrative_skills;

  return (
    <Providers>
      <body className="dark:bg-[#1f2028] bg-white antialiased min-h-screen flex flex-col">
        <div>
          <Navbar name={firstName} github={github} />
          <div className="flex-auto min-w-0 md:mt-0 flex bg-transparent flex-col md:pt-12 mx-[6vw] md:mx-[10vw] 2xl:mx-[20vw] justify-center ">
            <div className="dark:bg-[#1f2028] min-w-screen bg-white antialiased md:min-h-screen flex flex-col">
              {" "}
              <div className="py-4 md:p-0 h-screen">
                <div
                  className="mt-12 pt-2 md:pt-6 md:mt-36 bg-transparent md:flex md:flex-col md:items-center"
                  id="home"
                >
                  <p className="text-4xl md:text-7xl text-slate-900 dark:text-white md:text-center font-bold leading-tight mt-4">
                    {firstName?.length > 0 && (
                      <>
                        {" "}
                        <span className="dark:text-white text-gray-600">
                          Hello I'm
                        </span>{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600 ">
                          {firstName} {lastName}
                        </span>{" "}
                      </>
                    )}
                    {designation?.length > 0 && (
                      <>
                        {" "}
                        <span className="dark:text-white text-gray-600">
                          and I'm a
                        </span>{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                          {" "}
                          {designation}{" "}
                        </span>{" "}
                      </>
                    )}
                  </p>
                  {email?.length > 0 && (
                    <h6 className="md:max-w-2xl text-slate-600 dark:text-slate-300 mt-4 md:mt-6 text-lg md:text-xl">
                      Welcome to my portfolio. Feel free to browse my website,
                      and drop your suggestions on my{" "}
                      <a
                        className="text-sky-500"
                        target="_blank"
                        href={`mail:${email}`}
                      >
                        Email
                      </a>
                      . Thank you for visiting!
                    </h6>
                  )}

                  <div className="block mt-8 md:mt-0 md:flex gap-3">
                    {resume?.length > 0 && <ResumeButton resume={resume} />}
                    {github?.length>0 && <GithubButton github={github} />}
                  </div>
                </div>
              </div>
              <>
                <div className="max-w-2xl lg:max-w-full pt-6 ">
                  <div className="grid grid-cols-1 gap-y-8 md:gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
                    {profile?.length>0 && (
                      <div className="max-w-xs px-2.5 md:pl-20 md:max-w-none md:ml-auto">
                        <Image
                          className="aspect-square mt-2 rotate-3 rounded-2xl object-cover bg-zinc-800"
                          src={profile}
                          alt={firstName}
                          width={400}
                          height={800} // Adjust height as necessary
                        />
                      </div>
                    )}
                    {(intro?.length > 0 || profile) && (
                      <div className="lg:order-first lg:row-span-2" id="about">
                        <h1 className="text-3xl md:text-5xl text-slate-900 dark:text-white  font-bold leading-tight md:mt-4">
                          About Me
                        </h1>
                        <p className=" text-slate-600 dark:text-slate-300 mt-8 text-lg md:text-xl">
                          {intro}
                        </p>
                      </div>
                    )}
                  </div>
                  {(software_proficiency?.length > 0 ||
                    programming_technical_skills?.length > 0 ||
                    interests_others_skills?.length > 0 ||
                    business_administrative_skills?.length > 0) && (
                    <>
                      <h2 className="text-3xl md:text-4xl text-slate-900 dark:text-white  font-bold leading-tight md:mt-4">
                        Skills
                      </h2>
                      <hr className="h-px my-8 border-0 bg-gray-700"></hr>
                      {software_proficiency?.length > 0 && (
                        <>
                          {" "}
                          <h2 className="text-2xl md:text-3xl text-slate-900 dark:text-white  font-bold leading-tight md:mt-4">
                            Software I am familiar with
                          </h2>
                          <p className="text-slate-600 dark:text-slate-300 text-lg md:text-xl mt-4 block">
                            {software_proficiency}
                          </p>
                        </>
                      )}
                      {programming_technical_skills?.length > 0 && (
                        <>
                          <h2 className="text-2xl md:text-3xl text-slate-900 dark:text-white  font-bold leading-tight md:mt-4">
                            Programming & Technical Skills{" "}
                          </h2>

                          <p className="text-slate-600 dark:text-slate-300 text-lg md:text-xl mt-4 block">
                            {programming_technical_skills}
                          </p>
                        </>
                      )}
                      {language_soft_skills?.length > 0 && (
                        <>
                          <h2 className="text-2xl md:text-3xl text-slate-900 dark:text-white  font-bold leading-tight md:mt-4">
                            Language & Soft Skills{" "}
                          </h2>

                          <p className="text-slate-600 dark:text-slate-300 text-lg md:text-xl mt-4 block">
                            {language_soft_skills}
                          </p>
                        </>
                      )}
                      {interests_others_skills?.length > 0 && (
                        <>
                          {" "}
                          <h2 className="text-2xl md:text-3xl text-slate-900 dark:text-white  font-bold leading-tight md:mt-4">
                            Interests & Other Skills{" "}
                          </h2>
                          <p className="text-slate-600 dark:text-slate-300 text-lg md:text-xl mt-4 block">
                            {interests_others_skills}
                          </p>
                        </>
                      )}

                      {business_administrative_skills?.length > 0 && (
                        <>
                          {" "}
                          <h2 className="text-2xl md:text-3xl text-slate-900 dark:text-white  font-bold leading-tight md:mt-4">
                            Business & Administrative Skills{" "}
                          </h2>
                          <p className="text-slate-600 dark:text-slate-300 text-lg md:text-xl mt-4 block">
                            {business_administrative_skills}
                          </p>
                        </>
                      )}
                    </>
                  )}
                </div>
              </>
              {(projects?.[0]?.image.length > 0 ||
                projects?.[0]?.image.length > 0) && (
                <>
                  <div className=" mt-48 md:mt-12">
                    {" "}
                    <h1 className="text-3xl md:text-5xl text-slate-900 dark:text-white  font-bold leading-tight  md:mt-12 ">
                      My Projects
                    </h1>{" "}
                    <div
                      className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4 gap-y-6 mt-8"
                      id="projects"
                    >
                      {projects &&
                        projects.map((post) => (
                          <div
                            key={post.id}
                            className="hover:cursor-pointer group hover:rounded-lg my-4 overflow-hidden flex flex-col"
                          >
                            {post.image.length > 0 && (
                              <div className=" relative rounded-lg border-transparent border-2 group-hover:border-sky-500 p-1 overflow-hidden">
                                <Image
                                  src={post.image}
                                  alt={post.title}
                                  width={500}
                                  height={500}
                                  className="rounded-lg object-contain"
                                />
                              </div>
                            )}

                            <div className="mt-3 sm:mt-6 p-1">
                              <div className="flex justify-between">
                                {post.deployed_url?.length > 0 && (
                                  <span className="text-slate-400 font-semibold dark:text-slate-400 text-lg sm:text-xl my-2">
                                    <a
                                      href={post.deployed_url}
                                      className="mx-3"
                                    >
                                      {" "}
                                      Live Link{" "}
                                    </a>
                                  </span>
                                )}
                                {post.github_url?.length > 0 && (
                                  <span className="text-slate-400 font-semibold dark:text-slate-400 text-lg sm:text-xl my-2">
                                    <a href={post.github_url} className="mx-3">
                                      {" "}
                                      Source Code{" "}
                                    </a>
                                  </span>
                                )}
                              </div>

                              <p className="text-slate-900 dark:text-white font-semibold leading-tight text-2xl sm:text-3xl mt-4">
                                {post.title}
                              </p>
                              <div className="text-slate-900  py-2 dark:text-white">
                                {post.description}
                              </div>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                </>
              )}
              <div className="mt-4 md:mt-10">
                {linkedin?.length > 0 && (
                  <h2 className="text-slate-600 dark:text-slate-300 max-w-2xl text-lg md:text-xl my-0 mt-4 md:mt-8 text-center mb-8">
                    Always up for a convo. Feel free to connect with me on{" "}
                    <a
                      href={linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sky-400 hover:underline"
                    >
                      Linkedin.
                    </a>
                  </h2>
                )}
              </div>
            </div>
          </div>
        </div>
      </body>
    </Providers>
  );
}

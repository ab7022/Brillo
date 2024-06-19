"use client";
import {
  GithubButton,
  ResumeButton,
} from "@/components/AllTemplates/template4/components/common/Buttons";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import Navbar from "@/components/AllTemplates/template4/components/Navbar";
export default function Home({ params }: { params: { username: string } }) {
  interface DataType {
    name: string;
    email: string;
    basicInfo: any[];
    experience: any[];
    skill: any[];
    socialProfiles: any[];
    project: any[];
    education: any[];
    achievement: any[];
  }

  const [data, setData] = useState<DataType | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  console.log(data);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post("/api/user/finddetails", {
          username: decodeURIComponent(params.username),
        });

        if (response.status === 200) {
          setData(response.data.user);
        } else {
          console.error("Failed to fetch user data:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [params.username]);

  if (loading) {
    return <div className="loader">Loading...</div>;
  }

  if (!data) {
    return <div>No data found</div>;
  }
  const firstName = data.basicInfo[0].first_name;
  const lastName = data.basicInfo[0].last_name;
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
  console.log(profile);


  return (
    <div>
      <Navbar name={firstName} github={github}/>
      <div className="flex-auto min-w-0 md:mt-0 flex flex-col md:pt-12 mx-[6vw] md:mx-[10vw] 2xl:mx-[20vw] justify-center">
        <div className="dark:bg-[#1f2028] min-w-screen bg-white antialiased min-h-screen flex flex-col">
          {" "}
          <div className="py-4 md:p-0 h-screen">
            <header className="mt-0 pt-2 md:pt-6 md:mt-36  md:flex md:flex-col md:items-center" id="home">
              <h1 className="text-4xl md:text-7xl text-slate-900 dark:text-white md:text-center font-bold leading-tight mt-4">
                <span className="dark:text-white text-gray-600">Hello I'm</span>{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600 ">
                  {firstName} {lastName}
                </span>{" "}
                <span className="dark:text-white text-gray-600">and I'm a</span>{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                  {" "}
                  {designation}{" "}
                </span>{" "}
              </h1>
              <h2 className="md:max-w-2xl text-slate-600 dark:text-slate-300 mt-4 md:mt-6 text-lg md:text-xl">
                Welcome to my portfolio. Feel free to browse my website, and
                drop your suggestions on my{" "}
                <a
                  className="text-sky-500"
                  target="_blank"
                  href={`mail:${email}`}
                >
                  Email
                </a>
                . Thank you for visiting!
              </h2>
              <div className="block mt-8 md:mt-0 md:flex gap-3">
                {resume && <ResumeButton resume={resume} />}
                {github && <GithubButton github={github} />}
              </div>
            </header>
          </div>
          <>
            <div className="max-w-2xl lg:max-w-full pt-6 h-screen">
              <div className="grid grid-cols-1 gap-y-8 md:gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
                <div className="max-w-xs px-2.5 md:pl-20 md:max-w-none md:ml-auto">
                  <Image
                    className="aspect-square rotate-3 rounded-2xl object-cover bg-zinc-800"
                    src={profile}
                    alt="Vishwanath B."
                    width={400}
                    height={800} // Adjust height as necessary
                  />
                </div>

                <div className="lg:order-first lg:row-span-2" id="about">
                  <h1 className="text-3xl md:text-5xl text-slate-900 dark:text-white  font-bold leading-tight md:mt-4">
                    About Me
                  </h1>
                  <p className=" text-slate-600 dark:text-slate-300 mt-8 text-lg md:text-xl">
                    {intro}
                  </p>
                </div>
              </div>

              <hr className="h-px my-8 border-0 bg-gray-700"></hr>

              <h2 className="text-2xl md:text-3xl text-slate-900 dark:text-white  font-bold leading-tight md:mt-4">
                Software I am familiar with
              </h2>

              <p className="text-slate-600 dark:text-slate-300 text-lg md:text-xl mt-4 block">
                {software_proficiency}
              </p>

              <h2 className="text-2xl md:text-3xl text-slate-900 dark:text-white  font-bold leading-tight md:mt-4">
                Programming & Technical Skills{" "}
              </h2>

              <p className="text-slate-600 dark:text-slate-300 text-lg md:text-xl mt-4 block">
                {programming_technical_skills}
              </p>
              <h2 className="text-2xl md:text-3xl text-slate-900 dark:text-white  font-bold leading-tight md:mt-4">
                Language & Soft Skills{" "}
              </h2>

              <p className="text-slate-600 dark:text-slate-300 text-lg md:text-xl mt-4 block">
                {language_soft_skills}
              </p>
              <h2 className="text-2xl md:text-3xl text-slate-900 dark:text-white  font-bold leading-tight md:mt-4">
                Interests & Other Skills{" "}
              </h2>

              <p className="text-slate-600 dark:text-slate-300 text-lg md:text-xl mt-4 block">
                {interests_others_skills}
              </p>
            </div>
          </>
          <div className=" mt-72 md:mt-0">
            {" "}
            <h1 className="text-3xl md:text-5xl text-slate-900 dark:text-white  font-bold leading-tight md:mt-4 ">
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
                    <div className=" relative rounded-lg border-transparent border-2 group-hover:border-sky-500 p-1 overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        width={500}
                        height={500}
                        className="rounded-lg object-contain"
                      />
                    </div>
                    <div className="mt-3 sm:mt-6 p-1">
                      <div className="flex justify-between">
                        {post.deployed_url && (
                          <span className="text-slate-400 font-semibold dark:text-slate-400 text-lg sm:text-xl my-2">
                            <a href={post.deployed_url} className="mx-3">
                              {" "}
                              Live Link{" "}
                            </a>
                          </span>
                        )}
                        {post.github_url && (
                          <span className="text-slate-400 font-semibold dark:text-slate-400 text-lg sm:text-xl my-2">
                            <a href={post.github_url} className="mx-3">
                              {" "}
                              Source Code{" "}
                            </a>
                          </span>
                        )}
                      </div>

                      <header className="text-slate-900 dark:text-white font-semibold leading-tight text-2xl sm:text-3xl mt-4">
                        {post.title}
                      </header>
                      <div className="text-slate-900 py-2 dark:text-white">
                        {post.description}
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
          <div className="mt-4 md:mt-10">
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
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";
import React from "react";
// import { calsans } from "@/fonts/calsans";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "./ui/tracing-beam";

export function WorkExperience() {
  return (
    <div className="" id="about">
      <div className="text-center mb-10">
        <h2
          className="mb-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl
  "
        >
          Work Experience
        </h2>
        <p
          className="
  
  text-base text-[#9e77c6] font-semibold tracking-wide uppercase
  "
        >
          Organizations
        </p>
      </div>
      <TracingBeam className="px-6">
        <div className="max-w-2xl mx-auto antialiased pt-4 relative">
          {dummyContent.map((item) => (
            <div key={`content-${item.id}`} className="mb-10">
              <h2 className="bg-black text-white rounded-full text-lg w-fit  py-1 mb-2">
                {item.badge}
              </h2>
              <p className={twMerge("text-white", "text-lg mb-2 px-4")}>
                {item.title}
              </p>
              <p className={twMerge("text-white", "text-sm mb-2 px-4")}>
                {item.date}
              </p>
              <p className={twMerge("text-white", "text-sm mb-4 px-4")}>
                {item.location}
              </p>
              <div className="text-sm  prose prose-sm dark:prose-invert px-4">
                {/* {item?.image && (
                <Image
                  src={item.image}
                  alt="blog thumbnail"
                  height="1000"
                  width="1000"
                  className="rounded-lg mb-10 object-cover"
                />
              )} */}
                {item.description}
              </div>
            </div>
          ))}
        </div>
      </TracingBeam>
    </div>
  );
}

const dummyContent = [
  {
    id: 1,
    title: "Technical Analyst",
    description: (
      <ul className="list-disc list-inside text-white">
        <li>
          Investigated issues and defects to determine problem root cause and
          formulate corrective actions and recommendations.
        </li>
        <li>
          Developing responsive and user-friendly web applications using React,
          CSS, and HTML.
        </li>
        <li>
          Provided operational assistance and developed software workarounds or
          resolutions.
        </li>
        <li>
          Designing and implementing RESTful APIs with a focus on efficient data
          handling and scalability.
        </li>
        <li>
          Coordinated with multiple teams for prompt issue resolution via
          channels like SLACK and JIRA.
        </li>
        <li>
          Possessed knowledge of checking which API is not responding properly
          and how to debug it.
        </li>
        <li>
          Collaborating with the design team to ensure the implementation of
          consistent UI/UX design.
        </li>
        <li>Writing clean and maintainable code using Git and Github.</li>
      </ul>
    ),
    badge: "Oracle India Pvt Ltd",
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    date: "06/2022 - Present",
    location: " Bangalore, India",
  },
  {
    id: 2,
    title: "Software Engineer",
    description: (
      <ul className="list-disc list-inside text-white">
        <li>
          Provided operational assistance and developed software workarounds or
          resolutions.
        </li>
        <li>
          Building responsive and intuitive web applications using the MERN
          stack (MongoDB, Express.js, React, Node.js).
        </li>
        <li>
          Implementing automated testing using Jest and React Testing Library
        </li>
        <li>Writing clean and maintainable code using Git and Github.</li>
        <li>
          Coordinated with multiple teams for prompt issue resolution via
          channels like SLACK and JIRA.
        </li>
        <li>Efficiently managed states using Redux Toolkit using reducers.</li>
        <li>
          Tested developed code using Postman and providing solutions which
          reduced support calls from 27% to 13% in a span of 3 months.
        </li>
        <li>
          Engineered REST APIs using Data Structures that are easier to maintain
          and debug during its lifecycle
        </li>
      </ul>
    ),
    badge: "Rupeek Fintech Pvt Ltd",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    date: "02/2021 - 05/2022",
    location: " Bangalore, India",
  },
];

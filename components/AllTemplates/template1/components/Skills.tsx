"use client";

// import Link from "next/link";
import React from "react";
import { HoverEffect } from "./ui/card-hover-effect";
// import Image from "next/image";
// import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
// import { IoDocumentTextSharp } from "react-icons/io5";
import { tools, webDeveloperSkills } from "@/components/AllTemplates/template1/components/dummyData";

export function Skills() {
  return (
    <div className="p-12 my-10 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="mb-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Skills
          </h2>
          <p className="text-base text-[#9e77c6] font-semibold tracking-wide uppercase">
            Tech Stack
          </p>
        </div>
        <div className="mt-0 ">
          <HoverEffect
            items={webDeveloperSkills.map((webinar) => ({
              key: webinar.id,
              label: webinar.label,
              icon: webinar.icon,
            }))}
          />
        </div>{" "}
        <div className="text-center">
          <p className="text-base text-[#9e77c6] font-semibold tracking-wide uppercase">
            Tools
          </p>
        </div>
        <div className="mt-0 text-center">
          <HoverEffect
            items={tools.map((webinar) => ({
              key: webinar.id,
              label: webinar.label,
              icon: webinar.icon,
            }))}
          />
        </div>
        {/* <div className="mt-10 text-center">
          <Link
            href={"/"}
            className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
          >
            View All webinars
          </Link>
        </div> */}
      </div>
    </div>
  );
}

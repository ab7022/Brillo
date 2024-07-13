"use client";

import { useRef } from "react";
// import { projectsData } from "@/components/AllTemplates/template6/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Project({
  title,
  description,
  github_url,
  techstack,
  image,
  deployed_url,
}: any) {
  const updatedTechStack = techstack
    ? techstack.split(",").map((tech: any) => tech.trim())
    : [];
  const ref = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      ref={ref}
      style={{}}
      className="group mb-3 sm:mb-8 p-4 last:mb-0"
    >
      <a href={deployed_url}>
        <section className="bg-gray-100 max-w-[45rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
          <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
            <h3 className="text-2xl font-semibold">{title}</h3>
            <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
              {description}
            </p>
            {techstack.length > 0 && (
              <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
                {updatedTechStack.map((tag, index) => (
                  <li
                    className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                    key={index}
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            )}

            <div className="flex flex-row justify-between gap-4 mt-4">
              {github_url.length > 0 && (
                <a
                  className="bg-white px-4 py-1 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
                  href={github_url}
                  target="_blank"
                >
                  Github
                </a>
              )}
              {deployed_url.length > 0 && (
                <a
                  className="bg-white px-4   py-1 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
                  href={deployed_url}
                  target="_blank"
                >
                  Live
                </a>
              )}
            </div>
          </div>

          <img
            src={image}
            alt="Project I worked on"
            width={1000}
            height={1000}
            className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl
        transition
        group-hover:scale-[1.04]
        group-hover:-translate-x-3
        group-hover:translate-y-3
        group-hover:-rotate-2

        group-even:group-hover:translate-x-3
        group-even:group-hover:translate-y-3
        group-even:group-hover:rotate-2

        group-even:right-[initial] group-even:-left-40"
          />
        </section>
      </a>
    </motion.div>
  );
}

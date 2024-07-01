"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/components/AllTemplates/template6/lib/hooks";
import { useActiveSectionContext } from "@/components/AllTemplates/template6/context/active-section-context";
import { AiFillYoutube } from "react-icons/ai";

export default function Intro({ basicInfo, socialProfiles }) {
  const firstName = basicInfo?.[0].first_name;
  const lastName = basicInfo?.[0].last_name;
  const designation = basicInfo?.[0]?.designation || "";
  const profile = basicInfo?.[0]?.profile || "";
  const intro = basicInfo?.[0]?.intro || "";
  const shortIntro = basicInfo?.[0]?.shortintro || "";
  const github = socialProfiles?.[0]?.github || "";
  const linkedin = socialProfiles?.[0]?.linkedin || "";
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            {profile && (
              <Image
                src={profile}
                alt="Boo"
                width="192"
                height="192"
                className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
              />
            )}
          </motion.div>

          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          ></motion.span>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {firstName && (
          <>
            {" "}
            <span className="font-bold">
              Hi, I'm {firstName} {lastName} {" "}
            </span>
            a <br />
          </>
        )}{" "}
        {shortIntro && <span>{shortIntro}</span>}
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>
          <div className="flex flex-row gap-x-4">
          {linkedin && (
          <a
            className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
            href={linkedin}
            target="_blank"
          >
            <BsLinkedin />
          </a>
        )}

        {github && (
          <a
            className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
            href={github}
            target="_blank"
          >
            <FaGithubSquare />
          </a>
        )}
          </div>
       
      </motion.div>
    </section>
  );
}

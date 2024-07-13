"use client";

import { TypeAnimation } from "react-type-animation";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Link as ScrollLink,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
import Image from "next/image";
import hero from "@/components/AllTemplates/template2/components/assets/hero.png";
import Link from "next/link";

const HeroSection = ({ basicInfo, email }) => {
  const refContent = useRef(null);
  const inViewContent = useInView(refContent, { once: true });
  const designation = basicInfo?.[0]?.designation || "";
  const firstName = basicInfo?.[0]?.first_name || "";
  const resume = basicInfo?.[0]?.resume || "";

  const profile = basicInfo?.[0]?.profile || "";
  return (
    <section
      className="h-full w-full pb-8 pt-12 sm:px-6 sm:pb-10 md:pt-24"
      id="intro"
    >
      <div className="flex flex-col items-center justify-center gap-4 lg:flex-row lg:items-start">
        {/* intro section */}
        <motion.div
          ref={refContent}
          initial={{ opacity: 0, x: -100, scale: 0.8 }}
          animate={
            inViewContent
              ? { opacity: 1, x: 0, scale: 1 }
              : { opacity: 0, x: -100, scale: 0.8 }
          }
          transition={{ duration: 0.8 }}
          className="w-full flex-1"
        >
          {firstName.length > 0 && firstName.length > 0 && (
            <h1 className="mb-4 text-4xl font-[700] text-white md:text-5xl lg:leading-normal xl:text-6xl">
              Hi, I&apos;m <span className="text-heading">{firstName}</span>
              {designation.length > 0 && (
                <>
                  {" "}
                  a <span className="text-heading">passionate</span>{" "}
                  {designation}
                </>
              )}
            </h1>
          )}
          {designation.length > 0 && (
            <TypeAnimation
              // preRenderFirstString={true}
              sequence={[
                1000,
                `I'm a ${designation}`,
                1000,
                "Transforming visions into seamless user experiences.",
                1000,
                "Bringing ideas to life with creativity",
                500,
              ]}
              speed={50}
              className="text-sm font-medium md:text-xl xl:text-2xl"
              wrapper="span"
              cursor={true}
              repeat={Infinity}
            />
          )}

          <p className="mb-6 mt-3 text-base text-textPara sm:text-lg lg:text-xl">
            Stick around to see some of my work.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row ">
            {email && email.length > 0 && (
              <ScrollLink
                to="contact"
                smooth={true}
                duration={1000}
                className="duration-400 w-full cursor-pointer rounded-full bg-white px-6 py-3 text-center text-lg font-bold text-darkHover transition-all duration-500 ease-in-out hover:scale-[0.98] hover:bg-gray-300 sm:w-fit md:mr-4"
              >
                <Link href={`mailto:${email}`}>Hire Me</Link>
              </ScrollLink>
            )}

            {resume && resume.length > 0 && (
              <a
                href={resume}
                target="_blank"
                rel="noopener noreferrer"
                className="duration-400 w-full rounded-full border-2 border-white bg-transparent px-6 py-3 text-center font-medium text-lg text-white transition-all duration-500 ease-in-out hover:scale-[0.98] hover:bg-darkHover sm:w-fit md:mr-4"
              >
                Download CV
              </a>
            )}
          </div>
        </motion.div>
        {profile && profile.length > 0 && (
          <motion.div
            ref={refContent}
            initial={{
              opacity: 0,
              x: 100,
              scale: 0.6,
              filter: "blur(6px)",
            }}
            animate={
              inViewContent
                ? {
                    opacity: 1,
                    x: 0,
                    scale: 0.8,
                    filter: "blur(0px)",
                  }
                : { opacity: 0, x: 100, scale: 0.8 }
            }
            transition={{ duration: 0.8 }}
            className="relative mt-5 rounded-full lg:-mt-5"
          >
            <Image
              width={400}
              height={400}
              src={profile}
              alt="profile photo"
              className="size-[300px] rotate-2 cursor-pointer rounded-full object-cover transition-all duration-300 ease-in-out hover:scale-[1.02] sm:size-[380px]"
            />
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default HeroSection;

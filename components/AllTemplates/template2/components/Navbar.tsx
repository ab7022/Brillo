"use client";
import { BsLinkedin, BsGithub, BsInstagram, BsFacebook } from "react-icons/bs";
import { HiMailOpen } from "react-icons/hi";
import { AiFillCloseCircle } from "react-icons/ai";
import { SiEbox, SiLeetcode } from "react-icons/si";
import { MenuItems } from "@/components/AllTemplates/template2/components/constants/MenuItem";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import * as Scroll from "react-scroll";
import {
  Link as ScrollLink,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
import { FaTwitter } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Navbar = ({ basicInfo, socialProfiles }:any) => {
  const [mobileView, setMobileView] = useState(false);
  const twitter = socialProfiles?.[0]?.twitter || "";
  const linkedin = socialProfiles?.[0]?.linkedin || "";
  const github = socialProfiles?.[0]?.github || "";
  const email = socialProfiles?.[0]?.email || "";
  const firstName = basicInfo?.[0]?.first_name || "";
  const lastName = basicInfo?.[0]?.last_name || "";
  return (
    <nav className="sticky left-0 top-0 z-[100] w-full bg-bgDark shadow-lg">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="flex flex-wrap items-center justify-between px-3 py-5 sm:px-4 md:px-8"
      >
        <ScrollLink
          to="intro"
          smooth={true}
          duration={500}
          className="min-w-[150px] cursor-pointer text-lg font-[600] tracking-wide sm:text-xl sm:font-[800]"
        >
          <span className="sm:hidden">
            {firstName} {lastName}
          </span>
          <span className="hidden sm:block">
            {firstName} {lastName}
          </span>
        </ScrollLink>

        <span
          className="-ml-[120px] cursor-pointer text-[22px] lg:hidden"
          onClick={() => {
            setMobileView(!mobileView);
          }}
        >
          <SiEbox />
        </span>
        <AnimatePresence>
          {mobileView && (
            <motion.div
              initial={{ opacity: 0, y: -200 }}
              exit={{ opacity: 0, y: -200 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute -top-5 left-0 flex h-fit w-full flex-col bg-bgDark"
            >
              <div className="relative flex flex-col p-5 sm:p-10 lg:hidden">
                <span
                  className="absolute right-12 top-[44px] cursor-pointer text-[24px]"
                  onClick={() => {
                    setMobileView(!mobileView);
                  }}
                >
                  <AiFillCloseCircle />
                </span>
                <div className="flex gap-4 border-b-2 border-b-white p-6 text-[22px]">
                  <a href={linkedin} target="_blank">
                    <BsLinkedin />
                  </a>
                  <a href={github} target="_blank">
                    <BsGithub />
                  </a>
                  <a href={twitter} target="_blank">
                    <FaXTwitter />
                  </a>
                  <a href={`mailto:${email}`} target="_blank">
                    <HiMailOpen />
                  </a>
                </div>

                <div>
                  <ul className="relative flex flex-col items-center justify-between gap-5 p-5">
                    {MenuItems?.map((menuItem) => (
                      <li key={menuItem.id}>
                        <ScrollLink
                          to={menuItem.url}
                          smooth={true}
                          duration={1000}
                          title={menuItem.name}
                          onClick={() => {
                            setMobileView(!mobileView);
                          }}
                          className="after:transition-width relative cursor-pointer text-[18px] font-[500] after:absolute after:-bottom-[3px] after:left-0 after:h-[3px] after:w-0 after:bg-current after:duration-300 after:ease-in-out hover:no-underline hover:after:w-full"
                        >
                          {menuItem.name}
                        </ScrollLink>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              {/* overlay */}
              <div
                className="w-full flex-grow bg-transparent"
                onClick={() => setMobileView(!mobileView)}
              ></div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* full screen navbar */}
        <div className="-ml-5 hidden lg:block">
          <ul className="relative flex items-center justify-between gap-4">
            {MenuItems?.map((menuItem) => (
              <li key={menuItem.id}>
                <ScrollLink
                  to={menuItem.url}
                  smooth={true}
                  duration={1000}
                  title={menuItem.name}
                  className="after:transition-width relative cursor-pointer text-base font-[500] after:absolute after:-bottom-[3px] after:left-0 after:h-[3px] after:w-0 after:bg-current after:duration-300 after:ease-in-out hover:no-underline hover:after:w-full"
                >
                  {menuItem.name}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden items-center justify-between gap-2 text-[24px] lg:flex">
          <span className="cursor-pointer px-1 py-2 transition-all duration-500 ease-in-out hover:-translate-y-[2px]">
            <a href={linkedin} target="_blank" title="Linkedin">
              <BsLinkedin />
            </a>
          </span>
          <span className="cursor-pointer px-1 py-2 transition-all duration-500 ease-in-out hover:-translate-y-[2px]">
            <a href={github} target="_blank" title="Github">
              <BsGithub />
            </a>
          </span>
          <span className="cursor-pointer px-1 py-2 transition-all duration-500 ease-in-out hover:-translate-y-[2px]">
            <a href={twitter} target="_blank" title="Twitter">
              <FaXTwitter />
            </a>
          </span>

          <span className="cursor-pointer px-1 py-2 transition-all duration-500 ease-in-out hover:-translate-y-[2px]">
            <a href={`mailto:${email}`} target="_blank" title="Email">
              <HiMailOpen />
            </a>
          </span>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;

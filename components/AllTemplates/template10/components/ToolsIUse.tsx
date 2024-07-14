import { motion } from "framer-motion";
import Image from "next/image";
import aero from "@/components/AllTemplates/template10/public/aero.svg";
import figma from "@/components/AllTemplates/template10/public/figma.svg";
import keynote from "@/components/AllTemplates/template10/public/keynote.svg";
import stager from "@/components/AllTemplates/template10/public/stager.svg";
import Link from "next/link";

const TechStack = ({ resume }) => {
  return (
    <>
      {resume.length > 0 && (
        <>
          <div className="col-span-1 row-span-1 rounded-2xl p-4 flex md:flex-col flex-row space-y-2 bg-neutral-100 bg-opacity-75 hover:bg-neutral-50 hover:bg-opacity-90 justify-center items-center">
            <div className="text-xl w-full lg:text-2xl text-teal-900 font-normal flex ">
              Resume
            </div>
            <motion.div className="flex flex-col items-center  h-full mt-4 justify-center w-full">
              <Link href={resume} passHref>
                <div className="transition-all duration-200 ease-in-out hover:opacity-100 hover:drop-shadow-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-file-text mb-1 md:hidden flex"
                  >
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                    <polyline points="10 9 9 9 8 9"></polyline>
                  </svg>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="60"
                    height="60"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-file-text hidden md:flex"
                  >
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                    <polyline points="10 9 9 9 8 9"></polyline>
                  </svg>
                </div>
              </Link>
            </motion.div>
          </div>
        </>
      )}
    </>
  );
};

export default TechStack;

"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "@mui/icons-material";
import about from "@/components/AllTemplates/template2/components/assets/about.png";
import { SiCodechef, SiGeeksforgeeks, SiLeetcode } from "react-icons/si";

const About = ({ basicInfo, education, achievement }: any) => {
  const refHeading = useRef(null);
  const refContent = useRef(null);
  const inViewHeading = useInView(refHeading);
  const inViewContent = useInView(refContent, { once: true });
  const firstName = basicInfo?.[0]?.first_name || "";
  const lastName = basicInfo?.[0]?.last_name || "";
  const intro = basicInfo?.[0]?.intro || "";
  const profile = basicInfo?.[0]?.profile || "";
  const achievement1 = achievement?.[0]?.achievement1 || "";
  const achievement2 = achievement?.[0]?.achievement2 || "";
  const achievement3 = achievement?.[0]?.achievement3 || "";
  const achievement4 = achievement?.[0]?.achievement4 || "";
  const achievement5 = achievement?.[0]?.achievement5 || "";
  const achievement6 = achievement?.[0]?.achievement6 || "";

  const variants1 = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-[80px] sm:px-6" id="about">
      {(firstName.length > 0 ||
        (education?.[0]?.college && education[0].college.length > 0)) && (
        <>
          <motion.div
            ref={refHeading}
            variants={variants1}
            initial="initial"
            animate={inViewHeading ? "animate" : "initial"}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4"
          >
            <h3 className="text-3xl font-[800] text-textWhite sm:text-5xl">
              About Me
            </h3>
            <div className="mt-2 h-[4px] min-w-0 flex-grow bg-textWhite"></div>
          </motion.div>
          <div className="mt-16 flex flex-col items-center justify-between gap-10 py-6 lg:flex-row">
            <motion.div
              ref={refContent}
              initial={{ opacity: 0, x: 100, scale: 0.8 }}
              animate={
                inViewContent
                  ? { opacity: 1, x: 0, scale: 1 }
                  : { opacity: 0, x: 100, scale: 0.8 }
              }
              transition={{ duration: 0.8 }}
              className="flex-1 xl:px-4"
            >
              {firstName.length > 0 && (
                <p>
                  I&apos;m{" "}
                  <span className="font-semibold text-heading">
                    {" "}
                    {firstName} {lastName}
                  </span>
                  , {intro}
                </p>
              )}

              <div className="mt-6 w-full sm:mt-0">
                {education && education?.[0]?.college && (
                  <div className="w-full">
                    <h5 className="mt-8 text-2xl font-bold text-textWhite">
                      Education
                    </h5>
                    {education.map((data: any, index: any) => (
                      <div className="" key={index}>
                        <h5 className="text-xl font-medium ml-2 p-4">
                          {data.college}
                        </h5>
                        <div className=" flex w-full items-start gap-1 sm:gap-2">
                          <ArrowRight className={" h-5 w-4 flex-none"} />
                          <div
                            className="flex w-full items-start justify-between gap-5 text-sm font-bold text-heading
                  "
                          >
                            <p>
                              {data.degree}
                              <br />
                              <small>{data.duration}</small>
                            </p>
                            <span>{data.percentage}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                {achievement1.length>0  && (
                  <div className="mt-4 w-full">
                    <h5 className="mb-0.5 mt-2 text-2xl font-bold text-textWhite">
                      Achievements
                    </h5>
                    <div className="space-y-1.5">
                      {achievement1 && (
                        <div className="flex items-start gap-1 p-2 sm:gap-4">
                          <ArrowRight className={" h-5 w-4 flex-none"} />
                          <div className="text-base text-gray-500">
                            {achievement1}
                          </div>
                        </div>
                      )}
                      {achievement2 && (
                        <div className="flex items-start gap-1 p-2 sm:gap-4">
                          <ArrowRight className={" h-5 w-4 flex-none"} />
                          <div className="text-base text-gray-500">
                            {achievement2}
                          </div>
                        </div>
                      )}{" "}
                      {achievement3 && (
                        <div className="flex items-start gap-1 p-2 sm:gap-4">
                          <ArrowRight className={" h-5 w-4 flex-none"} />
                          <div className="text-base text-gray-500">
                            {achievement3}
                          </div>
                        </div>
                      )}{" "}
                      {achievement4 && (
                        <div className="flex items-start gap-1 p-2 sm:gap-4">
                          <ArrowRight className={" h-5 w-4 flex-none"} />
                          <div className="text-base text-gray-500">
                            {achievement4}
                          </div>
                        </div>
                      )}{" "}
                      {achievement5 && (
                        <div className="flex items-start gap-1 p-2 sm:gap-4">
                          <ArrowRight className={" h-5 w-4 flex-none"} />
                          <div className="text-base text-gray-500">
                            {achievement5}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* <div className="mt-6 w-full">
              <h5 className="text-xl font-bold text-textWhite">
                Coding Profiles
              </h5>
              <div className="mt-2 flex items-center gap-3">
                <a
                  href="https://leetcode.com/u/aashish_dhiman/"
                  target="_blank"
                  title="Leetcode"
                  className="flex items-center gap-1 rounded-md bg-[#1d1d1d] px-3 py-2 text-sm font-medium text-orange-300 transition-all duration-200 ease-in-out hover:scale-[1.05]"
                >
                  <SiLeetcode className="size-6" />
                </a>
                <a
                  href="https://auth.geeksforgeeks.org/user/decode_aashish/practice"
                  target="_blank"
                  title="GeeksForGeeks"
                  className="flex items-center gap-1 rounded-md bg-green-700 px-3 py-2 text-sm font-medium transition-all duration-200 ease-in-out hover:scale-[1.05]"
                >
                  <SiGeeksforgeeks className="size-6" />
                </a>

                <a
                  href="https://www.codechef.com/users/aashish_dhiman"
                  target="_blank"
                  title="Codechef"
                  className="flex items-center gap-1 rounded-md bg-slate-800 px-3 py-2 text-sm font-medium transition-all duration-200 ease-in-out hover:scale-[1.05] "
                >
                  <SiCodechef className="size-6" />
                </a>
              </div>
            </div> */}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </section>
  );
};

export default About;

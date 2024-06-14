"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

import React from "react";

import { ArrowRight } from "lucide-react";

const Experience = ({ experience }: any) => {
  console.log(experience);
  const refHeading = useRef(null);
  const refContent = useRef(null);
  const inViewHeading = useInView(refHeading);
  const variants1 = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-[80px] sm:px-6" id="experience">
      <motion.div
        ref={refHeading}
        variants={variants1}
        initial="initial"
        animate={inViewHeading ? "animate" : "initial"}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-4"
      >
        <h3 className="text-3xl font-[800] text-textWhite sm:text-5xl">
          Experience
        </h3>
        <div className="mt-2 h-[4px] min-w-0 flex-grow bg-textWhite"></div>
      </motion.div>
      <div className="mt-16 sm:mt-20 flex flex-col items-center justify-between py-6">
        <section
          className="flex w-full flex-col items-center justify-center space-y-4
        overflow-hidden lg:flex-row lg:items-start lg:justify-between lg:space-y-0 lg:px-20 xl:space-x-6"
        >
          <div className="w-full flex-1 px-2">
            {experience.map((data: any) => (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="flex flex-col items-center justify-between gap-3 px-4 md:px-0 lg:flex-row xl:gap-5 mb-8"
                key={data.id} // Assuming each data item has a unique id
              >
                <div className="flex w-full flex-col space-y-3">
                  <div className="space-y-2 flex flex-col">
                    <span className="text-base font-medium tracking-wide text-gray-100 sm:text-2xl">
                      {data.company_name}{" "}
                    </span>
                    <div className="flex flex-col items-start justify-between font-mono text-sm font-bold text-heading sm:flex-row sm:items-center sm:text-base">
                      <span>{data.designation}</span>
                      <span>{data.duration}</span>
                    </div>
                  </div>
                  <div className="flex flex-col space-y-1 text-sm sm:text-base">
                    {data.description1 && (
                      <div className="flex flex-row space-x-2">
                        <ArrowRight className={"h-5 w-4 flex-none"} />
                        <span className="font-bold text-gray-300">
                          {" "}
                          {data.description1}
                        </span>
                      </div>
                    )}
                    {data.description2 && (
                      <div className="flex flex-row space-x-2">
                        <ArrowRight className={"h-5 w-4 flex-none"} />
                        <span className="font-bold text-gray-300">
                          {" "}
                          {data.description2}
                        </span>
                      </div>
                    )}
                    {data.description3 && (
                      <div className="flex flex-row space-x-2">
                        <ArrowRight className={"h-5 w-4 flex-none"} />
                        <span className="font-bold text-gray-300">
                          {" "}
                          {data.description3}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>{" "}
      </div>
    </section>
  );
};

export default Experience;

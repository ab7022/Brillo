"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export function MyProjects({ project }) {
  return (
    <> {
      project && project.length > 0 && (project[0]?.title || project[0]?.image) && (

   
   
    <div className=" min-h-screen relative z-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-2 text-xl font-bold text-purple-400"
          >
            My Latest Work
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {project.map((data) => (
            <motion.div
              key={data.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-950 rounded-lg overflow-hidden shadow-lg hover:shadow-purple-500/30 transition duration-300"
            >
              <a
                href={data.deployed_url}
                target="_blank"
                rel="noreferrer"
                className="block"
              >
                {data.image && (
                  <Image
                    width={1000}
                    height={1000}
                    src={data.image}
                    alt={data.title}
                    className="w-full h-56 object-cover"
                  />
                )}

                <div className="p-6">
                  {data.title && (
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {data.title}
                    </h3>
                  )}
                  {data.description && (
                    <p className="text-gray-400 text-sm mb-4">
                      {data.description}
                    </p>
                  )}
                  {data.deployed_url && (
                    <div className="flex justify-between items-center">
                      <span className="text-purple-400 text-xs">
                        View Project
                      </span>
                      <svg
                        className="w-5 h-5 text-purple-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </div>
                  )}
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
       )
      }
    </>
  );
}

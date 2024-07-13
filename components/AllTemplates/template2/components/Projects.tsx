"use client";

import LeftView from "./projectType/LeftView";
import RightView from "./projectType/RightView";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const Projects = ({ projects }: any) => {
  const refHeading = useRef(null);
  const inViewHeading = useInView(refHeading);
  const [showAll, setShowAll] = useState(false);

  const variants1 = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-[80px] sm:px-6" id="projects">
       {(projects?.[0]?.title.length>0 || projects?.[0]?.image.length>0 || projects?.[0]?.description.length>0) && (
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
          Projects
        </h3>
        <div className="mt-2 h-[4px] min-w-0 flex-grow bg-textWhite"></div>
      </motion.div>
      {/* Projects */}
      {projects?.map((project: any, i: any) => {
        return project.id % 2 === 0 ? (
          <LeftView key={i} {...project} />
        ) : (
          <RightView key={i} {...project} />
        );
      })}
       </>
      )}
    </section>
  );
};

export default Projects;

"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/components/AllTemplates/template6/lib/hooks";

export default function About({ intro }) {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      {intro && (
        <>
          {" "}
          <SectionHeading>About me</SectionHeading>
          <p>{intro} </p>
        </>
      )}
    </motion.section>
  );
}

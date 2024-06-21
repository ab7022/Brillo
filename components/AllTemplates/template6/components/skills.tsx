"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/components/AllTemplates/template6/lib/data";
import { useSectionInView } from "@/components/AllTemplates/template6/lib/hooks";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills({ skill }) {
  const { ref } = useSectionInView("Skills");
  const software_proficiencyObject = skill?.[0]?.software_proficiency;
  const programming_technical_skillsObject =
    skill?.[0]?.programming_technical_skills;
  const language_soft_skillsObject = skill?.[0]?.language_soft_skills;
  const interests_others_skillsObject = skill?.[0]?.interests_others_skills;

  const software_proficiency = software_proficiencyObject
    ? software_proficiencyObject.split(",").map((skill: any) => skill.trim())
    : [];
  const programming_technical_skills = programming_technical_skillsObject
    ? programming_technical_skillsObject
        .split(",")
        .map((skill: any) => skill.trim())
    : [];
  const language_soft_skills = language_soft_skillsObject
    ? language_soft_skillsObject.split(",").map((skill: any) => skill.trim())
    : [];
  const interests_others_skills = interests_others_skillsObject
    ? interests_others_skillsObject.split(",").map((skill: any) => skill.trim())
    : [];
  return (
    <>
      {programming_technical_skills && (
        <section
          id="skills"
          ref={ref}
          className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
        >
          <SectionHeading>Programming & Technical Skills</SectionHeading>
          <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
            {programming_technical_skills.map((skill, index) => (
              <motion.li
                className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
                key={index}
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                viewport={{
                  once: true,
                }}
                custom={index}
              >
                {skill}
              </motion.li>
            ))}
          </ul>
        </section>
      )}
      {software_proficiency && (
        <section
          id="skills"
          ref={ref}
          className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
        >
          <SectionHeading>Software Proficiency</SectionHeading>
          <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
            {software_proficiency.map((skill, index) => (
              <motion.li
                className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
                key={index}
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                viewport={{
                  once: true,
                }}
                custom={index}
              >
                {skill}
              </motion.li>
            ))}
          </ul>
        </section>
      )}

      {language_soft_skills && (
        <section
          id="skills"
          ref={ref}
          className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
        >
          <SectionHeading>Language & Soft Skills</SectionHeading>
          <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
            {language_soft_skills.map((skill, index) => (
              <motion.li
                className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
                key={index}
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                viewport={{
                  once: true,
                }}
                custom={index}
              >
                {skill}
              </motion.li>
            ))}
          </ul>
        </section>
      )}

      {interests_others_skills && (
        <section
          id="skills"
          ref={ref}
          className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
        >
          <SectionHeading>Interests & Others Skills</SectionHeading>
          <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
            {interests_others_skills.map((skill, index) => (
              <motion.li
                className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
                key={index}
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                viewport={{
                  once: true,
                }}
                custom={index}
              >
                {skill}
              </motion.li>
            ))}
          </ul>
        </section>
      )}
    </>
  );
}

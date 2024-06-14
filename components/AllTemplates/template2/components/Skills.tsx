"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Skills = ({ skill }: any) => {
  const refHeading = useRef(null);
  const refContent = useRef(null);
  const inViewHeading = useInView(refHeading);
  const inViewContent = useInView(refContent, { once: true });
  const variants1 = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
  };
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
    <section className="py-10 sm:py-20 px-4 sm:px-6" id="skills">
      <motion.div
        ref={refHeading}
        variants={variants1}
        initial="initial"
        animate={inViewHeading ? "animate" : "initial"}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-4"
      >
        <h3 className="text-textWhite text-3xl font-bold sm:text-5xl">
          Skills
        </h3>
        <div className="bg-textWhite mt-2 h-[4px] flex-grow"></div>
      </motion.div>
      <div className="flex flex-col gap-8 py-8">
        <SkillCategory
          title="Software Proficiency"
          skills={software_proficiency}
        />
        <SkillCategory
          title="Programming & Technical Skills"
          skills={programming_technical_skills}
        />
        <SkillCategory
          title="Language & Soft Skills"
          skills={language_soft_skills}
        />
        <SkillCategory
          title="Interests & Other Skills"
          skills={interests_others_skills}
        />
      </div>
    </section>
  );
};

const SkillCategory = ({ title, skills }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 1 }}
    transition={{ duration: 0.5 }}
    className="w-full"
  >
    <div className="flex flex-col items-center sm:items-start gap-2 bg-darkHover p-4 sm:p-6 rounded-md text-xl md:text-2xl font-bold">
      {title}
      <div className="text-lg sm:text-2xl font-bold flex flex-row flex-wrap gap-2 justify-center sm:justify-start">
        {skills.map((skill: string, index: any) => (
          <div
            key={index}
            className="bg-bgDark text-gray-300 md:px-6 px-4 md:mx-6 py-2 rounded-lg font-medium text-lg mt-2 hover:bg-slate-950"
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  </motion.div>
);

export default Skills;

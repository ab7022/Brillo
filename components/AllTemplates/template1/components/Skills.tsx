"use client";

import React from "react";
import { HoverEffect } from "./ui/card-hover-effect";

import {
  tools,
  webDeveloperSkills,
} from "@/components/AllTemplates/template1/components/dummyData";

export function Skills({ skill }) {
  const familiar_softwaresObject = skill?.[0]?.skill_familiar_softwares;
  const skill_LanguageObject = skill?.[0]?.skill_Language;
  const skill_programming_languagesObject =
    skill?.[0]?.skill_programming_languages;
  const skill_technical_skillsObject = skill?.[0]?.skill_technical_skills;
  const skill_soft_skillsObject = skill?.[0]?.skill_soft_skills;
  const skill_nameObject = skill?.[0]?.skill_name;
  const skill_InterestObject = skill?.[0]?.skill_interest;

  const familiarSoftwares = familiar_softwaresObject
    ? familiar_softwaresObject.split(",").map((skill) => skill.trim())
    : [];
  const skill_programming_languages = skill_programming_languagesObject
    ? skill_programming_languagesObject.split(",").map((skill) => skill.trim())
    : [];
  const skill_Language = skill_LanguageObject
    ? skill_LanguageObject.split(",").map((skill) => skill.trim())
    : [];
  const skill_technical_skills = skill_technical_skillsObject
    ? skill_technical_skillsObject.split(",").map((skill) => skill.trim())
    : [];
  const skill_soft_skills = skill_soft_skillsObject
    ? skill_soft_skillsObject.split(",").map((skill) => skill.trim())
    : [];
  const skill_name = skill_nameObject
    ? skill_nameObject.split(",").map((skill) => skill.trim())
    : [];
  const skill_Interest = skill_InterestObject
    ? skill_InterestObject.split(",").map((skill) => skill.trim())
    : [];
  console.log(skill_technical_skills);
  return (
    <div className="p-12 my-10 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <p className="text-base absolute z-50 text-[#9e77c6] font-semibold tracking-wide uppercase">
            Technical Skills
          </p>
        </div>
        <div className="mt-0 ">
          <HoverEffect
            items={skill_technical_skills.map((skill, index) => ({
              label: skill, // Assuming 'skill' itself is the label
              key: index, // Use the index as the key (you may have a better way to generate keys)
            }))}
          />
        </div>
        <div className="text-center">
          <p className="text-base text-[#9e77c6] font-semibold tracking-wide uppercase">
            Tools
          </p>
        </div>
        <div className="mt-0 text-center">
          <HoverEffect
            items={tools.map((webinar) => ({
              key: webinar.id,
              label: webinar.label,
              icon: webinar.icon,
            }))}
          />
        </div>
      </div>
    </div>
  );
}

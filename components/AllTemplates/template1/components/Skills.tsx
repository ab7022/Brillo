"use client";

import React from "react";
import { HoverEffect } from "./ui/card-hover-effect";

import {
  tools,
  webDeveloperSkills,
} from "@/components/AllTemplates/template1/components/dummyData";

export function Skills({ skill }) {
  const software_proficiencyObject = skill?.[0]?.software_proficiency;
  const programming_technical_skillsObject =
    skill?.[0]?.programming_technical_skills;
  const language_soft_skillsObject = skill?.[0]?.language_soft_skills;
  const interests_others_skillsObject = skill?.[0]?.interests_others_skills;

  const software_proficiency = software_proficiencyObject
    ? software_proficiencyObject.split(",").map((skill) => skill.trim())
    : [];
  const programming_technical_skills = programming_technical_skillsObject
    ? programming_technical_skillsObject.split(",").map((skill) => skill.trim())
    : [];
  const language_soft_skills = language_soft_skillsObject
    ? language_soft_skillsObject.split(",").map((skill) => skill.trim())
    : [];
  const interests_others_skills = interests_others_skillsObject
    ? interests_others_skillsObject.split(",").map((skill) => skill.trim())
    : [];

  return (
    <div className="p-12 my-10 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {software_proficiency && (
          <>
            <div className="text-center">
              <p className="text-base absolute z-50 text-[#9e77c6] font-semibold tracking-wide uppercase">
                software_proficiency
              </p>
            </div>
            <div className="mt-0 ">
              <HoverEffect
                items={software_proficiency.map((skill, index) => ({
                  label: skill, // Assuming 'skill' itself is the label
                  key: index, // Use the index as the key (you may have a better way to generate keys)
                }))}
              />
            </div>
          </>
        )}
{programming_technical_skills && (
          <>
            <div className="text-center">
              <p className="text-base absolute z-50 text-[#9e77c6] font-semibold tracking-wide uppercase">
              programming_technical_skills
              </p>
            </div>
            <div className="mt-0 ">
              <HoverEffect
                items={programming_technical_skills.map((skill, index) => ({
                  label: skill, // Assuming 'skill' itself is the label
                  key: index, // Use the index as the key (you may have a better way to generate keys)
                }))}
              />
            </div>
          </>
        )}
        {language_soft_skills && (
          <>
            <div className="text-center">
              <p className="text-base absolute z-50 text-[#9e77c6] font-semibold tracking-wide uppercase">
              language_soft_skills
              </p>
            </div>
            <div className="mt-0 ">
              <HoverEffect
                items={language_soft_skills.map((skill, index) => ({
                  label: skill, // Assuming 'skill' itself is the label
                  key: index, // Use the index as the key (you may have a better way to generate keys)
                }))}
              />
            </div>
          </>
        )}
        {interests_others_skills && (
          <>
            <div className="text-center">
              <p className="text-base absolute z-50 text-[#9e77c6] font-semibold tracking-wide uppercase">
              interests_others_skills
              </p>
            </div>
            <div className="mt-0 ">
              <HoverEffect
                items={interests_others_skills.map((skill, index) => ({
                  label: skill, // Assuming 'skill' itself is the label
                  key: index, // Use the index as the key (you may have a better way to generate keys)
                }))}
              />
            </div>
          </>
        )}
        
      </div>
    </div>
  );
}

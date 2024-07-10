"use client";

import React from "react";
import { HoverEffect } from "./ui/card-hover-effect";
export function Skills({ skill }: any) {
  const software_proficiencyObject = skill?.[0]?.software_proficiency;
  const business_administrative_skillsObject = skill?.[0]?.business_administrative_skills
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
    const business_administrative_skills = business_administrative_skillsObject
    ? business_administrative_skillsObject.split(",").map((skill: any) => skill.trim())
    : [];
  return (
    <div className="p-12 my-10 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {software_proficiency && (
          <>
            <div className="text-center">
              <p className="text-base absolute z-50 text-[#9e77c6] font-semibold tracking-wide uppercase">
                Software Proficiency
              </p>
            </div>
            <div className="mt-0 ">
              <HoverEffect
                items={software_proficiency.map((skill: any, index: any) => ({
                  label: skill,
                  key: index,
                }))}
              />
            </div>
          </>
        )}
        {programming_technical_skills && (
          <>
            <div className="text-center">
              <p className="text-base absolute z-50 text-[#9e77c6] font-semibold tracking-wide uppercase">
                Programming & Technical Skills
              </p>
            </div>
            <div className="mt-0 ">
              <HoverEffect
                items={programming_technical_skills.map((skill: any, index: any) => ({
                  label: skill, 
                  key: index, 
                }))}
              />
            </div>
          </>
        )}
        {language_soft_skills && (
          <>
            <div className="text-center">
              <p className="text-base absolute z-50 text-[#9e77c6] font-semibold tracking-wide uppercase">
                Language & Soft Skills
              </p>
            </div>
            <div className="mt-0 ">
              <HoverEffect
                items={language_soft_skills.map((skill: any, index: any) => ({
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
                Interests & Others Skills
              </p>
            </div>
            <div className="mt-0 ">
              <HoverEffect
                items={interests_others_skills.map((skill: any, index: any) => ({
                  label: skill, // Assuming 'skill' itself is the label
                  key: index, // Use the index as the key (you may have a better way to generate keys)
                }))}
              />
            </div>
          </>
        )}
        {business_administrative_skills && (
          <>
            <div className="text-center">
              <p className="text-base absolute z-50 text-[#9e77c6] font-semibold tracking-wide uppercase">
              Business & Administrative Skills
              </p>
            </div>
            <div className="mt-0 ">
              <HoverEffect
                items={business_administrative_skills.map((skill: any, index: any) => ({
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

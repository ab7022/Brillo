"use client";
import React, { createContext, useEffect, useState } from "react";
export const ResumeData = createContext({});

const ResumeContextProvider = (props: { children: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; }) => {
    const [resume, setResume] = useState(
      JSON.parse(localStorage.getItem("resumeLocal") as string) || {
        personal: [],
        education: [],
        experience: [],
        skills: [],
        project: [],
        achievement: [],
      }
    );
  console.log(resume);

    const [experienceCount, setExperienceCount] = useState(1);
    const [projectCount, setProjectCount] = useState(1);
    const [educationCount, setEducationCount] = useState(1);
  const [uploadedResume, setUploadedResume] = useState();

  function updatePersonal(data: any) {
    setResume({ ...resume, personal: data });
  }

  function updateSkills(data: any) {
    setResume({ ...resume, skills: data });
  }

  const updateEducation = (educations: any) => {
    setResume((prevState: any) => ({
      ...prevState,
      education: educations,
    }));
  };
  const updateExperience = (experiences: any) => {
    setResume((prevState: any) => ({
      ...prevState,
      experience: experiences,
    }));
  };

  const updateProject = (projects: any) => {
    setResume((prevState: any) => ({
      ...prevState,
      project: projects,
    }));
  };
  function updateAcheivement(data: any) {
    setResume({ ...resume, achievement: data });
  }
  const deleteProjectItem = (i: number) => {
    const updatedProjects = [...resume.project];
    updatedProjects.splice(i, 1);
    setResume({ ...resume, project: updatedProjects });
    setProjectCount(projectCount - 1);
  };

  const deleteExpItem = (i: number) => {
    const updatedExperiences = [...resume.experience];
    updatedExperiences.splice(i, 1);
    setResume({ ...resume, experience: updatedExperiences });
    setExperienceCount(experienceCount - 1);
  };

  const deleteEduItem = (i: number) => {
    const updatedEducation = [...resume.education];
    updatedEducation.splice(i, 1);
    setResume({ ...resume, education: updatedEducation });
    setEducationCount(educationCount - 1);
  };

  useEffect(() => {
    localStorage.setItem("resumeLocal", JSON.stringify(resume));
  }, [resume]);

  const value = {
    resume,
    updatePersonal,
    updateEducation,
    updateSkills,
    updateExperience,
    updateProject,
    updateAcheivement,
    experienceCount,
    setExperienceCount,
    projectCount,
    setProjectCount,
    educationCount,
    setEducationCount,
    deleteExpItem,
    deleteProjectItem,
    deleteEduItem,
    uploadedResume,
    setUploadedResume,
  };

  return (
    <ResumeData.Provider value={value}> {props.children}</ResumeData.Provider>
  );
};

export default ResumeContextProvider;

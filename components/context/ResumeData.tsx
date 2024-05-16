"use client";
import React, { createContext, useEffect, useState } from "react";
export const ResumeData = createContext();

const ResumeContextProvider = (props) => {
  const [resume, setResume] = useState(
    JSON.parse(localStorage.getItem("resumeLocal")) || {
      personal: [],
      education: [],
      experience: [],
      skills: [],
      project: [],
      acheivement: [],
    }
  );

  const [experienceCount, setExperienceCount] = useState(1);
  const [projectCount, setProjectCount] = useState(1);
  const [educationCount, setEducationCount] = useState(1);
  const [uploadedResume, setUploadedResume] = useState();

  function updatePersonal(data) {
    setResume({ ...resume, personal: data });
  }

  function updateSkills(data) {
    setResume({ ...resume, skills: data });
  }

  const updateEducation = (educations) => {
    setResume((prevState) => ({
      ...prevState,
      education: educations,
    }));
  };
  const updateExperience = (experiences) => {
    setResume((prevState) => ({
      ...prevState,
      experience: experiences,
    }));
  };

  const updateProject = (projects) => {
    setResume((prevState) => ({
      ...prevState,
      project: projects,
    }));
  };
  function updateAcheivement(data) {
    setResume({ ...resume, acheivement: data });
  }
  const deleteProjectItem = (i) => {
    const updatedProjects = [...resume.project];
    updatedProjects.splice(i, 1);
    setResume({ ...resume, project: updatedProjects });
    setProjectCount(projectCount - 1);
  };

  const deleteExpItem = (i) => {
    const updatedExperiences = [...resume.experience];
    updatedExperiences.splice(i, 1);
    setResume({ ...resume, experience: updatedExperiences });
    setExperienceCount(experienceCount - 1);
  };

  const deleteEduItem = (i) => {
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

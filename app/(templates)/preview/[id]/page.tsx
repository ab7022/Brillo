"use client";
import Template1 from "../../template1/page";
import Template2 from "../../template2/page";
import Template3 from "../../template3/page";
import Template4 from "../../template4/page";
import Template5 from "../../template5/page";
import Template6 from "../../template6/page";
import Template7 from "../../template7/page";
import Template8 from "../../template8/page";
import Template9 from "../../template9/page";
import Template10 from "../../template10/page";

import React, { useEffect, useState } from "react";

function Test({ params }: any) {
  const [selectedTemplate, setSelectedTemplate] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  interface DataType {
    name: string;
    email: string;
    profile:string;
    basicInfo: any[];
    experience: any[];
    skill: any[];
    socialProfiles: any[];
    project: any[];
    education: any[];
  }

  const dummyData: DataType = {
    name: "John Doe",
    email: "john.doe@example.com",
    profile:"https://brillo-data.s3.ap-south-1.amazonaws.com/bayees1@gmail.com/profile",
    basicInfo: [
      {
        first_name: "John",
        last_name: "Doe",
        designation: "Software Developer",
        city: "City A",
        country: "Country A",
        resume: "https://www.notion.so/abdulbayees/Abdul-Bayees-1309a4bea3a1497babf8f5442ed68585",
        intro: "I am a passionate software developer with 5 years of experience in building web applications.",
        shortintro: "Passionate software developer with 5 years of experience."

      },
    ],
    experience: [
      {
        company_name: "Company A",
        designation: "Software Engineer",
        duration: "2019-2021",
        location: "City B",
        description1: "Developed web applications.",
        description2: "Collaborated with cross-functional teams.",
        description3: "Implemented new features."
      },
      {
        company_name: "Company B",
        designation: "Senior Software Engineer",
        duration: "2021-2023",
        location: "City C",
        description1: "Led a team of developers.",
        description2: "Architected scalable solutions.",
        description3: "Enhanced application performance."
      },
    ],
    skill: [
      {
        language_soft_skills: "English, Communication",
        programming_technical_skills: "JavaScript, TypeScript, Python",
        software_proficiency: "VSCode, Git, Docker",
        interests_others_skills: "Music, Reading, Hiking",
        business_administrative_skills: "Management, Planning, Strategy"
      },
    ],
    socialProfiles: [
      {
         linkedin: "https://linkedin.com/in/johndoe",
        github: "https://github.com/johndoe",
        twitter: "https://twitter.com/johndoe",
        email: "john.doe@example.com",
        phone: "+1234567890"
      },
    ],
    project: [
      {
        title: "Project 1",
        techstack: "React, Node.js",
        description: "This is a description for project 1.",
        deployed_url: "https://example.com/project1",
        github_url: "https://github.com/user/project1",
        image: "https://brillo-data.s3.ap-south-1.amazonaws.com/bayees1@gmail.com/1/projectImage"
      },
      {
        title: "Project 2",
        techstack: "Angular, Spring Boot",
        description: "This is a description for project 2.",
        deployed_url: "https://example.com/project2",
        github_url: "https://github.com/user/project2",
        image: "https://brillo-data.s3.ap-south-1.amazonaws.com/bayees1@gmail.com/1/projectImage"
      },
      {
        title: "Project 3",
        techstack: "Vue, Laravel",
        description: "This is a description for project 3.",
        deployed_url: "https://example.com/project3",
        github_url: "https://github.com/user/project3",
        image: "https://brillo-data.s3.ap-south-1.amazonaws.com/bayees1@gmail.com/1/projectImage"
      },
    ],
    education: [
      {
        degree: "Bachelor of Science in Computer Science",
        college: "University A",
        duration: "2015-2019",
        percentage: "85%",
        location: "City D"
      },
      {
        degree: "Master of Science in Software Engineering",
        college: "University B",
        duration: "2019-2021",
        percentage: "90%",
        location: "City E"
      },
    ],
  };

  useEffect(() => {
    const template = params.id
    const templateNumber = parseInt(template.toString());
    console.log(params.id)
    console.log(templateNumber)

    setSelectedTemplate(templateNumber);
    console.log(selectedTemplate)

    setLoading(false);
  }, [params]);

  if (loading) {
    return <div className="loader">Loading...</div>;
  }

  if (selectedTemplate === null) {
    return <div>No template selected</div>;
  }

  switch (selectedTemplate) {
    case 1:
      return <Template1 data={dummyData} />;
    case 2:
      return <Template2 data={dummyData} />;
    case 3:
      return <Template3 data={dummyData} />;
    case 4:
      return <Template4 data={dummyData} />;
    case 5:
      return <Template5 data={dummyData} />;
    case 6:
      return <Template6 data={dummyData} />;
    case 7:
      return <Template7 data={dummyData} />;
    case 8:
      return <Template8 data={dummyData} />;
    case 9:
      return <Template9 data={dummyData} />;
    case 10:
      return <Template10 data={dummyData} />;
    default:
      return <div>Template not found</div>;
  }
}

export default Test;

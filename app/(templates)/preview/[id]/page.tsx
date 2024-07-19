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
    basicInfo: [
      {
        first_name: "John",
        last_name: "Doe",
        designation: "Software Developer",
        city: "City A",
        country: "Country A",
        resume:
          "https://www.notion.so/abdulbayees/Abdul-Bayees-1309a4bea3a1497babf8f5442ed68585",
        intro:
          "I am a passionate software developer with 5 years of experience in building web applications.",
        shortintro: "Passionate software developer with 5 years of experience.",
        profile:
          "https://brillo-data.s3.ap-south-1.amazonaws.com/bayees1@gmail.com/profile",
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
        description3: "Implemented new features.",
      },
      {
        company_name: "Company B",
        designation: "Senior Software Engineer",
        duration: "2021-2023",
        location: "City C",
        description1: "Led a team of developers.",
        description2: "Architected scalable solutions.",
        description3: "Enhanced application performance.",
      },
    ],
    skill: [
      {
        language_soft_skills: "English, Communication",
        programming_technical_skills: "JavaScript, TypeScript, Python",
        software_proficiency: "VSCode, Git, Docker",
        interests_others_skills: "Music, Reading, Hiking",
        business_administrative_skills: "Management, Planning, Strategy",
      },
    ],
    socialProfiles: [
      {
        linkedin: "https://linkedin.com/in/johndoe",
        github: "https://github.com/johndoe",
        twitter: "https://twitter.com/johndoe",
        email: "john.doe@example.com",
        phone: "+1234567890",
      },
    ],
    project: [
      {
        title: "Project 1",
        techstack: "React, Node.js",
        description: "This is a description for project 1.",
        deployed_url: "https://example.com/project1",
        github_url: "https://github.com/user/project1",
        image:
          "https://brillo-data.s3.ap-south-1.amazonaws.com/bayees1@gmail.com/1/projectImage",
      },
      {
        title: "Project 2",
        techstack: "Angular, Spring Boot",
        description: "This is a description for project 2.",
        deployed_url: "https://example.com/project2",
        github_url: "https://github.com/user/project2",
        image:
          "https://brillo-data.s3.ap-south-1.amazonaws.com/bayees1@gmail.com/1/projectImage",
      },
      {
        title: "Project 3",
        techstack: "Vue, Laravel",
        description: "This is a description for project 3.",
        deployed_url: "https://example.com/project3",
        github_url: "https://github.com/user/project3",
        image:
          "https://brillo-data.s3.ap-south-1.amazonaws.com/bayees1@gmail.com/1/projectImage",
      },
    ],
    education: [
      {
        degree: "Bachelor of Science in Computer Science",
        college: "University A",
        duration: "2015-2019",
        percentage: "85%",
        location: "City D",
      },
      {
        degree: "Master of Science in Software Engineering",
        college: "University B",
        duration: "2019-2021",
        percentage: "90%",
        location: "City E",
      },
    ],
  };

  useEffect(() => {
    const template = params.id;
    const templateNumber = parseInt(template.toString());
    console.log(params.id);
    console.log(templateNumber);

    setSelectedTemplate(templateNumber);
    console.log(selectedTemplate);

    setLoading(false);
  }, [params]);

  if (loading) {
    return <div className="grid min-h-[140px] w-full place-items-center overflow-x-scroll rounded-lg p-6 lg:overflow-visible">
    <svg className="text-gray-300 animate-spin" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"
      width="24" height="24">
      <path
        d="M32 3C35.8083 3 39.5794 3.75011 43.0978 5.20749C46.6163 6.66488 49.8132 8.80101 52.5061 11.4939C55.199 14.1868 57.3351 17.3837 58.7925 20.9022C60.2499 24.4206 61 28.1917 61 32C61 35.8083 60.2499 39.5794 58.7925 43.0978C57.3351 46.6163 55.199 49.8132 52.5061 52.5061C49.8132 55.199 46.6163 57.3351 43.0978 58.7925C39.5794 60.2499 35.8083 61 32 61C28.1917 61 24.4206 60.2499 20.9022 58.7925C17.3837 57.3351 14.1868 55.199 11.4939 52.5061C8.801 49.8132 6.66487 46.6163 5.20749 43.0978C3.7501 39.5794 3 35.8083 3 32C3 28.1917 3.75011 24.4206 5.2075 20.9022C6.66489 17.3837 8.80101 14.1868 11.4939 11.4939C14.1868 8.80099 17.3838 6.66487 20.9022 5.20749C24.4206 3.7501 28.1917 3 32 3L32 3Z"
        stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"></path>
      <path
        d="M32 3C36.5778 3 41.0906 4.08374 45.1692 6.16256C49.2477 8.24138 52.7762 11.2562 55.466 14.9605C58.1558 18.6647 59.9304 22.9531 60.6448 27.4748C61.3591 31.9965 60.9928 36.6232 59.5759 40.9762"
        stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" className="text-gray-900">
      </path>
    </svg>
  </div>
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

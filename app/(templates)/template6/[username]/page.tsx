"use client";
import { useEffect, useState } from "react";
import About from "@/components/AllTemplates/template6/components/about";
import Contact from "@/components/AllTemplates/template6/components/contact";
import Intro from "@/components/AllTemplates/template6/components/intro";
import Projects from "@/components/AllTemplates/template6/components/projects";
import SectionDivider from "@/components/AllTemplates/template6/components/section-divider";
import Skills from "@/components/AllTemplates/template6/components/skills";
import Pskills from "@/components/AllTemplates/template6/components/persskills";
import Certs from "@/components/AllTemplates/template6/components/certs";
import Pos from "@/components/AllTemplates/template6/components/os";
import axios from "axios";

export default function App({ params }: { params: { username: string } }) {
    interface DataType {
      name: string;
      email: string;
      basicInfo: any[];
      experience: any[];
      skill: any[];
      socialProfiles: any[];
      project: any[];
      education: any[];
      achievement: any[];
    }
  
    const [data, setData] = useState<DataType | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    console.log(data);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.post("/api/user/finddetails", {
            username: decodeURIComponent(params.username),
          });
  
          if (response.status === 200) {
            setData(response.data.user);
          } else {
            console.error("Failed to fetch user data:", response.statusText);
          }
        } catch (error) {
          console.error("Error fetching data:", error);
        } finally {
          setLoading(false);
        }
      };
  
      fetchData();
    }, [params.username]);
  
    if (loading) {
      return <div className="loader">Loading...</div>;
    }
  
    if (!data) {
      return <div>No data found</div>;
    }
    const firstName = data.basicInfo[0].first_name;
    const lastName = data.basicInfo[0].last_name;
    const designation = data?.basicInfo?.[0]?.designation || "";
    const profile = data?.basicInfo?.[0]?.profile || "";
    const intro = data?.basicInfo?.[0]?.intro || "";
    const email = data?.basicInfo?.[0]?.email || "";
    const resume = data?.basicInfo?.[0]?.resume || "";
    const github = data?.socialProfiles?.[0]?.github || "";
    const linkedin = data?.socialProfiles?.[0]?.linkedin || "";
    const projects = data?.project;
    const software_proficiency = data?.skill?.[0]?.software_proficiency;
    const programming_technical_skills =
      data?.skill?.[0]?.programming_technical_skills;
    const language_soft_skills = data?.skill?.[0]?.language_soft_skills;
    const interests_others_skills = data?.skill?.[0]?.interests_others_skills;  const [isMobile, setIsMobile] = useState(true); // Default to mobile view initially
  const [contentLoaded, setContentLoaded] = useState(false);

  const loadContent = () => {
    setContentLoaded(true);
  };

  useEffect(() => {
    const userAgent = window.navigator.userAgent;
    const mobileKeywords =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;

    if (!mobileKeywords.test(userAgent)) {
      setIsMobile(false);
    }
  }, []);

  return (
    <main className="flex flex-col items-center px-4">
      {isMobile ? (
        contentLoaded ? (
          <>
            <link
              rel="icon"
              href="https://serv.husky.nz/logo/default.png"
              sizes="any"
            />
            <Intro />
            <SectionDivider />
            <About />
            <Certs />
            <Projects />
            <Skills />
            <Pos />
            <Pskills />
            <Contact />
          </>
        ) : (
          <button onClick={loadContent}>
            Just to note this site is not yet optimized for mobile, However if
            you understand and agree that it wont be perfect click here and it
            will take you to the content.
          </button>
        )
      ) : (
        <>
          <link
            rel="icon"
            href="https://serv.husky.nz/logo/default.png"
            sizes="any"
          />
          <Intro />
          <SectionDivider />
          <About />
          <Certs />
          <Projects />
          <Skills />
          <Pos />
          <Pskills />
          <Contact />
        </>
      )}
    </main>
  );
};


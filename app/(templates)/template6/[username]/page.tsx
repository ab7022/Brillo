"use client";
import { useEffect, useState } from "react";
import About from "@/components/AllTemplates/template6/components/about";
import Contact from "@/components/AllTemplates/template6/components/contact";
import Intro from "@/components/AllTemplates/template6/components/intro";
import Projects from "@/components/AllTemplates/template6/components/projects";
import SectionDivider from "@/components/AllTemplates/template6/components/section-divider";
import Skills from "@/components/AllTemplates/template6/components/skills";
import axios from "axios";
import Image from "next/image";
export default function Template6({ params }: { params: { username: string } }) {
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
  const [isMobile, setIsMobile] = useState(true);
  const [contentLoaded, setContentLoaded] = useState(true);

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
  const profile = data?.basicInfo?.[0]?.profile || "";
  const intro = data?.basicInfo?.[0]?.intro || "";
  const shortIntro = data?.basicInfo?.[0]?.shortintro || "";

  return (
    <main className="flex flex-col items-center px-4">
      <>
        <Intro
          basicInfo={data.basicInfo}
          socialProfiles={data.socialProfiles}
        />
        <SectionDivider />
        <About intro={intro} />
        <Projects projects={data.project} />
        <Skills skill={data.skill} />
        <Contact socialProfiles={data.socialProfiles} />
      </>
    </main>
  );
}

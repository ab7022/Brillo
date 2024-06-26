"use client";
import Navbar from "@/components/AllTemplates/template2/components/Navbar";
import HeroSection from "@/components/AllTemplates/template2/components/HeroSection";
import About from "@/components/AllTemplates/template2/components/About";
import Projects from "@/components/AllTemplates/template2/components/Projects";
import Contact from "@/components/AllTemplates/template2/components/Contact";
import Skills from "@/components/AllTemplates/template2/components/Skills";
import Experience from "@/components/AllTemplates/template2/components/Experience";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Home({ params }: { params: { username: string } }) {
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
  return (
    <div className={`min-w-screen`}>
      <main className="bg-bgDark text-textWhite  min-w-screen">
        <div className="md:mx-48">
          <Navbar
            basicInfo={data.basicInfo}
            socialProfiles={data.socialProfiles}
          />
          <main className="overflow-hidden px-3 md:px-4">
            <HeroSection basicInfo={data.basicInfo} />
            <About
              basicInfo={data.basicInfo}
              education={data.education}
              achievement={data.achievement}
            />
            <Experience experience={data.experience} />
            <Skills skill={data.skill} />
            <Projects projects={data.project} />
            <Contact
              basicInfo={data.basicInfo}
              socialProfiles={data.socialProfiles}
            />
          </main>
        </div>
      </main>
    </div>
  );
}

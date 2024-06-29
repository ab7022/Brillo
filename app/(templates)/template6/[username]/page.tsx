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

import Header from "@/components/AllTemplates/template6/components/header";
import "../globals.css";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/components/AllTemplates/template6/context/active-section-context";
import ThemeSwitch from "@/components/AllTemplates/template6/components/theme-switch";
import ThemeContextProvider from "@/components/AllTemplates/template6/context/theme-context";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
        <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}

            <Toaster position="top-center" />
          </ActiveSectionContextProvider>
          <ThemeSwitch />
        </ThemeContextProvider>
      </body>
    </html>
  );
}

export default function Template6({
  params,
}: {
  params: { username: string };
}) {
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
    <RootLayout>
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
    </RootLayout>
  );
}

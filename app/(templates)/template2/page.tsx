"use client";
import Navbar from "@/components/AllTemplates/template2/components/Navbar";
import HeroSection from "@/components/AllTemplates/template2/components/HeroSection";
import About from "@/components/AllTemplates/template2/components/About";
import Projects from "@/components/AllTemplates/template2/components/Projects";
import Contact from "@/components/AllTemplates/template2/components/Contact";
import Skills from "@/components/AllTemplates/template2/components/Skills";
import Experience from "@/components/AllTemplates/template2/components/Experience";

export default function Template2({ data }:any) {
  
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

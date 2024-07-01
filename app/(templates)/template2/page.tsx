"use client";
import Navbar from "@/components/AllTemplates/template2/components/Navbar";
import HeroSection from "@/components/AllTemplates/template2/components/HeroSection";
import About from "@/components/AllTemplates/template2/components/About";
import Projects from "@/components/AllTemplates/template2/components/Projects";
import Contact from "@/components/AllTemplates/template2/components/Contact";
import Skills from "@/components/AllTemplates/template2/components/Skills";
import Experience from "@/components/AllTemplates/template2/components/Experience";

export default function Template2({ data }: any) {
  const { basicInfo, socialProfiles, education, achievement, experience, skill, project } = data || {};

  return (
    <div className="min-w-screen">
      <main className="bg-bgDark text-textWhite min-w-screen">
        <div className="md:mx-48">
          <Navbar
            basicInfo={basicInfo || {}}
            socialProfiles={socialProfiles || []}
          />
          <main className="overflow-hidden px-3 md:px-4">
            <HeroSection basicInfo={basicInfo || {}} />
            <About
              basicInfo={basicInfo || {}}
              education={education || []}
              achievement={achievement || []}
            />
            <Experience experience={experience || []} />
            <Skills skill={skill || {}} />
            <Projects projects={project || []} />
            <Contact
              basicInfo={basicInfo || {}}
              socialProfiles={socialProfiles || []}
            />
          </main>
        </div>
      </main>
    </div>
  );
}

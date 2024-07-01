"use client";
import GithubDetails from "@/components/AllTemplates/template3/Components/GithubDetails";
import Header from "@/components/AllTemplates/template3/Components/Header";
import Hero from "@/components/AllTemplates/template3/Components/Hero";
import Skills from "@/components/AllTemplates/template3/Components/Skills";
import ButtonGradient from "@/components/AllTemplates/template3/assets/svg/ButtonGradient";
import Contact from "@/components/AllTemplates/template3/Components/Contact";
import Projects from "@/components/AllTemplates/template3/Components/Projects";
import Footer from "@/components/AllTemplates/template3/Components/Footer";
import "./globals.css";
import {
  curve,
  heroBackground,
  working,
} from "@/components/AllTemplates/template3/assets";

export default function Template3({ data }: any) {
  const { basicInfo, socialProfiles, experience, project } = data || {};

  return (
    <div className="min-w-screen">
      <div
        className="pt-20 overflow-hidden text-white"
        style={{ backgroundColor: "rgba(14, 12, 21, var(--tw-bg-opacity, 1))" }}
      >
        <Header
          socialProfiles={socialProfiles || []}
          basicInfo={basicInfo || {}}
        />
        <Hero basicInfo={basicInfo || {}} />
        <GithubDetails experience={experience || []} />
        <Projects projects={project || []} />
        {/* <Skills /> */}
        <Contact socialProfiles={socialProfiles || []} />
        <Footer
          basicInfo={basicInfo || {}}
          socialProfiles={socialProfiles || []}
        />
      </div>
      <ButtonGradient />
    </div>
  );
}

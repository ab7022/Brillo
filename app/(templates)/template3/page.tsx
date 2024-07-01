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

export default function Template3({ data }:any) {


  return (
    <div className="min-w-screen">
      <div
        className="pt-20 overflow-hidden text-white"
        style={{ backgroundColor: "rgba(14, 12, 21, var(--tw-bg-opacity, 1))" }}
      >
        <Header
          socialProfiles={data.socialProfiles}
          basicInfo={data.basicInfo}
        />
        <Hero basicInfo={data.basicInfo} />
        <GithubDetails experience={data.experience} />
        <Projects projects={data.project} />
        {/* <Skills /> */}
        <Contact socialProfiles={data.socialProfiles} />
        <Footer
          basicInfo={data.basicInfo}
          socialProfiles={data.socialProfiles}
        />
      </div>
      <ButtonGradient />
    </div>
  );
}

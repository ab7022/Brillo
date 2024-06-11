"use client";
import React from "react";
// import { SparklesCore } from "../components/ui/sparkles";
import { Skills } from "./Skills";
import { WorkExperience as TracingBeamDemo } from "@/components/WorkExperience";
import HeroSection from "./HeroSection";
import { MyProjects } from "./MyProjects";
import { ContactForm } from "./ContactForm";

export function SparklesPreview() {
  return (
    <div className="h-[full] relative w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
      <div className="w-full absolute inset-0 min-h-screen">
        <div className="h-full w-full dark:bg-black bg-white  dark:bg-grid-white/[0.1] bg-grid-black/[0.1] relative flex items-center justify-center">
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        </div>
      </div>
      <HeroSection />
      <TracingBeamDemo />
      <Skills />
      <MyProjects />
      <ContactForm />
    </div>
  );
}

import React, { useEffect, useState } from "react";
import { Skills } from "@/components/AllTemplates/template1/components/Skills";
import { WorkExperience as TracingBeamDemo } from "@/components/AllTemplates/template1/components/WorkExperience";
import HeroSection from "@/components/AllTemplates/template1/components/HeroSection";
import { MyProjects } from "@/components/AllTemplates/template1/components/MyProjects";
import { ContactForm } from "@/components/AllTemplates/template1/components/ContactForm";
import Navbar from "@/components/AllTemplates/template1/components/Navbar";
import Footer from "@/components/AllTemplates/template1/components/Footer";
import axios from "axios";
function Home() {
  
  return (
    <div className="dark">
      <div className=" w-full ">
        <Navbar />
        <main className="min-h-screen bg-black[0.96] antialiased bg-grid-white/[0.02]">
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
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
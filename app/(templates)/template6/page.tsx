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

const Home = () => {
  const [isMobile, setIsMobile] = useState(true); // Default to mobile view initially
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

export default Home;

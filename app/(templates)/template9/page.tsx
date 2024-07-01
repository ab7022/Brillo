"use client"
import "./index.css";
import "./responsive.css";
import "./App.css";

import { useEffect, useState } from "react";
import Hero from "@/components/AllTemplates/template9/components/Hero";
import About from "@/components/AllTemplates/template9/components/About";
import Experience from "@/components/AllTemplates/template9/components/Experience";
import Work from "@/components/AllTemplates/template9/components/Work";
import Connect from "@/components/AllTemplates/template9/components/Connect";
import { gsap } from "gsap";

export default function Template9({ data }:any) {


  useEffect(() => {
    const startLoader = () => {
      let counter = document.querySelector('.counter');
      let current = 0;

      const updateCounter = () => {
        if (!counter) return;

        current += Math.floor(Math.random() * 10) + 1;
        if (current >= 100) {
          current = 100;
        } else {
          counter.innerHTML = current + '%';
          let delay = 55;
          setTimeout(updateCounter, delay);
        }
      };

      updateCounter();
    };

    startLoader();

    gsap.to('.counter', 0.25, {
      delay: 2,
      opacity: 0,
    });
    gsap.to('.counter-1', 0.25, {
      delay: 2,
      opacity: 0,
    });

    gsap.to('.bar', 1, {
      delay: 2.5,
      height: 0,
      stagger: {
        amount: 0.4,
      },
      ease: 'power4.inOut',
      onComplete: () => {
        const overlay = document.querySelector('.overlay') as HTMLElement;
        const counter = document.querySelector('.counter') as HTMLElement; 
        const counter1 = document.querySelector('.counter-1') as HTMLElement;
        const bars = document.querySelectorAll('.bar');

        if (overlay) overlay.style.display = 'none';
        if (counter) counter.style.display = 'none';
        if (counter1) counter1.style.display = 'none';
        bars.forEach((bar: any) => {
          if (bar) bar.style.display = 'none';
        });
      },
    });
  }, [data]);

  const { basicInfo, socialProfiles, skill, project } = data;
  const email = socialProfiles?.[0]?.email || "";
  const profile = basicInfo?.[0]?.profile || "";
  const intro = basicInfo?.[0]?.intro || "";
  const resume = basicInfo?.[0]?.resume || "";

  return (
    <div className="w-[100vw] bg-[#e9e9e9] dark:bg-[#09090b]">
      <h1 className="counter dark:text-[#bcbcc4] text-[#1a1a1a]">0</h1>
      <h1 className="counter-1 dark:text-[#bcbcc4] text-[#1a1a1a]">SIT BACK. RELAX.</h1>
      <div className="overlay">
        <div className="bar dark:bg-[#161617] bg-[#f6f6ee]"></div>
        <div className="bar dark:bg-[#161617] bg-[#f6f6ee]"></div>
        <div className="bar dark:bg-[#161617] bg-[#f6f6ee]"></div>
        <div className="bar dark:bg-[#161617] bg-[#f6f6ee]"></div>
        <div className="bar dark:bg-[#161617] bg-[#f6f6ee]"></div>
        <div className="bar dark:bg-[#161617] bg-[#f6f6ee]"></div>
        <div className="bar dark:bg-[#161617] bg-[#f6f6ee]"></div>
        <div className="bar dark:bg-[#161617] bg-[#f6f6ee]"></div>
        <div className="bar dark:bg-[#161617] bg-[#f6f6ee]"></div>
        <div className="bar dark:bg-[#161617] bg-[#f6f6ee]"></div>
      </div>
      <Hero basicInfo={basicInfo} email={email}/>
      <About profile={profile} intro={intro}/>
      <Work project={project}/>
      <Experience experience={data.experience}/>
      <Connect socialProfiles={socialProfiles} resume={resume}/>
    </div>
  );
}


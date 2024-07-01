"use client";
import MainContainer from "@/components/AllTemplates/template10/components/MainContainer";
import Intro from "@/components/AllTemplates/template10/components/Intro";
import MainContent from "@/components/AllTemplates/template10/components/MainContent";
import Twitter from "@/components/AllTemplates/template10/components/Twitter";
import WhatIDo from "@/components/AllTemplates/template10/components/WhatIDo";
import FeaturedWork from "@/components/AllTemplates/template10/components/FeaturedWork";
import TechStack from "@/components/AllTemplates/template10/components/ToolsIUse";
import Musings from "@/components/AllTemplates/template10/components/Musings";
import Music from "@/components/AllTemplates/template10/components/Music";
import ReachOut from "@/components/AllTemplates/template10/components/ReachOut";
import Footer from "@/components/AllTemplates/template10/components/Footer";
import axios from "axios";
import "../../globals.css";
export default function Template10({ data }:any) {

  const { basicInfo, socialProfiles } = data;
  const resume = basicInfo?.[0]?.resume || "";
  const city = basicInfo?.[0]?.city || "";
  const country = basicInfo?.[0]?.country || "";
  return (
    <MainContainer>
      <Intro basicInfo={basicInfo} />
      <WhatIDo basicInfo={basicInfo} />
      {/* <FeaturedWork /> */}
      {/* <Musings achievement={data.achievement} /> */}
      {resume && <TechStack resume={resume} />}
      {city && <Music city={city} country={country} />}
      {socialProfiles && <ReachOut socialProfiles={socialProfiles} />}

      {/* <Footer /> */}
    </MainContainer>
  );
}

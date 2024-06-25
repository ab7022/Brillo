"use client"
import Image from "next/image";
import { Inter } from "next/font/google";
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

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <MainContainer>
      <Intro />
      <WhatIDo/>
      <FeaturedWork/>
      <TechStack/>
      <Music/>
      <Musings/>
      <ReachOut/>
      <Footer/>
    </MainContainer>
  );
}

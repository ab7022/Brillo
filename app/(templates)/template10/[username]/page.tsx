import Image from "next/image";
import { Inter } from "next/font/google";
import MainContainer from "@/components/MainContainer";
import Intro from "@/components/Intro";
import MainContent from "@/components/MainContent";
import Twitter from "@/components/Twitter";
import WhatIDo from "@/components/WhatIDo";
import FeaturedWork from "@/components/FeaturedWork";
import TechStack from "@/components/ToolsIUse";
import Musings from "@/components/Musings";
import Music from "@/components/Music";
import ReachOut from "@/components/ReachOut";
import Footer from "@/components/Footer";

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

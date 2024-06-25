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
import { useState, useEffect } from "react";
import '../../../globals.css'
export default function App({ params }: { params: { username: string } }) {
  interface DataType {
    name: string;
    email: string;
    basicInfo: any[];
    experience: any[];
    skill: any[];
    socialProfiles: any[];
    project: any[];
    education: any[];
    achievement: any[];
  }

  const [data, setData] = useState<DataType | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post("/api/user/finddetails", {
          username: decodeURIComponent(params.username),
        });

        if (response.status === 200) {
          setData(response.data.user);
        } else {
          console.error("Failed to fetch user data:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [params.username]);

  if (loading) {
    return <div className="loader">Loading...</div>;
  }

  if (!data) {
    return <div>No data found</div>;
  }

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

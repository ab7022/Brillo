"use client";
import GithubDetails from "@/components/AllTemplates/template3/Components/GithubDetails";
import Header from "@/components/AllTemplates/template3/Components/Header";
import Hero from "@/components/AllTemplates/template3/Components/Hero";
import Skills from "@/components/AllTemplates/template3/Components/Skills";
import ButtonGradient from "@/components/AllTemplates/template3/assets/svg/ButtonGradient";
import Contact from "@/components/AllTemplates/template3/Components/Contact";
import Projects from "@/components/AllTemplates/template3/Components/Projects";
import Footer from "@/components/AllTemplates/template3/Components/Footer";
import axios from "axios";
import App from "next/app";
import { useState, useEffect } from "react";
export default function Home({ params }: { params: { username: string } }) {
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
  console.log(data);

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

  return (
    <>
      <div className="pt-20 overflow-hidden ">
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
    </>
  );
}

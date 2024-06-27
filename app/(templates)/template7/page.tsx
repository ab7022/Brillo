"use client";
import { useEffect, useState } from "react";
// import ScrollReveal from "scrollreveal";
import Header from "@/components/AllTemplates/template7/components/Header";
import Home from "@/components/AllTemplates/template7/components/Home";
import About from "@/components/AllTemplates/template7/components/About";
import Projects from "@/components/AllTemplates/template7/components/Projects";
import Services from "@/components/AllTemplates/template7/components/Services";
import Contact from "@/components/AllTemplates/template7/components/Contact";
import Footer from "@/components/AllTemplates/template7/components/Footer";
import "../../styles/index.css";
import axios from "axios";

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

  // useEffect(() => {
  //   if (!loading && data) {
  //     const sr = ScrollReveal({
  //       origin: "top",
  //       distance: "20px",
  //       duration: 1000,
  //       reset: true,
  //     });

  //     sr.reveal(`.home, .about, .services, .projects, .contact`, {
  //       interval: 200,
  //     });
  //   }
  // }, [loading, data]);

  if (loading) {
    return <div className="loader">Loading...</div>;
  }

  if (!data) {
    return <div>No data found</div>;
  }

  const { basicInfo, socialProfiles } = data;
  const firstName = basicInfo?.[0]?.first_name || "";
  const lastName = basicInfo?.[0]?.last_name || "";
  const intro = basicInfo?.[0]?.intro || "";
  const linkedin = socialProfiles?.[0]?.linkedin || "";

  return (
    <>
      <Header firstName={firstName} lastName={lastName} />
      <main className="main">
        <Home socialProfiles={socialProfiles} basicInfo={basicInfo} />
        <About intro={intro} skill={data?.skill} linkedin={linkedin} />
        {/* <Services /> */}
        <Projects projects={data?.project} />
        <Contact socialProfiles={socialProfiles} />
      </main>
      <Footer firstName={firstName} lastName={lastName} />
    </>
  );
}

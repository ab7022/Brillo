"use client";
import "../App.scss";
import PortfolioMain from "@/components/AllTemplates/template5/Pages/Portfoliopage/PortfolioMain";
import ContactPage from "@/components/AllTemplates/template5/Pages/ContactPage/ContactPage.jsx";

import FirstAbout from "@/components/AllTemplates/template5/Pages/AboutPage/SubAbout/FirstAbout";
import Header from "@/components/AllTemplates/template5/Components/Header/Header";

import { useState, useEffect } from "react";
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
      <Header basicInfo={data.basicInfo} socialProfiles={data.socialProfiles} />
      <FirstAbout basicInfo={data.basicInfo} socialProfiles={data.socialProfiles}/>
      <PortfolioMain project={data.project}/>
      <ContactPage basicInfo={data.basicInfo} socialProfiles={data.socialProfiles}/>
    </>
  );
}

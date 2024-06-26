"use client";
import Intro from "@/components/AllTemplates/template5/Pages/HomePage/Herosubpage/Intro";
import Introduction from "@/components/AllTemplates/template5/Pages/HomePage/Herosubpage/Introduction";
import Projecthomesub from "@/components/AllTemplates/template5/Pages/HomePage/Herosubpage/Projecthomesub";
import KeepTouch from "@/components/AllTemplates/template5/Pages/HomePage/Herosubpage/KeepTouch";
import Header from "@/components/AllTemplates/template5/Components/Header/Header";
import Footer from "@/components/AllTemplates/template5/Components/Footer/Footer";
import { useState, useEffect } from "react";
import axios from "axios";
import "../App.scss";

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
  const email = data?.socialProfiles?.[0]?.email || "";
  const firstName = data.basicInfo[0].first_name;
  const lastName = data.basicInfo[0].last_name;
  return (
    <div className="Hero-Div">
      <Header basicInfo={data.basicInfo} />
      <Intro basicInfo={data.basicInfo} socialProfiles={data.socialProfiles} />
      <Introduction basicInfo={data.basicInfo} />
      <Projecthomesub projects={data.project} />
      <KeepTouch socialProfiles={data.socialProfiles} />
      <Footer email={email} firstName={firstName} lastName={lastName} />
    </div>
  );
}

"use client";
import Template1 from "../template1/page";
import Template2 from "../template2/page";
import Template3 from "../template3/page";
import Template4 from "../template4/page";
import Template5 from "../template5/page";
import Template6 from "../template6/page";
import Template7 from "../template7/page";
import Template8 from "../template8/page";
import Template9 from "../template9/page";
import Template10 from "../template10/page";
import React, { useEffect, useState } from "react";
import axios from "axios";

interface UserData {
  username: string;
}

function PortfolioPage({ params }: { params: UserData }) {
  const [selectedTemplate, setSelectedTemplate] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  interface DataType {
    name: string;
    email: string;
    basicInfo: any[];
    experience: any[];
    skill: any[];
    socialProfiles: any[];
    project: any[];
  }

  const [data, setData] = useState<DataType | null>(null);  useEffect(() => {

    const fetchData = async () => {
      try {
        setLoading(true)
        const response = await axios.post("/api/user/findusernameandtemplate", {
          username: decodeURIComponent(params.username),
        });
        console.log(response)
        if (response.status === 200) {
          setData(response.data)
          setSelectedTemplate(response.data.template.templateId);
          setData(response.data.user)
          setLoading(false)
        } else {
          console.error("Failed to fetch user data:", response.statusText);
          setLoading(false)
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

  if (selectedTemplate === null) {
    return <div>No template selected</div>;
  }


  switch (selectedTemplate) {
    case 1:
      return <Template1 data={data}  />;
    case 2:
      return <Template2 data={data} />;
    case 3:
      return <Template3 data={data} />;
    case 4:
      return <Template4 data={data} />;
    case 5:
      return <Template5 data={data} />;
    case 6:
      return <Template6 data={data} />;
    case 7:
      return <Template7 data={data}  />;
    case 8:
      return <Template8 data={data} />;
    case 9:
      return <Template9 data={data} />;
    case 10:
      return <Template10 data={data} />;
    default:
      return <div>Template not found</div>;
  }
}

export default PortfolioPage;

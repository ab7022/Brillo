"use client"
import Template1 from "../template1/[username]/page";
import Template2 from "../template2/[username]/page";
import Template3 from "../template3/[username]/page";
import Template4 from "../template4/[username]/page";
import Template5 from "../template5/[username]/page";
import Template6 from "../template6/[username]/page";
import Template7 from "../template7/[username]/page";
import Template8 from "../template8/[username]/page";
import Template9 from "../template9/[username]/page";
import Template10 from "../template10/[username]/page";
import React, { useEffect, useState } from "react";
import axios from "axios";

interface UserData {
  username: string;
}

function PortfolioPage({ params }: { params: UserData }) {
  const [selectedTemplate, setSelectedTemplate] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post("/api/user/findusernameandtemplate", {
          username: decodeURIComponent(params.username),
        });

        if (response.status === 200) {
          setSelectedTemplate(response.data.templateId);
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

  if (selectedTemplate === null) {
    return <div>No template selected</div>;
  }

  switch (selectedTemplate) {
    case 1:
      return <Template1 params={params} />;
    case 2:
      return <Template2 params={params} />;
    case 3:
      return <Template3 params={params} />;
    case 4:
      return <Template4 params={params} />;
    case 5:
      return <Template5 params={params} />;
    case 6:
      return <Template6 params={params} />;
    case 7:
      return <Template7 params={params} />;
    case 8:
      return <Template8 params={params} />;
    case 9:
      return <Template9 params={params} />;
    case 10:
      return <Template10 params={params} />;
    default:
      return <div>Template not found</div>;
  }
}

export default PortfolioPage;

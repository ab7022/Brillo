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
import Link from "next/link";

interface UserData {
  username: string;
}

function PortfolioPage({ params }: { params: UserData }) {
  const [selectedTemplate, setSelectedTemplate] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [subscription, setSubscription] = useState<boolean>(false);
  const [trial, setTrial] = useState<boolean>(false);
  interface DataType {
    name: string;
    email: string;
    basicInfo: any[];
    experience: any[];
    skill: any[];
    socialProfiles: any[];
    project: any[];
  }

  const [data, setData] = useState<DataType | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.post("/api/user/findusernameandtemplate", {
          username: decodeURIComponent(params.username),
        });
        console.log(response);
        if (response.status === 200) {
          const responseData = response.data;

          setSelectedTemplate(responseData.template.templateId);
          setData(responseData.user);
          setSubscription(responseData.subscription);
          setTrial(responseData.trial);

          console.error("Failed to fetch user data:", response.statusText);
          setLoading(false);
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
  if (!subscription && !trial) {
    return (
      <div className="bg-gray-100 text-gray-800 p-8 rounded-lg shadow-md max-w-md mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-4">Subscription Required</h2>
        <p className="mb-6">
          Thank you for your interest in our portfolio services. To continue accessing our premium features, please consider subscribing.
        </p>
        <p className="text-lg font-medium mb-4">
          Enhance your professional presence with our advanced tools.
        </p>
        <Link className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded transition duration-300 ease-in-out" href="/pricing">
          View Subscription Options
        </Link>
        <p className="mt-4 text-sm text-gray-600">
          Flexible plans available to suit your needs.
        </p>
      </div>
    );
  }
  switch (selectedTemplate) {
    case 1:
      return <Template1 data={data} />;
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
      return <Template7 data={data} />;
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

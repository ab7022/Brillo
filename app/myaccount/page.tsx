"use client";
import Header from "@/components/HomePage/Header";
import { getUser } from "@/components/Sessions";
import BasicInfoForm from "@/components/myaccount/BasicInfoForm";
import SideNav from "@/components/myaccount/SideNav";

import {
  BrainCircuit,
  BriefcaseBusiness,
  GraduationCap,
  Medal,
  Presentation,
  Store,
} from "lucide-react";
import { useState } from "react";

export default function () {
  const renderForm = () => {
    switch (activeIndex) {
      case 0:
        return <BasicInfoForm />;
      // Render other form components based on their indices
      default:
        return null;
    }
  };
  // const session = await getUser();
  const sections = [
    { title: "Basic Info", src: <Store /> },
    { title: "Experience", src: <BriefcaseBusiness /> },
    { title: "Projects", src: <Presentation /> },
    { title: "Skills ", src: <BrainCircuit /> },
    { title: "Education", src: <GraduationCap /> },
    { title: "Acheivement", src: <Medal /> },
  ];
  const [activeIndex, setactiveIndex] = useState(0);
  console.log(activeIndex);

  return (
    <div className="bg-gray-950 w-screen h-screen">
      <Header />
      <SideNav
        sections={sections}
        activeIndex={activeIndex}
        setactiveIndex={setactiveIndex}
      />{" "}
      <div className="w-full h-full flex justify-center 50 inset-  z-50 mx-auto items-center ">
        {renderForm()}
      </div>
    </div>
  );
}

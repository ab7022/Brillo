"use client";
import Header from "@/components/HomePage/Header";
import { getUser } from "@/components/Sessions";
import Acheivements from "@/components/myaccount/Acheivement";
import BasicInfoForm from "@/components/myaccount/BasicInfoForm";
import Education from "@/components/myaccount/Education";
import Experience from "@/components/myaccount/Experience";
import Projects from "@/components/myaccount/Projects";
import SideNav from "@/components/myaccount/SideNav";
import Skills from "@/components/myaccount/Skills";

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
      case 1:
        return <Experience />;
      case 2:
        return <Projects/>
      case 3:
        return<Skills/>
      case 4:
        return <Education/>
      case 5:
        return <Acheivements/>
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
      <div className="w-full h-full flex justify-center 50 bg-gray-950 z-50 mx-auto items-center ">
        <div className="bg-[#121422] mt-28 p-4 rounded-xl border border-white shadow-lg shadow-slate-800">
                  {renderForm()}

        </div>
      </div>
    </div>
  );
}

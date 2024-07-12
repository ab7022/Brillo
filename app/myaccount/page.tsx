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
import { useSession } from "next-auth/react";
import SocialProfiles from "@/components/myaccount/SocialProfiles";
import {
  BrainCircuit,
  BriefcaseBusiness,
  GraduationCap,
  Medal,
  Presentation,
  Store,
} from "lucide-react";
import React, { useEffect, useState } from "react";
import UsernameChecker from "@/components/Username-checker";
import { redirect, useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";

export default function MyAccount() {
  const [activeIndex, setactiveIndex] = useState(0);
  const { data: session, status } = useSession();
  const [username, setUsername] = useState("");
  const [showUsernameModal, setShowUsernameModal] = useState(false);
  const router = useRouter();

  const toggleModal = () => {
    setShowUsernameModal(!showUsernameModal);
  };

  useEffect(() => {
    if (status === "unauthenticated") {
      toast("Please Login First");
      setTimeout(() => {
        router.push(
          "/auth/signin?callbackUrl=" + encodeURIComponent(window.location.href)
        );
      }, 10000);
    }
  }, [status, router]);
  
  if (!session && status === "loading") {
    return <div>Loading...</div>;
  }

  if (!session) {
    redirect("/auth/signin?callbackUrl=http%3A%2F%2Flocalhost%3A3000%2F");
    return null;
  }
  useEffect(() => {
    const fetchData = async () => {
      if (status === "authenticated" && session) {
        try {
          const sessionEmail = session?.user?.email || "";
          const url = "/api/user/username";
          const response = await axios.get(url, {
            headers: {
              Authorization: sessionEmail,
            },
          });

          if (response.status === 200) {
            const fetchedUsername = response.data;

            if (!fetchedUsername) {
              console.log(response.data);
              setShowUsernameModal(true);
            } else {
              setUsername(fetchedUsername);
              setShowUsernameModal(false);
            }
          } else {
            console.error("Failed to fetch user data:", response.statusText);
          }
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
    };

    fetchData();
  }, [session, status]);


  const renderForm = () => {
    switch (activeIndex) {
      case 0:
        return (
          <BasicInfoForm
            activeIndex={activeIndex}
            setactiveIndex={setactiveIndex}
          />
        );
      case 1:
        return (
          <Experience
            activeIndex={activeIndex}
            setactiveIndex={setactiveIndex}
          />
        );
      case 2:
        return (
          <Projects activeIndex={activeIndex} setactiveIndex={setactiveIndex} />
        );
      case 3:
        return (
          <Skills activeIndex={activeIndex} setactiveIndex={setactiveIndex} />
        );
      case 4:
        return (
          <Education
            activeIndex={activeIndex}
            setactiveIndex={setactiveIndex}
          />
        );
      case 5:
        return (
          <SocialProfiles
            activeIndex={activeIndex}
            setactiveIndex={setactiveIndex}
          />
        );
      case 6:
        return (
          <Acheivements
            activeIndex={activeIndex}
            setactiveIndex={setactiveIndex}
          />
        );
      default:
        return null;
    }
  };

  const sections = [
    { title: "Basic Info", src: <Store /> },
    { title: "Experience", src: <BriefcaseBusiness /> },
    { title: "Projects", src: <Presentation /> },
    { title: "Skills & Interest", src: <BrainCircuit /> },
    { title: "Education", src: <GraduationCap /> },
    { title: "Social Links", src: <Medal /> },
    { title: "Achievement", src: <Medal /> },
  ];

  return (
    <div className=" w-screen h-full min-h-fit bg-gradient-to-r from-slate-50 to-blue-50">
      <Header session={session} />

      <div className="">
        <SideNav
          sections={sections}
          activeIndex={activeIndex}
          setactiveIndex={setactiveIndex}
        />
      </div>
      {showUsernameModal && (
        <UsernameChecker
          toggleModal={toggleModal}
          session={session}
          setUsername={setUsername}
        />
      )}

      <div className="w-screen h-full justify-center flex bg-gradient-to-r from-slate-50 to-blue-50 z-30 items-center    ">
        <div className=" items-center mt-4 mx-auto bg-white rounded-xl border border-white shadow-lg shadow-slate=400  md:max-w-4xl w-full p-8 md:p-0  md:mt-12 ">
          {showUsernameModal && (
            <UsernameChecker
              toggleModal={toggleModal}
              session={session}
              setUsername={setUsername}
            />
          )}{" "}
          {renderForm()}
        </div>
      </div>
    </div>
  );
}

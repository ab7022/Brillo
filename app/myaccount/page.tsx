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
 import SocialProfiles from '@/components/myaccount/SocialProfiles'
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
        router.push("/auth/signin?callbackUrl=" + encodeURIComponent(window.location.href));
      }, 10000);
    }
  }, [status, router]);

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
            const fetchedUsername = response.data.username;

            if (!fetchedUsername) {
              // If fetchedUsername is null or undefined
              setShowUsernameModal(true);
            } else {
              // If username is fetched successfully
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

  const suggestion = [
    {
      id: 0,
      desc: "Avoid college or work Email",
    },
    {
      id: 1,
      desc: "Avoid adding any club volunteer role here",
    },
    {
      id: 2,
      desc: "Add at least 2 best projects",
    },
    {
      id: 3,
      desc: "Write according to job role",
    },
    {
      id: 4,
      desc: "Avoid 10th and 12th details",
    },
    {
      id: 5,
      desc: "Your social profiles",
    },
    {
      id: 6,
      desc: "Your proud things",
    },
  ];

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
    <div className=" w-screen h-full min-h-fit">
      <Header session={session} />

      <div className="mr-48">
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

      <div className="w-full h-full min-h-screen justify-center flex bg-gradient-to-r from-slate-50 to-blue-50 z-30 items-center  relative  ">
        <div className="bg-white items-center mt-28 p-2 rounded-xl border border-white shadow-lg shadow-slate=400  md:max-w-full max-w-xs ml-12 md:mt-28 ">
          <h1 className="font-semibold mt-6 md:mt-0 text-3xl text-center flex gap-2 items-center ml-3">
            {sections[activeIndex].title}
            <div className="group relative inline-block whitespace-nowrap">
              <span className="flex size-6 cursor-pointer items-center justify-center rounded-full bg-primary text-sm font-semibold text-blue-600 bg-gray-100">
                i
              </span>

              <span
                role="tooltip"
                className="pointer-events-none absolute z-50 inline-flex items-center justify-center rounded-md px-3 py-1 font-semibold opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 bg-primary text-gray-600 min-h-7 text-sm left-1/2 -translate-x-1/2 after:absolute after:block after:size-0 after:border-8 after:border-transparent after:border-t-primary after:-bottom-[0.95rem] after:left-1/2 after:-translate-x-1/2 top-[-2.5rem]"
              >
                {suggestion[activeIndex].desc}
              </span>
            </div>
          </h1>
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

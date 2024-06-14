"use client";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { IoDocumentTextSharp } from "react-icons/io5";

import Link from "next/link";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";
import { TextGenerateEffectDemo } from "./GeneratedText";
import Image from "next/image";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";

interface HeroSectionProps {
  basicInfo: any[];
  socialProfiles: any[];
}

function HeroSection({ basicInfo, socialProfiles }: HeroSectionProps) {
  const handleRoute = (url: string) => {
    window.open(url, "_blank");
  };

  const firstName = basicInfo?.[0]?.first_name || "";
  const lastName = basicInfo?.[0]?.last_name || "";
  const introduction = basicInfo?.[0]?.intro || "";
  const resume = basicInfo?.[0]?.resume || "";

  const designation = basicInfo?.[0]?.designation || "";
  const twitter = socialProfiles?.[0]?.twitter || "";
  const linkedin = socialProfiles?.[0]?.linkedin || "";
  const github = socialProfiles?.[0]?.github || "";
  const email = socialProfiles?.[0]?.email || "";
  const buttonsData = [
    {
      id: 1,
      label: "GitHub",
      icon: FaGithub,
      url: github,
    },
    {
      id: 2,
      label: "LinkedIn",
      icon: FaLinkedin,
      url: linkedin,
    },
    {
      id: 3,
      label: "Twitter",
      icon: FaTwitter,
      url: twitter,
    },
    {
      id: 4,
      label: "Resume",
      icon: IoDocumentTextSharp,
      url: resume,
    },
    {
      id: 5,
      label: "Email",
      icon: TfiEmail,
      url: `mailto:${email}`,
    },
  ];
  const filteredButtonsData = buttonsData.filter((item) => item.url);

  const words = [
    {
      text: "Hi,",
    },
    {
      text: "I",
    },
    {
      text: "am",
    },
    {
      text: "a",
    },
    {
      text: designation,
      className: "text-blue-500 dark:text-[#9c4ff0]",
    },
  ];

  return (
    <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0 ">
      <Spotlight className="top-40 left-0 md:left-60 md:-top-20" fill="white" />
      <div className="flex items-center">
        <div className="px-4 py-4 md:px-4 relative z-10 w-full text-center lg:text-start">
          <h1 className="mt-20 md:mt-0 text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            {firstName || ""} {lastName || ""}
          </h1>

          <span className="flex justify-center lg:justify-start">
            <TextGenerateEffectDemo introduction={introduction} />
          </span>

          <TypewriterEffectSmooth className="inline-flex" words={words} />

          <div className="mt-6 flex items-center flex-wrap justify-center">
            {filteredButtonsData.map((item) => (
              <span className="mr-2 my-2" key={item.id}>
                <Button
                  onClick={() => handleRoute(item.url)}
                  borderRadius="1.75rem"
                  className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
                >
                  {item.label}
                  <span className="ml-2">
                    <item.icon size={20} />
                  </span>
                </Button>
              </span>
            ))}
          </div>
        </div>

        <Image
          // onMouseMove={handleMouseMove}
          height={500}
          width={500}
          loading="lazy"
          src={
            "https://raw.githubusercontent.com/mishraanaman/Portfolio/master/src/Assets/about.png"
          }
          alt={"item.name"}
          //     className="object-cover !m-0 !p-0 object-top rounded-full h-14 w-14 border-2 group-hover:scale-105 group-hover:z-30 border-white  relative transition duration-500"
          className="object-cover max-w-xl hidden lg:block"
        />
      </div>
    </div>
  );
}

export default HeroSection;

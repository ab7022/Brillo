import React from "react";
import Section from "./Section";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = ({ socialProfiles, basicInfo }) => {
  const twitter = socialProfiles?.[0]?.twitter || "";
  const linkedin = socialProfiles?.[0]?.linkedin || "";
  const github = socialProfiles?.[0]?.github || "";
  const email = socialProfiles?.[0]?.email || "";
  const firstName = basicInfo?.[0]?.first_name || "";
  const lastName = basicInfo?.[0]?.last_name || "";

  const socials = [
    {
      id: "0",
      title: "Twitter",
      icon: FaTwitter,
      url: twitter,
    },
    {
      id: "1",
      title: "LinkedIn",
      icon: FaLinkedin,
      url: linkedin,
    },
    {
      id: "2",
      title: "Github",
      icon: FaGithub,
      url: github,
    },
  ];

  return (
    <Section crosses className={`!px-0 !py-10`}>
      <div className=" bg-transparent flex mx-auto sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
        <p className="caption text-n-4 lg:block mx-auto">
          {firstName} {lastName}
        </p>
        <ul className="flex gap-5 flex-wrap mx-auto">
          {socials.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6"
            >
              <item.icon className="w-4 h-4 text-white" />
            </a>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default Footer;

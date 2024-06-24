import React from "react";
import Neeli from "../assets/images/neeli-logo.png";
import Bmun from "../assets/images/bmun-logo.png";
import Niv from "../assets/images/nivetti-logo.webp";
import Msr from "../assets/images/msruas-logo.png";
import Image from "next/image";

function Experience() {
  const works = [
    {
      title: "SDE",
      company: "Nivetti",
      duration: "2024",
      logo: Niv,
    },
    {
      title: "SDE Intern",
      company: "Neelitech",
      duration: "2022/23",
      logo: Neeli,
    },
    {
      title: "Head of IT",
      company: "BMUN",
      duration: "2019",
      logo: Bmun,
    },
    {
      title: "Summer Intern",
      company: "MSRUAS",
      duration: "2018",
      logo: Msr,
    },
  ];
  return (
    <div className="container relative mx-auto flex h-[100vh] w-[100vw] flex-col justify-center bg-[#e9e9e9] dark:bg-[#09090b]  text-black dark:text-white">
      <div className="flex items-center justify-center w-full" style={{}}>
        <div className="flex flex-col w-full">
          <h1
            className="my-12 title"
            style={{
              fontFamily: "tth",
              fontSize: "6vw",
              letterSpacing: "-3px",
            }}>
            Experience
          </h1>
          {works.map((work, index) => (
            <React.Fragment key={index}>
              <div className="flex items-center justify-between w-full my-8">
                <div className="flex items-center ">
                  <Image
                    src={work.logo}
                    className="inline rounded me-6 experience-logo"
                    style={{ height: "64px", width: "64px" }}
                    alt={work.company}
                  />
                  <h1 className="experience-text" style={{ fontFamily: "PolySans", fontSize: "1.5vw", textAlign: "start" }}>
                    {work.company} - {work.title}
                  </h1>
                </div>
                <div>
                  <h1 className="experience-text"
                    style={{
                      fontFamily: "PolySans",
                      fontSize: "1.5vw",
                      color: "gray",
                      textAlign: "end",
                    }}>
                    {work.duration}
                  </h1>
                </div>
              </div>
              {index < works.length - 1 && (
                <hr style={{ borderTop: "1px solid rgb(35, 38, 39)" }} />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;

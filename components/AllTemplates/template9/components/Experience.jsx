import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/AllTemplates/template8/components/ui/avatar";

function Experience({experience}) {

  return (
    <div className="container relative mx-auto flex h-[100vh] w-[100vw] flex-col justify-center bg-[#e9e9e9] dark:bg-[#09090b]  text-black dark:text-white">
      <div className="flex items-center justify-center w-full" style={{}}>
        <div className="flex flex-col w-full">
          {experience && (
            <>
             <p
            className="my-12 title"
            style={{
              fontFamily: "tth",
              fontSize: "6vw",
              letterSpacing: "-3px",
            }}>
            Experience
          </p>
          {experience.map((work, index) => (
            <React.Fragment key={index}>
              <div className="flex items-center justify-between w-full my-8">
                <div className="flex items-center ">
                <Avatar className="size-10 border bg-gray-300 mr-4">
                  <AvatarImage alt={""} src={""} />
                  <AvatarFallback>
                    {work.company_name?.charAt(0)?.toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                  <h1 className="experience-text" style={{ fontFamily: "PolySans", fontSize: "1.5vw", textAlign: "start" }}>
                    {work.company_name} - {work.designation}
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
              <div className=" ml-12 mb-4">
                 <li>{work.description1}</li>
              <li>{work.description2}</li>

              <li>{work.description3}</li>
              </div>
             

              {index < experience.length - 1 && (
                <hr style={{ borderTop: "1px solid rgb(35, 38, 39)" }} />
              )}
            </React.Fragment>
          ))}
            </>
          )}
         
        </div>
      </div>
    </div>
  );
}

export default Experience;

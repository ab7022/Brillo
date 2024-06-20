// eslint-disable-next-line no-unused-vars
import React from "react";
import "./FirstAbout.scss";
import "../SubAbout/QueryFirst.scss";
import Typing from "../../../Components/TypingAnimation/TypingName";
export default function FirstAbout({basicInfo,socialProfiles}) {
  const firstName = basicInfo?.[0]?.first_name || "";
  const resume = basicInfo?.[0]?.resume || "";
  const intro = basicInfo?.[0]?.intro || "";

  const lastName = basicInfo?.[0]?.last_name || "";
  const designation = basicInfo?.[0]?.designation || "";
  const twitter = socialProfiles?.[0]?.twitter || "";
  const linkedin = socialProfiles?.[0]?.linkedin || "";
  const github = socialProfiles?.[0]?.github || "";
  const email = socialProfiles?.[0]?.email || "";
  return (
    <div className="AboutPage-Main mb-24">
      <div className="sub-AboutPage-Main">
        <h1 className="text-6xl mb-6">
          {firstName} {lastName}
        </h1>
        <h3 className="mb-24">{designation}</h3>
       
        <div className="socialLinks-About ">
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-6 w-6"
                aria-hidden="true"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
              </svg>
            </span>
          </a>
          <a
            href={linkedin}
            target="_blank"
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="h-6 w-6"
                aria-hidden="true"
              >
                <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
              </svg>
            </span>
          </a>
         
          <a href={twitter} target="_blank">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1200 1227"
                fill="none"
                class="h-5 w-5"
                aria-hidden="true"
              >
                <path
                  d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z"
                  fill="currentColor"
                ></path>
              </svg>
            </span>
          </a>
          <a href={`mailto:${email}`}>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-mail"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </span>
          </a>
          <a href={resume}>
            <span>
              <svg
                fill="#ffffff"
                version="1.1"
                id="Layer_1"
                viewBox="0 0 20 20"
                enable-background="new 0 0 20 20"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path d="M19,19H1c-0.6,0-1-0.4-1-1v-5h2v4h16v-4h2v5C20,18.6,19.6,19,19,19z"></path>{" "}
                  <path d="M15.7,7.3c-0.4-0.4-1-0.4-1.4,0L11,10.6V2c0-0.6-0.4-1-1-1S9,1.4,9,2v8.6L5.7,7.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l5,5 c0.4,0.4,1,0.4,1.4,0l5-5C16.1,8.3,16.1,7.7,15.7,7.3z"></path>{" "}
                </g>
              </svg>
            </span>
          </a>
        </div>
      </div>
      <div className="sub-AboutPage-Main">
        <h1 className="text-5xl font-semibold mb-6">About Me</h1>
        <h4 className="text-lg ">
          {intro}
        </h4>
        
      </div>
    </div>
  );
}

/* eslint-disable no-unused-vars */
import React from "react";
import "./introduction.scss";
import "./queryIntroduction.scss";
import CVdownload from "../../../Components/Buttons/CVdownload";

import Image from "next/image";
export default function Introduction({ basicInfo }) {
  const profile = basicInfo?.[0]?.profile || "";
  const intro = basicInfo?.[0]?.intro || "";
  const shortIntro = basicInfo?.[0]?.shortintro || "";
  const firstName = basicInfo?.[0]?.first_name || "";
  const lastName = basicInfo?.[0]?.last_name || "";
  const resume = basicInfo?[0]?.resume || "";

  return (
    <div className="IntroductionMain flex flex-row mt-36 justify-center items-center">
      <div className="AboutsubfromMain md:mt-48 md:ml-24 flex flex-row" id="subabout1">
        <Image
          src={profile}
          width={800}
          height={400}
          alt=""
          className="rounded-full w-full "
        />
      </div>
      <div className="AboutsubfromMain  " id="subabout2">
        <h2 className="text-white text-xl"> ⚡ About Me</h2>
        <p>
          Hey there! I&apos;m{" "}
          <a href="#">
            {firstName}
            {lastName}
          </a>
          ,
        </p>
        <p>{intro}</p>
        {resume && <CVdownload resume={resume} />}
      </div>
    </div>
  );
}

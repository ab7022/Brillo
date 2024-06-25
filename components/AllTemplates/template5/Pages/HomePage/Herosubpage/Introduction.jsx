/* eslint-disable no-unused-vars */
import React from "react";
import "../Herosubpage/introduction.scss";
import "../Herosubpage/queryIntroduction.scss";
import CVdownload from "../../../Components/Buttons/CVdownload";

import Image from "next/image";
export default function Introduction({ basicInfo }) {
  const profile = basicInfo?.[0]?.profile || "";
  const intro = basicInfo?.[0]?.intro || "";
  const shortIntro = basicInfo?.[0]?.shortintro || "";
  const firstName = basicInfo[0].first_name;
  const lastName = basicInfo[0].last_name;
  const resume = basicInfo[0].resume;

  return (
    <div className="IntroductionMain ">
      <div className="AboutsubfromMain mt-24 ml-24 " id="subabout1">
        <Image
          src={profile}
          width={800}
          height={400}
          alt=""
          className="rounded-full w-full ml-20"
        />
      </div>
      <div className="AboutsubfromMain mx-20" id="subabout2">
        <h2 className="about"> ⚡ About Me</h2>
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

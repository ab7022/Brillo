/* eslint-disable no-unused-vars */
import React from "react";
import "./introduction.scss";
import "./queryIntroduction.scss";
import AboutImg from "../../../assets/Images/Images/Developer activity-bro.png";
import CVdownload from '../../../Components/Buttons/CVdownload'
export default function Introduction({basicInfo}) {
  const intro = basicInfo?.[0]?.intro || "";
  const email = basicInfo?.[0]?.email || "";
  const resume = basicInfo?.[0]?.resume || "";

  return (
    <div className="IntroductionMain">
      <div className="AboutsubfromMain" id="subabout1">
        <img src={AboutImg} alt="" />
      </div>
      <div className="AboutsubfromMain" id="subabout2">
        <h2 className="about"> ⚡ About Me</h2>
        <p>
         {intro}
        </p>
        <CVdownload resume={resume}/>
      </div>
    </div>
  );
}

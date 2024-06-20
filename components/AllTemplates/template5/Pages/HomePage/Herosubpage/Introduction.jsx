/* eslint-disable no-unused-vars */
import React from "react";
import "./introduction.scss";
import "./queryIntroduction.scss";
import AboutImg from "../../../assets/Images/Images/Developer activity-bro.png";
import CVdownload from '../../../Components/Buttons/CVdownload'
export default function Introduction() {
  return (
    <div className="IntroductionMain">
      <div className="AboutsubfromMain" id="subabout1">
        <img src={AboutImg} alt="" />
      </div>
      <div className="AboutsubfromMain" id="subabout2">
        <h2 className="about"> ⚡ About Me</h2>
        <p>
          Hey there! I&apos;m <a href="#">Saif Ur Rehman</a>, and I&apos;ve been fascinated by computers
          since I was young.</p>
          <p> Now, I&apos;m a third-year BSc Computer Science student
          at <a href="https://gcuf.edu.pk/" target="-blank">GC University</a>, Faisalabad, I&apos;m diving deep into the world of
          technology. With a year of experience in web development, especially
          with the{" "}
          <a
            href="https://www.coursera.org/articles/mern-stack"
            target="-blank"
          >
            MERN stack
          </a>
          , I&apos;m passionate about crafting impactful digital solutions. My drive
          pushes me to make meaningful contributions to the field, constantly
          refining my skills along the way.</p> <p>When i am not   coding, you&apos;ll find me gaming
          with friends, binge-watching a <a href="https://www.netflix.com/pk/" target="-blank">Netflix</a>  shows, or shooting hoops on the
          basketball🏀 court when the weather&apos;s nice. Let&apos;s join forces to shape a
          brighter future in technology together! 🚀
        </p>
        <CVdownload/>
      </div>
    </div>
  );
}

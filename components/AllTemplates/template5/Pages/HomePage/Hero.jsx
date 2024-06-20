import React from "react";
import Intro from "./Herosubpage/Intro";
import Introduction from "./Herosubpage/Introduction";
import Projecthomesub from "./Herosubpage/Projecthomesub";
import KeepTouch from "./Herosubpage/KeepTouch";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
export default function Hero({socialProfiles,basicInfo}) {
  return (
    <div className="Hero-Div">
      <Header basicInfo={basicInfo} socialProfiles={socialProfiles}/>
      {/* <Intro basicInfo={basicInfo} socialProfiles={socialProfiles}/>
      <Introduction basicInfo={basicInfo}/>
      <Projecthomesub /> */}
      {/* <KeepTouch /> */}
      {/* <Footer /> */}
    </div>
  );
}

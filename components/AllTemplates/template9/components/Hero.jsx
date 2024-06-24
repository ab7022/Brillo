import React from "react";
import { RxArrowTopRight } from "react-icons/rx";
import Switcher from "./Switcher";

function Hero() {
  return (
    <div className="container relative mx-auto flex  h-[100vh] flex-col py-12 bg-[#e9e9e9] dark:bg-[#09090b]  text-black dark:text-white ">
      <div className="flex items-center justify-between w-full">
        <Switcher />
        <div className="flex items-center say-hello">
          <a
            className="underline hero-sub underline-offset-4"
            href="mailto:vedantshah2001@gmail.com"
            style={{
              fontFamily: "SuisseIntl",
              fontSize: "1.5vw",
              textDecorationThickness: "1px",
              textDecorationColor: "#767068",
            }}>
            Say, hello!
          </a>
          <RxArrowTopRight className="hero-sub mx-2 text-[1.5vw]" />
        </div>
      </div>
      <div
        className="flex flex-col items-start justify-center "
        style={{ lineHeight: "12vw", flexGrow: "1" }}>
        <h1
          className="hero text-[#fe7c7b] dark:text-[#ffcaca] overflow-hidden"
          style={{ fontFamily: "SuisseIntl", fontSize: "13vw", letterSpacing: '-3px' }}>
          I'm Vedant
        </h1>
        <h1
          className="hero text-[#fe7c7b] dark:text-[#ffcaca] overflow-hidden"
          style={{ fontFamily: "SuisseIntl", fontSize: "13vw" }}>
          Portfolio/24
        </h1>
      </div>
      <div className="z-10 flex w-full sub-wrapper h-1/4">
        <div className="flex flex-col justify-start w-1/2">
          <h1
            className="hero-sub"
            style={{ fontFamily: "SuisseIntl", fontSize: "3vw" }}>
            Based out of Blr, India
          </h1>
          <p
            className="hero-sub-1"
            style={{ fontFamily: "SuisseIntl", fontSize: "2vw" }}>
            LAST UPDATE ◆ 2024
          </p>
        </div>
        <div
          className="flex flex-col justify-start w-1/2 text-end hero-sub-wrapper"
          style={{ lineHeight: "4vw" }}>
          <h1
            className="hero-sub"
            style={{ fontFamily: "SuisseIntl", fontSize: "3vw", letterSpacing: '-1px' }}>
            — Indie Developer, Helping Brands Create Something EPIC!
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Hero;

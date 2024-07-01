import React from "react";
import { RxArrowTopRight } from "react-icons/rx";
import Switcher from "./Switcher";

function Hero({basicInfo,email}) {
  const firstName = basicInfo?.[0]?.first_name || "";
  const lastName = basicInfo?.[0]?.last_name || "";
  const city = basicInfo?.[0]?.city || "";
  const country = basicInfo?.[0]?.country || "";
  const designation = basicInfo?.[0]?.designation || "";

  const profile = basicInfo?.[0]?.profile || "";
  const shortIntro = basicInfo?.[0]?.shortintro || "";
  const intro = basicInfo?.[0]?.intro || "";
  return (
    <div className=" relative md:mx-20 m-4 flex  h-[100vh] flex-col py-12 bg-[#e9e9e9] dark:bg-[#09090b]  text-black dark:text-white ">
      <div className="flex items-center justify-between w-full">
        <Switcher />
        {email && (
           <div className="flex items-center say-hello">
          <a
            className="underline hero-sub underline-offset-4"
            href={`mailto:${email}`}
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
        )}
       
      </div>
      <div
        className="flex flex-col items-start justify-center "
        style={{ lineHeight: "12vw", flexGrow: "1" }}>
        <h1
          className="hero text-[#fe7c7b] dark:text-[#ffcaca] overflow-hidden"
          style={{ fontFamily: "SuisseIntl", fontSize: "13vw", letterSpacing: '-3px' }}>
          I'm {firstName} 
        </h1>
        <h1
          className="hero text-[#fe7c7b] dark:text-[#ffcaca] overflow-hidden"
          style={{ fontFamily: "SuisseIntl", fontSize: "13vw" }}>
          {lastName}
        </h1>
      </div>
      <div className="z-10 flex w-full sub-wrapper h-1/4">
        <div className="flex flex-col justify-start w-1/2">
          {city&& (
             <h1
            className="hero-sub"
            style={{ fontFamily: "SuisseIntl", fontSize: "3vw" }}>
            Based out of {city},{country}
          </h1>
          )}
         
          {designation&&(
             <p
            className="hero-sub-1"
            style={{ fontFamily: "SuisseIntl", fontSize: "2vw" }}>
            ◆{" "}{designation}
          </p>
          )}
         
        </div>
        <div
          className="flex flex-col justify-start w-1/2 text-end hero-sub-wrapper"
          style={{ lineHeight: "4vw" }}>
            {shortIntro&&(
              <h1
            className="hero-sub"
            style={{ fontFamily: "SuisseIntl", fontSize: "3vw", letterSpacing: '-1px' }}>
            — {shortIntro}
          </h1>
            )}
        </div>
      </div>
    </div>
  );
}

export default Hero;

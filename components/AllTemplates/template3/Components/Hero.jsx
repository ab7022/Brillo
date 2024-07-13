import React, { useRef } from "react";
import Section from "./Section";
import {
  curve,
  heroBackground,
  working,
} from "@/components/AllTemplates/template3/assets";
import Button from "./Button";
import { BackgroundCircles, BottomLine } from "../design/Hero";
import { heroIcons } from "../constants/index";
import { ScrollParallax } from "react-just-parallax";
import Creating from "./Creating";
import Notification from "./Notification";
import ClientsLogos from "./ClientsLogos";
import Image from "next/image";

export const Gradient = () => {
  return (
    <>
      <div className="relative z-1 h-6 mx-2.5 bg-n-11 shadow-xl rounded-b-[1.25rem] lg:h-6 lg:mx-8" />
      <div className="relative z-1 h-6 mx-6 bg-n-11/70 shadow-xl rounded-b-[1.25rem] lg:h-6 lg:mx-20" />
    </>
  );
};

const Rings = () => {
  return (
    <>
      <div className="absolute top-1/2 left-1/2 w-[65.875rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute top-1/2 left-1/2 w-[51.375rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute top-1/2 left-1/2 w-[36.125rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute top-1/2 left-1/2 w-[23.125rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
    </>
  );
};

const Hero = ({ basicInfo,socialProfiles }) => {
  const firstName = basicInfo?.[0]?.first_name || "";
  const lastName = basicInfo?.[0]?.last_name || "";
  const designation = basicInfo?.[0]?.designation || "";
  const email = socialProfiles?.[0]?.email || "";
  const ParallaxRef = useRef(null);
  return (
    <Section
      className={`pt-[12rem]  -mt-[5rem] `}
      crosses
      crossesOffset="lg:translate-y-[5.25rem] "
      customPadding
      id={"hero"}
    >
      <BackgroundCircles />

      <div className=" text-textWhite  " ref={ParallaxRef}>
        <div className="relative max-w-[62rem] mx-auto text-center mb-[4rem]">
          {firstName.length > 0 && lastName.length > 0 && (
            <h1 className="h1 mb-6">
              Welcome to My World! I'm
              <span className=" inline-block relative bg-gradient-to-r from-blue-900 via-purple-700 to-cyan-400 bg-clip-text text-transparent">
                {firstName} {lastName}
                <Image
                  src={curve}
                  className="absolutet top-full left-0  xl:-mt-2 "
                  width={624}
                  height={28}
                  alt="curve"
                />
              </span>
            </h1>
          )}
          {designation.length > 0 && (
            <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8  ">
              Elevate your online presence and redefine user experiences with
              cutting-edge solutions with me. Hey! I am a {designation}
            </p>
          )}
          <Button href={`mailto:${email}`} color={"white"}>
            Contact Me
          </Button>
        </div>
        <div className="relative max-w-[100rem] mx-auto lg:max-w-6xl xl:mb-24 ">
          <div className="relative z-1 p-0.5 rounded-2xl bg-radial-gradient(var(--tw-gradient-stops)) ">
            <div className="relative bg-n-8 rounded-[1rem] ">
              <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem] " />
              <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490] ">
                <Image
                  src={working}
                  alt="Me"
                  className=" w-full  h-[100%] object-cover scale-[1.2] mx-auto "
                  width={1024}
                  height={490}
                />

                <Creating
                  className={
                    "absolute left-4 right-4 bottom-5 md:left-1/2 md:right-auto md:bottom-3 md:w-[31rem] md:-translate-x-1/2 "
                  }
                />

                <ScrollParallax isAbsolutelyPositioned>
                  <ul className=" hidden absolute -left-[5.5rem] bottom-[7.5rem] px-1 py-1 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl xl:flex ">
                    {heroIcons.map((icon, index) => (
                      <li className="p-5" key={index}>
                        <Image src={icon} alt="" width={24} height={25} />
                      </li>
                    ))}{" "}
                  </ul>
                </ScrollParallax>

                <ScrollParallax isAbsolutelyPositioned>
                  <Notification
                    className="hidden absolute -right-[5.5rem] bottom-[20rem] w-[18rem] xl:flex"
                    title={designation}
                  />
                </ScrollParallax>
              </div>
            </div>
            <Gradient />
          </div>
          <div className="absolute -top-[40%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[80%] -z-1 ">
            <Image
              src={heroBackground}
              alt="Hero"
              className="w-screen h-screen"
              width={1440}
              height={1800}
            />
          </div>
          <BackgroundCircles />

          <ClientsLogos className="hidden relative z-10 mt-20 lg:block " />
        </div>
      </div>
      <BottomLine />
    </Section>
  );
};

export default Hero;

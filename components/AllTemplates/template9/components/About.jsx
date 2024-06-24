import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Pfp from "../assets/images/pfpe_upscaled.webp";
import SplitType from "split-type"; // Ensure SplitType is correctly imported
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

function About() {
  useEffect(() => {
    const splitTypes = document.querySelectorAll(".animate-text");

    splitTypes.forEach((word) => {
      const text = new SplitType(word, { types: "words" });
      gsap.from(text.words, {
        scrollTrigger: {
          trigger: word,
          start: "top 70%",
          end: "top 20%",
          scrub: true,
        },
        opacity: 0.4,
        stagger: 1,
      });
    });

    const growTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".profile",
        start: "top 70%",
        end: "top 20%",
        scrub: true,
        ease: "power1.out",
      },
    });

    growTl.to(".profile", {
      scale: 0.9
    });

  }, []);
  return (
    <div className="about-main-wrapper container relative mx-auto  flex  h-[100vh] bg-[#e9e9e9] dark:bg-[#09090b]  text-black dark:text-white">
      <div className="flex flex-col items-center justify-center w-1/2 ">
        <Image
          src={Pfp}
          alt="vedant-profile"
          style={{ height: "80%", objectFit: 'contain', transform: 'scale(1)' }}
          className="profile rounded-xl"
        />
      </div>
      <div className="flex flex-col items-center justify-center w-1/2">
        <h1
          className="animate-text"
          style={{
            fontFamily: "PolySans",
            fontSize: "2.5vw",
            lineHeight: "3vw",
          }}>
          Hey there! I'm Vedant, a tech enthusiast who's exploring the latest
          web technologies. I have a strong appreciation for simplicity and I
          enjoy tackling problems from a holistic approach while also getting
          down to the nitty-gritty.
          <br />
          <span className="text-zinc-400">
            {" "}
            Beyond tech, I love diving into the world of sports, fueling my
            passion for competition and teamwork.
            <span className="dark:text-[#93ffcc] text-[#fe7c7b]">
              {" "}
              Let's connect and explore new horizons together!
            </span>
          </span>
        </h1>
      </div>
    </div>
  );
}

export default About;

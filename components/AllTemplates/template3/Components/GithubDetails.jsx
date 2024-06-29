import React, { useEffect, useRef } from "react";
import Section from "./Section";
import Heading from "./Heading";
import { GradientLight } from "../design/Benefits";
import ClipPath from "../assets/svg/ClipPath";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const GithubDetails = ({ experience }) => {
  const slideDivLeft = useRef(null);
  const slideDivRight = useRef(null);

  useEffect(() => {
    const el1 = slideDivLeft.current;
    const el2 = slideDivRight.current;
    gsap.fromTo(
      el1,
      { transform: `translateX(200%)`, opacity: `0` },
      {
        transform: `translateX(0)`,
        opacity: 1,
        duration: 2,
        ease: "back.inOut",
        scrollTrigger: {
          trigger: el1,
        },
      }
    );
    gsap.fromTo(
      el2,
      { transform: `translateX(-200%)`, opacity: `0` },
      {
        transform: `translateX(0)`,
        opacity: 1,
        duration: 2,
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: el2,
        },
      }
    );
  }, []);

  return (
    <Section id={"works"}>
      <div className=" relative z-2 ">
        <Heading
          className=" text-center max-w-md lg:max-w-2xl "
          title="Experiences"
        />
        <div className="flex flex-wrap gap-10 mb-10 justify-center ">
          {experience.map((item, index) => (
            <div
              ref={index % 2 === 0 ? slideDivLeft : slideDivRight}
              className="block relative p-0.5 bg-slate-950/10 border rounded-2xl border-gray-500 max-w-[24rem] shadow-sm shadow-purple-900"
              key={item.id}
            >
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none ">
                <h5 className="h5 font-bold mb-1 text-4xl">
                  {item.company_name}
                </h5>
                <div className="body-2 mb-2 text-sm text-n-3 flex justify-between">
                  <div>{item.designation}</div>
                  <div>{item.duration}</div>
                </div>
                {item.description1 && (
                  <li className="body-2 mb-2 text-n-3">{item.description1}</li>
                )}
                {item.description2 && (
                  <li className="body-2 mb-2 text-n-3">{item.description2}</li>
                )}{" "}
                {item.description3 && (
                  <li className="body-2 mb-2 text-n-3">{item.description3}</li>
                )}
              </div>
              <GradientLight />
              {/*<div
                className="absolute inset-0.5 bg-n-8 "
                style={{ clipPath: `url(#benefits)` }}
              >
                <div className=" absolute inset-0 opacity-0 transition-opacity hover:opacity-10 ">
                  {item.imageUrl && (
                    <Image
                      src={item.imageUrl}
                      width={380}
                      height={362}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </div> */}
              <ClipPath />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default GithubDetails;

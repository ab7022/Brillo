import React from "react";
import crums from "../assets/images/crums-mockup.webp";
import settle from "../assets/images/settleup-mockup.webp";
import projx from "../assets/images/projx-mockup.webp";
import wtn from "../assets/images/wtn-mockup.webp";
import { RxArrowTopRight } from "react-icons/rx";
import Image from "next/image";

function Work() {
  return (
    <div className="container relative mx-auto flex w-[100vw] flex-col items-center  justify-centerbg-[#e9e9e9] dark:bg-[#09090b]  text-black dark:text-white">
      <h1
        className="my-12 title"
        style={{
          fontFamily: "tth",
          fontSize: "6vw", letterSpacing: "-3px"
        }}>
        Selected Work
      </h1>

      <div className="grid w-full grid-cols-1 gap-10 sm:grid-cols-2">
        <a href="http://github.com/vedant-shah/crums" target="_blank">
          <div
            className="flex flex-col items-start cursor-pointer hover:scale-95"
            id="crums-container"
            style={{ transitionDuration: "0.1s" }}>
            <Image
              className="rounded-2xl hover:scale-95"
              style={{ transitionDuration: "0.1s" }}
              src={crums}
              alt="crums"
            />
            <div className="flex items-center justify-between w-full px-2 my-2">
              <h1 className="" style={{ fontFamily: "PolySans" }}>
                CRUMS, 2024
              </h1>
              <div id="crums-arrow">
                <div className="flex items-center">
                  <h1 className="inline" style={{ fontFamily: "PolySans" }}>
                    View
                  </h1>
                  <RxArrowTopRight className="mx-2 " />
                </div>
              </div>
            </div>
          </div>
        </a>
        <a href="http://github.com/vedant-shah/projx" target="_blank">
          <div
            id="projx-container"
            className="flex flex-col items-start cursor-pointer hover:scale-95"
            style={{ transitionDuration: "0.1s" }}>
            <Image
              className="rounded-2xl hover:scale-95"
              style={{ transitionDuration: "0.1s" }}
              src={projx}
              alt="projx"
            />
            <div className="flex items-center justify-between w-full px-2 my-2">
              <h1 className="" style={{ fontFamily: "PolySans" }}>
                ProjX, 2023
              </h1>
              <div id="projx-arrow">
                <div className="flex items-center">
                  <h1 className="inline" style={{ fontFamily: "PolySans" }}>
                    View
                  </h1>
                  <RxArrowTopRight className="mx-2 " />
                </div>
              </div>
            </div>
          </div>
        </a>
        <a href="http://github.com/vedant-shah/settleup" target="_blank">
          <div
            id="set-container"
            className="flex flex-col items-start cursor-pointer hover:scale-95"
            style={{ transitionDuration: "0.1s" }}>
            <Image
              className="rounded-2xl "
              style={{}}
              src={settle}
              alt="settleUp"
            />
            <div className="flex items-center justify-between w-full px-2 my-2">
              <h1 className="" style={{ fontFamily: "PolySans" }}>
                SettleUp, 2023
              </h1>
              <div id="set-arrow">
                <div className="flex items-center">
                  <h1 className="inline" style={{ fontFamily: "PolySans" }}>
                    View
                  </h1>
                  <RxArrowTopRight className="mx-2 " />
                </div>
              </div>
            </div>
          </div>
        </a>
        <a href="http://github.com/vedant-shah/watch-this-next" target="_blank">
          <div
            id="wtn-container"
            className="flex flex-col items-start cursor-pointer hover:scale-95"
            style={{ transitionDuration: "0.1s" }}>
            <Image
              className="rounded-2xl hover:scale-95"
              style={{ transitionDuration: "0.1s" }}
              src={wtn}
              alt="watch-this-next"
            />
            <div className="flex items-center justify-between w-full px-2 my-2">
              <h1 className="" style={{ fontFamily: "PolySans" }}>
                Watch This Next, 2022
              </h1>
              <div id="wtn-arrow">
                <div className="flex items-center">
                  <h1 className="inline" style={{ fontFamily: "PolySans" }}>
                    View
                  </h1>
                  <RxArrowTopRight className="mx-2 " />
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Work;

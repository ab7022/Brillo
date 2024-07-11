"use client"
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import React, { useContext, useEffect, useRef, useState } from "react";
import Rezume from "@/components/Resume";
import { ResumeData } from "@/components/context/ResumeData";

export default function Reflect() {
    const [width, setWidth] = useState(0);
    const { resume }:any = useContext(ResumeData);
  
    const downloadRef = React.createRef();
  
    useEffect(() => {
      setWidth(window.innerWidth);
  
      const handleResize = () => setWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
  
      // Clean up event listener on component unmount
      return () => window.removeEventListener("resize", handleResize);
    }, []);
  
    useEffect(() => {
      (downloadRef.current as HTMLAnchorElement | null)?.click();
    }, [width]);
  if (width < 768) {
    return (
      <PDFDownloadLink
        document={React.createElement(Rezume, { resume })}
        fileName="Resume.pdf"
        ref={downloadRef}
      >
        <div className="flex flex-col justify-center items-center w-screen mx-auto my-9 h-screen md:p-3 px-[20px]">
          <div>
            <img src="/assets/success.gif" width={500} height={700} alt="gif" />
          </div>
          <button
            className="bg-primary rounded  md:px-8 px-4 md:py-3 py-2 text-base font-semibold text-black transition hover:rotate-2 flex md:gap-2 gap-1 text-center  shadow items-center"
            type="submit"
          >
            Download Now
          </button>
        </div>
        {/* <div className="flex justify-center items-center">
          <div>

          </div>
          <button
            className="bg-primary rounded  md:px-8 px-4 md:py-3 py-2 text-base font-semibold text-[white] transition hover:rotate-2 flex md:gap-2 gap-1 text-center  shadow items-center"
            type="submit"
          >
            <p className="flex items-center justify-center">Download</p>
          </button>
        </div> */}
      </PDFDownloadLink>
    );
  } else {
    return (
      <PDFViewer className="w-screen h-screen">
        <Rezume resume={resume} />
      </PDFViewer>
    );
  }
}

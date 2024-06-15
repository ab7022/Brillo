import React from "react";
import { loading } from "../assets";
import Image from 'next/image';

const Creating = ({ className, title }) => {
  return (
    <div
      className={`flex items-center h-[3.5rem] px-6 bg-n-8/80 rounded-[1.5rem]  ${
        className || ""
      } text-base`}
    >
      <Image src={loading} alt="" className="w-5 h-5 mr-4" />
      {title ? title : "Crafting Seamless Experiences"}
    </div>
  );
};

export default Creating;

import React from "react";
import Tagline from "../design/Tagline";

const Heading = ({ className, title, tag }) => {
  return (
    <div
      className={`${className} max-w-[50rem] mx-auto mb-12 lg:mb-20 text-center `}
    >
      {tag && <Tagline className={"mb-4 md:justify-center"} >{tag}</Tagline>}
      {title && <h6 className="h2 text-white"> {title} </h6>}
    </div>
  );
};

export default Heading;

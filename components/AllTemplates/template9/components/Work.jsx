import React from "react";
import crums from "../assets/images/crums-mockup.webp";
import { RxArrowTopRight } from "react-icons/rx";
import Image from "next/image";

const ProjectCard = ({ id, title, img, deployed_url, alt,description }) => (
  <a href={deployed_url} target="_blank" rel="noopener noreferrer">
    <div
      className="flex flex-col items-start cursor-pointer transition-transform duration-100 hover:scale-95"
      id={`${id}-container`}
    >
      <Image
        className="rounded-2xl"
        src={img}
        alt={alt}
      />
      <div className="flex items-center justify-between w-full px-2 my-2">
        <h1 className="font-polysans">{title}</h1>
     

        <div id={`${id}-arrow`}>
          <div className="flex items-center">
            <h1 className="inline font-polysans">View</h1>
            <RxArrowTopRight className="mx-2" />
          </div>
        </div>
      </div>
      <h1 className="font-polysans">{description}</h1>
    </div>
  </a>
);

function Work({project}) {
  return (
    <div className="container relative mx-auto flex w-full flex-col items-center justify-center bg-[#e9e9e9] dark:bg-[#09090b] text-black dark:text-white">
      <h1 className="my-12 title font-tth text-6vw tracking-tighter">
        Selected Work
      </h1>
      <div className="grid w-full grid-cols-1 gap-10 sm:grid-cols-2">
        {project.map(project => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </div>
  );
}

export default Work;

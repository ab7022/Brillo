import React from "react";
import crums from "../assets/images/crums-mockup.webp";
import { RxArrowTopRight } from "react-icons/rx";
import Image from "next/image";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/AllTemplates/template8/components/ui/avatar";

const ProjectCard = ({ id, title, image, deployed_url, alt, description }) => {
  if (typeof window === "undefined") return null;

  return (
    <a href={deployed_url} target="_blank" rel="noopener noreferrer">
      <div
        className="flex flex-col items-start cursor-pointer transition-transform duration-100 hover:scale-95"
        id={`${id}-container`}
      >
        {image.length > 0 && (
          <Image
            className="rounded-2xl object-contain"
            src={image}
            alt={alt}
            width={600}
            height={500}
          />
        )}

        <div className="flex items-center justify-between w-full px-2 my-2">
          <p className="font-polysans">{title}</p>
          {deployed_url.length > 0 && (
            <>
              <div id={`${id}-arrow`}>
                <a className="flex items-center" href={deployed_url}>
                  <p className="inline font-polysans">View</p>
                  <RxArrowTopRight className="mx-2" />
                </a>
              </div>
            </>
          )}
        </div>
        <p className="font-polysans">{description}</p>
      </div>
    </a>
  );
};

function Work({ project }) {
  return (
    <>
      {(project?.[0]?.title || project?.[0]?.image) && (
        <div className="container relative mx-auto flex w-full flex-col items-center justify-center bg-[#e9e9e9] dark:bg-[#09090b] text-black dark:text-white">
          <h1
            className="my-12 title tracking-tighter dark:text-white"
            style={{
              fontFamily: "tth",
              fontSize: "5vw",
              letterSpacing: "-3px",
            }}
          >
            Selected Work
          </h1>
          <div className="grid w-full grid-cols-1 gap-10 sm:grid-cols-2">
            {project.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default Work;

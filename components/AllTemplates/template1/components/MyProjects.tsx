"use client";
import React from "react";
import { PinContainer } from "../components/ui/3d-pin";
import Image from "next/image";

export function MyProjects({project}) {
  return (
    <>
      <div className="text-center" id="project">
        <h2 className="mb-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
          Projects
        </h2>
        <p className="text-base absolute z-50 text-[#9e77c6] font-semibold tracking-wide uppercase">
          My Projects
        </p>
      </div>
      <div className="flex-col flex lg:flex-row">
        {project.map((data) => (
          <div
            className="h-[30rem] w-full flex items-center justify-center"
            key={data.id}
          >
            <PinContainer title={data.deployed_url} href={data.deployed_url}>
              <a href={data.deployed_url} target="_blank" rel="noreferrer">
                <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
                  <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                    {data.title}
                  </h3>
                  <div className="text-base !m-0 !p-0 font-normal">
                    <span className="text-slate-500 ">{data.description}</span>
                  </div>
                  {/* <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" /> */}
                  <div className="flex flex-1 w-full rounded-lg mt-4 h-24">
                    <Image
                      width={1000}
                      height={1000}
                      src={data.image}
                      alt="image"
                      className="object-cover rounded-sm"
                    />
                  </div>
                </div>
              </a>
            </PinContainer>
          </div>
        ))}
      </div>
    </>
  );
}

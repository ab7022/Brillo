"use client";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "./ui/tracing-beam";

export function WorkExperience({ experience }) {
  return (
    <div className="" id="about">
      <div className="text-center mb-10">
        <p className="text-base absolute z-50 text-white font-semibold tracking-wide uppercase">
          Organizations
        </p>
      </div>
      <TracingBeam className="px-12">
        <div className="max-w-2xl mx-auto antialiased pt-4 relative">
          {experience.map((data) => (
            <div key={`content-${data.id}`} className="mb-10">
              <h2 className="bg-black text-white font-bold rounded-full text-lg w-fit  py-1 mb-2">
                {data.company_name}
              </h2>
              <p className={twMerge("text-white", "text-lg mb-2 px-4")}>
                {data.designation}
              </p>
              <p className={twMerge("text-white", "text-sm mb-2 px-4")}>
                {data.duration}
              </p>
              <p className={twMerge("text-white", "text-sm mb-4 px-4")}>
                {data.location}
              </p>
              <div className="text-sm text-white prose prose-sm dark:prose-invert px-4">
                {data.description1 && <li>{data.description1}</li>}
              </div>
              <div className="text-sm text-white prose prose-sm dark:prose-invert px-4">
                {data.description2 && <li>{data.description2}</li>}{" "}
              </div>
              <div className="text-sm text-white prose prose-sm dark:prose-invert px-4">
                {data.description3 && <li>{data.description3}</li>}{" "}
              </div>
            </div>
          ))}
        </div>
      </TracingBeam>
    </div>
  );
}

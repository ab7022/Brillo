"use client";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "./ui/tracing-beam";

export function MyEducation({ education }) {
  return (
    <>
      {" "}
      {education?.[0]?.college && (
        <div className="h-full" id="about">
          <div className="text-center mb-10">
            <p className="text-base absolute z-50 text-white font-semibold tracking-wide uppercase">
              Education
            </p>
          </div>
          <TracingBeam className="px-12">
            <div className="max-w-2xl mx-auto antialiased pt-4 relative">
              {education.map((data) => (
                <div key={`content-${data.id}`} className="mb-10">
                  <h2 className="bg-black text-white font-bold rounded-full text-lg w-fit  py-1 mb-2">
                    {data.degree}
                  </h2>
                  <p className={twMerge("text-white", "text-lg mb-2 px-4")}>
                    {data.college}
                  </p>
                  <p className={twMerge("text-white", "text-sm mb-2 px-4")}>
                    {data.duration}
                  </p>
                  <p className={twMerge("text-white", "text-sm mb-4 px-4")}>
                    {data.location}
                  </p>
                </div>
              ))}
            </div>
          </TracingBeam>
        </div>
      )}
    </>
  );
}

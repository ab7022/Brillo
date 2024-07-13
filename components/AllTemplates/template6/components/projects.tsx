"use client";

import React from "react";
import SectionHeading from "./section-heading";
import Project from "./project";
import { useSectionInView } from "@/components/AllTemplates/template6/lib/hooks";

export default function Projects({ projects }) {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <>
      {(projects?.[0]?.title.length > 0 || projects?.[0]?.image.length > 0) && (
        <>
          <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
            <SectionHeading>My Projects</SectionHeading>
            <div>
              {projects &&
                projects.map((project, index) => (
                  <React.Fragment key={index}>
                    <Project {...project} />
                  </React.Fragment>
                ))}
            </div>
          </section>
        </>
      )}
    </>
  );
}

import Tagline from "../design/Tagline";
import Section from "./Section";
import Heading from "./Heading";
import grid from "@/components/AllTemplates/template3/assets/grid.png";
import { Gradient } from "../design/Roadmap";
import Link from "next/link";
import Image from "next/image";
const Projects = ({ projects }) => {
  return (
    <Section className="overflow-hidden" id="Projects">
      <div className="container bg-transparent md:pb-10">
        <Heading tag="See few of my cool Projects" title="Projects" />
        <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
          {projects.map((item, index) => {
            return (
              <div
                className={`md:flex even:md:translate-y-[7rem]  p-0.25 rounded-[2.5rem] bg-conic-gradient`}
                key={item.id}
              > 
                <div className="relative p-4 w-full bg-n-8 rounded-[2.4375rem] overflow-hidden xl:p-15 mb-0 mr-0">
                  <div className="absolute top-0 left-0 max-w-full">
                    <Image
                      className="w-full h-full"
                      src={grid}
                      width={550}
                      height={550}
                    />
                    <div className="h-[550px] w-full"> </div>
                  </div>
                  <div className="relative z-1 mb-8">
                    <div className="flex items-center justify-between max-w-[27rem] mb-8 md:mb-20">
                      <Tagline>
                        {item.deployed_url && (
                          <Link href={item.deployed_url || ""}>Live Link</Link>
                        )}
                      </Tagline>
                      <div className="flex items-center px-0 rounded text-n-8">
                        <Tagline>
                          {item.github_url && (
                            <Link href={item.github_url || ""}>
                              Source code
                            </Link>
                          )}
                        </Tagline>
                      </div>
                    </div>
                 
                    <div className=" mb-5 -my-10 md:mt-0 mt-8 ml-2">
                      <img
                        className="w-10/12"
                        src={item.image || ""}
                        width={400}
                        height={300}
                        alt={item.title}
                      />
                    </div>
                    <Link href="/">
                      <h4 className="h4 mb-4 border-b-2 border-n-10 w-fit">
                        {item.title}
                      </h4>
                    </Link>
                    <p className="body-2 text-n-4">{item.description}</p>
                  </div>
                  <Tagline>
                    {item.techstack && <p>{item.techstack} </p>}
                  </Tagline>
                </div>
              </div>
            );
          })}
          <Gradient />
        </div>
      </div>
    </Section>
  );
};
export default Projects;

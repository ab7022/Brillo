import React, { useContext } from "react";
import InputControl from "./InputControl";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useForm } from "react-hook-form";
import { ResumeData } from "../context/ResumeData";

const Skills = ({
  activeIndex,
  setactiveIndex,
}: {
  activeIndex: number;
  setactiveIndex: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const { updateSkills, resume }: any = useContext(ResumeData);
  const { register, handleSubmit } = useForm();

  const skillSubmit = (data: any) => {
    updateSkills(data);
    activeIndex === 5 ? setactiveIndex(0) : setactiveIndex(activeIndex + 1);
  };

  return (
    <form
      className="mt-2 mx-3"
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit(skillSubmit)}
    >
      {" "}
      <div className="text-gray-500 max-w-xl my-4">
        Please ensure that a comma is included after each skill. For example:
        communication, Team work.{" "}
      </div>
      <div className="flex md:gap-24 gap-1  md:flex-row flex-col">
        <InputControl
          label="Programming and Technical Skills          "
          placeholder="Python, Data Analysis"
          register={register("programming_technical_skills")}
          defaultValue={resume?.skills?.programming_technical_skills || ""}
        />

        <InputControl
          label="Language and Soft Skills"
          placeholder="English, French, Teamwork"
          register={register("language_soft_skills")}
          defaultValue={resume?.skills?.language_soft_skills || ""}
        />
      </div>
      <div className="flex md:gap-24 mt-1 gap-1  md:flex-row flex-col">
        <InputControl
          label="Software Proficiency          "
          placeholder="Adobe Photoshop, AutoCAD, Git"
          register={register("software_proficiency")}
          defaultValue={resume?.skills?.software_proficiency || ""}
        />
        <InputControl
          label="Interests and Other Skills          "
          placeholder="Reading, Traveling, Creative Writing,"
          register={register("interests_others_skills")}
          defaultValue={resume?.skills?.interests_others_skills || ""}
        />
      </div>
      <div className="flex md:gap-24 mt-1 gap-1  md:flex-row flex-col">
        <InputControl
          label="Business and Administrative Skills         "
          placeholder="Sales, Data service"
          register={register("business_administrative_skills")} 
          defaultValue={resume?.skills?.business_administrative_skills || ""}
        />
      
        </div>
      <div className="flex justify-between my-4">
        <div className="sm:flex flex-row justify-center items-center sm:gap-4">
          <button
            type="button"
            className="md:px-4 px-4 md:py-3 py-2 flex text-base items-center justify-center font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 transition hover:rotate-2 hover:bg-gray-100 hover:text-blue-700 "
            onClick={() => {
              setactiveIndex(activeIndex - 1);
            }}
          >
            <ChevronLeft width={27} height={25} />
            <p className="flex items-center justify-center">Prev</p>
          </button>
        </div>

        <div className=" sm:gap-4 flex justify-end ">
          <button
            className="text-white flex  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg  md:px-4 px-4 md:py-3 py-2 text-base transition hover:rotate-2"
            type="submit"
          >
            <p className="flex items-center justify-center">Next</p>
            <ChevronRight width={27} height={25} />
          </button>
        </div>
      </div>
    </form>
  );
};

export default Skills;

import React, { useContext } from "react";
import InputControl from "./InputControl";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useForm } from "react-hook-form";
import { ResumeData } from "../context/ResumeData";

const Skills = ({ activeIndex, setactiveIndex }: { activeIndex: number, setactiveIndex: React.Dispatch<React.SetStateAction<number>> }) => {
  const { updateSkills, resume }:any = useContext(ResumeData);
  const { register, handleSubmit } = useForm();

  const skillSubmit = (data:any) => {
    updateSkills(data);
    activeIndex === 5 ? setactiveIndex(0) : setactiveIndex(activeIndex + 1);
    console.log(data);
  };
  return (
    <form
      className="mt-2 mx-3"
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit(skillSubmit)}
    >
      <div className="flex md:gap-24 gap-1  md:flex-row flex-col">
        <InputControl
          label="Programming Languages"
          placeholder="Python, C++, Nodejs"
          register={register("programmimg_languages")}
          defaultValue={resume.skills.programmimg_languages}
        />

        <InputControl
          label="Languages"
          placeholder="English, French"
          register={register("languages")}
          defaultValue={resume.skills.languages}
        />
      </div>
      <div className="flex md:gap-24 mt-1 gap-1  md:flex-row flex-col">
        <InputControl
          label="Technical Skills"
          placeholder="Familiar Tools eg. Git"
          register={register("technical_skills")}
          defaultValue={resume.skills.technical_skills}
        />
        <InputControl
          label="Soft Skills"
          placeholder="Team work, Communication"
          register={register("soft_skills")}
          defaultValue={resume.skills.soft_skills}
        />
      </div>
      <div className="flex md:gap-24 mt-1 gap-1  md:flex-row flex-col">
        <InputControl
          label="Familiar Softwares"
          placeholder="MS Word, Power BI"
          register={register("familiar_softwares")}
          defaultValue={resume.skills.familiar_softwares}
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

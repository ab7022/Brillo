import React, { useContext } from "react";
import InputControl from "./InputControl";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useForm } from "react-hook-form";

const Skills = ({ activeIndex, setactiveIndex }) => {
  const { register, handleSubmit } = useForm();

  return (
    <form className="mt-2 mx-3" noValidate autoComplete="off">
      <div className="flex md:gap-24 gap-1  md:flex-row flex-col">
        <InputControl
          label="Programming Languages"
          placeholder="Python, C++,  Node.JS"
          register={register("frameworks")}
        />
        <InputControl
          label="Languages"
          placeholder="English , French"
          register={register("languages")}
        />
      </div>
      <div className="flex md:gap-24 mt-1 gap-1  md:flex-row flex-col">
        <InputControl
          label="Technical Skills"
          placeholder="Familiar Tools eg. Git"
        />
        <InputControl
          label="Soft Skills"
          placeholder="Team work , Communication"
          register={register("frameworks")}
        />
      </div>
      <div className="flex md:gap-24 gap-1  md:flex-row flex-col">
        <InputControl label="Familiar Softwares" placeholder=" eg. MS Word , Power Bi" />

 
      </div>
      {/* next button starts*/}
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
            type="button"
            className="text-white flex  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg  md:px-4 px-4 md:py-3 py-2 text-base transition hover:rotate-2"
            onClick={() => {
              setactiveIndex(activeIndex + 1);
            }}
          >
            <p className="flex items-center justify-center">Next</p>
            <ChevronRight width={27} height={25} />
          </button>
        </div>
      </div>

      {/* next button ends */}
    </form>
  );
};

export default Skills;

import React, { useContext } from "react";
import InputControl from "./InputControl";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ResumeData } from "../context/ResumeData";
import { useForm } from "react-hook-form";

const Acheivements = ({ activeIndex, setactiveIndex }) => {
  const { updateAcheivement, resume } = useContext(ResumeData);
  const { register, handleSubmit } = useForm();

  const AcheivementSubmit = (data) => {
    updateAcheivement(data);
    console.log(data);
  };
  return (
    <form
      className="mt-2 mx-3"
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit(AcheivementSubmit)}
    >
      <div className="flex md:gap-24 gap-1  md:flex-row flex-col">
        <InputControl
          label="Acheivement 1"
          placeholder=" Any Hackathon wins or participation"
          register={register("acheivement1")}
          defaultValue={resume.acheivement.acheivement1}
        />
        <InputControl
          label="Acheivement 2"
          placeholder="Any Coding Contest Acheivements "
          register={register("acheivement2")}
          defaultValue={resume.acheivement.acheivement2}
        />
      </div>

      <div className="flex md:gap-24 gap-1  md:flex-row flex-col">
        <InputControl
          label="Acheivement 3"
          placeholder=" Any Competition you have won"
          register={register("acheivement3")}
          defaultValue={resume.acheivement.acheivement3}
        />
        <InputControl
          label="Acheivement 4"
          placeholder="Any Research paper you have published"
          register={register("acheivement4")}
          defaultValue={resume.acheivement.acheivement4}
        />
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
            className="text-white flex  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg  md:px-4 px-4 md:py-3 py-2 text-base transition hover:rotate-2"
            type="submit"
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

export default Acheivements;
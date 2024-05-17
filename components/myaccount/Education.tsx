import React, { useContext, useEffect } from "react";
import InputControl from "./InputControl";
import { ChevronLeft, ChevronRight, Plus, Trash } from "lucide-react";
import { ResumeData } from "../context/ResumeData";
import { useForm } from "react-hook-form";

const Education = ({
  activeIndex,
  setactiveIndex,
}: {
  activeIndex: number;
  setactiveIndex: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const {
    educationCount,
    setEducationCount,
    deleteEduItem,
    updateEducation,
    resume,
  }: any = useContext(ResumeData);
  const { register, handleSubmit, reset } = useForm();

  const EducationSubmit = (data: any) => {
    const educations = Array.from({ length: educationCount }).map((_, i) => ({
      title: data[`title${i}`],
      college: data[`college${i}`],
      duration: data[`duration${i}`],
      location: data[`location${i}`],
    }));
    updateEducation(educations);
    setactiveIndex(activeIndex + 1);
  };

  resume.education = resume.education || {};
  resume.education.test = " ";
  useEffect(() => reset((resume.education.test = {})), [deleteEduItem]);

  return (
    <form
      className="mt-2 mx-3"
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit(EducationSubmit)}
    >
      {Array.from({
        length: educationCount,
      }).map((j, i) => {
        return (
          <>
            {educationCount > 1 ? (
              <h1 className="font-semibold text-xl text-primary mt-2 md:mx-0 mx-auto">
                Education {i + 1}
              </h1>
            ) : (
              ""
            )}
            <div className="flex md:gap-24 gap-3  md:flex-row flex-col">
              <InputControl
                label="Title"
                placeholder="eg. Bachelors of Technology in Computer Science"
                register={register(`title${i}`)}
                defaultValue={resume?.education[i]?.title || ""}
                detail={undefined}
              />
              <InputControl
                label="College/School Name"
                placeholder="Enter name of your college/school"
                register={register(`college${i}`)}
                defaultValue={resume?.education[i]?.college || ""}
                detail={undefined}
              />
            </div>
            <div className="flex md:gap-24 gap-3  md:flex-row flex-col mb-8">
              <InputControl
                label="Duration"
                placeholder="Mar 2021 - Aug 2025"
                register={register(`duration${i}`)}
                defaultValue={resume?.education[i]?.duration || ""}
                detail={undefined}
              />
              <InputControl
                label="Location"
                placeholder="Location eg: Patna, Bihar"
                register={register(`location${i}`)}
                defaultValue={resume?.education[i]?.location || ""}
                detail={undefined}
              />
            </div>
          </>
        );
      })}
      {educationCount > 1 && (
        <div className="sm:flex sm:gap-4 mt-4">
          <span
            className="rounded-xl bg-[white] text-red-500 w-24 p-4 text-sm font-semibold flex md:gap-2 gap-1 text-center text-primary shadow-[0_3px_10px_rgb(0,0,0,0.2)] cursor-pointer mx-auto hover:bg-primary justify-center items-center hover:text-red-700"
            onClick={() => deleteEduItem(educationCount - 1)}
          >
            Delete
            <Trash width={20} height={20} />
          </span>
        </div>
      )}

      <div
        className="flex mt-8 gap-2 cursor-pointer bg-gray-100 py-2 rounded-lg flex-row md:w-2/5 justify-center"
        onClick={() =>
          educationCount < 2 ? setEducationCount((_: number) => _ + 1) : null
        }
      >
        <Plus className="bg-primary bg-blue-500 hover:text-blue-700 text-white bg rounded-lg p-1 md:w-7 md:h-7 w-5 h-5" />
        <span className="text-primary font-semibold text-sm text-center md:p-1 hover:text-blue-700">
          Add one more Education
        </span>
      </div>

      {/* prev button starts*/}
      <div className="flex flex-row justify-between my-4">
        <div className="sm:flex flex-row justify-center items-center sm:gap-4">
          <button
            type="button"
            className="md:px-4 px-4 md:py-3 py-2 flex text-base items-center justify-center font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 transition hover:rotate-2 hover:bg-gray-100 hover:text-blue-700"
            onClick={() => {
              setactiveIndex(activeIndex - 1);
            }}
          >
            <ChevronLeft width={27} height={25} />
            <p className="flex items-center justify-center">Prev</p>
          </button>
        </div>

        <div className="sm:gap-4 flex justify-end">
          <button
            className="text-white flex bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg md:px-4 px-4 md:py-3 py-2 text-base transition hover:rotate-2"
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

export default Education;

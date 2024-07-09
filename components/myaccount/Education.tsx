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
      percentage: data[`percentage${i}`],

    }));
    updateEducation(educations);
    setactiveIndex(activeIndex + 1);
  };

  resume.education = resume.education || {};
  resume.education.test = " ";
  useEffect(() => reset((resume.education.test = {})), [deleteEduItem]);

  return (
    <form
      className=""
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit(EducationSubmit)}
    >

        <div className="px-6 py-4 bg-gradient-to-r from-blue-500 to-indigo-600">
        <h2 className="text-2xl font-bold text-white">Education</h2>
      </div>            <div className="mx-6 ">

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
            <div className="flex md:gap-24 gap-3  md:flex-row flex-col mb-0">
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
            <div className="flex md:gap-24 gap-3  md:flex-row flex-col mb-8">
              <InputControl
                label="Percentage"
                placeholder="80 %"
                register={register(`percentage${i}`)}
                defaultValue={resume?.education[i]?.percentage || ""}
                detail={undefined}
              />
            
            </div>
          </>
        );
      })}
       {educationCount > 1 && (
          <div className="flex justify-center mt-6">
            <button
            type="button"
              onClick={() => deleteEduItem(educationCount - 1)}
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-white px-4 py-2 text-sm font-medium text-red-600 shadow-md transition duration-300 ease-out hover:text-white"
            >
              <span className="absolute inset-0 flex h-full w-full -translate-x-full items-center justify-center bg-red-600 text-white duration-300 group-hover:translate-x-0">
                <Trash className="h-5 w-5" />
              </span>
              <span className="absolute flex h-full w-full transform items-center justify-center text-red-600 transition-all duration-300 group-hover:translate-x-full">
                Delete
              </span>
              <span className="invisible relative">Delete</span>
            </button>
          </div>
        )}
        {educationCount < 5 && (
          <div className="flex justify-center mt-8">
            <button
            type="button"
            onClick={() =>
              educationCount < 2 ? setEducationCount((_: number) => _ + 1) : null
            }              className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-white px-4 py-2 text-sm font-medium text-blue-600 shadow-md transition duration-300 ease-out hover:text-white"
            >
              <span className="absolute inset-0 flex h-full w-full -translate-x-full items-center justify-center bg-blue-600 text-white duration-300 group-hover:translate-x-0">
                <Plus className="h-5 w-5" />
              </span>
              <span className="absolute flex h-full w-full transform items-center justify-center text-blue-600 transition-all duration-300 group-hover:translate-x-full">
                Add Education
              </span>
              <span className="invisible relative">Add one more Education</span>
            </button>
          </div>
        )}
      
      

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
</div>
      {/* next button ends */}
    </form>
  );
};

export default Education;

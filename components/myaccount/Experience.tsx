import React, { useContext, useEffect } from "react";
import InputControl from "./InputControl";
import { ChevronLeft, ChevronRight, Plus, Trash } from "lucide-react";
import { useForm } from "react-hook-form";
import { ResumeData } from "../context/ResumeData";

const Experience = ({
  activeIndex,
  setactiveIndex,
}: {
  activeIndex: number;
  setactiveIndex: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const {
    experienceCount,
    setExperienceCount,
    deleteExpItem,
    updateExperience,
    resume,
  }: any = useContext(ResumeData);
  const { register, handleSubmit, reset } = useForm();
  useEffect(() => {
    const resume = localStorage.getItem("resumeLocal");
    if (resume) {
      const resumeData = JSON.parse(resume);
      if (resumeData.experience && resumeData.experience.length) {
        setExperienceCount(resumeData.experience.length);
      }
    }
  }, []);
  
  const ExperienceSubmit = (data: any) => {
    const experiences = Array.from({ length: experienceCount }).map((_, i) => ({
      company_Name: data[`company${i}`],
      designation: data[`designation${i}`],
      duration: data[`duration${i}`],
      location: data[`location${i}`],
      description1: data[`description1${i}`],
      description2: data[`description2${i}`],
      description3: data[`description3${i}`],
    }));
    updateExperience(experiences);
    setactiveIndex(activeIndex + 1);
  };
  resume.experience = resume.experience || {};
  resume.experience.test = " ";
  useEffect(() => {
    reset((resume.experience.test = {}));
  }, [deleteExpItem]);

  return (
    <form
      className=""
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit(ExperienceSubmit)}
    >
      <div className="px-6 py-4 bg-gradient-to-r from-blue-500 to-indigo-600">
        <h2 className="text-2xl font-bold text-white">Experience</h2>
      </div>

      <div className="mx-6 ">
        {Array.from({ length: experienceCount }).map((_, i) => (
          <div key={i}>
            {experienceCount > 1 && (
              <h1 className="font-semibold text-xl text-primary mt-2 md:mx-0 mx-auto">
                Experience {i + 1}
              </h1>
            )}
            <div className="flex md:gap-24 gap-1 md:flex-row flex-col">
              <InputControl
                label="Company Name"
                placeholder="Enter company name eg. Amazon"
                register={register(`company${i}`)}
                defaultValue={resume?.experience[i]?.company_Name || ""}
                detail={undefined}
              />
              <InputControl
                label="Designation"
                placeholder="Enter title eg. Frontend developer"
                register={register(`designation${i}`)}
                defaultValue={resume?.experience[i]?.designation || ""}
                detail={undefined}
              />
            </div>
            <div className="flex md:gap-24 mt-1 gap-1 md:flex-row flex-col">
              <InputControl
                label="Duration"
                placeholder="2020-2023"
                register={register(`duration${i}`)}
                defaultValue={resume?.experience[i]?.duration || ""}
                detail={undefined}
              />
              <InputControl
                label="Location"
                placeholder="Enter location eg. Remote"
                register={register(`location${i}`)}
                defaultValue={resume?.experience[i]?.location || ""}
                detail={undefined}
              />
            </div>
            <div className="font-semibold text-base mt-4 text-[#646d8c]">
              Enter work description
            </div>
            <div className="flex mb-8 flex-col">
              <div className="flex flex-col gap-2">
                <InputControl
                  placeholder="What were your responsibilities"
                  detail={true}
                  register={register(`description1${i}`)}
                  defaultValue={resume?.experience[i]?.description1 || ""}
                  label={undefined}
                />
              </div>
              <div className="flex flex-col gap-2">
                <InputControl
                  placeholder="Improvement or impact you made in the company"
                  detail={true}
                  register={register(`description2${i}`)}
                  defaultValue={resume?.experience[i]?.description2 || ""}
                  label={undefined}
                />
              </div>
              <div className="flex flex-col gap-2">
                <InputControl
                  placeholder="What were your responsibilities"
                  detail={true}
                  register={register(`description3${i}`)}
                  defaultValue={resume?.experience[i]?.description3 || ""}
                  label={undefined}
                />
              </div>
            </div>
          </div>
        ))}
        {experienceCount > 1 && (
          <div className="flex justify-center mt-6">
            <button
            type="button"
              onClick={() => deleteExpItem(experienceCount - 1)}
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
        {experienceCount < 5 && (
          <div className="flex justify-center mt-8">
            <button
            type="button"
              onClick={() => setExperienceCount(experienceCount + 1)}
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-white px-4 py-2 text-sm font-medium text-blue-600 shadow-md transition duration-300 ease-out hover:text-white"
            >
              <span className="absolute inset-0 flex h-full w-full -translate-x-full items-center justify-center bg-blue-600 text-white duration-300 group-hover:translate-x-0">
                <Plus className="h-5 w-5" />
              </span>
              <span className="absolute flex h-full w-full transform items-center justify-center text-blue-600 transition-all duration-300 group-hover:translate-x-full">
                Add Experience
              </span>
              <span className="invisible relative">Add Experience</span>
            </button>
          </div>
        )}
        <div className="flex justify-between my-10">
          <div className="sm:flex sm:gap-4">
            <button
              type="button"
              className="md:px-4 px-4 md:py-3 py-2 flex text-base items-center justify-center font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 transition hover:rotate-2 hover:bg-gray-100 hover:text-blue-700"
              onClick={() => setactiveIndex(activeIndex - 1)}
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
    </form>
  );
};

export default Experience;

import React, { useContext, useEffect } from "react";
import InputControl from "./InputControl";
import { ChevronLeft, ChevronRight, Plus, Trash } from "lucide-react";
import { useForm } from "react-hook-form";
import { ResumeData } from "../context/ResumeData";

const Experience = ({ activeIndex, setactiveIndex }) => {
  const {
    experienceCount,
    setExperienceCount,
    deleteExpItem,
    updateExperience,
    resume,
  } = useContext(ResumeData);
  const { register, handleSubmit, resetField, reset } = useForm();

  const ExperienceSubmit = (data) => {
    updateExperience(data);
    console.log(data);
    activeIndex === 5 ? setactiveIndex(0) : setactiveIndex(activeIndex + 1);
  };
  resume.experience.test = " ";

  useEffect(() => {
    reset((resume.experience.test = ""));
  }, [deleteExpItem]);

  return (
    <form
      className="mt-2 mx-3"
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit(ExperienceSubmit)}
    >
      {Array.from({
        length: experienceCount,
      }).map((j, i) => {
        return (
          <>
            {experienceCount > 1 ? (
              <div className="flex justify-between">
                <h1 className="font-semibold text-xl text-primary mt-2 md:mx-0 mx-auto">
                  Experience {i + 1}
                </h1>
              </div>
            ) : (
              ""
            )}
            <div className="flex md:gap-24 gap-1  md:flex-row flex-col">
              <InputControl
                label="Company Name"
                placeholder="Enter company name eg. amazon"
                register={register(`company${i}`)}
                defaultValue={resume.experience[`company${i}`]}
              />
              <InputControl
                label="Designation"
                placeholder="Enter title eg. Frontend developer"
                register={register(`designation${i}`)}
                defaultValue={resume.experience[`designation${i}`]}
              />
            </div>
            <div className="flex md:gap-24 mt-1 gap-1  md:flex-row flex-col">
              <InputControl
                label="Duration"
                placeholder="2020-2023"
                register={register(`duration${i}`)}
                defaultValue={resume.experience[`duration${i}`]}
              />
              <InputControl
                label="Location"
                placeholder="Enter location eg. Remote"
                register={register(`location${i}`)}
                defaultValue={resume.experience[`location${i}`]}
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
                  register={register(`Ex${i}details1`)}
                  defaultValue={resume.experience[`Ex${i}details1`]}
                />
              </div>

              <div className="flex flex-col gap-2">
                <InputControl
                  placeholder="Improvement or impact you made in the company"
                  detail={true}
                  register={register(`Ex${i}details2`)}
                  defaultValue={resume.experience[`Ex${i}details2`]}
                />
              </div>
           
            </div>
          </>
        );
      })}
      {experienceCount > 1 && (
        <div className="sm:flex sm:gap-4 ">
          <span
            className="rounded-xl bg-[white] md:px-6 md:py-3 px-3 py-1 text-sm font-semibold flex md:gap-2 gap-1 text-center text-primary shadow-[0_3px_10px_rgb(0,0,0,0.2)] cursor-pointer mx-auto hover:bg-primary hover:text-[white]"
            onClick={() => deleteExpItem(experienceCount - 1)}
          >
            Delete
            <Trash width={20} height={20} />
          </span>
        </div>
      )}

      {experienceCount < 2 && (
        <div
          className="flex mt-8 gap-2 cursor-pointer bg-gray-100 py-2 rounded-lg flex-row md:w-2/5 justify-center"
          onClick={() =>
            experienceCount < 2 ? setExperienceCount((_) => _ + 1) : null
          }
        >
          <Plus className="bg-primary bg-blue-500 hover:text-blue-700 text-white bg rounded-lg p-1 md:w-7 md:h-7 w-5 h-5" />
          <span className="text-primary font-semibold text-sm text-center md:p-1 hover:text-blue-700">
            Add one more experience
          </span>
        </div>
      )}

      {/* prev button */}
      <div className="flex justify-between my-10">
        <div className="sm:flex sm:gap-4">
          <button
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
    </form>
  );
};

export default Experience;

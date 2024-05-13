import React, { useContext, useEffect } from "react";
import InputControl from "./InputControl";
import { ChevronLeft, ChevronRight, Plus, Trash } from "lucide-react";

export default function ({ activeIndex, setactiveIndex }) {
  //   const {
  //     projectCount,
  //     setProjectCount,
  //     deleteProjectItem,
  //     updateProject,
  //     resume,
  //   } = 2;

  //   const projectSubmit = (data) => {
  //     updateProject(data);
  //     console.log(data);
  //     setactiveIndex(activeIndex + 1);
  //   };
  //   resume.project.test = " ";

  return (
    <form className="mt-2 mx-3" noValidate autoComplete="off">
      <div>
        <div className="flex md:gap-24  gap-1  md:flex-row flex-col">
          <InputControl
            label="Project Title"
            placeholder="Enter title eg. Chat app"
          />
          <InputControl
            label="Tech Stacks"
            placeholder="eg. ReactJS, Tailwind, Firebase"
          />
        </div>
        <div className="flex md:gap-24 mt-1 gap-1  md:flex-row flex-col">
          <InputControl
            label="Deployed Link"
            placeholder="Enter deployed link of project"
          />
          <InputControl
            label="Github Link"
            placeholder="Enter github link of project"
          />
        </div>
        {/* <div className="flex mb-8 flex-col">
              <div className="font-semibold text-base mt-4 ">
                Enter project description
              </div>
              <div className="flex-col flex  gap-2 mb-8">
                <InputControl
                  placeholder="Write your Project Description ( Prefer pointwise )"
                  detail={true}
                  register={register("description")}
                  defaultValue={resume.project.description}
                />
              </div>
            </div> */}
        <div className="font-semibold text-base mt-4 text-[#646d8c]">
          Enter Project description
        </div>
        <div className="flex mb-8 flex-col">
          <div className="flex flex-col gap-2">
            <InputControl
              placeholder="One liner description for it"
              detail={true}
            />
          </div>
          <div className="flex flex-col gap-2">
            <InputControl
              placeholder="Impact your Project have made"
              detail={true}
            />
          </div>
          <div className="flex flex-col gap-2">
            <InputControl placeholder="why it's out of the box " />
          </div>
        </div>
      </div>

      {/* {projectCount > 1 && (
        <div className="flex gap-4 ">
          <div
            className="rounded-lg bg-[white] md:px-6 md:py-3 px-3 py-2 text-sm font-semibold flex md:gap-2 gap-1 text-center text-primary shadow-[0_3px_10px_rgb(0,0,0,0.2)] cursor-pointer mx-auto hover:bg-primary hover:text-[white]"
            onClick={() => deleteProjectItem(projectCount - 1)}
          >
            Delete
            <Trash width={20} height={20} />
          </div>
        </div>
      )}
      {projectCount < 3 && (
        <div
          className="flex mt-8 gap-2 align-middle text-center cursor-pointer"
          onClick={() =>
            projectCount < 3 ? setProjectCount((_) => _ + 1) : null
          }
        >
          <Plus className="bg-primary text-[white] rounded-lg p-1 md:w-7 md:h-7 w-5 h-5" />
          <span className="text-primary font-semibold text-sm text-center md:p-1">
            Add one more project
          </span>
        </div>
      )} */}

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
}

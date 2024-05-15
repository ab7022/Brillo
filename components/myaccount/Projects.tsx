import InputControl from "./InputControl";
import { ChevronLeft, ChevronRight, Plus, Trash } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

export default function ({ activeIndex, setactiveIndex }) {
  const { handleSubmit } = useForm();
  const [projects, setProjects] = useState([{ id: 1 }]);

  const onSubmit = (data) => {
    console.log(data); // You can handle form submission data here
  };

  const addProjects = () => {
    setProjects([...projects, { id: projects.length + 1 }]);
  };

  const removeProjects = (id) => {
    toast.success("Deleted"); // Displays a success message

    setProjects(projects.filter((project) => project.id !== id));
  };

  return (
    <form className="mt-2 mx-3" noValidate autoComplete="off">
      {projects.map((project, index) => (
        <div key={project.id} className="mb-8">
          <div className="font-semibold text-lg mt-4 text-blue-500">
            Project {index + 1}
          </div>{" "}
          <div className="flex md:gap-24  gap-1  md:flex-row flex-col">
            <InputControl label="Project Title" placeholder="Enter title" />
            <InputControl
              label="Tech Stacks / Software Used"
              placeholder="eg. ReactJS, Adobe , MySQL"
            />
          </div>
          <div className="flex md:gap-24 mt-1 gap-1  md:flex-row flex-col">
            <InputControl
              label="Live Link"
              placeholder="Enter deployed link of project"
            />
            <InputControl
              label="Github Link"
              placeholder="Enter github link of project"
            />
          </div>

          
          <div className="font-semibold text-base mt-4 text-[#646d8c]">
          Project description
          </div>
          <div className="flex mb-8 flex-col">
            <div className="flex flex-col gap-2">
              <InputControl
                placeholder="One liner description for it"
                detail={true}
              />
            </div>
          </div>
          <div className="font-semibold text-base mt-4 text-[#646d8c]">
            Enter Project Image
          </div>
            <label
              for="dropzone-file"
              class="flex flex-col items-center justify-center w-full h-28 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50  hover:bg-gray-100"
            >
              <div className="flex flex-col items-center justify-center pt-4 pb-4">
                <svg
                  className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 16"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                  />
                </svg>
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-semibold">Click to upload</span> or drag
                  and drop
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  SVG, PNG, JPG or GIF (MAX. 800x400px)
                </p>
              </div>
              <input id="dropzone-file" type="file" className="hidden" />
            </label>
          {projects.length > 1 && (
            <div className="sm:flex sm:gap-4 mt-4">
              <span
                className="rounded-xl bg-[white] text-red-500 w-24 p-4 text-sm font-semibold flex md:gap-2 gap-1 text-center text-primary shadow-[0_3px_10px_rgb(0,0,0,0.2)] cursor-pointer mx-auto hover:bg-primary justify-center items-center hover:text-red-700"
                onClick={() => removeProjects(project.id)}
              >
                Delete
                <Trash width={20} height={20} />
              </span>
            </div>
          )}
        </div>
      ))}

      <div
        className="flex mt-8 gap-2 cursor-pointer bg-gray-100 py-2 rounded-lg flex-row md:w-2/5 justify-center"
        onClick={addProjects}
      >
        <Plus className="bg-primary bg-blue-500 hover:text-blue-700 text-white bg rounded-lg p-1 md:w-7 md:h-7 w-5 h-5" />
        <span className="text-primary font-semibold text-sm text-center md:p-1 hover:text-blue-700">
          Add one more projects
        </span>
      </div>

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
            type="button"
            className="text-white flex bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg md:px-4 px-4 md:py-3 py-2 text-base transition hover:rotate-2"
            onClick={() => {
              setactiveIndex(activeIndex + 1);
            }}
          >
            <p className="flex items-center justify-center">Next</p>
            <ChevronRight width={27} height={25} />
          </button>
        </div>
      </div>
    </form>
  );
}

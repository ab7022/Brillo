import InputControl from "./InputControl";
import { ChevronLeft, ChevronRight, Plus, Trash } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

export default function FormComponent({ activeIndex, setactiveIndex }) {
  const { handleSubmit } = useForm();
  const [experiences, setExperiences] = useState([{ id: 1 }]);

  const onSubmit = (data) => {
    console.log(data); // You can handle form submission data here
  };

  const addExperience = () => {
    setExperiences([...experiences, { id: experiences.length + 1 }]);
  };

  const removeExperience = (id) => {
    toast.success('Deleted'); // Displays a success message

    setExperiences(experiences.filter((experience) => experience.id !== id));
  };

  return (
    <form
      className="mt-2 mx-3"
      autoComplete="off"
      onSubmit={handleSubmit(onSubmit)}
    >
      {experiences.map((experience, index) => (
        <div key={experience.id} className="mb-8">
          <div className="font-semibold text-lg mt-4 text-blue-500">
            Experience {index + 1}
          </div>
          <div className="flex md:gap-24 gap-1 md:flex-row flex-col mt-2">
          <InputControl
              label="Company Name"
              placeholder="Enter company name eg. amazon"
            />
            <InputControl
              label="Designation"
              placeholder="Enter title eg. Frontend developer"
            />
      
          </div>
          <div className="flex md:gap-24 mt-1 gap-1 md:flex-row flex-col">
            <InputControl label="Duration" placeholder="2020-2023" />
            <InputControl
              label="Location"
              placeholder="Enter location eg. Remote"
            />
          </div>

          <div className="font-semibold text-base mt-4 text-[#646d8c]">
            Enter work description
          </div>
          <div className="flex flex-col gap-2">
            <InputControl
              placeholder="What your responsibilities were"
              detail={true}
            />
            <InputControl
              placeholder="Improvement or impact you made in the company"
              detail={true}
            />
         
          </div>

          {experiences.length > 1 && (
            <div className="sm:flex sm:gap-4 mt-4">
              <span
                className="rounded-xl bg-[white] text-red-500 w-24 p-4 text-sm font-semibold flex md:gap-2 gap-1 text-center text-primary shadow-[0_3px_10px_rgb(0,0,0,0.2)] cursor-pointer mx-auto hover:bg-primary justify-center items-center hover:text-red-700"
                onClick={() => removeExperience(experience.id)}
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
        onClick={addExperience}
      >
        <Plus className="bg-primary bg-blue-500 hover:text-blue-700 text-white bg rounded-lg p-1 md:w-7 md:h-7 w-5 h-5" />
        <span className="text-primary font-semibold text-sm text-center md:p-1 hover:text-blue-700">
          Add one more experience
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

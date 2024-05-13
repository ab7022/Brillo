import InputControl from "./InputControl";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useForm } from "react-hook-form";

export default function FormComponent({ activeIndex, setactiveIndex }) {
  const { handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data); // You can handle form submission data here
  };

  return (
    <form
      className="mt-2 mx-3"
      autoComplete="off"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex md:gap-24 gap-1 md:flex-row flex-col">
        <InputControl
          label="Designation"
          placeholder="Enter title eg. Frontend developer"
        />
        <InputControl
          label="Company Name"
          placeholder="Enter company name eg. amazon"
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
      <div className="flex mb-8 flex-col">
        <div className="flex flex-col gap-2">
          <InputControl
            placeholder="What your responsibilities were"
            detail={true}
          />
        </div>
        <div className="flex flex-col gap-2">
          <InputControl
            placeholder="Improvement or impact you made in the company"
            detail={true}
          />
        </div>
        <div className="flex flex-col gap-2">
          <InputControl
            placeholder="What your responsibilities were"
            detail={true}
          />
        </div>
      </div>

      <div className="flex flex-row justify-between my-4">
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
    </form>
  );
}

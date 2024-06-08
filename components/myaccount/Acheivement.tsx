import React, { useContext, useState } from "react";
import InputControl from "./InputControl";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ResumeData } from "../context/ResumeData";
import { useForm } from "react-hook-form";
import { uploadDetails } from "./db";
import toast, { Toaster } from "react-hot-toast";

const Acheivements = ({
  activeIndex,
  setactiveIndex,
}: {
  activeIndex: number;
  setactiveIndex: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const { updateAcheivement, resume }: any = useContext(ResumeData);
  const { register, handleSubmit } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);

  console.log(resume);
  const AcheivementSubmit = async (data: any) => {
    if (!isSubmitting) {
      // Check if form is already submitting
      setIsSubmitting(true); // Set form submission status to true
      try {
        await updateAcheivement(data); // Update achievements
        console.log(data);
        await toast.promise(uploadDetails(resume), {
          loading: "Submitting",
          success: "Success",
          error: "Error while submitting",
        });
        // activeIndex === 5 ? setactiveIndex(0) : setactiveIndex(activeIndex + 1);
        console.log("Data uploaded successfully");
      } catch (error) {
        console.error("Error updating user data:", error);
      } finally {
        setIsSubmitting(false); // Reset form submission status after completion or error
      }
    }
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
          register={register("achievement1")}
          defaultValue={resume?.achievement?.achievement1 || ""}
          detail={undefined}
        />
        <InputControl
          label="Acheivement 2"
          placeholder="Any Coding Contest Acheivements "
          register={register("achievement2")}
          defaultValue={resume?.achievement?.achievement2 || ""}
          detail={undefined}
        />
      </div>

      <div className="flex md:gap-24 gap-1  md:flex-row flex-col">
        <InputControl
          label="Acheivement 3"
          placeholder=" Any Competition you have won"
          register={register("achievement3")}
          defaultValue={resume?.achievement?.achievement3 || ""}
          detail={undefined}
        />
        <InputControl
          label="Acheivement 4"
          placeholder="Any Research paper you have published"
          register={register("achievement4")}
          defaultValue={resume?.achievement?.achievement4 || ""}
          detail={undefined}
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
      </div>
      <div className=" sm:gap-4 flex justify-center ">
        <button
          className="text-white flex  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg  md:px-4 px-4 md:py-3 py-2 text-base transition hover:rotate-2"
          type="submit"
        >
          <p className="flex items-center justify-center">Submit</p>
          <ChevronRight width={27} height={25} />
        </button>
      </div>
      {/* next button ends */}
    </form>
  );
};

export default Acheivements;

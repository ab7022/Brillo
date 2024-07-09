"use client";
import React, { useContext, useState } from "react";
import InputControl from "./InputControl";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ResumeData } from "../context/ResumeData";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

const SocialProfiles = ({
  activeIndex,
  setactiveIndex,
}: {
  activeIndex: number;
  setactiveIndex: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const { updateSocials, resume }: any = useContext(ResumeData);
  const { register, handleSubmit } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const skillSubmit = (data: any) => {
    updateSocials(data);
    activeIndex === 6 ? setactiveIndex(0) : setactiveIndex(activeIndex + 1);
  };

  return (
    <form
      className=""
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit(skillSubmit)}
    >
        <div className="px-6 py-4 bg-gradient-to-r from-blue-500 to-indigo-600">
        <h2 className="text-2xl font-bold text-white">Social Profiles</h2>
      </div>
      <div className="mx-6 ">

      <div className="flex md:gap-24 gap-1  md:flex-row flex-col">
      <InputControl
          type="url"
          label="Linkedin Link"
          placeholder="Enter your linkedin profile link"
          register={register("linkedin")}
          defaultValue={resume?.socialProfiles?.linkedin || ""}
          detail={undefined}
        />
    <InputControl
          type="url"
          label="Twitter Link"
          placeholder="Enter your linkedin profile link"
          register={register("twitter")}
          defaultValue={resume?.socialProfiles?.twitter || ""}
          detail={undefined}
        />
      </div>

      <div className="flex md:gap-24 gap-1  md:flex-row flex-col">
      <InputControl
          type="email"
          label="Email"
          placeholder="Enter your email"
          register={register("email")}
          defaultValue={resume?.socialProfiles?.email || ""}
          detail={undefined}
        />
           <InputControl
          label="Enter phone"
          placeholder="Enter your phone number"
          register={register("phone")}
          defaultValue={resume?.socialProfiles?.phone || ""}
          detail={undefined}
        />
      </div>
      <div className="flex md:gap-24 gap-1  md:flex-row flex-col">
      <InputControl
          type="url"
          label="Github Link"
          placeholder="Enter your github profile link"
          register={register("github")}
          defaultValue={resume?.socialProfiles?.github || ""}
          detail={undefined}
        />
    
      </div>
    
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

</div>    </form>
  );
};

export default SocialProfiles;

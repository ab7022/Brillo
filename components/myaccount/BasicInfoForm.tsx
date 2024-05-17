import { ChevronRight } from "lucide-react";
import InputControl from "./InputControl";
import { useForm } from "react-hook-form";

import { useContext } from "react";
import { ResumeData } from "../context/ResumeData";

const BasicInfo =  ({ activeIndex, setactiveIndex })=> {
  const { updatePersonal, resume } = useContext(ResumeData);
  const { register, handleSubmit } = useForm();

  const PersonalSubmit = (data) => {
    updatePersonal(data);
    activeIndex === 5 ? setactiveIndex(0) : setactiveIndex(activeIndex + 1);
  };

  return (
    <form
      className="mt-2 md:mx-3 px-2 md:w-full min-w-sm"
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit(PersonalSubmit)}
    >
      <div className="flex md:gap-24 gap-1  md:flex-row flex-col">
        <InputControl
          type="text"
          label="First Name"
          name="firstName"
          placeholder="Enter your first name"
          register={register("firstName")}
          defaultValue={resume.personal.firstName}
        />

        <InputControl
          type="text"
          label="Last Name"
          name="LastName"
          placeholder="Enter your last name"
          register={register("lastName")}
          defaultValue={resume.personal.lastName}
        />
      </div>
      <div className="flex md:gap-24 mt-1 gap-1 md:flex-row flex-col">
        <InputControl
          type="text"
          label="Designation"
          placeholder="eg. Software Developer"
          register={register("designation")}
          defaultValue={resume.personal.designation}
        />
        <InputControl
          type="text"
          label="Introduction about yourself"
          placeholder="2nd year BCA student"
          register={register("introduction")}
          defaultValue={resume.personal.introduction}
        />
      </div>
      <div className="flex md:gap-24 mt-1 gap-1 md:flex-row flex-col">
        <InputControl
          type="url"
          label="Linkedin Link"
          placeholder="Enter your linkedin profile link"
          register={register("linkedin")}
          defaultValue={resume.personal.linkedin}
        />
        <InputControl
          type="url"
          label="Github Link"
          placeholder="Enter your github profile link"
          register={register("github")}
          defaultValue={resume.personal.github}
          detail={undefined}
        />
      </div>

      <div className="flex md:gap-24 mt-1 gap-1 md:flex-row flex-col">
        <InputControl
          type="email"
          label="Email"
          placeholder="Enter your email"
          register={register("email")}
          defaultValue={resume.personal.email}
        />
        <InputControl
          type="text"
          label="Enter phone"
          placeholder="Enter your phone number"
          register={register("phone")}
          defaultValue={resume.personal.phone}
        />
      </div>
      <div className="flex md:gap-24 gap-1  md:flex-row flex-col">
        <InputControl
          type="text"
          label="City"
          name="firstName"
          placeholder="Enter your City"
          register={register("city")}
          defaultValue={resume.personal.city}
        />

        <InputControl
          type="text"
          label="Country"
          name="LastName"
          placeholder="Enter your Country"
          register={register("country")}
          defaultValue={resume.personal.country}
        />
      </div>
      <div className=" sm:gap-4 flex justify-end m-4">
        <button
          className="text-white flex  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg  md:px-4 px-4 md:py-3 py-2 text-base transition hover:rotate-2" type="submit"
        >
          <p className="flex items-center justify-center">Next</p>
          <ChevronRight width={27} height={25} />
        </button>
      </div>
    </form>
  );
}
export default BasicInfo
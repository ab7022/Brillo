import { ChevronRight } from "lucide-react";
import InputControl from "./InputControl";
import { useForm } from "react-hook-form";

export default function ({ activeIndex, setactiveIndex }) {
  const { register, handleSubmit } = useForm();

  return (
    <form className="mt-2 md:mx-3 px-2 md:w-full min-w-sm" noValidate autoComplete="off">
      
      <div className="flex md:gap-24 gap-1  md:flex-row flex-col">
        <InputControl
          type="text"
          label="First Name"
          name="firstName"
          placeholder="Enter your first name"
          register={register("firstName")}
          // onChange={handleSubmit(PersonalSubmit)}
          //   defaultValue={resume.personal.firstName}
        />

        <InputControl
          type="text"
          label="Last Name"
          name="LastName"
          placeholder="Enter your last name"
          register={register("lastName")}
          //   defaultValue={resume.personal.lastName}
        />
      </div>
      <div className="flex md:gap-24 mt-1 gap-1 md:flex-row flex-col">
        <InputControl
          type="url"
          label="Linkedin Link"
          placeholder="Enter your linkedin profile link"
          register={register("linkedin")}
          //   defaultValue={resume.personal.linkedin}
        />
        <InputControl
          type="url"
          label="Github Link"
          placeholder="Enter your github profile link"
          register={register("github")}
          //   defaultValue={resume.personal.github}
        />
      </div>

      <div className="flex md:gap-24 mt-1 gap-1 md:flex-row flex-col">
        <InputControl
          type="email"
          label="Email"
          placeholder="Enter your email"
          register={register("email")}
          //   defaultValue={resume.personal.email}
        />
        <InputControl
          type="text"
          label="Enter phone"
          placeholder="Enter your phone number"
          register={register("phone")}
          //   defaultValue={resume.personal.phone}
        />
      </div>

      {/* next button starts*/}
      <div className=" sm:gap-4 flex justify-end m-4">
        <button
          type="button"
          onClick={() => {
            setactiveIndex(activeIndex + 1);
          }}
          className="text-white flex  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg  md:px-4 px-4 md:py-3 py-2 text-base transition hover:rotate-2"
        >
          <p className="flex items-center justify-center">Next</p>
          <ChevronRight width={27} height={25} />
        </button>
      </div>
      {/* next button ends */}
    </form>
  );
}

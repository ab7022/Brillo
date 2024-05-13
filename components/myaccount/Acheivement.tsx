import React from "react";
import InputControl from "./InputControl";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useForm } from "react-hook-form";

const Acheivements = ({ activeIndex, setactiveIndex }) => {
  const { register } = useForm();

  return (
    <form className="mt-2 mx-3" noValidate autoComplete="off">
      <div className="flex md:gap-24 gap-1 md:flex-row flex-col">
        <InputControl
          label="Acheivement 1"
          placeholder="Any Hackathon wins or participation"
          register={register("acheivement1")}
        />
        <InputControl
          label="Acheivement 2"
          placeholder="Any Coding Contest Acheivements"
          register={register("acheivement2")}
        />
      </div>

      <div className="flex md:gap-24 gap-1 md:flex-row flex-col">
        <InputControl
          label="Acheivement 3"
          placeholder="Any Hackathon wins or participation"
          register={register("acheivement3")}
        />
        <InputControl
          label="Acheivement 4"
          placeholder="Any Coding Contest Acheivements"
          register={register("acheivement4")}
        />
      </div>

      {/* Next button starts */}
      <div className="flex justify-between my-10">
        <div className="sm:flex sm:gap-4">
          <button
            className="bg-primary rounded md:px-8 px-4 md:py-3 py-2 text-base font-semibold text-[white] transition hover:rotate-2 flex md:gap-2 gap-1 text-center shadow items-center"
            onClick={() => {
              setactiveIndex(activeIndex - 1);
            }}
          >
            <ChevronLeft width={27} height={25} />
            <p className="flex items-center justify-center">Prev</p>
          </button>
        </div>

        <div className="sm:flex sm:gap-4">
          <button
            className="bg-primary rounded md:px-8 px-4 md:py-3 py-2 text-base font-semibold text-[white] transition hover:rotate-2 flex md:gap-2 gap-1 text-center shadow items-center"
            type="submit"
          >
            <p className="flex items-center justify-center">Next</p>
            <ChevronRight width={27} height={25} />
          </button>
        </div>
      </div>
      {/* Next button ends */}
    </form>
  );
};

export default Acheivements;

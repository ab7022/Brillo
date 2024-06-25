import Image from "next/image";
import Title from "./Title";
import matthew from "@/components/AllTemplates/template10/public/matthew.png";

const Intro = ({ basicInfo }) => {
  const firstName = basicInfo?.[0]?.first_name || "";
  const lastName = basicInfo?.[0]?.last_name || "";
  const intro = basicInfo?.[0]?.intro || "";
  const profile = basicInfo?.[0]?.profile || "";

  return (
    <div className="col-span-3 rounded-2xl p-8 flex flex-col space-y-8 lg:space-y-0 lg:flex-row lg:space-x-8 bg-neutral-100 bg-opacity-75 lg:items-center">
      {profile && (
        <div className="rounded-full w-24 h-24 bg-black flex justify-center items-center"
      >
        <Image
          src={profile}
          alt="Male bearded memoji"
          width={500}
          height={500}
          className="bg-slate-300 rounded-full w-full h-full object-cover border border-slate-400"
        />
      </div>
      )}
      

      <div className="flex flex-col space-y-4">
        {" "}
        <div className="text-xl lg:text-2xl font-normal text-teal-900">
          Hi, I&apos;m {firstName} {lastName}
        </div>
        <div className="text-slate-600 max-w-4xl">
         {intro}
        </div>
      </div>
    </div>
  );
};

export default Intro;

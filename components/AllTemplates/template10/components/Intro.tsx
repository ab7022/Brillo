import Image from "next/image";
import Title from "./Title";
import matthew from "@/components/AllTemplates/template10/public/matthew.png"

const Intro = () => {
  return (
    <div className="col-span-3 rounded-2xl p-8 flex flex-col space-y-8 lg:space-y-0 lg:flex-row lg:space-x-8 bg-neutral-100 bg-opacity-75 lg:items-center">
      <Image
        src={matthew}
        alt="Male bearded memoji"
        width={96}
        height={96}
        className="bg-slate-300 rounded-full border border-slate-400"
      />
      <div className="flex flex-col space-y-4">
        {" "}
        <div className="text-xl lg:text-2xl font-normal text-teal-900">
          Hi, I&apos;m Lucas Mitchell
        </div>
        <div className="text-slate-600">
          UI/UX designer on a mission to blend beauty and functionality.
          Previously a product designer at Apple. Open to contracts. Let&apos;s
          design delightful experiences together!
        </div>
      </div>
    </div>
  );
};

export default Intro;

import Image from "next/image";

const Twitter = () => {
  return (
    <div className="rounded-2xl col-span-1 row-span-1 flex flex-col items-center justify-center p-4 transition-all duration-200 ease-in-out bg-[#1DA1F2] bg-opacity-20 hover:bg-opacity-100">
      <Image src="/twitter.svg" width={100} height={100} alt="Twitter Logo" />
    </div>
  );
};

export default Twitter;
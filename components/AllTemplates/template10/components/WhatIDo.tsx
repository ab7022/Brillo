const WhatIDo = ({ basicInfo }) => {
  const shortintro = basicInfo?.[0]?.shortintro || "";
  const designation = basicInfo?.[0]?.designation || "";

  return (
    <div className="col-span-1 md:row-span-1 row-span-2 rounded-2xl p-4 flex flex-col space-y-1 bg-neutral-100 bg-opacity-75 justify-between">
      <div className="font-normal pb-2 text-xl lg:text-2xl text-teal-900">
        What I Do
      </div>
      <div className="grid divide-x gap-y-1 divide-slate-300 text-slate-600">
        <div className="md:border-b-2 pb-2   ">{designation}</div>
        <div className=" hidden md:flex">{shortintro}</div>
        {/* <div>Product Design</div> */}
      </div>
    </div>
  );
};

export default WhatIDo;

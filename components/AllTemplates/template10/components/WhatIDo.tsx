const WhatIDo = ({basicInfo}) => {
  const shortintro = basicInfo?.[0]?.shortintro || "";
  const designation = basicInfo?.[0]?.designation || "";

  return (
    <div className="col-span-1 row-span-1 rounded-2xl p-8 flex flex-col space-y-2 bg-neutral-100 bg-opacity-75 justify-between">
      <div className="font-normal text-xl lg:text-2xl text-teal-900">
        What I Do
      </div>
      <div className="grid grid-flow-row divide-x gap-y-1 divide-slate-300 text-slate-600">
        <div className="border-b-2 " 
        >{designation}</div>  
        <div>{shortintro}</div>
        {/* <div>Product Design</div> */}
      </div>
    </div>
  );
};

export default WhatIDo;

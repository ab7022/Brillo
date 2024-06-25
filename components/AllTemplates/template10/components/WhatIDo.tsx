const WhatIDo = () => {
  return (
    <div className="col-span-1 row-span-1 rounded-2xl p-8 flex flex-col space-y-2 bg-neutral-100 bg-opacity-75 justify-between">
      <div className="font-normal text-xl lg:text-2xl text-teal-900">
        What I Do
      </div>
      <div className="grid grid-flow-row divide-y gap-y-1 divide-slate-300 text-slate-600">
        <div>UI Design</div>
        <div>UX Research</div>
        <div>Product Design</div>
      </div>
    </div>
  );
};

export default WhatIDo;

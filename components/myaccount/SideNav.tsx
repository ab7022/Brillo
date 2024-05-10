import React, { useEffect, useState } from "react";
import { ChevronRight } from "lucide-react";

const SideNav = ({ sections, activeIndex, setactiveIndex }) => {
  const [width, setWidth] = useState(window.innerWidth);
  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);
  const [open, setOpen] = useState(width > 600 ? true : false);
  return (
    <div className="flex absolute z-1 top-0 h-screen left-0 bg-gray-900 ">
      <div
        className={` ${
          open ? " md:w-72 w-56" : "md:w-20 w-12"
        }  md:p-5 p-[0.3rem]   pt-8 relative duration-300`}
      >
        <div className="mt-20"></div>

        <ul className="pt-6">
          {sections.map((section, index) => (
            <li
              key={index}
              className={`flex rounded-md align-middle cursor-pointer hover:bg-primary hover:text-[white] text-[#36454F] text-sm items-center gap-x-4 mt-4 border-[1px] border-[#dedede]
              ${index === activeIndex && "bg-gray-900 text-[white]"} ${
                open ? "md:p-4 p-2" : "p-2"
              }`}
              onClick={() => {
                setactiveIndex(index);
                // console.log(width);
                if (width <= 600) setOpen(false);
              }}
            >
              {/* <img
                src={`/assets/${section.src}`}
                alt="icon"
                width={25}
                height={25}
              /> */}
              {section.src}
              <span
                className={`${
                  !open && "hidden"
                } origin-left duration-200 w-28 font-semibold text-medium text-inherit`}
              >
                {section.title}
              </span>
              <ChevronRight
                width={28}
                height={28}
                className={`${!open && "hidden"} right-4`}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideNav;

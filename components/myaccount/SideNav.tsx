import React, { useEffect, useState } from "react";
import { ChevronRight } from "lucide-react";

const SideNav = ({
  sections,
  activeIndex,
  setactiveIndex,
}: {
  sections: any[];
  activeIndex: number;
  setactiveIndex: (index: number) => void;
}) => {
  const [width, setWidth] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  useEffect(() => {
    const updateDimensions = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const [open, setOpen] = useState(() => width > 600);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setOpen(width > 600);
    }
  }, [width]);

  return (
    <div className="flex flex-row fixed z-40 top-0 min-h-full left-0 bg-gray-50 shadow-xl">
      <div
        className={`${
          open ? " md:w-72 w-56" : "md:w-20 w-10"
        }  md:p-5 p-[0.3rem] pt-8 relative duration-300`}
      >
        <div className="mt-20"></div>

        <ul className="pt-6">
          {sections.map((section, index) => (
            <li
              key={index}
              className={`flex rounded-md align-middle cursor-pointer hover:bg-primary hover:text-blue-500 text-[#36454F] text-sm items-center gap-x-4 mt-4 border-[1px] border-[#dedede]
              ${index === activeIndex && "bg-blue-800 text-[white]"} ${
                open ? "md:p-4 p-2" : "p-2"
              }`}
              onClick={() => {
                setactiveIndex(index);
                if (width <= 600) setOpen(false);
              }}
            >
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

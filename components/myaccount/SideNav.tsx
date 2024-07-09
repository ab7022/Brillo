import React from "react";
import { Typography } from "@material-tailwind/react";
import {
  CogIcon,
  UserIcon,
  BuildingLibraryIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/solid";
import {
  BrainCircuit,
  GraduationCap,
  Medal,
  Briefcase,
} from "lucide-react";

const icons = [
  UserIcon,
  CogIcon,
  BuildingLibraryIcon,
  BrainCircuit,
  GraduationCap,
  Medal,
  Briefcase,
];

const SideNav = ({ sections, activeIndex, setactiveIndex }) => {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-purple-50 py-12 px-4 sm:px-6 lg:px-8 mt-28">
      <div className="max-w-7xl mx-auto">
        <nav className="relative">
          {/* Connecting Line - hidden on mobile, visible on larger screens */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 transform -translate-y-1/2 hidden sm:block" />
          
          <ul className="relative z-10 flex flex-row flex-wrap w-screen sm:flex-row sm:flex-wrap sm:justify-between">
            {sections.map((section, index) => {
              const Icon = icons[index];
              const isCompleted = index < activeIndex;
              const isCurrent = index === activeIndex;

              return (
                <li key={index} className="flex items-center sm:flex-col sm:items-center w-full sm:w-auto mb-4 sm:mb-0">
                   {index < sections.length - 0 && (
                    <div className="h-12 w-0.5 bg-gray-200 mr-2  sm:hidden" />
                  )}
                  <button
                    onClick={() => setactiveIndex(index)}
                    className={`relative flex items-center md:mt-4 justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full transition-all duration-300 ${
                      isCompleted
                        ? "bg-green-500 text-white"
                        : isCurrent
                        ? "bg-blue-600 text-white"
                        : "bg-white text-gray-500"
                    }`}
                  >
                    {isCompleted ? (
                      <CheckCircleIcon className="w-6 h-6 sm:w-8 sm:h-8" />
                    ) : (
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                    )}
                  </button>
                  <span className="ml-3 sm:ml-16  sm:top-22 sm:left-1/2 sm:transform sm:-translate-x-1/2 sm:whitespace-nowrap">
                    <Typography
                      variant="small"
                      className={`text-left sm:text-center font-medium text-xs sm:text-sm ${isCurrent ? "text-blue-600" : "text-gray-600"}`} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}                    >
                      {section.title}
                    </Typography>
                  </span>
                  {/* Vertical connecting line for mobile */}
                 
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default SideNav;
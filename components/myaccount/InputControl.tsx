import React from "react";

interface InputControlProps {
  label?: string;
  detail?: boolean;
  type?: string;
  className?: string;
  register?: any;
  [key: string]: any;
}

const InputControl: React.FC<InputControlProps> = ({
  label,
  detail,
  type = "text",
  className = "",
  register,
  ...props
}) => {
  return (
    <div className="flex flex-col mt-3 md:mt-4 w-full max-w-xs md:max-w-md">
      {label && (
        <label className="text-base font-semibold text-gray-600 mb-1 md:mb-2">
          {label}
        </label>
      )}
      <input
        type={type}
        className={`
          w-full
          px-3 py-2 md:px-4 md:py-3
          text-gray-700
          border-2 border-gray-300 rounded-lg
          focus:outline-none focus:ring-2 focus:ring-blue-500
          transition duration-200
          ${detail ? "min-w-full " : ""}
          ${className}
        `}
        {...register}
        {...props}
      />
    </div>
  );
};

export default InputControl;
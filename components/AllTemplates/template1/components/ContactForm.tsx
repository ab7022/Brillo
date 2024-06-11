"use client";
import React from "react";
import { cn } from "@/lib/utils";

import { Email } from "./Email";

export function ContactForm() {
  return (
    <div className="relative py-10 " id="contact">
      <div className="text-center my-10">
        <h2 className="mb-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
          Get in Touch
        </h2>
        <p className="text-base text-[#9e77c6] font-semibold tracking-wide uppercase">
          Contact Me
        </p>
      </div>
      <div className="mt-5 max-w-md w-full mx-auto rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black border z-30">
        <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200 text-center">
          Have a question or want to work together?
        </h2>
        <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300 text-center">
          Let's collaborate and discuss your project 🚀
        </p>
        <Email />
      </div>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};

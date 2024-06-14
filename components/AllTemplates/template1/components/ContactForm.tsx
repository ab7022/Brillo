"use client";
import React from "react";
import { cn } from "@/lib/utils";

import { Email } from "./Email";

export function ContactForm({ email }:any) {
  return (
    <div className="relative min-w-full py-10 ">
      <div className="text-center my-10">
       
        <p className="text-base text-[#9e77c6] font-semibold tracking-wide uppercase">
          Contact Me
        </p>
      </div>
      <div className="mt-5 w-sm md:max-w-3xl w-full md:mx-auto rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black border z-30 ">
        <h2 className="font-bold text-xl md:text-3xl text-neutral-800 dark:text-neutral-200 text-center mx-auto">
          Have a question or want to work together?
        </h2>
        <p className="text-neutral-600 text-base max-w-sm mt-2 dark:text-neutral-300 text-center mx-auto">
          Let's collaborate and discuss your project 🚀
        </p>
        <Email email={email} />
      </div>
    </div>
  );
}

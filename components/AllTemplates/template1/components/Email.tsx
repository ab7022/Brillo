"use client";
import React, { useRef,useState } from "react";
import { Label, Input, TextArea } from "./ui";
import { cn } from "@/lib/utils";
import axios from "axios";

export const Email = ({email}) => {
  const nameRef = useRef<HTMLInputElement>();
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const [status, setStatus] = useState('');

  const sendEmail = async (e: any) => {
    e.preventDefault();
    setStatus('Sending...');
    const formData = {
      name: nameRef.current?.value,
      email: emailRef.current?.value,
      message: messageRef.current?.value,
      userEmail: email, // Replace with the actual user email
    };
    console.log(formData);
    try {
      const res = await axios.post('http://localhost:3000/api/user/sendmessages', {
       formData,
      });

      if (res.status === 200) {
        setStatus('Message Sent!');
        nameRef.current.value = '';
        emailRef.current.value = '';
        messageRef.current.value = '';
      } else {
        const errorData = await res.json();
        setStatus(errorData.error || 'Error saving form data.');
      }
    } catch (error) {
      setStatus('Error saving form data.');
    }
  };


  return (
    <form className="my-8" onSubmit={sendEmail}>
    <p className="text-white text-center">
        {status}
     </p>
      <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
        <LabelInputContainer>
          <Label htmlFor="firstname">Name</Label>
          <Input id="firstname" required placeholder="Tyler" type="text" ref={nameRef} />
        </LabelInputContainer>
      </div>
      <LabelInputContainer className="mb-4">
        <Label htmlFor="email">Email Address</Label>
        <Input
          id="email" required
          placeholder="projectmayhem@fc.com"
          type="email"
          ref={emailRef}
        />
      </LabelInputContainer>
      <LabelInputContainer className="mb-4">
        <Label htmlFor="email">Message</Label>
        <TextArea id="message" placeholder="Enter text..." required minLength={10} ref={messageRef} />
      </LabelInputContainer>

      <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
      <button
        className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
        type="submit"
      >
        Submit
        <BottomGradient />
      </button>
    </form>
  );
};
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

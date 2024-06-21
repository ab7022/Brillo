"use client";

import { useSectionInView } from "@/components/AllTemplates/template6/lib/hooks";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import toast from "react-hot-toast";
import { FaPaperPlane } from "react-icons/fa";
import SectionHeading from "./section-heading";
import axios from "axios";

export default function Contact({ socialProfiles }) {
  const { ref } = useSectionInView("Contact");
  const [pending, setPending] = useState(false);
  const email = socialProfiles?.[0]?.email || "";
  const phone = socialProfiles?.[0]?.phone || "";
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const [status, setStatus] = useState("");
  const sendEmail = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const formData = {
      name: nameRef.current?.value,
      email: emailRef.current?.value,
      message: messageRef.current?.value,
      userEmail: email,
    };
    console.log(formData);
    try {
      const res = await axios.post("/api/user/sendmessages", {
        formData,
      });

      if (res.status === 200) {
        setStatus("Message Sent");
        toast.success("Message Sent!")
        nameRef.current.value = "";
        emailRef.current.value = "";
        messageRef.current.value = "";
      } else {
        const errorData = await res.json();
        setStatus(errorData.error || "Error saving form data.");
      }
    } catch (error) {
      setStatus("Error saving form data.");
    }
  };
  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact me</SectionHeading>

      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Please contact me directly at{" "}
        <a className="underline" href={`mailto:${email}`}>
          {email}
        </a>{" "}
        and{" "}
        <a className="underline" href={`tel:${phone}`}>
          {phone}
        </a>{" "}
      </p>
      <br />

      <h1 className="text-lg bg-font-bold">  {status}</h1>
      <form className="mt-4 flex flex-col dark:text-black" onSubmit={sendEmail}>
        <input
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="senderEmail"
          type="email"
          ref={emailRef}

          required
          maxLength={500}
          placeholder="Your email"
        />
        <input
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 mt-2 transition-all dark:outline-none"
          name="your Name"
          type="text"
          required
          ref={nameRef}
          maxLength={500}
          placeholder="Your Name"
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
          ref={messageRef}

        />
        <button
          type="submit"
          className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 dark:bg-white dark:bg-opacity-10 disabled:scale-100 disabled:bg-opacity-65"
          disabled={pending}
        >
          Submit{" "}
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />{" "}
        </button>
      </form>
    </motion.section>
  );
}

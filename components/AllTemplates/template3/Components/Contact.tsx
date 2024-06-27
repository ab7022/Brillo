import React from "react";
import Section from "./Section";
import Heading from "./Heading";
import { check, service1, smallSphere, stars } from "../assets";
import Creating from "./Creating";
import Image from "next/image";
import axios from "axios";
import ButtonSvg from "../assets/svg/ButtonSvg";

import { useState, useRef, useEffect } from "react";
const Contact = ({ socialProfiles }) => {
  const email = socialProfiles?.[0]?.email || "";
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
        nameRef.current.value = "";
        emailRef.current.value = "";
        messageRef.current.value = "";
      } else {
        const errorData = await res.data
        setStatus(errorData.error || "Error saving form data.");
      }
    } catch (error) {
      setStatus("Error saving form data.");
    }
  };

  return (
    <Section id={"Contact"} className={""} crosses={""} crossesOffset={""} customPadding={""}>
      <div
        className="container"
        style={{ backgroundColor: "rgba(14, 12, 21, var(--tw-bg-opacity, 1))" }}
      >
        {" "}
        <div className="hidden relative justify-center mb-[6.5rem] lg:flex">
          <Image
            src={smallSphere}
            className="relative z-1"
            width={255}
            height={255}
            alt="Sphere"
          />
          <div className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <Image
              src={stars}
              className="w-full"
              width={950}
              height={400}
              alt="Stars"
            />
          </div>
        </div>
        <Heading title={"Wanna discuss something Great!  Let's Connect"} className="" tag=""/>
        <div className="relative">
          <div className="relative z-1 flex justify-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]  ">
            <div className="absolute w-full h-full top-0 left-0 pointer-events-none md:w-3/5 xl:w-auto ">
              <Image
                className="w-full h-full object-cover md:object-right "
                width={800}
                height={730}
                src={service1}
                alt="Buy It"
              />
            </div>
            <div className="relative z-1 max-w-[18rem] ml-auto my-auto ">
              <h4 className="h4 mb-4 ">Get In Touch</h4>
              <p className="body-2 mb-[3rem] text-n-3 ">
                Got an idea! lets connect and work on it together and make the
                imagination alive
              </p>
              <ul className="body-2  ">
                <li className="flex items-start py-4 border-t border-n-6 ">
                  <Image src={check} alt="" width={24} height={24} />
                  <p className="ml-4  ">
                    Mail Me at{" "}
                    <a href={`mailto:${email}`} className="text-n-2">
                      {email}
                    </a>
                  </p>
                </li>
              </ul>
              {status}
              <form className="" onSubmit={sendEmail}>
                <div className="body-2">
                  <input
                    type="text"
                    className="bg-transparent border-b-[1px] focus:outline-none  border-n-5 p-3 rounded-sm  "
                    placeholder="Your Name"
                    ref={nameRef}
                  />
                  <input
                    type="email"
                    placeholder="email@gmail.com"
                    className="bg-transparent border-b-[1px] focus:outline-none  border-n-5 p-3 rounded-sm  "
                    ref={emailRef}
                  />
                  <textarea
                    placeholder="Your Query"
                    name=""
                    id=""
                    cols={20}
                    ref={messageRef}
                    rows={2}
                    className="bg-transparent border-b-[1px] focus:outline-none  border-n-5 p-3 rounded-sm  "
                  />
                  <div className="button relative inline-flex items-center justify-center h-11 transition-colors text-n-8 px-7">
                    <ButtonSvg />
                    <button type="submit" className="relative text-black">
                      {" "}
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <Creating
              title={"Let's Create Together"}
              className={`absolute left-4 right-4 bottom-4 border border-n-1/10 lg:left-1/2  lg:right-auto lg:bottom-8 lg:-translate-x-1/2 `}
            />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;

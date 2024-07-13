"use client";
import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { HiMailOpen } from "react-icons/hi";
import { FaXTwitter } from "react-icons/fa6";
import axios from "axios";

const Contact = ({ basicInfo, socialProfiles }: any) => {
  const twitter = socialProfiles?.[0]?.twitter || "";
  const linkedin = socialProfiles?.[0]?.linkedin || "";
  const github = socialProfiles?.[0]?.github || "";
  const email = socialProfiles?.[0]?.email || "";
  const firstName = basicInfo?.[0]?.first_name || "";
  const lastName = basicInfo?.[0]?.last_name || "";
  const refHeading = useRef(null);
  const inViewHeading = useInView(refHeading);
  const refContent = useRef(null);
  const inViewContent = useInView(refContent);

  const [show, setShow] = useState(false);
  const nameRef = useRef<HTMLInputElement>();
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const [status, setStatus] = useState("");
  const sendEmail = async (e: any) => {
    e.preventDefault();
    setStatus("Sending...");
    const formData = {
      name: nameRef.current?.value,
      email: emailRef.current?.value,
      message: messageRef.current?.value,
      userEmail: email,
    };
    try {
      const res = await axios.post("/api/user/sendmessages", {
        formData,
      });

      if (res.status === 200) {
        setShow(true);
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

  const variants1 = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <section className="sm:px-6 sm:pt-[80px]" id="contact">
      <motion.div
        ref={refHeading}
        variants={variants1}
        initial="initial"
        animate={inViewHeading ? "animate" : "initial"}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-4"
      >
        <h3 className="text-3xl font-[800] text-textWhite sm:text-5xl">
          Get In Touch
        </h3>
        <div className="mt-2 h-[4px] min-w-0 flex-grow bg-textWhite"></div>
      </motion.div>
      <div className="relative mt-10 flex flex-col items-center gap-4 py-12 md:flex-row md:items-start">
        <motion.div
          ref={refContent}
          initial={{ opacity: 0, y: -50 }}
          animate={
            inViewContent ? { opacity: 1, y: 0 } : { opacity: 1, y: -50 }
          }
          transition={{ duration: 1 }}
          className="flex-1"
        >
          <h5 className="my-2 text-2xl font-bold text-heading md:text-3xl">
            Why Be Shy, Say Hi...
          </h5>
          <p className="max-w-lg text-base text-textWhite">
            I&apos;m open to new opportunities and look forward to connecting
            with you. Whether you have inquiries or just want to say hello, feel
            free to reach out. <br /> I&apos;ll do my best to respond promptly!
          </p>
          <div className="mt-6 flex flex-row gap-5">
            {linkedin.length>0 && (
              <a
                href={linkedin}
                className="group relative transition-all duration-500 ease-in-out hover:-translate-y-[2px] "
                target="_blank"
              >
                <BsLinkedin className="size-7" />
                <span className="absolute left-[50%] top-[150%] w-fit translate-x-[-50%] translate-y-[-50%] px-2 text-xs text-textLight opacity-0 group-hover:opacity-100">
                  Linkedin
                </span>
              </a>
            )}
            {github.length>0 && (
              <a
                href={github}
                className="group relative transition-all duration-500 ease-in-out hover:-translate-y-[2px] "
                target="_blank"
              >
                <BsGithub className="size-7" />
                <span className="absolute left-[50%] top-[150%] w-fit translate-x-[-50%] translate-y-[-50%] px-2 text-xs text-textLight opacity-0 group-hover:opacity-100">
                  Github
                </span>
              </a>
            )}
            {twitter.length>0 && (
              <a
                href={twitter}
                target="_blank"
                className="group relative transition-all duration-500 ease-in-out hover:-translate-y-[2px] "
              >
                <FaXTwitter className="size-7" />
                <span className="absolute left-[50%] top-[150%] w-fit translate-x-[-50%] translate-y-[-50%] px-2 text-xs text-textLight opacity-0 group-hover:opacity-100">
                  Twitter
                </span>
              </a>
            )}

            {email.length>0 && (
              <a
                href={`mailto:${email}`}
                target="_blank"
                className="group relative transition-all duration-500 ease-in-out hover:-translate-y-[2px] "
              >
                <HiMailOpen className="size-7 " />
                <span className="absolute left-[50%] top-[150%] w-fit translate-x-[-50%] translate-y-[-50%] px-2 text-xs text-textLight opacity-0 group-hover:opacity-100">
                  Email
                </span>
              </a>
            )}
          </div>
        </motion.div>
        <motion.div
          ref={refContent}
          initial={{ opacity: 0, y: -50 }}
          animate={
            inViewContent ? { opacity: 1, y: 0 } : { opacity: 1, y: -50 }
          }
          transition={{ duration: 1 }}
          className="mt-10 w-full p-4 md:mt-0 md:w-[40%]"
        >
          {show ? (
            <div className="mx-auto mt-8 flex max-w-md items-center lg:max-w-lg">
              <p className="text-md text-textPara">
                Thank you for reaching out! <br /> I appreciate your interest
                and will get back to you as soon as possible. In the meantime,
                feel free to explore more of my portfolio.
              </p>
            </div>
          ) : (
            <form className="flex flex-col" onSubmit={sendEmail}>
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  ref={emailRef}
                  className="block w-full rounded-lg border border-[#33353F] bg-[#18191E] p-2.5 text-sm text-gray-100 placeholder-[#9CA2A9]"
                  placeholder="youremail@gmail.com"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-white"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  ref={nameRef}
                  className="block w-full rounded-lg border border-[#33353F] bg-[#18191E] p-2.5 text-sm text-gray-100 placeholder-[#9CA2A9]"
                  placeholder="Just saying hi"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-white"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  minLength={10}
                  ref={messageRef}
                  className="block w-full rounded-lg border border-[#33353F] bg-[#18191E] p-2.5 text-sm text-gray-100 placeholder-[#9CA2A9]"
                  placeholder="Let's talk about..."
                />
              </div>
              {status}
              <button
                type="submit"
                className="mr-4 w-full rounded-full border-2 border-white bg-transparent px-5 py-2.5 text-center text-sm font-medium text-white transition-all duration-500 ease-in-out hover:scale-[0.98] hover:bg-darkHover"
              >
                Send Message
              </button>
            </form>
          )}
        </motion.div>
      </div>

      <footer className="flex items-center text-center pb-6">
        <span className="mx-auto text-textPara">
          © {new Date().getFullYear()} - {firstName} {lastName}
        </span>
      </footer>
    </section>
  );
};

export default Contact;

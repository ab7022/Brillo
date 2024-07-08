"use client";

import React, { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { FaSearch, FaMousePointer, FaTachometerAlt, FaRocket } from "react-icons/fa";
import Link from "next/link";

const StepCard = ({ icon, title, description, number, color, buttonText, buttonLink }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      className={`flex-shrink-0 w-80 h-92 md:h-96 ${color} rounded-3xl p-6 mx-4 transform transition-all duration-300 hover:scale-105 hover:rotate-2 shadow-xl flex flex-col justify-between`}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={controls}
      transition={{ duration: 0.5 }}
    >
      <div>
        <div className="text-6xl mb-6  hidden md:flex">{icon}</div>
        <div className="text-4xl font-bold mb-4">{number}</div>
        <h3 className="text-2xl font-semibold mb-4">{title}</h3>
        <p className="text-lg mb-6">{description}</p>
      </div>
      <Link href={buttonLink}>
        <button className="w-full bg-white text-gray-800 font-bold py-2 px-4 rounded-full hover:bg-gray-100 transition-colors duration-300">
          {buttonText}
        </button>
      </Link>
    </motion.div>
  );
};

const HowToUseSection = () => {
  const steps = [
    {
      icon: <FaSearch />,
      title: "Browse Templates",
      description: "Explore our diverse collection of professional portfolio templates.",
      number: "01",
      color: "bg-pink-400 text-white",
      buttonText: "View Templates",
      buttonLink: "/templates",
    },
    {
      icon: <FaMousePointer />,
      title: "Select and Generate",
      description: "Choose your favorite template and click 'Generate' to begin customization.",
      number: "02",
      color: "bg-purple-400 text-white",
      buttonText: "Generate Portfolio",
      buttonLink: "/templates/1",
    },
    {
      icon: <FaTachometerAlt />,
      title: "Customize ",
      description: "Add your details, username and personalize your portfolio on your dashboard.",

      number: "03",
      color: "bg-blue-400 text-white",
      buttonText: "Go to Dashboard",
      buttonLink: "/dashboard",
    },
    {
      icon: <FaRocket />,
      title: "Launch",
      description: "Hit 'Publish' and watch your portfolio go live in seconds!",
      number: "04",
      color: "bg-green-400 text-white",
      buttonText: "Publish Portfolio",
      buttonLink: "/dashboard",
    },
  ];

  return (
    <div className="relative h-full z-20 w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
      <div className="py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-5xl font-bold text-center mb-4 text-gray-800"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            How To Use
          </motion.h2>
          <motion.p
            className="text-xl text-center text-gray-600 mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Create Your Portfolio in 4 Easy Steps
          </motion.p>
        </div>
        <motion.div 
          className="flex pb-10 hide-scrollbar"
          whileHover={{ cursor: "grab" }}
          whileTap={{ cursor: "grabbing" }}
        >
          <div className="flex space-y-4 flex-wrap justify-center mx-auto items-center">
            {steps.map((step, index) => (
              <StepCard key={index} {...step} />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HowToUseSection;
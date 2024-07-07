"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaUserCog,
  FaEye,
  FaLayerGroup,
  FaComments,
  FaHeadset,
  FaMobileAlt,
  FaPalette,
  FaProjectDiagram,
  FaShareAlt,
  FaRocket,
} from "react-icons/fa";

const FeatureCard = ({ icon, title, description, color }) => (
  <motion.div
    className={`bg-white rounded-lg h-lg shadow-lg p-4 flex flex-col items-center text-center border-b-4 ${color}`}
    whileHover={{
      scale: 1.05,
      boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)",
    }}
    whileTap={{ scale: 0.95 }}
  >
    <motion.div
      className={`text-5xl ${color.replace("border-", "text-")} mb-4`}
      initial={{ rotateY: 0 }}
      animate={{ rotateY: 360 }}
      transition={{
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      }}
    >
      {icon}
    </motion.div>
    <motion.h3
      className="text-xl font-semibold mb-2"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      {title}
    </motion.h3>
    <motion.p
      className="text-gray-600"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
    >
      {description}
    </motion.p>
  </motion.div>
);

const FeaturesSection = () => {
  const features = [
    {
      icon: <FaUserCog />,
      title: "Custom Pathnames",
      description: "Set a unique URL for your portfolio.",
      color: "border-blue-500",
    },
    {
      icon: <FaLayerGroup />,
      title: "Multiple Templates",
      description: "Choose from stunning templates.",
      color: "border-purple-500",
    },
    {
      icon: <FaEye />,
      title: "Visitor Analytics",
      description: "Gain insights into your visitors.",
      color: "border-green-500",
    },
    {
      icon: <FaComments />,
      title: "Integrated Messaging",
      description: "Stay connected with visitors easily.",
      color: "border-yellow-500",
    },
    {
      icon: <FaMobileAlt />,
      title: "Mobile Responsive",
      description: "Enjoy a great look on all devices.",
      color: "border-indigo-500",
    },
    {
      icon: <FaRocket />,
      title: "Instant Deployment",
      description: "Go live with just one click",
      color: "border-orange-500",
    },
    {
      icon: <FaShareAlt />,
      title: "Portfolio Sharing",
      description: "Share your portfolio effortlessly.",
      color: "border-cyan-800",
    },
    {
      icon: <FaHeadset />,
      title: " Get 24/7 Support",
      description: "Get round-the-clock support.",
      color: "border-red-500",
    },
  ];

  return (
    <div className="relative min-h-screen md:pt-40 pt-20  z-20 w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
      <section className="py-20">
        <div className="container mx-auto md:px-4 px-2 ">
          <motion.h2
            className="text-5xl font-bold text-center mb-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Powerful Features
          </motion.h2>
          <motion.p
            className="text-xl text-center text-gray-600 mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Everything you need to create a stunning portfolio
          </motion.p>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <FeatureCard {...feature} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeaturesSection;

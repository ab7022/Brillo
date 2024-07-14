"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaCheck, FaInfoCircle, FaFire } from "react-icons/fa";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from 'next/navigation';

const PricingFeature = ({ text }) => (
  <motion.li
    className="flex items-center mb-4 px-8"
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.3 }}
  >
    <FaCheck className="text-green-500 mr-3 flex-shrink-0" />
    <span>{text}</span>
  </motion.li>
);

const PricingCard = ({
  title,
  price,
  offerPrice,
  duration,
  features,
  buttonText,
  isPopular,
  plan,
  productId,
  comparisonText,
}) => (
  <motion.div
    className={`bg-white rounded-lg shadow-xl p-8 max-w-sm mx-auto mb-8 relative ${
      isPopular ? "border-4 border-blue-500" : ""
    }`}
    initial={{ scale: 0.9, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ duration: 0.5 }}
    whileHover={{ scale: 1.01 }}
  >
    {isPopular && (
      <div className="absolute top-0 right-0 bg-blue-500 text-white py-1 px-4 rounded-bl-lg rounded-tr-lg font-bold">
        Most Popular
      </div>
    )}
    <div className="text-center mb-8">
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <div className="text-4xl font-bold">
        <span className="line-through text-gray-400">₹{price}</span>{" "}
        <span className="text-green-500">₹{offerPrice}</span>
        <span className="text-xl font-normal">{duration}</span>
      </div>
    </div>

    <ul className="mb-8">
      {features.map((feature, index) => (
        <PricingFeature key={index} text={feature} />
      ))}
    </ul>
    <div className="my-4 px-4 text-sm text-gray-600">
      {comparisonText && <p>{comparisonText}</p>}
    </div>
    <motion.button
      onClick={() => plan(productId)}
      className={`w-full py-3 px-4 rounded-full font-bold text-white text-lg ${
        isPopular ? "bg-blue-600" : "bg-blue-500"
      }`}
      whileHover={{ scale: 1.01, boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.1)" }}
      whileTap={{ scale: 0.98 }}
    >
      {buttonText}
    </motion.button>
  </motion.div>
);

const InfoCard = ({ text }) => (
  <motion.div
    className="bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4 mb-8 max-w-2xl mx-auto"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.5, duration: 0.5 }}
  >
    <p className="flex items-center">
      <FaInfoCircle className="mr-2" />
      {text}
    </p>
  </motion.div>
);

const RunningOffer = () => {
  const [timeLeft, setTimeLeft] = useState(0);

  useEffect(() => {
    const endDate = new Date("2024-07-17T23:59:59+05:30").getTime(); // July 17, 2024, 23:59:59 IST

    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = endDate - now;
      return Math.max(0, Math.floor(difference / 1000));
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (time) => {
    const days = Math.floor(time / (3600 * 24));
    const hours = Math.floor((time % (3600 * 24)) / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    return `${days}d ${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <motion.div
      className="bg-red-600 text-white p-4 rounded-lg shadow-lg max-w-md mx-auto mb-8"
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-xl font-bold mb-2 flex items-center">
        <FaFire className="mr-2" /> EarlyBird Offer
      </h3>
      <p className="mb-2">Get 50% off on all plans until July 17th, 2024!</p>
      <p className="text-2xl font-bold">
        Offer ends in: {formatTime(timeLeft)}
      </p>
    </motion.div>
  );
};

const PricingSection = () => {
  const [userId, setUserId] = useState("");
  const router = useRouter();

  const fetchData = async () => {
    try {
      const response = await axios.get("/api/user/finddetails");

      if (response.status === 200) {
        const id = response.data.id.toString();
        setUserId(id);
      } else if (response.status === 401) {
        toast.error("Please login to buy the product");
        return false; // Return false to indicate user is not logged in
      }
      return true; // Return true to indicate user is logged in
    } catch (error) {
      toast.error("Please login to buy the product");
      return false; // Return false on error
    }
  };

  const product1 = async (productId) => {

    const loggedIn = await fetchData();

    if (!loggedIn) {
      router.push("https://eazyfolio.com/auth/signin?callbackUrl=https%3A%2F%2Feazyfolio.com%2F");

    }

    try {
      const response = await axios.post("/api/orders/purchaseProduct", {
        productId,
        userId,
      });

      window.open(response.data.checkoutUrl, "_blank");
    } catch (error) {
      alert("Failed to buy product");
      console.error(error);
    }
  };

  const proFeatures = [
    "Up to 3,000 Visitors",
    "Dedicated Portfolio Website",
    "Comprehensive Analytics",
    "Priority 24/7 Customer Support",
    "Custom Domain Integration",
    "Professional Resume Builder",
    "Unlimited Template Access",
    "Project Image Uploads",
    "Visitor Tracking",
  ];

  const dayPassFeatures = [
    "Up to 100 Visitors",
    "Dedicated Portfolio Website",
    "Comprehensive Analytics",
    "24-Hour Customer Support",
    "Custom Domain Integration",
    "Professional Resume Builder",
    "Unlimited Template Access",
    "Project Image Uploads",
    "Visitor Tracking",
  ];

  const ultimateFeatures = [
    "Up to 10,000 Visitors",
    "1 Year Domain Registration",
    "6 Months Hosting Included",
    "All Pro Plan Benefits",
    "Fully Customizable Portfolio",
    "Unique Design and Layout",
    "One-on-One Consultation",
    "Personal Domain Hosting (yourname.com)*",
    "Priority Technical Assistance",
  ];

  return (
    <div className="relative h-full z-30 w-full bg-sky-50/30 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem] ">
      <div className="relative h-full z-10 w-full  py-20">
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="container mx-auto px-4">
            <motion.h2
              className="text-5xl font-bold text-center mb-4 text-indigo-900"
              initial={{ y: -50 }}
              animate={{ y: 0 }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              Choose Your Plan
            </motion.h2>
            <motion.p
              className="text-xl text-center text-indigo-700 mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Find the perfect option for your portfolio needs
            </motion.p>

            <RunningOffer />

            <div className="flex flex-wrap justify-center gap-8">
              <PricingCard
                title="24-Hour Pass"
                price={199}
                offerPrice={99}
                duration="/day"
                features={dayPassFeatures}
                buttonText="Get 24-Hour Access"
                isPopular={false}
                plan={product1}
                productId="443993"
                comparisonText="As affordable as a morning coffee, with tools that last all day."
              />
              <PricingCard
                title="Pro Plan"
                price={999}
                offerPrice={499}
                duration="/month"
                features={proFeatures}
                buttonText="Get Started Now"
                isPopular={true}
                plan={product1}
                productId="450426"
                comparisonText="Less than the cost of a monthly streaming service, for tools that boost your career."
              />
              <PricingCard
                title="Ultimate Plan"
                price={7999}
                offerPrice={3999}
                duration=""
                features={ultimateFeatures}
                buttonText="Go Ultimate"
                isPopular={false}
                plan={product1}
                productId="450427"
                comparisonText="Affordable as a dinner for two, but transforms your portfolio for a lifetime."
              />
            </div>

            <InfoCard text="Sign up now and get a 3-day free trial of our Pro Plan! No credit card required." />
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default PricingSection;

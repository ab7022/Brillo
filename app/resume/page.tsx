"use client";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import React, { useContext, useEffect, useRef, useState } from "react";
import Rezume from "@/components/Resume";
import { ResumeData } from "@/components/context/ResumeData";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import HeaderComponent from "@/components/HomePage/Header";
import { Variants, motion } from "framer-motion";
import axios from "axios";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

const staggerChildren = {
  animate: { transition: { staggerChildren: 0.1 } },
};

interface DataType {
  name: string;
  email: string;
  basicInfo: any[];
  experience: any[];
  skill: any[];
  socialProfiles: any[];
  project: any[];
}

export default function Reflect() {
  const { data: session, status } = useSession();
  const [width, setWidth] = useState(0);
  const { resume }: any = useContext(ResumeData);
  const downloadRef = useRef<HTMLAnchorElement>(null);
  const [loadingInitial, setLoadingInitial] = useState<boolean>(true); // State for initial loading
  const [loadingData, setLoadingData] = useState<boolean>(false); // State for data fetching loading
  const [data, setData] = useState<DataType | null>(null);
  const [resumeReady, setResumeReady] = useState(false);
  const [countdown, setCountdown] = useState(15);

  useEffect(() => {
    setWidth(window.innerWidth);
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Fetch data only after initial render
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoadingData(true);
        const response = await axios.get("/api/user/finddetails");
        if (response.status === 200) {
          setData(response.data);
        } else {
          console.error("Failed to fetch user data:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoadingData(false);
      }
    };

    fetchData();
  }, []);

  // Combined countdown and resumeReady logic
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prevCount) => {
        if (prevCount <= 1) {
          clearInterval(timer);
          setResumeReady(true);
          return 0;
        }
        return prevCount - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    setLoadingInitial(false);
  }, []);
  if (!session && status === "loading") {
    return <div>Loading...</div>;
  }

  if (!session) {
    redirect("/auth/signin?callbackUrl=http%3A%2F%2Flocalhost%3A3000%2F");
    return null;
  }

  if (loadingInitial || loadingData) {
    return <div className="loader">Loading...</div>;
  }

  if (width < 768) {
    return (
      <motion.div
        className="bg-gradient-to-br from-blue-50 via-white to-pink-50 w-screen min-h-screen"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <HeaderComponent session={session} />
        <motion.div
          className="flex flex-col justify-center mt-32 items-center mx-auto my-9 px-[20px]"
          variants={staggerChildren as Variants}
          initial="initial"
          animate="animate"
        >
          <motion.h1
            className="text-4xl font-bold mb-4 text-center text-gray-800"
            variants={fadeInUp}
          >
            Your Resume is Ready!
          </motion.h1>
          <motion.p
            className="text-lg mb-8 mt-4 text-center text-gray-600"
            variants={fadeInUp}
          >
            We've crafted a beautiful resume just for you. Download it now and
            take the next step in your career journey!
          </motion.p>
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          >
            <img
              src="/assets/success.gif"
              width={250}
              height={250}
              alt="Success animation"
              className="mb-8 rounded-full shadow-lg"
            />
          </motion.div>
          <PDFDownloadLink
            document={<Rezume resume={data} />}
            fileName="Eazy Folio.pdf"
            ref={downloadRef as unknown as React.RefObject<PDFDownloadLink>}
          >
            {({ blob, url, loading, error }) => (
              <motion.button
                className={`bg-gradient-to-r from-blue-500 to-purple-600 rounded-full px-8 py-4 text-lg font-semibold text-white shadow-lg flex items-center space-x-3 hover:shadow-xl ${
                  !resumeReady ? "opacity-50 cursor-not-allowed" : ""
                }`}
                whileHover={{ scale: resumeReady ? 1.05 : 1 }}
                whileTap={{ scale: resumeReady ? 0.95 : 1 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                disabled={!resumeReady}
              >
                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  animate={{ y: resumeReady ? [0, -5, 0] : 0 }}
                  transition={{
                    repeat: resumeReady ? Infinity : 0,
                    duration: 1.5,
                  }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </motion.svg>
                <span>
                  {resumeReady
                    ? loading
                      ? "Preparing..."
                      : "Download Now"
                    : `Preparing... ${countdown}`}
                </span>
              </motion.button>
            )}
          </PDFDownloadLink>

          <motion.p
            className="mt-6 text-sm text-gray-500 text-center max-w-md"
            variants={fadeInUp}
          >
            Your resume will be downloaded automatically. If it doesn't, click
            the button above. Get ready to impress potential employers!
          </motion.p>
        </motion.div>
      </motion.div>
    );
  } else {
    return (
      <>
        <PDFViewer className="w-screen h-screen">
          <Rezume resume={data} />
        </PDFViewer>
      </>
    );
  }
}

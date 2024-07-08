"use client";
import Link from "next/link";
import Footer from "../HomePage/Footer";
import { useEffect, useState, useRef } from "react";
import UsernameChecker from "../Username-checker";
import axios from "axios";
import ConfirmationModal from "../ConfirmationModal";
import { useRouter } from "next/navigation";
import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
export default function TemplateDetails({ id, template, session }) {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [showUsernameModal, setShowUsernameModal] = useState(false);
  const videoRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const toggleModal = () => {
    setShowUsernameModal(!showUsernameModal);
  };
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  useEffect(() => {
    if (template) {
      let recentlyViewed = localStorage.getItem("recentlyViewed");
      if (recentlyViewed) {
        let recentlyViewedArray: string[] = JSON.parse(recentlyViewed);
        recentlyViewedArray = recentlyViewedArray.filter(
          (tmplId) => tmplId !== id
        );
        recentlyViewedArray.unshift(id);
        if (recentlyViewedArray.length > 4) recentlyViewedArray.pop();
        localStorage.setItem(
          "recentlyViewed",
          JSON.stringify(recentlyViewedArray)
        );
      } else {
        localStorage.setItem("recentlyViewed", JSON.stringify([id]));
      }
    }
  }, [id]);
  useEffect(() => {
    const fetchData = async () => {
      if (session) {
        try {
          const sessionEmail = session?.user?.email || "";

          const url2 = "/api/user/username";
          const response = await axios.get(url2, {
            headers: {
              Authorization: sessionEmail,
            },
          });

          if (response.status === 200) {
            const fetchedUsername = response.data;
            setUsername(fetchedUsername);

            if (fetchedUsername) {
              setShowUsernameModal(false);
            }
          } else {
            console.error("Failed to fetch user data:", response.statusText);
          }
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
    };

    fetchData();
  }, [session]);

  const handleGenerateWebsiteClick = () => {
    if (!username) {
      setShowUsernameModal(true);
    } else {
      router.push("/dashboard");
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <main className="relative">
        <motion.section
          style={{ opacity, scale }}
          className="h-screen flex items-center justify-center relative overflow-hidden"
        >
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            className="absolute w-full h-full object-cover"
          >
            <source src={template.video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10 text-center text-white">
            <h1 className="text-6xl font-extrabold mb-4">{template.heading}</h1>
            <p className="text-xl mb-8">{template.description}</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-white text-gray-900 rounded-full text-lg font-semibold shadow-lg hover:bg-gray-100 transition-colors"
              onClick={handleGenerateWebsiteClick}
            >
              Start Building
            </motion.button>
          </div>
        </motion.section>

        <section className="py-24 px-4 md:px-16 lg:px-32">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12">Key Features</h2>
            <div className="space-y-12">
              {[
                "Responsive Design",
                "Custom Styling",
                "SEO Optimization",
                "Fast Loading",
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="flex items-start"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white text-2xl font-bold mr-6">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-2">{feature}</h3>
                    <p className="text-gray-600">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 px-4 md:px-16 lg:px-32 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">Ready to Get Started?</h2>
            <p className="text-xl mb-12">
              Create your stunning website today with our easy-to-use builder.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-4 bg-blue-500 text-white rounded-full text-xl font-semibold shadow-lg hover:bg-blue-600 transition-colors"
              onClick={handleGenerateWebsiteClick}
            >
              Start Building Now
            </motion.button>
          </div>
        </section>

        {showUsernameModal && (
          <UsernameChecker
            toggleModal={() => setShowUsernameModal(!showUsernameModal)}
            session={session}
            setUsername={setUsername}
          />
        )}
      </main>
      <Footer />
    </div>
  );
}

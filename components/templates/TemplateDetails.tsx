"use client";
import Footer from "../HomePage/Footer";
import { useEffect, useState } from "react";
import UsernameChecker from "../Username-checker";
import axios from "axios";
import { useRouter } from "next/navigation";
import { motion, } from "framer-motion";
import Image from "next/image";
import Header from "@/components/HomePage/Header";

export default function TemplateDetails({ id, template, session }) {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [showUsernameModal, setShowUsernameModal] = useState(false);

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
    <>
            <Header session={session} />

    <div className="min-h-screen mt-12  bg-gray-50">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white shadow-xl rounded-2xl overflow-hidden"
        >
          {/* Hero Section */}
          <div className="relative h-96">
            {/* <Image
            src={template.img}
            alt={template.heading}
            layout="fill"
            objectFit="cover"
          /> */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-75"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                  {template.heading}
                </h1>
                <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
                  {template.description}
                </p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-center -mt-8 relative z-10">
            <button
              onClick={() => window.open(template.see, "_blank")}
              className="mx-2 px-4 py-3 bg-white text-blue-600 rounded-full text-lg font-semibold shadow-lg hover:bg-gray-100 transition-colors"
            >
              View Demo
            </button>{" "}
            <button
              onClick={handleGenerateWebsiteClick}
              className="mx-2 px-4 py-3 bg-blue-600 text-white rounded-full text-lg font-semibold shadow-lg hover:bg-blue-700 transition-colors"
            >
              Start Building
            </button>
          </div>
          <div className=" px-8 py-16">
            <h2 className="text-3xl font-bold text-center mb-12">
              Template Preview
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[template.img, template.img].map((img, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="rounded-lg overflow-hidden shadow-lg"
                >
                  <Image
                    src={img}
                    alt={`Preview ${index + 1}`}
                    width={800}
                    height={600}
                    layout="responsive"
                  />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Features Section */}
          <div className="px-8 py-16 bg-gray-100">
            <h2 className="text-3xl font-bold text-center mb-12">
              Key Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Responsive Design",
                  icon: "🖥",
                  description:
                    "Ensures your portfolio looks great on all devices, including desktops, tablets, and smartphones.",
                },
                {
                  title: "Fast Loading",
                  icon: "⚡",
                  description:
                    "Enjoy fast loading times for a better user experience.",
                },
                {
                  title: "Easy Integration",
                  icon: "🔗",
                  description:
                    "Connect your portfolio with other platforms effortlessly.",
                },
                {
                  title: "Regular Updates",
                  icon: "🔄",
                  description:
                    "Stay up-to-date with the latest features and improvements.",
                },
                {
                  title: "Custom Domains",
                  icon: "🌐",
                  description:
                    "Use your own custom domain name for a professional touch.",
                },
                {
                  title: "Analytics Dashboard",
                  icon: "📊",
                  description:
                    "Track visitor statistics and behaviors with an analytics dashboard.",
                },

                {
                  title: "Portfolio Galleries",
                  icon: "🖼",
                  description:
                    "Showcase your work with image and video galleries.",
                },

                {
                  title: "Secure Hosting",
                  icon: "🔒",
                  description:
                    "Enjoy reliable and secure web hosting for your portfolio.",
                },

                {
                  title: "Customer Support",
                  icon: "🛠",
                  description:
                    "Access to customer support for any issues or questions.",
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-50 p-6 rounded-xl shadow-md"
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Preview Section */}

          {/* CTA Section */}
          <div className="px-8 py-16 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Create Your Website?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Start building your professional online presence today.
            </p>
            <button
              onClick={handleGenerateWebsiteClick}
              className="px-12 py-4 bg-blue-600 text-white rounded-full text-xl font-semibold shadow-lg hover:bg-blue-700 transition-colors"
            >
              Get Started Now
            </button>
          </div>
        </motion.div>

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
    </>
  );
}

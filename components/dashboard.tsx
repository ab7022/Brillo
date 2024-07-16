import toast, { Renderable, Toast, ValueFunction } from "react-hot-toast";
import Messages from "@/components/dashboard/Messages";
import Support from "@/components/dashboard/Support";
import MyAccount from "@/components/dashboard/MyAccount";

import { useEffect, useState } from "react";
import TemplateData from "@/data/templates";
import { useRouter } from "next/navigation";
import axios, { AxiosResponse } from "axios";
import MyWebsitesCard from "./dashboard/MyWebsitesCard";
import RecentlyViewedCard from "./dashboard/RecentlyViewedCard";
import CountUp from "react-countup";
import Confetti from "react-confetti";

import { CopyToClipboard } from "react-copy-to-clipboard";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaWhatsapp,
  FaCopy,
} from "react-icons/fa";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const handlePromiseWithToast = async (
  promise: Promise<AxiosResponse<any, any>>,
  loadingMessage: Renderable | ValueFunction<Renderable, Toast>,
  successMessage: Renderable | ValueFunction<Renderable, Toast>,
  errorMessage: Renderable | ValueFunction<Renderable, Toast>
) => {
  const toastId = toast.loading(loadingMessage);

  try {
    const response = await promise;
    toast.success(successMessage, { id: toastId });
    return response.data;
  } catch (error) {
    toast.error(errorMessage, { id: toastId });
    throw error;
  }
};

export default function Component({ session }: any) {
  const router = useRouter();
  const [fetchedUsername, setFetchedUsername] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [templateStatus, setTemplateStatus] = useState(null);
  const [activeTemplate, setActiveTemplate] = useState<{
    id: string;
    heading: string;
    description: string;
    see: string;
    img: string;
  } | null>(null);
  const updatedLink = `http://eazyfolio.com/${fetchedUsername}`;
  const [filteredTemplates, setFilteredTemplates] = useState([]);
  const [visitorCount, setVisitorCount] = useState(0);
  const [copySuccess, setCopySuccess] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [subscriptionData, setSubscriptionData] = useState(null);

  useEffect(() => {
    const fetchSubscription = async () => {
      try {
        const response = await axios.get("/api/orders/activeSubscription");
        if (response.status === 200) {
          setSubscriptionData(response.data);
        } else {
          console.error("Failed to fetch subscription data.");
        }
      } catch (error) {
        console.error("Failed to fetch subscription data:", error);
      }
    };

    fetchSubscription();
  }, []);

  const subscription = subscriptionData?.orders?.length > 0;
  const trial = subscriptionData?.trial;
  const trialEndsAt = subscriptionData?.trialEndsAt;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/templates/findtemplates");
        const templateStatusData = response.data;
        setTemplateStatus(templateStatusData);
      } catch (error) {
        console.error("Error fetching template status:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (templateStatus) {
      const activeTemplateData =
        TemplateData.find(
          (template) => template.id == templateStatus.templateId
        ) ?? null;
      setActiveTemplate(activeTemplateData);
    }
  }, [templateStatus]);

  useEffect(() => {
    const handleStorageChange = () => {
      const data = localStorage.getItem("recentlyViewed");
      const ids = data ? JSON.parse(data) : [];
      const templatesToShow = ids.map((id: any) =>
        TemplateData.find((template) => template.id === id)
      );

      setFilteredTemplates(templatesToShow);
    };

    handleStorageChange();
    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const handleViewDetails = (id: any) => {
    router.push(`/templates/${id}`);
  };

  const handleMakeLive = async (templateId: any) => {
    if (fetchedUsername && isSubmitted) {
      try {
        const data = await handlePromiseWithToast(
          axios.post("/api/templates/launch", { templateId }),
          "Preparing to Live",
          "Website is now live!",
          "Error making website live"
        );
        setTemplateStatus(data);
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 5000);
      } catch (error) {
        console.error("Error making template live:", error);
        toast.error("Error making website live");
      }
    } else {
      if (!fetchedUsername && !isSubmitted) {
        toast.error(
          "Please choose your username and submit your portfolio details"
        );
      } else if (!fetchedUsername) {
        toast.error("You have not chosen your username yet.");
      } else if (!isSubmitted) {
        toast.error("You have not submitted your details yet.");
      }
    }
  };

  const handleRemove = async (templateId: any) => {
    try {
      const data = await handlePromiseWithToast(
        axios.post("/api/templates/takeoffline", { templateId }),
        "Preparing to take website offline...",
        "Website has been successfully taken offline.",
        "An error occurred while attempting to take the website offline."
      );
      setTemplateStatus(data);
      setActiveTemplate(null);
    } catch (error) {
      console.error("Error removing template:", error);
    }
  };

  const firstTemplate =
    filteredTemplates.length > 0 ? filteredTemplates[0] : null;

  useEffect(() => {
    fetchVisitorCount();
  }, []);

  async function fetchVisitorCount() {
    try {
      const response = await axios.get("/api/templates/visitorcount");
      if (response.status === 200) {
        const data = response.data;
        setVisitorCount(data.count);
      } else {
        console.error("Failed to fetch visitor count.");
      }
    } catch (error) {
      console.error("Failed to fetch visitor count:", error);
    }
  }

  const handleCopy = () => {
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  };
  console.log(subscriptionData);

  return (
    <div className="mb-8 mx-8">
      <h1 className="text-2xl font-bold">My Websites</h1>
      <p className="text-gray-500 dark:text-gray-400">
        Manage your websites and account settings.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
        {!firstTemplate && (
          <div className="col-span-full text-center py-10">
            <p className="text-lg font-semibold text-gray-700">
              You have not selected any website
            </p>
          </div>
        )}
        {activeTemplate && (
          <MyWebsitesCard
            template={activeTemplate}
            templateStatus={templateStatus}
            isActive={true}
            handleViewDetails={handleViewDetails}
            handleMakeLive={handleMakeLive}
            handleRemove={handleRemove}
          />
        )}
        {firstTemplate &&
          (!activeTemplate || activeTemplate.id !== firstTemplate.id) && (
            <MyWebsitesCard
              template={firstTemplate}
              lastviewed={firstTemplate}
              templateStatus={templateStatus}
              isActive={false}
              handleViewDetails={handleViewDetails}
              handleMakeLive={handleMakeLive}
              handleRemove={handleRemove}
            />
          )}
        <div className=" grid grid-cols-1 gap-2">
          <section className="border-gray-200 border-2 rounded">
            <CardHeader>
              <CardTitle>Total Visitors</CardTitle>
              <CardDescription>
                View the total number of visitors to your website.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-6xl flex  justify-center items-center font-semibold">
                    <CountUp start={0} end={visitorCount} duration={10} />
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button
                variant="outline"
                className="border-2 p-2"
                onClick={fetchVisitorCount}
              >
                Refresh Count
              </Button>
            </CardFooter>
          </section>

          <section className="border-gray-200 border-2 rounded">
            <CardHeader>
              <CardTitle>Share Your Website!</CardTitle>
              <CardDescription>
                Share your websites with your friends
              </CardDescription>
            </CardHeader>
            {activeTemplate ? (
              <>
                <CardContent>
                  <div className=" flex-row text-center ">
                    Great job! Your site is live at{" "}
                    <a href={updatedLink} className="text-blue-600 underline">
                      {updatedLink}
                    </a>
                  </div>

                  <div className="flex items-center justify-center mt-4">
                    <Button
                      variant="outline"
                      className="border-2 p-2 mx-2 flex items-center transition-transform transform hover:scale-105"
                      onClick={() => window.open(updatedLink, "_blank")}
                    >
                      Visit Your Site
                    </Button>
                    <CopyToClipboard text={updatedLink} onCopy={handleCopy}>
                      <Button
                        variant="outline"
                        className="border-2 p-2 mx-2 flex items-center transition-transform transform hover:scale-105"
                      >
                        <FaCopy className="mr-2 text-gray-700 " />
                        Copy Link
                      </Button>
                    </CopyToClipboard>
                  </div>
                  {copySuccess && (
                    <p className="text-green-500 text-center">
                      Link copied successfully!
                    </p>
                  )}
                </CardContent>
                <CardFooter className="text-center flex items-center justify-center">
                  <div className="flex justify-center items-center rounded-lg space-x-4 bg-gray-100 p-2">
                    <a
                      href={`https://www.facebook.com/sharer/sharer.php?u=${updatedLink}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-transform transform hover:scale-110 hover:rotate-6 focus:scale-110 focus:rotate-6"
                    >
                      <FaFacebook className="h-10 w-10 text-white bg-blue-600 p-1 rounded" />
                    </a>
                    <a
                      href={`https://twitter.com/intent/tweet?url=${updatedLink}&text=Check%20out%20my%20new%20portfolio%20site!`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-transform transform hover:scale-110 hover:rotate-6 focus:scale-110 focus:rotate-6"
                    >
                      <FaTwitter className="h-10 w-10 text-white bg-blue-400 p-1 rounded" />
                    </a>
                    <a
                      href={`https://www.linkedin.com/shareArticle?mini=true&url=${updatedLink}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-transform transform hover:scale-110 hover:rotate-6 focus:scale-110 focus:rotate-6"
                    >
                      <FaLinkedin className="h-10 w-10 text-white bg-blue-700 p-1 rounded" />
                    </a>
                    <a
                      href={`https://api.whatsapp.com/send?text=Check%20out%20my%20new%20portfolio%20site!%20${updatedLink}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-transform transform hover:scale-110 hover:rotate-6 focus:scale-110 focus:rotate-6"
                    >
                      <FaWhatsapp className="h-10 w-10 text-white bg-green-500 p-1 rounded" />
                    </a>
                  </div>
                </CardFooter>
              </>
            ) : (
              <div className="text-center">
                <CardContent className="text-gray-600 flex justify-center items-center mt-8">
                  Your website is not live yet
                </CardContent>
              </div>
            )}
          </section>
        </div>
        <div className=" grid grid-cols-1 gap-2">
          <section className="border-gray-200 border-2 rounded max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle>Useful Links</CardTitle>
              <CardDescription>
                Navigate through the different sections of our website
              </CardDescription>
            </CardHeader>
            <CardContent className="">
              <div className="flex flex-wrap justify-center items-center gap-4">
                <Button
                  variant="outline"
                  className="border-2 p-2 w-full sm:w-auto flex items-center justify-center transition-transform transform hover:scale-105"
                >
                  <Link href="/templates" className="w-full text-center">
                    View Templates
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  className="border-2 p-2 w-full sm:w-auto flex items-center justify-center transition-transform transform hover:scale-105"
                >
                  <Link href="/pricing" className="w-full text-center">
                    Pricing
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  className="border-2 p-2 w-full sm:w-auto flex items-center justify-center transition-transform transform hover:scale-105"
                >
                  <Link href="/resume" className="w-full text-center">
                    Resume Generation
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  className="border-2 p-2 w-full sm:w-auto flex items-center justify-center transition-transform transform hover:scale-105"
                >
                  <Link
                    href="mailto:support@eazyfolio.com"
                    className="w-full text-center"
                  >
                    Support
                  </Link>
                </Button>

                <Button
                  variant="outline"
                  className="border-2 p-2 w-full sm:w-auto flex items-center justify-center transition-transform transform hover:scale-105"
                >
                  <Link href="/" className="w-full text-center">
                    Home Page
                  </Link>
                </Button>

                <Button
                  variant="outline"
                  className="border-2 p-2 w-full sm:w-auto flex items-center justify-center transition-transform transform hover:scale-105"
                >
                  <Link href="/myaccount" className="w-full text-center">
                    Submit Details
                  </Link>
                </Button>
              </div>
            </CardContent>
          </section>
          <section
            className={`border-gray-200 border-2 rounded ${
              subscription
                ? "bg-green-50"
                : trial
                  ? "bg-yellow-50"
                  : "bg-red-50"
            }`}
          >
            <CardHeader>
              <CardTitle>Subscription</CardTitle>
              <CardDescription>
                Manage your current subscription.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {subscription ? (
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-medium">Plan</div>
                    <div className="text-gray-500 dark:text-gray-400">
                      {subscriptionData.latestOrder.productName}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm font-medium">Renewal Date</div>
                    <div className="text-gray-500 dark:text-gray-400">
                      {new Date(subscriptionData.validity).toLocaleDateString()}
                      .
                    </div>
                  </div>
                </div>
              ) : trial ? (
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-medium">Plan</div>
                    <div className="text-gray-500 dark:text-gray-400">
                      Free Trial
                    </div>
                  </div>
                  <div>
                    <div className="text-sm font-medium">Validity</div>
                    <div className="text-gray-500 dark:text-gray-400">
                      {new Date(trialEndsAt).toLocaleDateString()}.
                    </div>
                  </div>
                </div>
              ) : (
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  You do not have any active subscriptions. Please upgrade to a
                  premium plan.
                </p>
              )}
            </CardContent>
            <CardFooter>
              <Button variant="default" className="border-2 p-2">
                <Link href="/pricing">Upgrade Plan</Link>
              </Button>
            </CardFooter>
          </section>
        </div>
      </div>
      <div className="mt-12">
        <h1 className="text-2xl font-bold">Recently Viewed</h1>
        <p className="text-gray-500 dark:text-gray-400">
          View your recently viewed websites.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
          {filteredTemplates.length === 0 && (
            <div className="col-span-full text-center py-10">
              <p className="text-lg font-semibold text-gray-700">
                You have not viewed any website
              </p>
            </div>
          )}

          {filteredTemplates.map((website, index) => (
            <RecentlyViewedCard
              key={index}
              website={website}
              handleViewDetails={handleViewDetails}
              handleMakeLive={handleMakeLive}
            />
          ))}
        </div>
      </div>
      <MyAccount
        session={session}
        setFetchedUsername={setFetchedUsername}
        fetchedUsername={fetchedUsername}
        setIsSubmitted={setIsSubmitted}
        isSubmitted={isSubmitted}
      />
      <Messages />
      <Support session={session} />
      {showConfetti && <Confetti recycle={false} numberOfPieces={500} />}
    </div>
  );
}

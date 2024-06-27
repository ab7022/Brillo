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
  const [templateStatus, setTemplateStatus] = useState(null);
  const [activeTemplate, setActiveTemplate] = useState<{
    id: string;
    heading: string;
    description: string;
    see: string;
    img: string;
  } | null>(null);
  const [filteredTemplates, setFilteredTemplates] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/templates/findtemplates");
        const templateStatusData = response.data;
        setTemplateStatus(templateStatusData);
        const activeTemplateData =
          TemplateData.find(
            (template) => template.id == templateStatusData.templateId
          ) ?? null;
        setActiveTemplate(activeTemplateData);
      } catch (error) {
        console.error("Error fetching template status:", error);
      }
    };

    fetchData();
  }, []);

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
    try {
      const data = await handlePromiseWithToast(
        axios.post("/api/templates/launch", { templateId }),
        "Preparing to Live",
        "Website is now live!",
        "Error making website live"
      );
      setTemplateStatus(data);
      const activeTemplateData =
        TemplateData.find((template) => template.id == data.templateId) ?? null; // Provide a default value of null if activeTemplateData is undefined
      setActiveTemplate(activeTemplateData);
    } catch (error) {
      console.error("Error making template live:", error);
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
              templateStatus={templateStatus}
              isActive={false}
              handleViewDetails={handleViewDetails}
              handleMakeLive={handleMakeLive}
              handleRemove={handleRemove}
            />
          )}
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
      <MyAccount session={session}/>
      <Support />
      <Messages />
    </div>
  );
}

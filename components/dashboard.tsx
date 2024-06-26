import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import toast from "react-hot-toast";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "./AllTemplates/template8/components/ui/avatar";
import { useEffect, useState } from "react";
import TemplateData from "@/data/templates";
import { useRouter } from "next/navigation";
import axios from "axios";

const handlePromiseWithToast = async (
  promise,
  loadingMessage,
  successMessage,
  errorMessage
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

export default function Component({ session }) {
  const router = useRouter();
  const [templateStatus, setTemplateStatus] = useState(null);
  const [activeTemplate, setActiveTemplate] = useState(null);
  const [filteredTemplates, setFilteredTemplates] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/templates/findtemplates");
        const templateStatusData = response.data;
        setTemplateStatus(templateStatusData);
        const activeTemplateData = TemplateData.find(
          (template) => template.id == templateStatusData.templateId
        );
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

      // Ensure the templates are ordered based on the order in localStorage
      const templatesToShow = ids.map((id) =>
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

  const handleViewDetails = (id) => {
    router.push(`/templates/${id}`);
  };

  const handleMakeLive = async (templateId) => {
    try {
      const data = await handlePromiseWithToast(
        axios.post("/api/templates/launch", { templateId }),
        "Preparing to Live",
        "Website is now live!",
        "Error making website live"
      );
      setTemplateStatus(data);
      const activeTemplateData = TemplateData.find(
        (template) => template.id == data.templateId
      );
      setActiveTemplate(activeTemplateData);
    } catch (error) {
      console.error("Error making template live:", error);
    }
  };

  const handleRemove = async (templateId) => {
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
    <div className="flex flex-col min-h-screen px-6 md:px-12 py-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold">My Websites</h1>
        <p className="text-gray-500 dark:text-gray-400">
          Manage your websites and account settings.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
        {!firstTemplate && (
          <div className="col-span-full text-center py-10">
            <p className="text-lg font-semibold text-gray-700">
              You have not selected any website
            </p>
          </div>
        )}
        {activeTemplate && (
          <Card key={activeTemplate.id} className="border-2 border-gray-200">
            <p className="bg-green-600 text-center py-2 text-white rounded">
              Active
            </p>
            <CardHeader>
              <img
                src={activeTemplate.img}
                alt={activeTemplate.heading}
                width={300}
                height={200}
                className="rounded-md object-cover w-full"
              />
              <CardTitle>{activeTemplate.heading}</CardTitle>
              <CardDescription>{activeTemplate.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm font-medium">Domain</div>
                  <div className="text-gray-500 dark:text-gray-400">
                    acme.com
                  </div>
                </div>
                <div>
                  <div className="text-sm font-medium">Status</div>

                  {templateStatus && templateStatus.status ? (
                    <div className="text-green-500 dark:text-green-400">
                      Active
                    </div>
                  ) : (
                    <div className="text-red-500 dark:text-red-400">
                      Not Active
                    </div>
                  )}
                  <div className="text-green-500 dark:text-green-400"></div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex gap-2 justify-between">
              <Button
                variant="outline"
                className="p-2 border-2"
                onClick={() => handleViewDetails(activeTemplate.id)}
              >
                View Details
              </Button>
              {templateStatus && templateStatus.status ? (
                <Button onClick={() => handleRemove(activeTemplate.id)}>
                  Take Offline
                </Button>
              ) : (
                <Button onClick={() => handleMakeLive(activeTemplate.id)}>
                  Launch Now
                </Button>
              )}
            </CardFooter>
          </Card>
        )}
        {firstTemplate &&
          (!activeTemplate || activeTemplate.id !== firstTemplate.id) && (
            <Card key={firstTemplate.id} className="border-2">
              <CardHeader>
                <img
                  src={firstTemplate.img}
                  alt={firstTemplate.heading}
                  width={300}
                  height={200}
                  className="rounded-md object-cover w-full"
                />
                <CardTitle>{firstTemplate.heading}</CardTitle>
                <CardDescription>{firstTemplate.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-medium">Domain</div>
                    <div className="text-gray-500 dark:text-gray-400">
                      acme.com
                    </div>
                  </div>
                  <div>
                    <div className="text-sm font-medium">Status</div>
                    <div className="text-red-500 dark:text-red-400">
                      Inactive
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex gap-2 justify-between">
                <Button
                  variant="outline"
                  className="p-2 border-2"
                  onClick={() => handleViewDetails(firstTemplate.id)}
                >
                  View Details
                </Button>
                <Button onClick={() => handleMakeLive(firstTemplate.id)}>
                  Launch
                </Button>
              </CardFooter>
            </Card>
          )}
      </div>

      <div className="mt-12">
        <h1 className="text-2xl font-bold">Recently Viewed</h1>
        <p className="text-gray-500 dark:text-gray-400">
          View your recently Viewed websites.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
          {filteredTemplates.length === 0 && (
            <div className="col-span-full text-center py-10">
              <p className="text-lg font-semibold text-gray-700">
                You have not Viewed any website
              </p>
            </div>
          )}

          {filteredTemplates.map((website, index) => (
            <Card key={index} className="border-2">
              <CardHeader>
                <img
                  src={website.img}
                  alt={(website as { heading: string }).heading}
                  width={300}
                  height={200}
                  className="rounded-md object-cover w-full"
                />
                <CardTitle>{website.heading}</CardTitle>
                <CardDescription>{website.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-medium">Domain</div>
                    <div className="text-gray-500 dark:text-gray-400">
                      "acme.com"
                    </div>
                  </div>
                  <div>
                    <div className="text-sm font-medium">Status</div>
                    <div className="text-red-500 dark:text-red-400">
                      Inactive
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex gap-2 justify-between">
                <Button
                  variant="outline"
                  className="p-2 border-2"
                  onClick={() => handleViewDetails(website.id)}
                >
                  View Details
                </Button>

                <Button onClick={() => handleMakeLive(website.id)}>
                  Launch Now
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
      <div className="mt-12">
        <h1 className="text-2xl font-bold">Account Settings</h1>
        <p className="text-gray-500 dark:text-gray-400">
          Manage your profile, password, and subscription.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <Card className="border-gray-100 border-2">
            <CardHeader>
              <CardTitle>Subscription</CardTitle>
              <CardDescription>Manage your subscription plan.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm font-medium">Plan</div>
                  <div className="text-gray-500 dark:text-gray-400">Pro</div>
                </div>
                <div>
                  <div className="text-sm font-medium">Renewal Date</div>
                  <div className="text-gray-500 dark:text-gray-400">
                    June 10, 2024
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="border-2 p-2">
                Upgrade Plan
              </Button>
            </CardFooter>
          </Card>
          <Card className="border-gray-100 border-2">
            <CardHeader>
              <CardTitle>Username</CardTitle>
              <CardDescription>Update your username.</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div>
                  <Label htmlFor="username">Username</Label>
                  <Input
                    id="username"
                    defaultValue="johndoe"
                    className="border-2"
                  />
                </div>
              </form>
            </CardContent>
            <CardFooter>
              <Button>Save Changes</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
      <div className="mt-12">
        <h1 className="text-2xl font-bold">Support</h1>
        <p className="text-gray-500 dark:text-gray-400">
          Get help with your account and platform.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <Card className="border-gray-100 border-2">
            <CardHeader>
              <CardTitle>Contact Us</CardTitle>
              <CardDescription>Submit a support request.</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    defaultValue="John Doe"
                    className="border-2"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    defaultValue="john@acme.com"
                    className="border-2"
                  />
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" rows={3} className="border-2" />
                </div>
              </form>
            </CardContent>
            <CardFooter>
              <Button>Submit</Button>
            </CardFooter>
          </Card>
          <Card className="border-gray-100 border-2">
            <CardHeader>
              <CardTitle>FAQs</CardTitle>
              <CardDescription>Frequently asked questions.</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion>
                <AccordionItem value="faq-1" className="border-b-2">
                  <AccordionTrigger>
                    How do I add a new website?
                  </AccordionTrigger>
                  <AccordionContent>
                    To add a new website, click the "Add Website" button in the
                    "My Websites" section. You'll be prompted to enter your
                    website's domain and other details.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="faq-2" className="border-b-2">
                  <AccordionTrigger>
                    How do I change my password?
                  </AccordionTrigger>
                  <AccordionContent>
                    To change your password, go to the "Account Settings"
                    section and click the "Change Password" card. Enter your
                    current password and a new password, then click "Save\n
                    Changes".
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="faq-3" className="border-b-2">
                  <AccordionTrigger>
                    How do I upgrade my subscription plan?
                  </AccordionTrigger>
                  <AccordionContent>
                    To upgrade your subscription plan, go to the "Account\n
                    Settings" section and click the "Subscription" card. Then
                    click the "Upgrade Plan" button to view the available plans
                    and make your selection.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="mt-12">
        <h1 className="text-2xl font-bold">Messages</h1>
        <p className="text-gray-500 dark:text-gray-400">
          View your recent messages.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <Card className="border-gray-100 border-2">
            <CardHeader>
              <CardTitle>Messages</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start gap-4 border-b-2 pb-2">
                  <Avatar>
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium">John Doe</div>
                    <div className="text-gray-500 dark:text-gray-400">
                      john@example.com
                    </div>
                    <div className="text-sm">
                      Hey there, I wanted to follow up on our previous
                      conversation. Let me know if you have any updates.
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-4 border-b-2 pb-2">
                  <Avatar>
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>SA</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium">Sarah Anderson</div>
                    <div className="text-gray-500 dark:text-gray-400">
                      sarah@example.com
                    </div>
                    <div className="text-sm">
                      I'm interested in learning more about your services. Could
                      we schedule a call this week?
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Avatar>
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>MJ</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium">Michael Johnson</div>
                    <div className="text-gray-500 dark:text-gray-400">
                      michael@example.com
                    </div>
                    <div className="text-sm">
                      I'm having trouble with the latest update. Can you please
                      help me troubleshoot?
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

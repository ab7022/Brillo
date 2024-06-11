"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import Link from "next/link";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export default function Component({ session }: { session: any }) {
  const [recentlyViewed, setRecentlyViewed] = useState([
    {
      title: "Acme Website",
      domain: "acme.com",
      status: "Active",
    },
    {
      title: "Blog",
      domain: "blog.acme.com",
      status: "Active",
    },
    {
      title: "E-commerce",
      domain: "shop.acme.com",
      status: "Active",
    },
    {
      title: "Portfolio",
      domain: "portfolio.acme.com",
      status: "Active",
    },
  ]);
  return (
    <div className="flex flex-col min-h-screen md:mx-24 ml-4">
      <div className="mt-12">
        <h1 className="text-2xl font-bold">Recently Viewed</h1>
        <p className="text-gray-500 dark:text-gray-400">
          View your recently accessed websites.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
          {recentlyViewed.map((website, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{website.title}</CardTitle>
                <CardDescription>
                  Your {website.title.toLowerCase()} for Acme Inc.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-medium">Domain</div>
                    <div className="text-gray-500 dark:text-gray-400">
                      {website.domain}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm font-medium">Status</div>
                    <div className="text-green-500 dark:text-green-400">
                      {website.status}
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <div className="flex gap-2">
                  <Button variant="outline">View</Button>
                  <Button variant="outline">Edit</Button>
                  <Button variant="outline" color="red">
                    Delete
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold">My Websites</h1>
          <p className="text-gray-500 dark:text-gray-400">
            Manage your websites and account settings.
          </p>
        </div>
        <Button className="mt-4 md:mt-0">Add Website</Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {recentlyViewed.map((website, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{website.title}</CardTitle>
              <CardDescription>
                Your {website.title.toLowerCase()} for Acme Inc.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm font-medium">Domain</div>
                  <div className="text-gray-500 dark:text-gray-400">
                    {website.domain}
                  </div>
                </div>
                <div>
                  <div className="text-sm font-medium">Status</div>
                  <div className="text-green-500 dark:text-green-400">
                    {website.status}
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <div className="flex gap-2">
                <Button variant="outline">View</Button>
                <Button variant="outline">Edit</Button>
                <Button variant="outline" color="red">
                  Delete
                </Button>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Quick Links</CardTitle>
            <CardDescription>
              Access important features quickly.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <Link
                href="#"
                className="flex items-center gap-2 rounded-md bg-gray-100 p-4 text-sm font-medium transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
                prefetch={false}
              >
                <PackageIcon className="h-5 w-5" />
                Manage Websites
              </Link>
              <Link
                href="#"
                className="flex items-center gap-2 rounded-md bg-gray-100 p-4 text-sm font-medium transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
                prefetch={false}
              >
                <SettingsIcon className="h-5 w-5" />
                Account Settings
              </Link>
              <Link
                href="#"
                className="flex items-center gap-2 rounded-md bg-gray-100 p-4 text-sm font-medium transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
                prefetch={false}
              >
                <CircleHelpIcon className="h-5 w-5" />
                Support
              </Link>
              <Link
                href="#"
                className="flex items-center gap-2 rounded-md bg-gray-100 p-4 text-sm font-medium transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
                prefetch={false}
              >
                <ZapIcon className="h-5 w-5" />
                Upgrade Plan
              </Link>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Account Settings</CardTitle>
            <CardDescription>
              Manage your profile, password, and subscription.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
            <div className="flex gap-2">
              <Button variant="outline">Update Profile</Button>
              <Button variant="outline">Change Password</Button>
              <Button variant="outline">Upgrade Plan</Button>
            </div>
          </CardFooter>
        </Card>
      </div>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Change Username</CardTitle>
            <CardDescription>Update your username here.</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div>
                <Label htmlFor="username">New Username</Label>
                <Input id="username" value={""} />
              </div>
            </form>
          </CardContent>
          <CardFooter>
            <Button>Save Changes</Button>
          </CardFooter>
        </Card>
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Change Account Details</CardTitle>
            <CardDescription>Update your name and email here.</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input id="name" value={""} />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" value={""} />
              </div>
            </form>
          </CardContent>
          <CardFooter>
            <Button>Save Changes</Button>
          </CardFooter>
        </Card>
      </div>

      <div className="mt-12">
        <h1 className="text-2xl font-bold">Support</h1>
        <p className="text-gray-500 dark:text-gray-400">
          Get help with your account and platform.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Contact Us</CardTitle>
              <CardDescription>Submit a support request.</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" defaultValue="John Doe" />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" defaultValue="john@acme.com" />
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" rows={3} />
                </div>
              </form>
            </CardContent>
            <CardFooter>
              <Button>Submit</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>FAQs</CardTitle>
              <CardDescription>Frequently asked questions.</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion>
                <AccordionItem value="faq-1">
                  <AccordionTrigger>
                    How do I add a new website?
                  </AccordionTrigger>
                  <AccordionContent>
                    To add a new website, click the "Add Website" button in the
                    "My Websites" section. You'll be prompted to enter your
                    website's domain and other details.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="faq-2">
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
                <AccordionItem value="faq-3">
                  <AccordionTrigger>How do I upgrade my plan?</AccordionTrigger>
                  <AccordionContent>
                    To upgrade your plan, go to the "Account Settings" section
                    and click the "Upgrade Plan" card. Select the plan you would
                    like to upgrade to and follow the prompts to complete the
                    process.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="faq-4">
                  <AccordionTrigger>
                    How do I get support for my website?
                  </AccordionTrigger>
                  <AccordionContent>
                    To get support for your website, go to the "Support" section
                    and click the "Contact Us" card. Fill out the form with your
                    issue and a member of our support team will get back to you
                    as soon as possible.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="faq-5">
                  <AccordionTrigger>
                    How do I manage my website settings?
                  </AccordionTrigger>
                  <AccordionContent>
                    To manage your website settings, go to the "My Websites"
                    section and click the "Edit" button for the website you want
                    to manage. From there, you can update your website's domain,
                    status, and other settings.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

function CircleHelpIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
      <path d="M12 17h.01" />
    </svg>
  );
}

function PackageIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m7.5 4.27 9 5.15" />
      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
      <path d="m3.3 7 8.7 5 8.7-5" />
      <path d="M12 22V12" />
    </svg>
  );
}

function SettingsIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function ZapIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
    </svg>
  );
}

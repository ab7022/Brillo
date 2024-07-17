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
import React, { useRef, useState } from "react";
import axios from "axios";
export default function Support({ session }) {
  const nameRef = useRef<HTMLInputElement>();
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const [status, setStatus] = useState("");
  const sessionEmail = session?.user?.email || "";
  const sessionName = session?.user?.name || "";

  const sendEmail = async (e: any) => {
    e.preventDefault();
    setStatus("Sending...");
    const formData = {
      name: nameRef.current?.value,
      email: emailRef.current?.value,
      message: messageRef.current?.value,
    };
    try {
      const res = await axios.post("/api/user/sendsupport", {
        formData,
      });

      if (res.status === 200) {
        setStatus("We will get back to you shortly!");
        nameRef.current.value = "";
        emailRef.current.value = "";
        messageRef.current.value = "";
      } else {
        const errorData = await res.data;
        setStatus(errorData.error || "Error saving form data.");
      }
    } catch (error) {
      setStatus("Error saving form data.");
    }
  };

  return (
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
            <p className="text-black text-center">{status}</p>
            <form className="space-y-4" onSubmit={sendEmail}>
              <div>
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  defaultValue={sessionName}
                  className="border-2"
                  required
                  ref={nameRef}
                />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  ref={emailRef}
                  type="email"
                  required
                  defaultValue={sessionEmail}
                  className="border-2"
                />
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  required
                  rows={3}
                  placeholder="Type your message here"
                  className="border-2"
                  ref={messageRef}
                />
              </div>
              <button type="submit">
                <Button>Submit </Button>
              </button>
            </form>
          </CardContent>
          <CardFooter></CardFooter>
        </Card>
        <Card className="border-gray-100 border-2">
          <CardHeader>
            <CardTitle>FAQs</CardTitle>
            <CardDescription>Frequently asked questions.</CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type="multiple">
              <AccordionItem value="faq-1" className="border-b-2">
                <AccordionTrigger>
                  How do I create a new portfolio?
                </AccordionTrigger>
                <AccordionContent>
                  To create a new portfolio, navigate to the "Templates"
                  section, browse through the available options, select your
                  preferred template, and click "Generate" to start customizing
                  it.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-2" className="border-b-2">
                <AccordionTrigger>
                  Can I customize my portfolio URL?
                </AccordionTrigger>
                <AccordionContent>
                  Yes, you can set a unique URL for your portfolio in the
                  "Username" section of your dashboard.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-3" className="border-b-2">
                <AccordionTrigger>
                  What features are included in the Pro Plan?
                </AccordionTrigger>
                <AccordionContent>
                  The Pro Plan includes up to 3,000 visitors, a dedicated
                  portfolio website, comprehensive analytics, priority 24/7
                  customer support, custom domain integration, professional
                  resume builder, unlimited template access, project image
                  uploads, and visitor tracking.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-4" className="border-b-2">
                <AccordionTrigger>
                  How do I upgrade my subscription plan?
                </AccordionTrigger>
                <AccordionContent>
                  To upgrade your subscription plan, go to the "Pricing" section
                  and choose from the available options.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-5" className="border-b-2">
                <AccordionTrigger>
                  How can I contact customer support?
                </AccordionTrigger>
                <AccordionContent>
                  You can contact customer support by clicking on the "Support"
                  option in the dashboard and filling out the form. Our support
                  team will respond within 24 hours or you can email us directly
                  at{" "}
                  <a href="mailto:support@eazyfolio.com" className="text-md underline font-semibold">
                    support@eazyfolio.com
                  </a>
                  .
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-6" className="border-b-2">
                <AccordionTrigger>
                  What payment methods are accepted?
                </AccordionTrigger>
                <AccordionContent>
                  We accept credit/debit cards and online banking. All
                  transactions are securely processed through Lemon Squeezy.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-7" className="border-b-2">
                <AccordionTrigger>
                  Is there a free trial available?
                </AccordionTrigger>
                <AccordionContent>
                  Yes, sign up now to get a 7-day free trial of our Pro Plan. No
                  credit card is required.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

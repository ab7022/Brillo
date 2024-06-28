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
export default function Support({session}) {

  const nameRef = useRef<HTMLInputElement>();
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const [status, setStatus] = useState("");
  const sessionEmail= session?.user?.email || ""
  const sessionName= session?.user?.name || ""
  
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
                  type="email" required
                  defaultValue={sessionEmail}
                  className="border-2"
                />
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" required rows={3} placeholder="Type your message here" className="border-2" ref={messageRef}/>
              </div>
              <button type="submit">
                <Button>Submit </Button>
                </button>

            </form>
          </CardContent>
          <CardFooter>
          </CardFooter>
        </Card>
        <Card className="border-gray-100 border-2">
          <CardHeader>
            <CardTitle>FAQs</CardTitle>
            <CardDescription>Frequently asked questions.</CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type="multiple">
              <AccordionItem value="faq-1" className="border-b-2">
                <AccordionTrigger>How do I add a new website?</AccordionTrigger>
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
                  To change your password, go to the "Account Settings" section
                  and click the "Change Password" card. Enter your current
                  password and a new password, then click "Save\n Changes".
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
  );
}

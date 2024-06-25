/**
 * v0 by Vercel.
 * @see https://v0.dev/t/Z93CyoNCjnN
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
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
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "./AllTemplates/template8/components/ui/avatar";

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen px-6 md:px-12 py-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold">My Websites</h1>
        <p className="text-gray-500 dark:text-gray-400">
          Manage your websites and account settings.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <Card className="border-gray-100 border-2">
          <CardHeader>
            <img
              src="/placeholder.svg"
              alt="Acme Website"
              width={300}
              height={200}
              className="rounded-t-lg object-cover w-full"
            />
            <CardTitle>Acme Website</CardTitle>
            <CardDescription>
              Your primary website for Acme Inc.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm font-medium">Domain</div>
                <div className="text-gray-500 dark:text-gray-400">acme.com</div>
              </div>
              <div>
                <div className="text-sm font-medium">Status</div>
                <div className="text-green-500 dark:text-green-400">Active</div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex flex-row gap-2">

            <div className="flex justify-start"><Button variant="outline" className="p-2 border-2">
              View Details
            </Button></div>
            <div className="flex justify-end"><Button variant="outline" className="p-2 border-2  mr-2">
              Preview
            </Button>
            <Button>Make Live</Button></div>

            
          </CardFooter>
        </Card>
        
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

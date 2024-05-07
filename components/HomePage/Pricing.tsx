import { CardContent, Card } from "@/components/ui/card";
import { CheckIcon } from "lucide-react";
import Link from "next/link";

export default function Pricing() {
  return (
    <section className="py-12 md:py-24 lg:py-32  bg-gradient-to-tl from-purple-950/10  via-violet-950/60 to-purple-900/10">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter text-gray-50 sm:text-4xl md:text-5xl">
              Pricing
            </h2>
            <p className="text-gray-400 md:text-xl">
              Choose from our affordable pricing plans to find the perfect fit
              for your needs.
            </p>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 ">
            <Card className="group overflow-hidden rounded-lg bg-gray-900/10 p-4 text-left transition-all hover:bg-gray-900/10 h-full w-full bg-gray-600 bg-clip-padding backdrop-filter  backdrop-blur-lg bg-opacity-20 backdrop-saturate-300 backdrop-contrast-100 drop-shadow-2xl shadow-md shadow-gray-600">
              <CardContent className="space-y-4 ">
                <h3 className="text-2xl font-bold text-gray-50">Freemium</h3>
                <p className="text-gray-400">Free plan for testing purpose</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-gray-50">$0</span>
                  <span className="text-sm text-gray-400">/Month</span>
                </div>
                <ul className="space-y-2">
                  <li className="text-gray-200">
                    <CheckIcon className="mr-2 inline-block h-4 w-4 text-green-500" />
                    20 GB storage
                  </li>{" "}
                  <li className="text-gray-200">
                    {" "}
                    <CheckIcon className="mr-2 inline-block h-4 w-4 text-green-500" />
                    15 days Validity
                  </li>
                  <li className="text-gray-600">Custom domain</li>
                  <li className="text-gray-600">Resume Generation</li>
                  <li className="text-gray-600">Customer Support</li>
                  <li className="text-gray-600">Analytics</li>
                  <li className="text-gray-600">Ai Features</li>
                  <li className="text-gray-600">SEO Optimization</li>
                  <li className="text-gray-600">Extra customisation</li>
                  <li className="text-gray-600">Developer Support</li>
                  <li className="h-1"></li>
                </ul>
                <Link
                  className="inline-flex h-10 items-center justify-center rounded-md bg-[#2563eb] px-6 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-[#1e40af] "
                  href="#"
                >
                  Get Started
                </Link>
              </CardContent>
            </Card>
            <Card className="shadow-md shadow-gray-600 group overflow-hidden rounded-lg bg-gray-900/10 p-4 text-left  transition-all hover:bg-gray-900/10 h-full w-full bg-gray-600 bg-clip-padding backdrop-filter  backdrop-blur-lg bg-opacity-20 backdrop-saturate-300 backdrop-contrast-100">
              <CardContent className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-50">Pro</h3>
                <p className="text-gray-400">
                  Perfect for individuals and students{" "}
                </p>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-gray-50">$5</span>
                  <span className="text-sm text-gray-400">/Month</span>
                </div>
                <ul className=" text-gray-400 space-y-2">
                  <li className="text-gray-200">
                    {" "}
                    <CheckIcon className="mr-2 inline-block h-4 w-4 text-green-500" />
                    2 Live websites
                  </li>
                  <li className="text-gray-200">
                    {" "}
                    <CheckIcon className="mr-2 inline-block h-4 w-4 text-green-500" />
                    1 Month Validity
                  </li>
                  <li className="text-gray-200">
                    {" "}
                    <CheckIcon className="mr-2 inline-block h-4 w-4 text-green-500" />
                    Custom domain
                  </li>
                  <li className="text-gray-200">
                    {" "}
                    <CheckIcon className="mr-2 inline-block h-4 w-4 text-green-500" />
                    Resume Generation
                  </li>
                  <li className="text-gray-200">
                    {" "}
                    <CheckIcon className="mr-2 inline-block h-4 w-4 text-green-500" />
                    Customer Support
                  </li>
                  <li className="text-gray-200">
                    {" "}
                    <CheckIcon className="mr-2 inline-block h-4 w-4 text-green-500" />
                    Analytics
                  </li>
                  <li className="text-gray-600">Ai Features</li>
                  <li className="text-gray-600">SEO Optimization</li>
                  <li className="text-gray-600">Extra customisation</li>
                  <li className="text-gray-600">Developer Support</li>

                  <li className="h-1"></li>
                </ul>
                <Link
                  className="inline-flex h-10 items-center justify-center rounded-md bg-[#2563eb] px-6 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-[#1e40af] "
                  href="#"
                >
                  Get Started
                </Link>
              </CardContent>
            </Card>

            <Card className=" shadow-md shadow-gray-600 group overflow-hidden rounded-lg bg-gray-900/10 p-4 text-left  transition-all hover:bg-gray-900/10 h-full w-full bg-gray-600 bg-clip-padding backdrop-filter  backdrop-blur-lg bg-opacity-20 backdrop-saturate-300 backdrop-contrast-100">
              <CardContent className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-50">Premium</h3>
                <p className="text-gray-400">
                  Suitable for freelancers and working professionals.
                </p>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-gray-50">$40</span>
                  <span className="text-sm text-gray-400">/Year</span>
                </div>
                <ul className="space-y-2 text-gray-200">
                  <li>
                    {" "}
                    <CheckIcon className="mr-2 inline-block h-4 w-4 text-green-500" />
                    5 Live websites
                  </li>
                  <li>
                    {" "}
                    <CheckIcon className="mr-2 inline-block h-4 w-4 text-green-500" />
                    1 Year Validity
                  </li>
                  <li>
                    {" "}
                    <CheckIcon className="mr-2 inline-block h-4 w-4 text-green-500" />
                    Custom domain
                  </li>
                  <li>
                    {" "}
                    <CheckIcon className="mr-2 inline-block h-4 w-4 text-green-500" />
                    Resume Generation
                  </li>
                  <li>
                    {" "}
                    <CheckIcon className="mr-2 inline-block h-4 w-4 text-green-500" />
                    24*7 Customer Support
                  </li>
                  <li>
                    {" "}
                    <CheckIcon className="mr-2 inline-block h-4 w-4 text-green-500" />
                    Analytics
                  </li>
                  <li>
                    {" "}
                    <CheckIcon className="mr-2 inline-block h-4 w-4 text-green-500" />
                    Ai Features
                  </li>
                  <li>
                    {" "}
                    <CheckIcon className="mr-2 inline-block h-4 w-4 text-green-500" />
                    SEO Optimization
                  </li>
                  <li>
                    {" "}
                    <CheckIcon className="mr-2 inline-block h-4 w-4 text-green-500" />
                    Extra customisation
                  </li>
                  <li>
                    {" "}
                    <CheckIcon className="mr-2 inline-block h-4 w-4 text-green-500" />
                    Developer Support
                  </li>
                  <li className="h-1"></li>
                </ul>
                <Link
                  className="inline-flex h-10 items-center justify-center rounded-md bg-[#2563eb] px-6 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-[#1e40af] "
                  href="#"
                >
                  Get Started
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

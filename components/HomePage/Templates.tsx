import Link from "next/link";
import { CardContent, Card } from "@/components/ui/card";
export default function Templates() {
    return(
        <section className="py-12 md:py-24 lg:py-32 bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-slate-900/5 via-purple-700/30 to-slate-900/5 h-screen flex justify-center items-center">
<div className="container px-4 md:px-6">
  <div className="mx-auto max-w-4xl text-center">
    <div className="space-y-4">
      <h2 className="text-3xl font-bold tracking-tighter text-gray-50 sm:text-4xl md:text-5xl">
        Customizable Templates
      </h2>
      <p className="text-gray-400 md:text-xl">
        Choose from a variety of professionally designed templates to
        create a portfolio that reflects your unique style and brand.
      </p>
    </div>
    <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 ">
      <Card className="group overflow-hidden rounded-lg ">
        {/* <Link className="absolute inset-0 z-10" href="#">
          <span className="sr-only text-orange-400">
            View Minimal Template
          </span>
        </Link> */}
        <img
          alt="Minimal Template"
          className="aspect-[4/3] w-full object-cover transition-all group-hover:scale-105"
          height="300"
          src="/placeholder.svg"
          width="400"
        />
        <CardContent className="p-4">
          <h3 className="text-lg font-semibold text-gray-700">
            Minimal
          </h3>
          <p className="text-sm text-gray-400">
            A clean and modern design.
          </p>
        </CardContent>
      </Card>
      <Card className="group overflow-hidden rounded-lg">
        {/* <Link className="absolute inset-0 z-10" href="#">
          <span className="sr-only">View Creative Template</span>
        </Link> */}
        <img
          alt="Creative Template"
          className="aspect-[4/3] w-full object-cover transition-all group-hover:scale-105"
          height="300"
          src="/placeholder.svg"
          width="400"
        />
        <CardContent className="p-4">
          <h3 className="text-lg font-semibold text-gray-700">
            Creative
          </h3>
          <p className="text-sm text-gray-400">
            A visually striking design.
          </p>
        </CardContent>
      </Card>
      <Card className="group overflow-hidden rounded-lg">
        {/* <Link className="absolute inset-0 z-10" href="#">
          <span className="sr-only">View Professional Template</span>
        </Link> */}
        <img
          alt="Professional Template"
          className="aspect-[4/3] w-full object-cover transition-all group-hover:scale-105"
          height="300"
          src="/placeholder.svg"
          width="400"
        />
        <CardContent className="p-4">
          <h3 className="text-lg font-semibold text-gray-700">
            Professional
          </h3>
          <p className="text-sm text-gray-400">
            A sleek and polished design.
          </p>
        </CardContent>
      </Card>
    </div>
  </div>
</div>
</section>
    )
}

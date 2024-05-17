import { CardContent, Card } from "@/components/ui/card";
import sphere from "../../public/4-small.png";

export default function Showcase() {
  return (
    <>
      {" "}
      <section className="py-12 md:py-24 lg:py-32 bg-gradient-to-l from-slate-900/10 via-purple-900/80 to-slate-900/10 h-screen flex justify-center">
        <div className="container px-4 md:px-6 flex justify-center items-center">
          <div className="mx-auto max-w-4xl">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter text-center text-gray-50 sm:text-4xl md:text-5xl">
                Showcase Your Work
              </h2>
              <p className="text-gray-400 md:text-xl text-center">
                Upload your best work samples, add descriptions, and let your
                portfolio shine. Our builder makes it easy to present your
                projects in a visually appealing way.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
              <Card className="group overflow-hidden rounded-lg">
                {/* <Link className="absolute inset-0 z-10" href="#">
                  <span className="sr-only">View Project 1</span>
                </Link> */}
                <img
                  alt="Project 1"
                  className="aspect-[4/3] w-full object-cover transition-all group-hover:scale-105"
                  height="300"
                  src="/placeholder.svg"
                  width="400"
                />
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold text-gray-50">
                    Project 1
                  </h3>
                  <p className="text-sm text-gray-400">
                    A description of the project.
                  </p>
                </CardContent>
              </Card>
              <Card className="group overflow-hidden rounded-lg">
                {/* <Link className="absolute inset-0 z-10" href="#">
                  <span className="sr-only">View Project 2</span>
                </Link> */}
                <img
                  alt="Project 2"
                  className="aspect-[4/3] w-full object-cover transition-all group-hover:scale-105"
                  height="300"
                  src="/placeholder.svg"
                  width="400"
                />
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold text-gray-50">
                    Project 2
                  </h3>
                  <p className="text-sm text-gray-400">
                    A description of the project.
                  </p>
                </CardContent>
              </Card>
              <Card className="group overflow-hidden rounded-lg">
                {/* <Link className="absolute inset-0 z-10" href="#">
                  <span className="sr-only">View Project 3</span>
                </Link> */}
                <img
                  alt="Project 3"
                  className="aspect-[4/3] w-full object-cover transition-all group-hover:scale-105"
                  height="300"
                  src="/placeholder.svg"
                  width="400"
                />
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold text-gray-50">
                    Project 3
                  </h3>
                  <p className="text-sm text-gray-400">
                    A description of the project.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <div className="relative inset-x-1/3 inset-y-80 inset-full ">
        <img
          src={sphere.src}
          className="w-2/6 absolute animate-spin remove-bg opacity-20"
        />
      </div>
    </>
  );
}

import Link from "next/link";

export default function Template() {
    return(
        <div className="bg-slate-950/90 rounded-lg shadow-lg overflow-hidden  border-gray-800 border-2 shadow-gray-800">
        <div className="relative h-[200px] sm:h-[250px] lg:h-[300px]  ">
          <img
            alt="Classic Theme"
            className="object-cover w-full h-full"
            height="300"
            src="/placeholder.svg"
            style={{
              aspectRatio: "450/300",
              objectFit: "cover",
            }}
            width="450"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent" />
          <div className="absolute bottom-4 left-4 text-gray-50 ">
            <h3 className="text-xl font-bold">Modern</h3>
            <p className="text-sm">A sleek and minimalistic theme</p>
          </div>
        </div>
        <div className="p-6">
          <div className="flex justify-between">
            <Link
              className="inline-flex h-9 items-center justify-center rounded-md bg-gray-50 px-4 text-sm font-medium text-gray-950 shadow transition-colors hover:bg-gray-50/90 "
              href="#"
            >
              See Now
            </Link>
            <Link
              className="inline-flex h-9 items-center justify-center rounded-md border border-gray-200  bg-gray-950 px-4 text-sm font-medium shadow-sm transition-colors hover:bg-gray-800 hover:text-gray-50 focus-visible:outline-none focus-visible:ring-1 text-gray-50 focus-visible:ring-gray-300 disabled:pointer-events-none disabled:opacity-50"
              href="#"
            >
              Use Now
            </Link>
          </div>
        </div>
      </div>
    )
}
import Link from "next/link";

export function Template({
  id,
  heading,
  description,
  link,
  see,
  img,
}: {
  id: number;
  heading: string;
  description: string;
  link: string;
  see: string;
  img: string;
}) {
  return (
    <div>
      <div className="bg-slate-900/30 rounded-md shadow-lg overflow-hidden shadow-gray-900 border-2 border-gray-900">
        <div className="relative h-[200px] sm:h-[250px] lg:h-[300px]">
          <img
            alt="Classic Theme"
            className="object-cover w-full h-full"
            height="300"
            src={img}
            style={{
              aspectRatio: "450/300",
              objectFit: "cover",
            }}
            width="450"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent" />
          <div className="absolute bottom-4 left-4 text-gray-50 dark:text-gray-50">
            <h3 className="text-xl font-bold">{heading}</h3>
            <p className="text-sm">{description}</p>
          </div>
        </div>
        <div className="md:p-6 p-4">
          <div className="flex justify-between gap-2">
            <Link
              className="inline-flex h-9 py-6 items-center justify-center rounded-md bg-gray-50 px-4 text-sm font-medium text-gray-950 shadow transition-colors hover:bg-gray-50/90 "
              href={see}
              target="_"
            >
              See Demo
            </Link>
            <Link
              className="inline-flex h-9 py-6 items-center justify-center rounded-md border border-gray-500  bg-gray-950 px-4 text-sm font-medium shadow-sm transition-colors hover:bg-gray-800 hover:text-gray-50 text-gray-300 "
              href={link}
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

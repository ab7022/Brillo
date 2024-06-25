import Image from "next/image";
import { MotionConfig, motion } from "framer-motion";
import Link from "next/link";
import { PiArrowUpRight } from "react-icons/pi";

const Music = ({city,country}) => {

  return (
    <div className="col-span-1 row-span-1 rounded-2xl p-8 flex flex-col space-y-2 bg-neutral-100 bg-opacity-75 justify-between">
      <div className="flex flex-row items-center space-x-2 font-normal text-xl lg:text-2xl text-teal-900">
        <div>My Location</div>
 
        {/* <Image src="/spotify.svg" width={32} height={32} alt="Spotify Logo"/> */}
      </div>
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-col space-y-1">
          <div className="text-slate-600 text-2xl">{city} , {country}</div>
          {/* <div className="text-slate-400">Taylor Swift</div> */}
        </div>
        {/* <Link
          className="group flex flex-row items-center p-2 rounded-full border border-slate-300 transition-all duration-200 ease-in-out hover:ring hover:ring-slate-300 hover:border-slate-600"
          href="https://open.spotify.com/track/1fo2ctLqj3zBhRQKOXprol?si=616958a98ed2439e"
          rel="noreferrer noopener"
          target="_blank"
        >
          <PiArrowUpRight className="text-slate-600 " />
        </Link> */}
      </div>
    </div>
  );
};

export default Music;

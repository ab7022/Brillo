import { motion } from "framer-motion";
import Image from "next/image";
import aero from "@/components/AllTemplates/template10/public/aero.svg"
import figma from "@/components/AllTemplates/template10/public/figma.svg"
import keynote from "@/components/AllTemplates/template10/public/keynote.svg"
import stager from "@/components/AllTemplates/template10/public/stager.svg"

const TechStack = () => {
  return (
    <div className="col-span-1 row-span-1 rounded-2xl p-8 flex flex-col space-y-2 bg-neutral-100 bg-opacity-75 justify-between">
      <div className="text-xl lg:text-2xl text-teal-900 font-normal">
        Tools I Use
      </div>
      <motion.div className="flex flex-row space-x-2 w-full items-center">
        <Image
          width={64}
          height={64}
          src={stager}
          alt="Adobe Stager Substance Logo"
        />
         <Image width={64} height={64} src={aero} alt="Adobe Aero Logo" />
        <Image width={64} height={64} src={figma} alt="Figma Logo" />
        <Image width={64} height={64} src={keynote} alt="Keynote Logo" />
      </motion.div>
    </div>
  );
};

export default TechStack;

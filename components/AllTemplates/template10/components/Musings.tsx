import Link from "next/link";
import Image from "next/image";
import { PiArrowUpRight } from "react-icons/pi";
import {
  AnimatePresence,
  LayoutGroup,
  MotionConfig,
  motion,
} from "framer-motion";
import { useState } from "react";
import thoughts from "@/components/AllTemplates/template10/public/thoughts.svg"

const Musings = () => {
  const [hover, setHover] = useState(false);

  return (
    <MotionConfig
      transition={{
        type: "spring",
        duration: 0.4,
        damping: 30,
        stiffness: 200,
        delay: 0.001
      }}
    >
      <LayoutGroup>
        <div className="col-span-2 p-8 row-span-2 w-full h-full flex flex-col space-y-8 justify-between bg-neutral-100 rounded-2xl">
          <div className="flex flex-row space-x-2 items-center text-xl lg:text-2xl text-teal-900 font-normal">
            <div> Latest Musings</div>
            <Image
              src={thoughts}
              alt="Thought bubble doodle"
              width={32}
              height={32}
            />
          </div>
          <div className="grid grid-flow-row gap-y-2 divide-y divide-dotted divide-slate-300 text-slate-400">
            <div className="text-slate-600">
              In the colorful realm of design, the Rule of Thirds emerges as a
              quiet superstar.
            </div>
            <div>
              From my experience as a UI/UX designer, I have come to see its
              subtle but
            </div>
            <div>
              significant influence. It is like a secret ingredient that adds
              that extra flavor
            </div>
            <div>to your design palette.</div>
          </div>
          <LayoutGroup id="musings-button-layout-group">
            <AnimatePresence mode="popLayout">
              <motion.a
                onHoverStart={() => setHover(true)}
                onHoverEnd={() => setHover(false)}
                layoutRoot
                layout
                style={{borderWidth: "1px", borderRadius: "9999px"}}
                className="group mr-8 flex flex-row w-fit text-sm space-x-1 items-center p-2 border-slate-300 transition-all duration-200 ease-in-out hover:ring hover:ring-slate-300 hover:border-slate-600"
                href="https://www.apple.com/iphone-14-pro/"
                rel="noreferrer noopener"
                target="_blank"
              >
                <AnimatePresence mode="popLayout">
                  {hover && (
                    <motion.div
                      // style={{ display: hover ? "flex" : "hidden" }}
                      key="musings-button-text"
                      layout
                      initial={{ translateX: -10, opacity: 0 }}
                      animate={{ translateX: 0, opacity: 1 }}
                      exit={{ translateX: 10, opacity: 0 }}
                      // transition={{ transitionDelay: 0.4 }}
                      className="w-full line-clamp-1 text-xs"
                    >
                      Read it on Medium
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* <AnimatePresence> */}
                <motion.div layout>
                  <PiArrowUpRight className="text-slate-600 h-fit w-fit text-base" />
                </motion.div>
                {/* </AnimatePresence> */}
              </motion.a>
            </AnimatePresence>
          </LayoutGroup>
        </div>
      </LayoutGroup>
    </MotionConfig>
  );
};

export default Musings;

import { buttonsData } from "@/components/AllTemplates/template1/components/dummyData";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <section className="relative overflow-hidden py-8">
      <div className="container relative z-10 mx-auto px-4">
        <div className="-my-8 flex flex-wrap items-center justify-center md:justify-between">
          <div className="w-auto px-4 md:px-8 py-0 md:py-8 ">
            <Link href="/">
              <div className="inline-flex items-center">
                <span className="ml-4 text-lg font-bold">DevFolio</span>
              </div>
            </Link>
          </div>
          <div className="w-auto px-4 md:px-8 py-0 md:py-8">
            <div className="-m-1.5 flex flex-wrap">
              {buttonsData.map((item) => (
                <div className="w-auto p-1.5" key={item.id}>
                  <a href={item.url} target="_blank" rel="noreferrer">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 hover:border-gray-400">
                      <item.icon size={20} />
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;

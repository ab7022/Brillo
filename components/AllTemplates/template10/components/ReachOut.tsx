import Image from "next/image";
import chat from "@/components/AllTemplates/template10/public/chat.svg";
import mail from "@/components/AllTemplates/template10/public/mail.svg";
import phonePic from "@/components/AllTemplates/template10/public/phone.svg";
import twitterPic from "@/components/AllTemplates/template10/public/Twitter.svg";
import githubPic from "@/components/AllTemplates/template10/public/github.svg";
import Link from "next/link";

const ReachOut = ({ socialProfiles }) => {
  const twitter = socialProfiles?.[0]?.twitter || "";
  const linkedin = socialProfiles?.[0]?.linkedin || "";
  const github = socialProfiles?.[0]?.github || "";
  const email = socialProfiles?.[0]?.email || "";
  const phone = socialProfiles?.[0]?.phone || "";

  return (
    <div className="group col-span-2 p-8 row-span-1 flex flex-col space-y-8 bg-neutral-100 rounded-2xl">
      {" "}
      <div className="flex flex-row space-x-2 items-center text-xl lg:text-2xl text-teal-900 font-normal">
        <div>Reach Out</div>
        <Image src={chat} alt="Thought bubble doodle" width={32} height={32} />
      </div>
      <div className="flex flex-row space-x-4 justify-around items-center h-full">
        {email && (
          <Link href={`mailto:${email}`}>
            <button className="flex flex-col space-y-2 items-center transition-all duration-200 ease-in-out hover:opacity-100 w-fit h-fit hover:drop-shadow-lg">
              <Image src={mail} width={64} height={64} alt="Mail Icon" />
            </button>
          </Link>
        )}
        {phone && (
          <Link href={`tel:${phone}`}>
            <button className="flex flex-col space-y-2 items-center transition-all duration-200 ease-in-out hover:opacity-100 w-fit h-fit hover:drop-shadow-lg">
              <Image src={phonePic} width={64} height={64} alt="Phone Icon" />
            </button>
          </Link>
        )}
        {twitter && (
          <Link href={twitter}>
            <button className="flex flex-col space-y-2 items-center transition-all duration-200 ease-in-out hover:opacity-100 w-fit h-fit hover:drop-shadow-lg">
              <Image
                src={twitterPic}
                width={64}
                height={64}
                alt="X (formerly Twitter) Icon"
              />
            </button>
          </Link>
        )}
        {github && (
          <Link href={github}>
            <button className="flex flex-col space-y-2 items-center transition-all duration-200 ease-in-out hover:opacity-100 w-fit h-fit hover:drop-shadow-lg">
              <Image src={githubPic} width={64} height={64} alt="GitHub Icon" />
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default ReachOut;

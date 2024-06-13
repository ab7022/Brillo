
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { IoDocumentTextSharp } from "react-icons/io5";
import Link from "next/link";
function Footer({basicInfo,socialProfiles}) {
  const twitter = socialProfiles?.[0]?.twitter || "";
  const linkedin = socialProfiles?.[0]?.linkedin || "";
  const github = socialProfiles?.[0]?.github || "";
  const email = socialProfiles?.[0]?.email || "";
  const firstName = basicInfo?.[0]?.first_name || "";
  const lastName = basicInfo?.[0]?.last_name || "";
  const buttonsData = [
    {
      id: 1,
      label: "GitHub",
      icon: FaGithub,
      url: github,
    },
    {
      id: 2,
      label: "LinkedIn",
      icon: FaLinkedin,
      url: linkedin,
    },
    {
      id: 3,
      label: "Twitter",
      icon: FaTwitter,
      url: twitter,
    },
    {
      id: 4,
      label: "Resume",
      icon: IoDocumentTextSharp,
      url: "https://drive.google.com/file/d/1Wha7q3drOyVfYufRTM7cCIuetimf6eld/view",
    },
    {
      id: 5,
      label: "Email",
      icon: TfiEmail,
      url: `mailto:${email}`,
    },
  ];
  const filteredButtonsData = buttonsData.filter((item) => item.url);
  return (
    <section className="relative bg-black overflow-hidden py-8">
      <div className="container relative z-10 mx-auto px-4 text-white">
        <div className="-my-8 flex flex-wrap items-center justify-center md:justify-between">
          <div className="w-auto px-4 md:px-8 py-0 md:py-8 ">
            <Link href="/">
              <div className="inline-flex items-center">
                <span className="ml-4 text-lg font-bold">{firstName} {lastName}</span>
              </div>
            </Link>
          </div>
          <div className="w-auto px-4 md:px-8 py-0 md:py-8">
            <div className="-m-1.5 flex flex-wrap">
              {filteredButtonsData.map((item) => (
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

import curvedArrow from "@/components/AllTemplates/template7/assets/img/curved-arrow.svg";
import randomLines from "@/components/AllTemplates/template7/assets/img/random-lines.svg";
import Image from "next/image";
import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaFacebookMessenger,
} from "react-icons/fa";

function Home({ socialProfiles, basicInfo }) {
  const firstName = basicInfo?.[0]?.first_name || "";
  const lastName = basicInfo?.[0]?.last_name || "";
  const designation = basicInfo?.[0]?.designation || "";
  const twitter = socialProfiles?.[0]?.twitter || "";
  const linkedin = socialProfiles?.[0]?.linkedin || "";
  const github = socialProfiles?.[0]?.github || "";
  const email = socialProfiles?.[0]?.email || "";
  const profile = basicInfo?.[0]?.profile || "";
  const shortIntro = basicInfo?.[0]?.shortintro || "";

  return (
    <section
      className="home section h-screen flex justify-center items-center"
      id="home"
    >
      <div className="home__container my-auto grid justify-center items-center">
        <h1 className="text-5xl md:text-7xl flex justify-center items-center font-bold tracking-widest  mx-auto">
          {firstName} {lastName}
        </h1>

        <div className="home__info flex justify-center items-center my-auto">
          <p className="home__description md:mt-36">
            <b>{designation}</b> {shortIntro}
            <div className="flex flex-row mt-4 gap-x-4 mx-auto justify-center items-center">
              {linkedin.length > 0 && (
                <a
                  href={linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className=""
                >
                  <FaLinkedin />
                </a>
              )}
              {github.length > 0 && (
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className=""
                >
                  <FaGithub />
                </a>
              )}
              {twitter.length > 0 && (
                <a
                  href={twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className=""
                >
                  <FaTwitter />
                </a>
              )}
              {email.length > 0 && (
                <a
                  href={`mailto:${email}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className=""
                >
                  <FaFacebookMessenger />
                </a>
              )}
            </div>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Home;

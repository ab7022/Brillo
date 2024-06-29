import curvedArrow from "@/components/AllTemplates/template7/assets/img/curved-arrow.svg";
import randomLines from "@/components/AllTemplates/template7/assets/img/random-lines.svg";
import Image from "next/image";
import { FaLinkedin, FaGithub, FaTwitter, FaFacebookMessenger } from "react-icons/fa";

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
    <section className="home section" id="home">
      <div className="home__container  grid">
      <h1 className="text-5xl md:text-7xl font-bold tracking-widest">
          {firstName} {lastName}
        </h1> 

        <div className="home__profile ">
          <div className="home__image ">
            {profile && <Image src={profile} width={600} height={1000} alt="profile image" className="home__img" />}
            <div className="home__shadow"></div>
            <Image src={curvedArrow} alt="curved arrow" className="home__arrow" />
            <Image src={randomLines} alt="random lines" className="home__line" />
            <div className="geometric-box"></div>
          </div>

          <div className="relative w-full justify-center">
            {linkedin && (
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className=""
              >
                <FaLinkedin />
              </a>
            )}
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className=""
              >
                <FaGithub />
              </a>
            )}
            {twitter && (
              <a
                href={twitter}
                target="_blank"
                rel="noopener noreferrer"
                className=""
              >
                <FaTwitter />
              </a>
            )}
            {email && (
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
        </div>

        <div className="home__info">
          <p className="home__description">
            <b>{designation}</b> {shortIntro}
          </p>
          <a href="#about" className="home__scroll">
            <div className="home__scroll-box">
              <i className="ri-arrow-down-s-line"></i>
            </div>
            <span className="home__scroll-text">Scroll Down</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home;

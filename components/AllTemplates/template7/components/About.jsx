import randomLines from "@/components/AllTemplates/template7/assets/img/random-lines.svg";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";

function About({ intro, skill, linkedin }) {
  const software_proficiency = skill?.[0]?.software_proficiency;
  const programming_technical_skills = skill?.[0]?.programming_technical_skills;
  const language_soft_skills = skill?.[0]?.language_soft_skills;
  const interests_others_skills = skill?.[0]?.interests_others_skills;
  return (
    <section className="about section" id="about">
      <div className="about__container  grid">
        <h2 className="section__title-1">
          <span>About Me</span>
        </h2>

        <div className="about__profile">
          <div className="about__image">
            <div className="about__shadow"></div>
            <div className="geometric-box"></div>
            <Image src={randomLines} alt="" className="about__line" />
            <div className="about__box"></div>
          </div>
        </div>

        <div className="about__info relative z-50">
          <p className="about__description">{intro}</p>
          <ul className="about__list">
            {programming_technical_skills && (
              <li className="about__item mb-4">
                <b>My Programming & Technical Skills:</b>{" "}
                {programming_technical_skills}
              </li>
            )}
            {software_proficiency && (
              <li className="about__item mb-4">
                <b>Software Proficiency:</b> {software_proficiency}
              </li>
            )}

            {language_soft_skills && (
              <li className="about__item mb-4">
                <b>Language & Soft Skills:</b> {language_soft_skills}
              </li>
            )}
            {interests_others_skills && (
              <li className="about__item mb-4">
                <b>Interests Others Skills:</b> {interests_others_skills}
              </li>
            )}
          </ul>
          {linkedin && (
            <div className="about__buttons">
              <a href="#contact" className="button">
                <i className="ri-send-plane-line"></i>
                Contact Me
              </a>
              <a target="_blank" href={linkedin} className="button__ghost">
                <FaLinkedin />
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default About;

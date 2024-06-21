import aboutProfile from "@/components/AllTemplates/template7/assets/img/about.jpg";
import randomLines from "@/components/AllTemplates/template7/assets/img/random-lines.svg";
import Image from 'next/image'
function About() {
  return (
    <section className="about section" id="about">
      <div className="about__container container grid">
        <h2 className="section__title-1">
          <span>About Me</span>
        </h2>

        <div className="about__profile">
          <div className="about__image">
            <Image src={aboutProfile} alt="image" className="about__img" />
            <div className="about__shadow"></div>
            <div className="geometric-box"></div>
            <Image src={randomLines} alt="" className="about__line" />
            <div className="about__box"></div>
          </div>
        </div>

        <div className="about__info">
          <p className="about__description">
            Hello there! I'm <b>Kartik Labhshetwar</b>, a passionate{" "}
            <b>full stack developer</b> with a passion for building intuitive and efficient web applications. With a strong foundation in{" "}
            <b>web development</b> and a background in{" "}
            <b>software engineering</b>, I thrive on the intersection of
            creativity and technical expertise.
          </p>
          <ul className="about__list">
            <li className="about__item">
            <b>My Skills Are:</b> HTML, CSS, JavaScript, 
                            Java, React, Git & GitHub, Bootstrap, Node.js, Express.js, PostgreSQL, Tailwind CSS.
            </li>
          </ul>

          <div className="about__buttons">
            <a href="#contact" className="button">
              <i className="ri-send-plane-line"></i>
              Contact Me
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/kartik017/"
              className="button__ghost"
            >
              <i className="ri-linkedin-box-line"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

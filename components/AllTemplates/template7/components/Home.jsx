import homeProfile from "@/components/AllTemplates/template7/assets/img/profile-pic.jpg";
import curvedArrow from "@/components/AllTemplates/template7/assets/img/curved-arrow.svg";
import randomLines from "@/components/AllTemplates/template7/assets/img/random-lines.svg";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa"; // FontAwesome LinkedIn icon
import { FaGithub } from "react-icons/fa"; // FontAwesome GitHub icon
import { FaTwitter } from "react-icons/fa"; // FontAwesome Twitter icon
import { FaInstagram } from "react-icons/fa";
function Home() {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <h1 className="home__name">Kartik Labhshetwar</h1>

        <div className="home__profile">
          <div className="home__image">
            <Image src={homeProfile} alt="image" className="home__img" />
            <div className="home__shadow"></div>
            <Image src={curvedArrow} alt="" className="home__arrow" />
            <Image src={randomLines} alt="" className="home__line" />
            <div className="geometric-box"></div>
          </div>

          <div className="home__social">
            <a
              href="https://www.linkedin.com/in/kartikcode/"
              target="_blank"
              rel="noopener noreferrer"
              className="home__social-link"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/KartikLabhshetwar"
              target="_blank"
              rel="noopener noreferrer"
              className="home__social-link"
            >
              <FaGithub />
            </a>
            <a
              href="https://twitter.com/code_kartik"
              target="_blank"
              rel="noopener noreferrer"
              className="home__social-link"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.instagram.com/kartiklabhshetwar017"
              target="_blank"
              rel="noopener noreferrer"
              className="home__social-link"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        <div className="home__info">
          <p className="home__description">
            <b>Full Stack Developer</b> with knowledge in Web Development and
            DSA, I offer the best projects resulting in quality work.
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

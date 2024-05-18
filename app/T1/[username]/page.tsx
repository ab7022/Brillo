"use client";
import { useEffect, useState, useRef } from "react";
// import ScrollReveal from "scrollreveal";
import axios from "axios";
import emailjs from "@emailjs/browser";
import "../../styles/index.css";
import { getSession } from "next-auth/react";


function App({ params }: { params: { username: string } }) {

  const [showScrollUp, setShowScrollUp] = useState(false);
  const [data, setData] = useState({});
  const [showMenu, setShowMenu] = useState(false);
  const [shadowHeader, setShadowHeader] = useState(false);
  const [dark, setDark] = useState(false);
  const form = useRef();
  const [contactMessage, setContactMessage] = useState("");
  const [username, setUsername] = useState('');

  useEffect(() => {
    setUsername(params.username); // Set username from params
    console.log(params.username);
    
    const fetchData = async () => {
      try {
        const response = await axios.post(
          "https://brillo-inky.vercel.app/api/user/finddetails",
          { username : decodeURIComponent(params.username)} 
        );
  
        if (response.status === 200) {
          // If the response is OK, update the state with the user data
          setData(response.data.user);
 
        } else {
          // If the response is not OK, log an error
          console.error("Failed to fetch user data:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    fetchData();
  }, [params.username]); // Include params.username in dependency array
  
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const session = await getSession();
  
  //       const sessionEmail = session?.user?.email || "";
  //       console.log(sessionEmail);
  //       // Make API call using sessionEmail
  //       let url1 = "https://brillo-inky.vercel.app/api/user/getdetails"
  //       ; 
  //       let url2 = "http://localhost:3000/api/user/getdetails"
  //       const response = await axios.get(
  //         url1,
  //         {
  //           headers: {
  //             Authorization: sessionEmail,
  //           },
  //         }
  //       );
          
  //       if (response.status === 200) {
  //         // If the response is OK, update the state with the user data
  //         setData(response.data.user);
  //         console.log("User data:", response);
  //       } else {
  //         // If the response is not OK, log an error
  //         console.error("Failed to fetch user data:", response.statusText);
  //       }
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };
  
  //   fetchData();
  // }, []);

  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     const sr = ScrollReveal({
  //       origin: "top",
  //       distance: "60px",
  //       duration: 2500,
  //       delay: 400,
  //     });

  //     sr.reveal(`.home__profile, .about__image, .contact__mail`, {
  //       origin: "right",
  //     });
  //     sr.reveal(
  //       `.home__name, .home__info, .about__container, .section__title-1, .about__info, .contact__social, .contact__data`,
  //       { origin: "left" }
  //     );
  //     sr.reveal(`.services__card, .projects__card`, { interval: 100 });

  //     // function handleScrollUp() {
  //     //   const { scrollY } = window;
  //     //   setShowScrollUp(scrollY > 350);
  //     // }

  //     // window.addEventListener("scroll", handleScrollUp);

  //     // return () => {
  //     //   window.removeEventListener("scroll", handleScrollUp);
  //     // };
  //   }
  // }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const sections = document.querySelectorAll("section[id]");

      const handleScrollUp = () => {
        const { scrollY } = window;
        setShowScrollUp(scrollY > 350);

        sections.forEach((current) => {
          const sectionHeight = (current as HTMLElement).offsetHeight;
          const sectionTop = (current as HTMLElement).offsetTop - 58;
          const sectionId = current.getAttribute("id");
          const sectionClass = document.querySelector(
            `.nav__menu a[href*=${sectionId}]`
          );
          if (sectionClass) {
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
              sectionClass.classList.add("active-link");
            } else {
              sectionClass.classList.remove("active-link");
            }
          }
        });
      }
      window.addEventListener("scroll", handleScrollUp);
      return () => {
        window.removeEventListener("scroll", handleScrollUp);
      };
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleShadowHeader = () => {
        setShadowHeader(window.scrollY > 50);
      };
      window.addEventListener("scroll", handleShadowHeader);
      return () => {
        window.removeEventListener("scroll", handleShadowHeader);
      };
    }
  }, []);

  function handleTheme() {
    setDark((prevTheme) => !prevTheme);
    if (typeof window !== "undefined") {
      document.body.classList.toggle("dark-theme");
    }
  }

  const navItems = [
    { id: "home", content: "Home" },
    { id: "about", content: "About Me" },
    { id: "projects", content: "Projects" },
    { id: "contact", content: "Contact Me" },
  ];

  const navElems = navItems.map((navItem) => (
    <li className="nav__item" key={navItem.id}>
      <a
        href={`#${navItem.id}`}
        className={`nav__link ${
          navItem.id === "contact" && "nav__link-button"
        }`}
        onClick={() => setShowMenu(false)}
      >
        {navItem.content}
      </a>
    </li>
  ));

  const services = [
    {
      title: "Responsive Web Design",
      description:
        "I create websites that adapt and work seamlessly across various devices and screen sizes, ensuring an optimal user experience.",
      icon: "ri-layout-4-line",
    },
    {
      title: "Development",
      description:
        "I understand the value of your time and budget. I work efficiently to deliver high-quality web solutions within your timeframe and budget, ensuring a smooth and rewarding experience.",
      icon: "ri-code-box-line",
    },
    {
      title: "Performance Optimization",
      description:
        "I focus on optimizing website speed and performance to provide users with a fast and efficient browsing experience.",
      icon: "ri-speed-up-line",
    },
  ];

  const serviceElems = services.map((service) => (
    <article key={service.title} className="services__card">
      <div className="services__border"></div>
      <div className="services__content">
        <div className="services__icon">
          <div className="services__box"></div>
          <i className={service.icon}></i>
        </div>
        <h2 className="services__title">{service.title}</h2>
        <p className="services__description">{service.description}</p>
      </div>
    </article>
  ));

  const projects = [
    {
      subtitle: "GenAI Web app",
      title: "FloraFauna.ai - A Species Identification App",
      description:
        "This web application leverages Generative AI to assist users in identifying and learning about plant and animal species they encounter in their environment. By combining the power of Gemini API and React, we aim to promote citizen science and conservation efforts by making species identification accessible and engaging.",
      demo: "https://flora-fauna-ai.vercel.app/",
      sourceCode: "https://github.com/Tejas242/FloraFauna-ai",
      projectImg: "/assets/img/project-3.jpg",
    },
    {
      subtitle: "Website",
      title: "To-Do App",
      description:
        "Dominate your day with Task Master, a powerful ReactJS to-do list app designed to streamline your tasks and boost your productivity. Add new tasks effortlessly, edit them on the fly, and mark achievements with satisfaction. Task Master is more than just a checklist; it's a productivity powerhouse waiting to be unleashed.",
      demo: "",
      sourceCode:
        "https://github.com/KartikLabhshetwar/React-Notes/tree/main/10todocontextLocal",
      projectImg: "/assets/img/project-1.jpg",
    },
    {
      subtitle: "Web app",
      title: "Weather App",
      description:
        "Craving instant weather updates? My weather app delivers real-time conditions for any spot on Earth. Just type a location, and boom! Temperature, humidity, wind speed – all displayed beautifully. Responsive design? Check. Error handling? Covered. Future upgrades? You bet (multi-day forecasts, anyone?). Ditch the guesswork, embrace the weather!",
      demo: "",
      sourceCode: "https://github.com/KartikLabhshetwar/Weather-App-",
      projectImg: "/assets/img/project-2.jpg",
    },
  ];

  const projectElems = projects.map((project) => (
    <article className="projects__card" key={project.demo}>
      <div className="projects__image">
        <img src={project.projectImg} alt="image" className="projects__img" />
        <a
          href={project.demo}
          target="_blank"
          className="projects__button button"
        >
          <i className="ri-arrow-right-up-line"></i>
        </a>
      </div>

      <div className="projects__content">
        <h3 className="projects__subtitle">{project.subtitle}</h3>
        <h2 className="projects__title">{project.title}</h2>
        <p className="projects__description">{project.description}</p>
      </div>

      <div className="projects__buttons">
        <a href={project.sourceCode} target="_blank" className="projects__link">
          <i className="ri-github-line"></i> View
        </a>
      </div>
    </article>
  ));

  const sendEmail = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_t5xvmsc",
        "template_gqsqs2h",
        form.current!,
        "5z3UX5oK1G4thjzK1"
      )
      .then(
        () => {
          setContactMessage("Message sent successfully ✅");
          setTimeout(() => {
            setContactMessage("");
          }, 5000);
          form.current!;
        },
        () => {
          setContactMessage("Message not sent (service error) ❌");
          setTimeout(() => {
            setContactMessage("");
          }, 5000);
          form.current!;
        }
      );
  };
  return (
    <>

      <header
        className={`header ${shadowHeader && "shadow-header"}`}
        id="header"
      >
        <nav className="nav container">
          <a href="#" className="nav__logo">
            <span className="nav__logo-circle">
            {data?.name?.charAt(0).toUpperCase()}
            </span>
            <span className="nav__logo-name">
              {data?.name ?.charAt(0).toUpperCase() + data?.name?.slice(1) || "lOADING..."}
            </span>
          </a>

          <div className={`nav__menu ${showMenu && "show-menu"}`} id="nav-menu">
            <span className="nav__title">Menu</span>

            <h3 className="nav__name">-</h3>

            <ul className="nav__list">{navElems}</ul>

            {/* Close Button  */}
            <div
              className="nav__close"
              id="nav-close"
              onClick={() => setShowMenu(false)}
            >
              <i className="ri-close-line"></i>
            </div>
          </div>

          <div className="nav__buttons">
            {/* Theme Button */}
            <i
              onClick={handleTheme}
              className={`${
                dark ? "ri-sun-line" : "ri-moon-line"
              } change-theme`}
              id="theme-button"
            ></i>
            <div
              // Toggle Button
              className="nav__toggle"
              id="nav-toggle"
              onClick={() => setShowMenu(true)}
            >
              <i className="ri-menu-4-line"></i>
            </div>
          </div>
        </nav>
      </header>{" "}
      <main className="main">
        {/* //home start */}
        <section className="home section" id="home">
          <div className="home__container container grid">
            <h1 className="home__name">
              {data?.name?.charAt(0).toUpperCase() + data?.name?.slice(1) || ""}
            </h1>

            <div className="home__profile">
              <div className="home__image">
                <img
                  src="/assets/img/profile-pic.jpg"
                  alt="image"
                  className="home__img"
                />
                <div className="home__shadow"></div>
                <img
                  src="/assets/img/curved-arrow.svg"
                  alt=""
                  className="home__arrow"
                />
                <img
                  src="/assets/img/curved-arrow.svg"
                  alt=""
                  className="home__line"
                />
                <div className="geometric-box"></div>
              </div>

              <div className="home__social">
                <a
                  href="https://www.linkedin.com/in/kartikcode/"
                  target="_blank"
                  className="home__social-link"
                >
                  <i className="ri-linkedin-box-line"></i>
                </a>
                <a
                  href="https://github.com/KartikLabhshetwar"
                  target="_blank"
                  className="home__social-link"
                >
                  <i className="ri-github-line"></i>
                </a>
                <a
                  href="https://twitter.com/code_kartik"
                  target="_blank"
                  className="home__social-link"
                >
                  <i className="ri-twitter-line"></i>
                </a>
                <a
                  href="https://www.instagram.com/kartiklabhshetwar017"
                  target="_blank"
                  className="home__social-link"
                >
                  <i className="ri-instagram-line"></i>
                </a>
              </div>
            </div>

            <div className="home__info">
              <p className="home__description">
                <b>Full Stack Developer</b> with knowledge in Web Development
                and DSA, I offer the best projects resulting in quality work.
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
        {/* home end */}
        {/* <Home /> */}
        {/* about start */}
        <section className="about section" id="about">
          <div className="about__container container grid">
            <h2 className="section__title-1">
              <span>About Me</span>
            </h2>

            <div className="about__profile">
              <div className="about__image">
                <img
                  src="/assets/img/about.jpg"
                  alt="image"
                  className="about__img"
                />
                <div className="about__shadow"></div>
                <div className="geometric-box"></div>
                <img
                  src="/assets/img/random-lines.svg"
                  alt=""
                  className="about__line"
                />
                <div className="about__box"></div>
              </div>
            </div>

            <div className="about__info">
              <p className="about__description">
                Hello there! I'm <b>Kartik Labhshetwar</b>, a passionate{" "}
                <b>full stack developer</b> with a passion for building
                intuitive and efficient web applications. With a strong
                foundation in <b>web development</b> and a background in{" "}
                <b>software engineering</b>, I thrive on the intersection of
                creativity and technical expertise.
              </p>
              <ul className="about__list">
                <li className="about__item">
                  <b>My Skills Are:</b> HTML, CSS, JavaScript, Java, React, Git
                  & GitHub, Bootstrap, Node.js, Express.js, PostgreSQL, Tailwind
                  CSS.
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
        {/* about end */}

        {/* <About /> */}
        {/* services start */}
        <section className="services section">
          <h2 className="section__title-2">
            <span>Services.</span>
          </h2>
          <div className="services__container container grid">
            {serviceElems}
          </div>
        </section>
        {/* <Services /> */}
        {/* <Projects /> */}
        <section className="projects section" id="projects">
          <h2 className="section__title-1">
            <span>Projects.</span>
          </h2>
          <div className="projects__container container grid">
            {projectElems}
          </div>
        </section>
        {/* <Contact /> */}
        <section className="contact section" id="contact">
          <div className="contact__container grid">
            <div className="contact__data">
              <h2 className="section__title-2">Contact Me.</h2>
              <p className="contact__description-1">
                I am currently looking for new opportunities, my inbox is always
                open. Whether you have a question or just want to say hi, I will
                try my best to get back to you!
              </p>
              <p className="contact__description-2">
                I need your <b>Name</b> and <b>Email Address</b>, but you won't
                receive anything other than your reply.
              </p>
              <div className="geometric-box"></div>
            </div>
            <div className="contact__mail">
              <h2 className="contact__title">Send Me A Message</h2>

              <form
                ref={form}
                onSubmit={sendEmail}
                className="contact__form"
                id="contact-form"
              >
                <div className="contact__group">
                  <div className="contact__box">
                    <input
                      type="text"
                      id="name"
                      name="user_name"
                      className="contact__input"
                      required
                      placeholder="First Name"
                    />
                    <label htmlFor="name" className="contact__label">
                      First Name
                    </label>
                  </div>
                  <div className="contact__box">
                    <input
                      type="email"
                      id="email"
                      name="user_email"
                      className="contact__input"
                      required
                      placeholder="Email Address"
                    />
                    <label htmlFor="email" className="contact__label">
                      Email Address
                    </label>
                  </div>
                </div>
                <div className="contact__box">
                  <input
                    type="text"
                    id="subject"
                    name="user_subject"
                    className="contact__input"
                    required
                    placeholder="Subject"
                  />
                  <label htmlFor="subject" className="contact__label">
                    Subject
                  </label>
                </div>
                <div className="contact__box contact__area">
                  <textarea
                    id="message"
                    name="user_message"
                    className="contact__input"
                    required
                    placeholder="Message"
                  ></textarea>
                  <label htmlFor="message" className="contact__label">
                    Message
                  </label>
                </div>
                <p className="contact__message" id="contact-message">
                  {contactMessage}
                </p>
                <button className="contact__button button">
                  <i className="ri-send-plane-line"></i>Send Message
                </button>
              </form>
            </div>

            <div className="contact__social">
              <img
                src="/assets/img/curved-arrow.svg"
                alt=""
                className="contact__social-arrow"
              />

              <div className="contact__social-data">
                <div className="contact__social-description">
                  <p className="contact__social-description-1">
                    Does not send emails
                  </p>
                  <p className="contact__social-description-2">
                    Write me on my social networks 
                  </p>
                </div>

                <div className="contact__social-links">
                  <a
                    href="https://www.linkedin.com/in/kartikcode/"
                    target="_blank"
                    className="contact__social-link"
                  >
                    <i className="ri-linkedin-box-line"></i>
                  </a>
                  <a
                    href="https://twitter.com/code_kartik"
                    target="_blank"
                    className="contact__social-link"
                  >
                    <i className="ri-twitter-line"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* <Footer /> */}
      <footer className="footer">
        <div className="footer__container container grid">
          <ul className="footer__links">
            <li>
              <a href="#home" className="footer__link">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="footer__link">
                About
              </a>
            </li>
            <li>
              <a href="#projects" className="footer__link">
                Projects
              </a>
            </li>
          </ul>

          <span className="footer__copy">
            &#169; All Rights Reserved By
            <a href="#">
              {" "}
              {data.name.charAt(0).toUpperCase() + data.name.slice(1)}
            </a>
          </span>
        </div>
      </footer>
      {/* <!--========== SCROLL UP ==========--> */}
      <a
        href="#"
        className={`scrollup ${showScrollUp && "show-scroll"}`}
        id="scroll-up"
      >
        <i className="ri-arrow-up-line"></i>
      </a>
    </>
  );
}

export default App;

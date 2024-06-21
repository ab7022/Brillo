import projects1 from "@/components/AllTemplates/template7/assets/img/project-1.jpg";
import projects2 from "@/components/AllTemplates/template7/assets/img/project-2.jpg";
import projects3 from "@/components/AllTemplates/template7/assets/img/project-3.jpg";
import Image from "next/image";

function Projects() {
  const projects = [
    {
      subtitle: "GenAI Web app",
      title: "FloraFauna.ai - A Species Identification App",
      description:
        "This web application leverages Generative AI to assist users in identifying and learning about plant and animal species they encounter in their environment. By combining the power of Gemini API and React, we aim to promote citizen science and conservation efforts by making species identification accessible and engaging.",
      demo: "https://flora-fauna-ai.vercel.app/",
      sourceCode: "https://github.com/Tejas242/FloraFauna-ai",
      projectImg: projects3,
    },
    {
      subtitle: "Website",
      title: "To-Do App",
      description:
        "Dominate your day with Task Master, a powerful ReactJS to-do list app designed to streamline your tasks and boost your productivity. Add new tasks effortlessly, edit them on the fly, and mark achievements with satisfaction. Task Master is more than just a checklist; it's a productivity powerhouse waiting to be unleashed.",
      demo: "",
      sourceCode: "https://github.com/KartikLabhshetwar/React-Notes/tree/main/10todocontextLocal",
      projectImg: projects1,
    },
    {
      subtitle: "Web app",
      title: "Weather App",
      description:
        "Craving instant weather updates? My weather app delivers real-time conditions for any spot on Earth. Just type a location, and boom! Temperature, humidity, wind speed – all displayed beautifully. Responsive design? Check. Error handling? Covered. Future upgrades? You bet (multi-day forecasts, anyone?). Ditch the guesswork, embrace the weather!",
      demo: "",
      sourceCode: "https://github.com/KartikLabhshetwar/Weather-App-",
      projectImg: projects2,
    }
  ];

  const projectElems = projects.map((project) => (
    <article className="projects__card" key={project.demo}>
      <div className="projects__image">
        <Image src={project.projectImg} alt="image" className="projects__img" />
        <a
          // href={project.demo}
          // target="_blank"
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

  return (
    <section className="projects section" id="projects">
      <h2 className="section__title-1">
        <span>Projects.</span>
      </h2>
      <div className="projects__container container grid">{projectElems}</div>
    </section>
  );
}

export default Projects;

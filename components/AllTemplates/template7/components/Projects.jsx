
import Image from "next/image";

function Projects({projects}) {


  const projectElems = projects.map((project) => (
    <article className="projects__card" key={project.deployed_url}>
      <div className="projects__image">
        <Image src={project.image} alt="image" className="projects__img"  height={500} width={700}/>
        <a
          href={project.demo}
          target="_blank"
          className="projects__button button h-4xl"
        >
          <i className="ri-arrow-right-up-line"></i>
        </a>
      </div>

      <div className="projects__content">
        <h2 className="projects__title">{project.title}</h2>
        <p className="projects__description">{project.description}</p>
      </div>

      <div className="projects__buttons">
        <a href={project.github_url} target="_blank" className="projects__link">
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
      <div className="projects__container  grid">{projectElems}</div>
    </section>
  );
}

export default Projects;

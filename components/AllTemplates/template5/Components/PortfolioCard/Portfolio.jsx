  /* eslint-disable react/jsx-no-target-blank */
  /* eslint-disable react/prop-types */
  /* eslint-disable no-unused-vars */
  import React from "react";
  import Portfolio from '../../assets/Images/Projects/Personal V1.jpg'
  import InkMosaic from "../../assets/Images/Projects/Ink.jpg";
  import CGP from "../../assets/Images/Projects/CGPCalculator.jpg";
  import ThinkPad from "../../assets/Images/Projects/ThinkPad.jpg";
  import Dictionary from "../../assets/Images/Projects/Dictionary.jpg";
  import LibertFilm from "../../assets/Images/Projects/LibertyFilms.jpg"
  import CSplus from "../../assets/Images/Projects/csplus.jpg"
  import mountain from "../../assets/Images/Projects/mountain.jpg"
  import power from "../../assets/Images/Projects/Power Fitness.jpg"
  import currency from "../../assets/Images/Projects/currency.jpg"
  import budgetBuddy from '../../assets/Images/Projects/BudgetBuddy.jpg'
  import api from '../../assets/Images/Projects/jsonapi.jpg'
  import Light from "../../assets/Images/Projects/Lightspeed.jpg"
  import OmniBlog from '../../assets/Images/Projects/OmniBlog.jpg'
  import Careersync from '../../assets/Images/Projects/Careersync.jpg'
  import north from '../../assets/Images/Projects/northstar.jpg'
  import travelThrill from '../../assets/Images/Projects/traveltrills.jpg'
  import Image from "next/image";

  const projectsData2 = [
    {
      id: 1,
      title: "OnmiBlog",
      description: "OmniBlog is a platform that provides informative articles and blog posts about various aspects of life and has an admin dashboard where the admin can create, update, and delete blogs..",
      imageUrl:OmniBlog.src,
      Github:'https://github.com/Saif-Arshad/Full-stack-OmniBlog',
      livelink:'https://omniiblog.vercel.app//',
      Built:'Next Js,Tailwind Css,MongoDB Atlas,JWT Authentication,Scss,uploadthing,next-themes',
    },
    {
      id: 2,
      title: "CareerSync",
      description: "CareerSync is a dynamic job platform with NextAuth authentication, empowering users to create accounts, search for jobs in their field using various filters, and seamlessly apply for positions.",
      imageUrl:Careersync.src,
      Github:'https://github.com/Saif-Arshad/careerSync',
      livelink:'https://careersyncpro.vercel.app/',
      Built:'Next Js,Tailwind Css,MongoDB Atlas,NextAuth Authentication,css',
    },
    
    {
      id:3,
      title: "Travel Thrills",
      description: "Travel Thrill is a comprehensive travel and tour website designed to enhance the way users plan their trips. Our platform features an AI-powered trip planner that helps users create personalized itineraries with ease.",
      imageUrl:travelThrill.src,
      Github:'https://github.com/Saif-Arshad/Travel-Thrills',
      livelink:'https://travelthrills.vercel.app/',
      Built:'Next js, Tailwind Css   ',
    },
    {
      id:4,
      title: "Dummy JSON Blog API",
      description: "The JSON Blog API is a freely accessible public REST API that provides dummy data for your projects or for practicing working with REST APIs. It is a valuable resource for educational purposes, sample codes, testing, and more.",
      imageUrl:api.src,
      Github:'https://github.com/Saif-Arshad/JsonBlogAPI',
      livelink:'https://dummyblogapi.vercel.app/',
      Built:'Next js, MongoDB , REST API  Aceternity UI ',
    },
  
  ];

  const PortfolioCard2 = ({ project }) => {
    const { title, description, imageUrl, Github, livelink, Built } = project;

    return (
      <div className="portfolio-card-main">
        {
  livelink ?

        <a href={livelink} target="_blank">
          <Image src={imageUrl} alt={title} height={500} width={500}/>
        </a>
  :
  <Image src={imageUrl} alt={title} height={500} width={500}/>

  }
        <div className="text-portfolio-main">
        <h4>Featured Project</h4>
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="links">
          { livelink.length>1 ?
          <a href={livelink} target="_blank">
            <svg
              className="firstsvg"
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              aria-label="project link"
              height="25"
              width="25"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z"></path>
            </svg>
          </a>
          :""
  }
          <a href={Github} target="_blank">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 496 512"
              aria-label="github"
              height="25"
              width="25"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
            </svg>
          </a>
        </div>
        <span >{Built}</span>
        </div>
      </div>
    );
  };

  const PortfolioCard = () => {
    return (
      <div className="portfolioMian-sepratePage">
        {projectsData2.map((project) => (
          <PortfolioCard2 key={project.id} project={project} />
        ))}
      </div>
    );
  };

  export default PortfolioCard;

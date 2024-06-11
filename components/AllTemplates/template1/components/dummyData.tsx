import {
    FaGitAlt,
    FaGithub,
    FaLinkedin,
    FaSlack,
    FaTwitter,
  } from "react-icons/fa";
  import { IoDocumentTextSharp } from "react-icons/io5";
  import {
    FaReact,
    FaNodeJs,
    FaHtml5,
    FaCss3Alt,
    FaDocker,
    FaCloudflare,
    FaDatabase,
  } from "react-icons/fa";
  import { IoIosMail, IoLogoJavascript } from "react-icons/io";
  import { DiPostgresql } from "react-icons/di";
  import {
    SiJavascript,
    SiJira,
    SiMicrosoftoffice,
    SiTypescript,
  } from "react-icons/si";
  
  import { TbBrandNextjs } from "react-icons/tb";
  import { TfiEmail } from "react-icons/tfi";
  
  import {
    SiExpress,
    SiMongodb,
    SiPrisma,
    SiTailwindcss,
    SiRecoil,
    SiRedux,
  } from "react-icons/si";
  
  export const buttonsData = [
    {
      id: 1,
      label: "GitHub",
      icon: FaGithub,
      url: "https://github.com/SauravBeginner",
    },
    {
      id: 2,
      label: "LinkedIn",
      icon: FaLinkedin,
      url: "https://www.linkedin.com/in/saurav-kundu-0b06211ba/",
    },
    {
      id: 3,
      label: "Twitter",
      icon: FaTwitter,
      url: "https://twitter.com/KunduSaurav96",
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
      url: "mailto:sauravnaukri96@gmail.com",
    },
  ];
  
  export const webDeveloperSkills = [
    { id: 1, label: "Next.js", icon: TbBrandNextjs, url: "https://nextjs.org/" },
    {
      id: 2,
      label: "JavaScript",
      icon: SiJavascript,
      url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    { id: 3, label: "React", icon: FaReact, url: "https://reactjs.org/" },
    { id: 4, label: "Node.js", icon: FaNodeJs, url: "https://nodejs.org/" },
    {
      id: 5,
      label: "Express.js",
      icon: SiExpress,
      url: "https://expressjs.com/",
    },
    {
      id: 6,
      label: "MongoDB",
      icon: SiMongodb,
      url: "https://www.mongodb.com/",
    },
    {
      id: 7,
      label: "PostgreSQL",
      icon: DiPostgresql,
      url: "https://www.postgresql.org/",
    },
    {
      id: 9,
      label: "Hono Cloudflare",
      icon: FaCloudflare,
      url: "https://www.cloudflare.com/",
    },
    { id: 10, label: "Prisma", icon: SiPrisma, url: "https://hono.io/" },
    {
      id: 11,
      label: "TypeScript",
      icon: SiTypescript,
      url: "https://www.typescriptlang.org/",
    },
    {
      id: 12,
      label: "HTML",
      icon: FaHtml5,
      url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    },
    {
      id: 13,
      label: "CSS",
      icon: FaCss3Alt,
      url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    },
    {
      id: 14,
      label: "Tailwind CSS",
      icon: SiTailwindcss,
      url: "https://tailwindcss.com/",
    },
    { id: 15, label: "Recoil", icon: SiRecoil, url: "https://www.github.com" },
    {
      id: 16,
      label: "Redux-Toolkit",
      icon: SiRedux,
      url: "https://www.github.com",
    },
  ];
  
  export const tools = [
    { id: 1, label: "Docker", icon: FaDocker, url: "https://www.docker.com/" },
    { id: 2, label: "Git", icon: FaGitAlt, url: "https://www.docker.com/" },
    { id: 3, label: "Slack", icon: FaSlack, url: "https://www.docker.com/" },
    { id: 4, label: "Jira", icon: SiJira, url: "https://www.docker.com/" },
    {
      id: 5,
      label: "MS Office",
      icon: SiMicrosoftoffice,
      url: "https://www.docker.com/",
    },
  ];
  
  export const projectData = [
    {
      id: 1,
      title: "E-Commerce",
      description: "Built with React, Tailwind CSS, MongoDb, Node, and Express.",
      backgroundColor:
        "bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500",
      src: "https://pub-96c5670691c8435283fb5dea0d94a7e8.r2.dev/shopDunia.webp",
      link: "https://shopdunia.netlify.app", // Update with the actual project link
    },
    {
      id: 2,
      title: "Landing Page",
      description:
        "Built with React, Tailwind CSS, Postgres,Prisma, Node, and Express.",
      backgroundColor:
        "bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500",
      src: "https://pub-96c5670691c8435283fb5dea0d94a7e8.r2.dev/tech10x.png",
      link: "https://project.tech10x.online", // Update with the actual project link
    },
    {
      id: 3,
      title: "Blog Website",
      description:
        "Built with React, Tailwind CSS, Postgres, Prisma, Hono and Cloudflare.",
      backgroundColor:
        "bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500",
      src: "https://pub-96c5670691c8435283fb5dea0d94a7e8.r2.dev/blogs.png",
      link: "https://medium.tech10x.online", // Update with the actual project link
    },
    // Add more project objects as needed
  ];
  export const words = [
    {
      text: "Hi,",
    },
    {
      text: "I",
    },
    {
      text: "am",
    },
    {
      text: "a",
    },
    {
      text: "Full Stack Developer",
      className: "text-blue-500 dark:text-[#9c4ff0]",
    },
  ];
  
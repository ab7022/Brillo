// eslint-disable-next-line no-unused-vars
import React from "react";
import "./FirstAbout.scss";
import "../SubAbout/QueryFirst.scss";
import Typing from "../../../Components/TypingAnimation/TypingName";
export default function FirstAbout() {
  return (
    <div className="AboutPage-Main">
      <div className="sub-AboutPage-Main">
        <h1>
          {" "}
          <Typing />{" "}
        </h1>
        <h3>Software Developer</h3>
        <p>
          🚀I build clean, responsive, engaging, and accessible digital
          experiences.
        </p>
        <p>
          💻I enjoy playing with latest web technologies and continuously strive
          to improve my skill and knowlege.
        </p>
        <div className="socialLinks-About">
          <a
            href="https://github.com/Saif-Arshad"
            target="_blank"
            rel="noreferrer"
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-6 w-6"
                aria-hidden="true"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
              </svg>
            </span>
          </a>
          <a
            href="https://www.linkedin.com/in/saif-rehman-professional/"
            target="_blank"
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="h-6 w-6"
                aria-hidden="true"
              >
                <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
              </svg>
            </span>
          </a>
          <a
            href="https://www.instagram.com/safiking_001?igsh=YzljYTk1ODg3Zg=="
            target="_blank"
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1000 1000"
                fill="currentColor"
                class="h-6 w-6"
                aria-hidden="true"
              >
                <path d="M295.42,6c-53.2,2.51-89.53,11-121.29,23.48-32.87,12.81-60.73,30-88.45,57.82S40.89,143,28.17,175.92c-12.31,31.83-20.65,68.19-23,121.42S2.3,367.68,2.56,503.46,3.42,656.26,6,709.6c2.54,53.19,11,89.51,23.48,121.28,12.83,32.87,30,60.72,57.83,88.45S143,964.09,176,976.83c31.8,12.29,68.17,20.67,121.39,23s70.35,2.87,206.09,2.61,152.83-.86,206.16-3.39S799.1,988,830.88,975.58c32.87-12.86,60.74-30,88.45-57.84S964.1,862,976.81,829.06c12.32-31.8,20.69-68.17,23-121.35,2.33-53.37,2.88-70.41,2.62-206.17s-.87-152.78-3.4-206.1-11-89.53-23.47-121.32c-12.85-32.87-30-60.7-57.82-88.45S862,40.87,829.07,28.19c-31.82-12.31-68.17-20.7-121.39-23S637.33,2.3,501.54,2.56,348.75,3.4,295.42,6m5.84,903.88c-48.75-2.12-75.22-10.22-92.86-17-23.36-9-40-19.88-57.58-37.29s-28.38-34.11-37.5-57.42c-6.85-17.64-15.1-44.08-17.38-92.83-2.48-52.69-3-68.51-3.29-202s.22-149.29,2.53-202c2.08-48.71,10.23-75.21,17-92.84,9-23.39,19.84-40,37.29-57.57s34.1-28.39,57.43-37.51c17.62-6.88,44.06-15.06,92.79-17.38,52.73-2.5,68.53-3,202-3.29s149.31.21,202.06,2.53c48.71,2.12,75.22,10.19,92.83,17,23.37,9,40,19.81,57.57,37.29s28.4,34.07,37.52,57.45c6.89,17.57,15.07,44,17.37,92.76,2.51,52.73,3.08,68.54,3.32,202s-.23,149.31-2.54,202c-2.13,48.75-10.21,75.23-17,92.89-9,23.35-19.85,40-37.31,57.56s-34.09,28.38-57.43,37.5c-17.6,6.87-44.07,15.07-92.76,17.39-52.73,2.48-68.53,3-202.05,3.29s-149.27-.25-202-2.53m407.6-674.61a60,60,0,1,0,59.88-60.1,60,60,0,0,0-59.88,60.1M245.77,503c.28,141.8,115.44,256.49,257.21,256.22S759.52,643.8,759.25,502,643.79,245.48,502,245.76,245.5,361.22,245.77,503m90.06-.18a166.67,166.67,0,1,1,167,166.34,166.65,166.65,0,0,1-167-166.34"></path>
              </svg>
            </span>
          </a>
          <a href="https://twitter.com/saifurrehmanpro" target="_blank">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1200 1227"
                fill="none"
                class="h-5 w-5"
                aria-hidden="true"
              >
                <path
                  d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z"
                  fill="currentColor"
                ></path>
              </svg>
            </span>
          </a>
          <a href="mailto:saifurrehman.web@gmail.com">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-mail"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </span>
          </a>
          <a href="">
            <span>
              <svg
                fill="#ffffff"
                version="1.1"
                id="Layer_1"
                viewBox="0 0 20 20"
                enable-background="new 0 0 20 20"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path d="M19,19H1c-0.6,0-1-0.4-1-1v-5h2v4h16v-4h2v5C20,18.6,19.6,19,19,19z"></path>{" "}
                  <path d="M15.7,7.3c-0.4-0.4-1-0.4-1.4,0L11,10.6V2c0-0.6-0.4-1-1-1S9,1.4,9,2v8.6L5.7,7.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l5,5 c0.4,0.4,1,0.4,1.4,0l5-5C16.1,8.3,16.1,7.7,15.7,7.3z"></path>{" "}
                </g>
              </svg>
            </span>
          </a>
        </div>
      </div>
      <div className="sub-AboutPage-Main">
        <p>
          One of my strongest qualities as a{" "}
          <a
            href="https://www.coursera.org/articles/mern-stack"
            target="_blank"
          >
            MERN
          </a>{" "}
          stack developer is my ability to think critically and solve problems.
          I excel at breaking down complex projects into manageable chunks and
          coming up with innovative solutions to problems that arise. I am also
          very organized and detail-oriented, which allows me to complete
          projects on time and to the highest standards.
        </p>
        {/* <p>
          
        As a Software developer, I am proficient in a variety of
                  programming languages including
                  JavaScript,C, and C++  and frameworks like React Js, Bootstrap and Tailwind Css  I have experience working with popular
                  technologies such as MongoDB, Express and Node.js. I have the ability
                  to quickly adapt to new technologies and frameworks. I have a
                  wide range of knowledge about technologies beyond those
                  mentioned.
        </p> */}
        <p>
          I am also a strong <a href=""> communicator</a> and able to
          effectively collaborate with clients and team members to understand
          their needs and translate them into functional specifications.
          Overall, I am confident in my ability to deliver high-quality
          <a href=""> web solutions </a>that meet the needs of my clients and
          exceed their expectations.
        </p>
        <p>
          In my free time, I enjoy hobbies such as watching movies, and{" "}
          <a href=""> traveling </a>. I am also an avid learner and am always
          looking for ways to improve my skills and knowledge. In addition to my{" "}
          <a href=""> technical skills</a> I am excited to work with you and
          create something amazing together.
        </p>
      </div>
    </div>
  );
}

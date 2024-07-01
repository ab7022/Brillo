import React from "react";

function Connect({ socialProfiles, resume }) {
  const twitter = socialProfiles?.[0]?.twitter || "";
  const linkedin = socialProfiles?.[0]?.linkedin || "";
  const github = socialProfiles?.[0]?.github || "";
  const email = socialProfiles?.[0]?.email || "";
  if (typeof window === "undefined") return null;

  return (
    <div className="connect-wrapper-main  relative mx-auto flex h-[100vh]  flex-col bg-[#e9e9e9] dark:bg-[#09090b]  text-black dark:text-white">
      <div className="flex items-center justify-center overflow-hidden text-center spacer h-1/3">
        <h1
          className=""
          id="scrollingText"
          style={{
            fontFamily: "Generator Bold",
            fontSize: "5vw",
            letterSpacing: "-1px",
          }}
        >
          Let's build something special.
        </h1>
      </div>
      <div className="h-1/3">
        <h1
          className="italic connect-text-main text-[#08dc90] dark:text-[#93ffcc] "
          style={{
            fontFamily: "Generator Bold",
            fontSize: "4vw",
            letterSpacing: "-1px",
          }}
        >
          A user interface is like a joke. If you have to explain it, it's not
          that good.
        </h1>
      </div>
      <div className="flex flex-col items-end justify-around w-full h-1/3">
        <p
          className="underline connect-text-mail"
          style={{
            fontFamily: "Generator Bold",
            fontSize: "4.5vw",
            letterSpacing: "-1px",
          }}
        >
          <a className="connect-text-mail text-bold" href={`mailto:${email}`}>
            {email}
          </a>
        </p>

        <div className="flex w-full">
          <div className="flex justify-around w-1/2 social-wrapper">
            {twitter && (
              <>
                {" "}
                <h1
                  className="underline"
                  style={{
                    fontFamily: "Generator Bold",
                    fontSize: "2vw",
                    letterSpacing: "-1px",
                    cursor: "pointer",
                  }}
                >
                  <a target="_blank" href={twitter}>
                    twitter
                  </a>
                </h1>
              </>
            )}
            {github && (
              <h1
                className="underline"
                style={{
                  fontFamily: "Generator Bold",
                  fontSize: "2vw",
                  letterSpacing: "-1px",
                  cursor: "pointer",
                }}
              >
                <a href={github} target="_blank">
                  github
                </a>
              </h1>
            )}
          </div>
          <div className="flex justify-around w-1/2 social-wrapper">
            {linkedin && (
              <h1
                className="underline"
                style={{
                  fontFamily: "Generator Bold",
                  fontSize: "2vw",
                  letterSpacing: "-1px",
                  cursor: "pointer",
                }}
              >
                <a href={linkedin} target="_blank">
                  linkedin
                </a>
              </h1>
            )}
            {resume &&(
               <h1
              className="underline"
              style={{
                fontFamily: "Generator Bold",
                fontSize: "2vw",
                letterSpacing: "-1px",
                cursor: "pointer",
              }}
            >
              <a href={resume} target="_blank">
                cv
              </a>
            </h1>
            )}
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default Connect;

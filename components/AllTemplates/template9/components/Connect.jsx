import React from "react";

function Connect() {




  return (
    <div className="connect-wrapper-main container relative mx-auto flex h-[100vh]  flex-col bg-[#e9e9e9] dark:bg-[#09090b]  text-black dark:text-white">
      <div className="flex items-center justify-center overflow-hidden text-center spacer h-1/3">
        <h1
          className=""
          id="scrollingText"
          style={{
            fontFamily: "Generator Bold",
            fontSize: "5vw",
            letterSpacing: "-1px",
          }}>
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
          }}>
          A user interface is like a joke. If you have to explain it, it's not
          that good.
        </h1>
      </div>
      <div className="flex flex-col items-end justify-around w-full h-1/3">
        <h1
          className="underline connect-text-mail"
          style={{
            fontFamily: "Generator Bold",
            fontSize: "4.5vw",
            letterSpacing: "-1px",
          }}>
          <a
            className="connect-text-mail"
            href="mailto:vedantshah2001@gmail.com">
            vedantshah2001@gmail.com
          </a>
        </h1>

        <div className="flex w-full">
          <div className="flex justify-around w-1/2 social-wrapper">
            <h1
              className="underline"
              style={{
                fontFamily: "Generator Bold",
                fontSize: "2vw",
                letterSpacing: "-1px",
                cursor: "pointer",
              }}>
              <a target="_blank" href="http://twitter.com/vedantshah2001">
                twitter
              </a>
            </h1>
            <h1
              className="underline"
              style={{
                fontFamily: "Generator Bold",
                fontSize: "2vw",
                letterSpacing: "-1px",
                cursor: "pointer",
              }}>
              <a href="http://github.com/vedant-shah" target="_blank">
                github
              </a>
            </h1>
          </div>
          <div className="flex justify-around w-1/2 social-wrapper">
            <h1
              className="underline"
              style={{
                fontFamily: "Generator Bold",
                fontSize: "2vw",
                letterSpacing: "-1px",
                cursor: "pointer",
              }}>
              <a href="http://linkedin.com/in/vedant-shah2001" target="_blank">
                linkedin
              </a>
            </h1>
            <h1
              className="underline"
              style={{
                fontFamily: "Generator Bold",
                fontSize: "2vw",
                letterSpacing: "-1px",
                cursor: "pointer",
              }}>
              <a
                href="https://drive.google.com/file/d/1EA-YCHe0n7TZly1B-4VrQj8kDbjdYLhK/view?usp=sharing"
                target="_blank">
                cv
              </a>
            </h1>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Connect;

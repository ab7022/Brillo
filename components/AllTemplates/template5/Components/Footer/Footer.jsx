import React from "react";
import "./Footer.scss";
export default function Footer({email,firstName,lastName}) {
  return (
    <footer className="bg-black">
      <p>
        Built with ❤️ by{" "}
        <a href={`mailto:${email}`}> {firstName} {lastName}</a>
      </p>
    </footer>
  );
}

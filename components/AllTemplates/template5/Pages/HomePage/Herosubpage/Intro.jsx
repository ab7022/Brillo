  
import Gitbutton from "../../../Components/Buttons/github";
import Linkedinbutton from "../../../Components/Buttons/linkedin";
import "../Herosubpage/Intro.scss";
import "../Herosubpage/Introquries.scss";
import { TypeAnimation } from "react-type-animation";

import Morning from "../../../Components/Goodmorning/Goodmorning";
function Intro({ basicInfo, socialProfiles }) {
  const firstName = basicInfo[0].first_name || "";
  const lastName = basicInfo[0].last_name || "";
  const designation = basicInfo?.[0]?.designation || "";
  const city = basicInfo?.[0]?.city || "";
  const country = basicInfo?.[0]?.country || "";
  const shortIntro = basicInfo?.[0]?.shortintro || "";

  const linkedin = socialProfiles?.[0]?.linkedin || "";
  const github = socialProfiles?.[0]?.github || "";
  return (
    <div className="container">
      <Morning />
      <h1>
        <span>I am</span>
        <div className="text-white w-full">
          <span className="text-white">I am</span>
          <h6 className="text-white">{firstName} {lastName}</h6>
        {/* <TypeAnimation sequence={[firstName,lastName]} wrapper="span" speed={75} /> */}
        </div>
      
      </h1>
      {designation && (
        <h3>
          🚀 A passionate {designation} based in {city}, {country}.
        </h3>
      )}

      <h3>⚡ Exploring opportunities and side projects.</h3>
      {shortIntro && <h3>💻 {shortIntro}</h3>}
      <div className="buttons">
        {github && <Gitbutton github={github} />}
        {linkedin && <Linkedinbutton linkedin={linkedin} />}
      </div>
    </div>
  );
}

export default Intro;

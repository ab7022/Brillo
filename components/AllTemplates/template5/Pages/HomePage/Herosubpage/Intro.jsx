import Typing from "../../../Components/TypingAnimation/Typing";
import Gitbutton from "../../../Components/Buttons/github";
import Linkedinbutton from "../../../Components/Buttons/linkedin";
import "./Intro.scss";
import "./Introquries.scss";
import Morning from "../../../Components/Goodmorning/Goodmorning";
function Intro({ basicInfo, socialProfiles }) {
  const firstName = basicInfo[0].first_name;
  const lastName = basicInfo[0].last_name;
  const designation = basicInfo?.[0]?.designation || "";
  const linkedin = socialProfiles?.[0]?.linkedin || "";
  const github = socialProfiles?.[0]?.github || "";
  return (
    <div className="container flex justify-center">
      <Morning />
      <h1 className=" ">
        <span>I am</span>
        <h4 className="text-5xl mx-6">
          {firstName} {lastName}
        </h4>
      </h1>
      <h1 className="mb-20">
        <span>I am {designation}</span>
      </h1>
      <div className="buttons mt-24">
        {
          github&&(
            <Gitbutton github={github} />
          )
        }
        {
          linkedin&&(
            <Linkedinbutton linkedin={linkedin} />
          )
        }
      </div>
    </div>
  );
}

export default Intro;

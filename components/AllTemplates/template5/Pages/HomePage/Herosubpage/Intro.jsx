import TypingName from '../../../Components/TypingAnimation/TypingName'
import Typing from '../../../Components/TypingAnimation/Typing'
import Gitbutton from '../../../Components/Buttons/github'
import Linkedinbutton from '../../../Components/Buttons/linkedin'
import './Intro.scss';
import './Introquries.scss';
import Morning from '../../../Components/Goodmorning/Goodmorning'
function Intro() {


  return (
    <div className="container">
    <Morning/>
    <h1>
      <span>I am</span>
      <TypingName/>
    </h1>
    <Typing/>
 
    <h3>
    🚀 A passionate Software Developer based in Faislabad, Pakistan.
    </h3>
    <h3>
    ⚡ Exploring opportunities and side projects.
    </h3>
    <h3>
    💻
My main tech stack currently is  <a
            href="https://www.coursera.org/articles/mern-stack"
            target="-blank"
          >
            MERN
          </a>  in combination with Tailwind CSS and TypeScript. </h3>
    <div className="buttons">
      <Gitbutton/>
    <Linkedinbutton/>
    </div>
    </div>
  );
}

export default Intro;


import React from "react";
import '../Herosubpage/KeepTouch.scss'
import Social from '../../../Components/SocialLinks/social.jsx'
export default function KeepTouch({socialProfiles}) {
  return (
    <div className="Keeptouch">
      <h1>🚀Keep In Touch.</h1>
      <p>
        My inbox is always open.Whether you have a question or just talk more
        about your projects! Feel free to mail me about any relevent job updates.
      </p>
      <Social socialProfiles={socialProfiles}/>
    </div>
  );
}

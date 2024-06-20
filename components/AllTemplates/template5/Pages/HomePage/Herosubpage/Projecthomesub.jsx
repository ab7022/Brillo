/* eslint-disable no-unused-vars */
import React from "react";
import  Link  from "next/link";
import "../Herosubpage/projecthomesub.scss";
import "../Herosubpage/queryProject.scss";
import Card from "../../../Components/Cards/Cards";
export default function Projecthomesub() {
  return (
    <div className="projectsub">
      <h2>💻All Creative Works.</h2>
      <p>Here&apos;s some of my projects that I have worked on.</p>
      <Link href="/project">Explore more →</Link>
      <Card />
    </div>
  );
}

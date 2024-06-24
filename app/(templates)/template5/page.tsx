"use client"
import Intro from "@/components/AllTemplates/template5/Pages/HomePage/Herosubpage/Intro";
import Introduction from "@/components/AllTemplates/template5/Pages/HomePage/Herosubpage/Introduction";
import Projecthomesub from "@/components/AllTemplates/template5/Pages/HomePage/Herosubpage/Projecthomesub";
import KeepTouch from "@/components/AllTemplates/template5/Pages/HomePage/Herosubpage/KeepTouch";
import Header from "@/components/AllTemplates/template5/Components/Header/Header";
import Footer from "@/components/AllTemplates/template5/Components/Footer/Footer";
import './App.scss'
export default function Hero() {
  return (
    <div className="Hero-Div">
      <Header />
      <Intro />
      <Introduction />
      <Projecthomesub />
      <KeepTouch />
      <Footer />
    </div>
  );
}

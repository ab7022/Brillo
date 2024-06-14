"use client"
import GithubDetails from "@/components/AllTemplates/template3/Components/GithubDetails";
import Header from "@/components/AllTemplates/template3/Components/Header";
import Hero from "@/components/AllTemplates/template3/Components/Hero";
import Skills from "@/components/AllTemplates/template3/Components/Skills";
import ButtonGradient from "@/components/AllTemplates/template3/assets/svg/ButtonGradient";
import Contact from "@/components/AllTemplates/template3/Components/Contact";
import {Projects} from "@/components/AllTemplates/template3/Components/Projects";
import Footer from "@/components/AllTemplates/template3/Components/Footer";

function App() {
  return (
      <>
        <div className="pt-20 overflow-hidden ">
          <Header />
          <Hero />
          <GithubDetails />
          <Projects />
          <Skills />
          <Contact />
          <Footer />
        </div>
        <ButtonGradient />
      </>
  );
}

export default App;

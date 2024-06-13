import Navbar from "@/components/AllTemplates/template2/components/Navbar";
import HeroSection from "@/components/AllTemplates/template2/components/HeroSection";
import About from "@/components/AllTemplates/template2/components/About";
import Projects from "@/components/AllTemplates/template2/components/Projects";
import Contact from "@/components/AllTemplates/template2/components/Contact";
import Skills from "@/components/AllTemplates/template2/components/Skills";
import Experience from "@/components/AllTemplates/template2/components/Experience";

export default function Home() {
  return (
    <main className="bg-bgDark text-textWhite relative ">
      <div className="md:mx-48">

      <Navbar />
      <main className="overflow-hidden px-3 md:px-4">
        <HeroSection />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
      </div>

    </main>
  );
}

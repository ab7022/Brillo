import Navbar from "@/components/AllTemplates/template2/components/Navbar";
import HeroSection from "@/components/AllTemplates/template2/components/HeroSection";
import About from "@/components/AllTemplates/template2/components/About";
import Projects from "@/components/AllTemplates/template2/components/Projects";
import Contact from "@/components/AllTemplates/template2/components/Contact";
import Skills from "@/components/AllTemplates/template2/components/Skills";
import Experience from "@/components/AllTemplates/template2/components/Experience";
import { Inter, Montserrat } from "next/font/google";

export default function Home() {
  const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

  return (
    <div  className={`min-w-screen ${montserrat.className}`}>

    <main className="bg-blue-500 text-textWhite  min-w-screen">
      <Navbar />
      <main className="overflow-hidden px-3 md:px-4">
        <HeroSection />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </main>
    </div>

  );
}

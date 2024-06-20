"use client"
import "./App.scss";
import PortfolioMain from "@/components/AllTemplates/template5/Pages/Portfoliopage/PortfolioMain";
import Hero from "@/components/AllTemplates/template5/Pages/HomePage/Hero.jsx";
import ContactPage from "@/components/AllTemplates/template5/Pages/ContactPage/ContactPage.jsx";
import AboutPage from "@/components/AllTemplates/template5/Pages/AboutPage/AboutPage.jsx";
function App() {
  return (
    <>
      <Hero />
      <AboutPage />
      <PortfolioMain />
      <ContactPage />
    </>
  );
}

export default App;

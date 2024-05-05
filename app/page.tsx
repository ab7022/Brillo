import Header from "@/components/HomePage/Header";
import Footer from "@/components/HomePage/Footer";
import Hero from "@/components/HomePage/Hero";
import Templates from "@/components/HomePage/Templates";
import Showcase from "@/components/HomePage/Showcase";
import Pricing from "@/components/HomePage/Pricing";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-black dark:bg-black animate-gradient-x">
      <Header />
      <Hero />
      <Templates />
      <Showcase />
      <Pricing />
      <Footer />
    </div>
  );
}

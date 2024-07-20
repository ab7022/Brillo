import Header from "@/components/HomePage/Header";
import { Template } from "@/components/templates";
import { getUser } from "@/components/Sessions";
import { redirect } from "next/navigation";
import TemplateData from "@/data/templates";
import { FiSearch, FiFilter } from "react-icons/fi";
import Footer from "@/components/HomePage/Footer";

const Template1 = async () => {
  const session = await getUser();



  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>
      <Header session={session} />

      <main className="relative w-full mx-auto px-4 py-12 md:px-6 mt-20 lg:py-16">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-4 leading-tight">
              Discover Your Perfect{" "}
              <span className="text-blue-600">Portfolio </span>
              Theme
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Explore our curated collection of stunning themes and bring your
              creative vision to life.
            </p>
          </div>

          {/* Themes Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TemplateData.map((template, index) => (
              <Template link={undefined} key={template.id} {...template} index={index} />
            ))}
          </div>

          <div className="mt-16 text-center">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-6 animate-fade-in-up">
              Ready to get started?
            </h2>
            <p className="text-xl text-gray-600 mb-8 animate-fade-in-up animation-delay-200">
              Browse our template collection, select your favorite, and click
              'Start' to begin crafting your portfolio.
            </p>
            <div className="mb-12 space-y-4 animate-fade-in-up animation-delay-400 max-w-md mx-auto">
              <p className="text-lg text-gray-700 flex items-start justify-left">
                <span className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center mr-3">1</span>
                View our available templates
              </p>
              <p className="text-lg text-gray-700 flex items-start justify-left">
                <span className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center mr-3">2</span>
                Choose the one that suits your style
              </p>
              <p className="text-md text-gray-700 flex items-start justify-left">
                <span className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center mr-3">3</span>
                Click the 'Start' button to start building
              </p>
            </div>
         
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Template1;

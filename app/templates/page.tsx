import Header from "@/components/HomePage/Header";
import { Template } from "../../components/templates";
import { getUser } from "@/components/Sessions";

const Template1 = async () => {
  const session = await getUser();

  const templates = [
    {
      id: "1",
      heading: "Classic",
      description: "A timeless and elegant theme",
      see: "https://sagarmude.netlify.app/",
      use: "https://sagarmude.netlify.app/",
      img: "/images/sagar.png",
    },
    {
      id: "2",
      heading: "Modern",
      description: "A sleek and contemporary theme",
      see: "https://parth-portfolio-henna.vercel.app/",
      use: "https://parth-portfolio-henna.vercel.app/",
      img: "/images/parth.png",
    },
    {
      id: "3",
      heading: "Professional",
      description: "A clean and professional theme",
      see: "https://aakash-sharma.netlify.app/",
      use: "https://aakash-sharma.netlify.app/",
      img: "/images/akash.png",
    },
    {
      id: "4",
      heading: "Creative",
      description: "A bold and artistic theme",
      see: "https://harshitrv.vercel.app/",
      use: "https://harshitrv.vercel.app/",
      img: "/images/harshit.png",
    },
    {
      id: "5",
      heading: "Minimalist",
      description: "A simple and clean theme",
      see: "https://ayush-portfolio-nu.vercel.app/",
      use: "https://ayush-portfolio-nu.vercel.app/",
      img: "/images/ayush.png",
    },
    {
      id: "6",
      heading: "Elegant",
      description: "A sophisticated and stylish theme",
      see: "https://www.princemuhammad.pro/",
      use: "https://www.princemuhammad.pro/",
      img: "/images/prince.png",
    },
    {
      id: "7",
      heading: "Bold",
      description: "A striking and powerful theme",
      see: "https://www.rohitk06.site/",
      use: "https://www.rohitk06.site/",
      img: "/images/rohit.png",
    },
    {
      id: "8",
      heading: "Vibrant",
      description: "A colorful and lively theme",
      see: "https://utsavghimire.com.np/",
      use: "https://utsavghimire.com.np/",
      img: "/images/utsav.png",
    },
    {
      id: "9",
      heading: "Dynamic",
      description: "An energetic and dynamic theme",
      see: "https://frozenhearth.vercel.app/",
      use: "https://frozenhearth.vercel.app/",
      img: "/images/vish.png",
    },
  ];
  return (
    <>
      {" "}
      <Header session={session} />
      <main
        key="1"
        className="w-full mx-auto px-4 py-12 md:px-6 lg:py-16 bg-gray-950 dark:bg-gray-950"
      >
        <div className="flex flex-col items-center text-center space-y-4 mb-8">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mt-20 text-gray-50 dark:text-gray-50">
            Explore Our Themes
          </h1>
          <p className="max-w-[700px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Find the perfect theme for your project and get started today.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:mx-24 mx-2">
          {templates.map((template) => (
            <Template
              key={template.id}
              id={template.id}
              heading={template.heading}
              description={template.description}
              see={template.see}
              link={`/templates/${template.id}`}
              img={template.img}
            />
          ))}
        </div>
      </main>
    </>
  );
};
export default Template1;

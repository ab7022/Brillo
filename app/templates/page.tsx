import Header from "@/components/HomePage/Header";
import { Template } from "../../components/templates";
import { getUser } from "@/components/Sessions";
import { redirect } from "next/navigation";

const Template1 = async () => {
  const session = await getUser();
  if (!session) {
    redirect("/auth/signin?callbackUrl=http%3A%2F%2Flocalhost%3A3000%2F");
  }
  const templates = [
    {
      id: "1",
      heading: "Modern Minimalist",
      description: "A sleek, minimalist portfolio with elegance.",
      see: "https://sagarmude.netlify.app/",
      img: "/images/template1.png"
    },
    {
      id: "2",
      heading: "Sleek & Contemporary",
      description: "Modern, user-friendly design for sophisticated presentation.",
      see: "https://parth-portfolio-henna.vercel.app/",
      img: "/images/template2.png"
    },
    {
      id: "3",
      heading: "Clean & Professional",
      description: "A professional, clean layout for clear presentation.",
      see: "https://aakash-sharma.netlify.app/",
      img: "/images/template3.png"
    },
    {
      id: "4",
      heading: "Bold & Artistic",
      description: "Visually striking, bold design elements for impactful visuals.",
      see: "https://harshitrv.vercel.app/",
      img: "/images/template4.png"
    },
    {
      id: "5",
      heading: "Simple & Clean",
      description: "Clear, minimalist style for simplicity and clarity.",
      see: "https://ayush-portfolio-nu.vercel.app/",
      img: "/images/template5.png"
    },
    {
      id: "6",
      heading: "Sophisticated & Stylish",
      description: "Stylish, sophisticated theme with elegance and charm.",
      see: "https://www.princemuhammad.pro/",
      img: "/images/template6.png"
    },
    {
      id: "7",
      heading: "Striking & Powerful",
      description: "Powerful impact with striking visual elements.",
      see: "https://www.rohitk06.site/",
      img: "/images/template7.png"
    },
    {
      id: "8",
      heading: "Colorful & Lively",
      description: "Vibrant, lively theme with energy and vibrancy.",
      see: "https://utsavghimire.com.np/",
      img: "/images/template8.png"
    },
    {
      id: "9",
      heading: "Energetic & Dynamic",
      description: "Dynamic, engaging showcase of creativity and innovation.",
      see: "https://frozenhearth.vercel.app/",
      img: "/images/template9.png"
    },
    {
      id: "10",
      heading: "Energetic & Dynamic",
      description: "Engaging, dynamic layout for impactful presentation.",
      see: "https://frozenhearth.vercel.app/",
      img: "/images/template10.png"
    }
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
            Find the perfect theme for your portfolio and get started today.
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

"use";
import Header from "@/components/HomePage/Header";
import { getUser } from "@/components/Sessions";
import TemplateDetails from "@/components/templates/TemplateDetails";

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

const TemplatePage = async ({ params }: { params: { id: string } }) => {
  const id = params.id;

  const template = templates.find((tmpl) => tmpl.id === id);

  const session = await getUser();
  if (template) {
    return (
      <>
        <Header session={session} />
        <TemplateDetails id={id} template={template} />
      </>
    );
  }
};
export default TemplatePage;

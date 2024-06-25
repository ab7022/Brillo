import ConfirmationModal from "@/components/ConfirmationModal";
import Header from "@/components/HomePage/Header";
import { getUser } from "@/components/Sessions";
import TemplateDetails from "@/components/templates/TemplateDetails";
import { redirect } from "next/navigation";

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


const TemplatePage = async ({ params }: { params: { id: string } }) => {
  const id = params.id;

  const template = templates.find((tmpl) => tmpl.id === id);

  const session = await getUser();
  if (!session) {
    redirect("/auth/signin?callbackUrl=http%3A%2F%2Flocalhost%3A3000%2F")
  }
  if (template) {
    return (
      <>
        <Header session={session} />
        <TemplateDetails id={id} template={template} session={session}/>
      </>
    );
  }
};
export default TemplatePage;

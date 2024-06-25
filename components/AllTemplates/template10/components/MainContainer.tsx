import { Inter, Outfit } from "next/font/google";
import Header from "./Header";
const inter = Inter({ subsets: ["latin"] });

const outfit = Outfit({ subsets: ["latin"] });

const MainContainer = (props: { children: React.ReactNode }) => {
  return (
    <div
      className={`flex flex-col space-y-2 lg:space-y-0 lg:grid lg:grid-cols-4 gap-4 w-full h-full min-h-screen min-w-screen bg-slate-200 p-4 lg:p-16 text-teal-900 font-light ${outfit.className} `}
    >
      {props.children}
    </div>
  );
};

export default MainContainer;

import Header from "@/components/HomePage/Header";
import Link from "next/link";
import { getUser } from "@/components/Sessions";
import { Template } from "../../components/templates";
export default async function () {
  const session = await getUser();

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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-24">
        <Template
            heading={"Classic"}
            description={"A timeless and elegant theme"}
            see={"https://sagarmude.netlify.app/"}
            use={"https://sagarmude.netlify.app/"}
            img={"./sagar.png"}

          />
               <Template
            heading={"Classic"}
            description={"A timeless and elegant theme"}
            see={"https://parth-portfolio-henna.vercel.app/"}
            use={"https://parth-portfolio-henna.vercel.app/"}
            img={"./parth.png"}

          />
          <Template
            heading={"Classic"}
            description={"A timeless and elegant theme"}
            see={"https://aakash-sharma.netlify.app/"}
            use={"https://aakash-sharma.netlify.app/"}
            img={"./akash.png"}
          />
          <Template
            heading={"Classic"}
            description={"A timeless and elegant theme"}
            see={"https://harshitrv.vercel.app/"}
            use={"https://harshitrv.vercel.app/"}
            img={"./harshit.png"}

          />
          <Template
            heading={"Classic"}
            description={"A timeless and elegant theme"}
            see={"https://ayush-portfolio-nu.vercel.app/"}
            use={"https://ayush-portfolio-nu.vercel.app/"}
            img={"./ayush.png"}
          />
          <Template
            heading={"Classic"}
            description={"A timeless and elegant theme"}
            see={"https://www.princemuhammad.pro/"}
            use={"https://www.princemuhammad.pro/"}
            img={"./prince.png"}

          />
          <Template
            heading={"Classic"}
            description={"A timeless and elegant theme"}
            see={"https://www.rohitk06.site/"}
            use={"https://www.rohitk06.site/"}
            img={"./rohit.png"}

          />
          <Template
            heading={"Classic"}
            description={"A timeless and elegant theme"}
            see={"https://utsavghimire.com.np/"}
            use={"https://utsavghimire.com.np/"}
            img={"./utsav.png"}

          />
               <Template
            heading={"Classic"}
            description={"A timeless and elegant theme"}
            see={"https://frozenhearth.vercel.app/"}
            use={"https://frozenhearth.vercel.app/"}
            img={"./vish.png"}
    
          />
       
        </div>
      </main>
    </>
  );
}

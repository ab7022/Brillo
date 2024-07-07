import Header from "@/components/HomePage/Header";
import { Template } from "../../components/templates";
import { getUser } from "@/components/Sessions";
import { redirect } from "next/navigation";
import TemplateData from "@/data/templates";

const Template1 = async () => {
  const session = await getUser();
  if (!session) {
    redirect("/auth/signin?callbackUrl=http%3A%2F%2Flocalhost%3A3000%2F");
  }
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
          {TemplateData.map((template) => (
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
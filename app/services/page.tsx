import Header from "@/components/HomePage/Header";
import { getUser } from "@/components/Sessions";
import { notFound } from "next/navigation";

const Services = async () => {
  try {
    const session = await getUser();

    return (
      <>
        <Header session={session} />
        <div className="max-w-4xl mx-auto py-12 px-4 md:px-6 mt-20">
          <h1 className="text-3xl font-bold mb-6">Our Services</h1>
          <p className="text-gray-700 mb-4">
            At Eazy Folio, we offer the following services to help you create a
            stunning portfolio:
          </p>

          <h2 className="text-2xl font-bold mb-4">1. Template Selection</h2>
          <p className="text-gray-700 mb-4">
            Choose from a variety of professionally designed templates to create
            your portfolio.
          </p>

          <h2 className="text-2xl font-bold mb-4">2. Customization Services</h2>
          <p className="text-gray-700 mb-4">
            Customize the templates to fit your personal or professional style
            and requirements.
          </p>

          <h2 className="text-2xl font-bold mb-4">3. Portfolio Management</h2>
          <p className="text-gray-700 mb-4">
            Manage and update your portfolio easily through our user-friendly
            dashboard.
          </p>

          <h2 className="text-2xl font-bold mb-4">4. SEO Optimization</h2>
          <p className="text-gray-700 mb-4">
            Optimize your portfolio for search engines to increase visibility.
          </p>

          <h2 className="text-2xl font-bold mb-4">5. Hosting Services</h2>
          <p className="text-gray-700 mb-4">
            Host your portfolio on our secure and reliable servers.
          </p>
        </div>
      </>
    );
  } catch (error) {
    console.error(error);
    notFound();
  }
};

export default Services;

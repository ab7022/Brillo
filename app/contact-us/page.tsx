import Header from "@/components/HomePage/Header";
import { getUser } from "@/components/Sessions";
import { notFound } from "next/navigation";

const ContactUs = async () => {
  try {
    const session = await getUser();

    return (
      <>
        <Header session={session} />
        <div className="max-w-4xl mx-auto py-12 px-4 md:px-6 mt-20">
          <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
          <p className="text-gray-700 mb-4">
            If you have any questions or concerns, please contact us:
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Email:</strong> support@eazyfolio.com
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Phone:</strong> +91 82170 03676
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Address:</strong> 10/3 2nd main road, ganganagar, bangalore-560032
          </p>
        </div>
      </>
    );
  } catch (error) {
    console.error(error);
    notFound();
  }
};

export default ContactUs;


import Header from "@/components/HomePage/Header";
import { getUser } from "@/components/Sessions";
import { notFound } from "next/navigation";

const PrivacyPolicy = async () => {
  try {
    const session = await getUser();

    return (
      <>
        <Header session={session} />
        <div className="max-w-4xl mx-auto py-12 px-4 md:px-6 mt-20">
          <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
          <p className="text-gray-700 mb-4">
            Welcome to Eazy Folio. We are committed to protecting your privacy and ensuring that your personal information is handled in a safe and responsible manner. This Privacy Policy outlines how we collect, use, and protect your information.
          </p>

          <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
          <p className="text-gray-700 mb-4">
            As a user of EazyFolio, you will enter various types of personal information, including but not limited to your name, email address, professional experiences, education, projects, achievements, experiences, and social media profiles. This information is stored in our database to facilitate the creation and management of your portfolio.
          </p>

          <h2 className="text-2xl font-bold mb-4">How We Use Your Information</h2>
          <p className="text-gray-700 mb-4">
            We use your information to provide and improve our services, enable the creation and customization of your portfolio, and ensure the security of our platform. We may also use your information to communicate with you about updates, promotional materials, and other relevant information if you have opted in to receive such communications.
          </p>

          <h2 className="text-2xl font-bold mb-4">Payment Information</h2>
          <p className="text-gray-700 mb-4">
            When you subscribe to one of our payment plans, we collect and process payment information. Please note that all payments are non-refundable. By subscribing, you agree to this non-refundable policy.
          </p>

          <h2 className="text-2xl font-bold mb-4">Third-Party Templates</h2>
          <p className="text-gray-700 mb-4">
            The templates provided in our service are publicly available on GitHub and are used in accordance with their respective licenses. We do not sell these templates; rather, we offer services that enable you to utilize these templates for your portfolio. If you have any concerns about the use of these templates, please contact us at support@eazyfolio.com.
          </p>

          <h2 className="text-2xl font-bold mb-4">Sharing Your Information</h2>
          <p className="text-gray-700 mb-4">
            We do not sell or rent your personal information to third parties. We may share your information with trusted partners who assist us in operating our website and providing our services, as long as those parties agree to keep your information confidential.
          </p>

          <h2 className="text-2xl font-bold mb-4">Your Rights</h2>
          <p className="text-gray-700 mb-4">
            You have the right to access, update, and delete your personal information. If you would like to exercise these rights, please contact us at support@eazyfolio.com. Please note that deleting your information may impact your ability to use our services.
          </p>

          <h2 className="text-2xl font-bold mb-4">Security</h2>
          <p className="text-gray-700 mb-4">
            We take reasonable measures to protect your personal information from unauthorized access, use, or disclosure. However, no internet-based service can be completely secure, and we cannot guarantee the absolute security of your information.
          </p>

          <h2 className="text-2xl font-bold mb-4">Changes to This Policy</h2>
          <p className="text-gray-700 mb-4">
            We may update this Privacy Policy from time to time. Any changes will be posted on this page, and we encourage you to review this policy periodically to stay informed about how we are protecting your information.
          </p>

          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <p className="text-gray-700 mb-4">
            If you have any questions or concerns about our Privacy Policy, please contact us at support@eazyfolio.com.
          </p>
        </div>
      </>
    );
  } catch (error) {
    console.error(error);
    notFound();
  }
};

export default PrivacyPolicy;

import Header from "@/components/HomePage/Header";
import { getUser } from "@/components/Sessions";
import { redirect } from "next/navigation";

const TermsOfService = async () => {
  const session = await getUser();
  if (!session) {
    redirect("/auth/signin?callbackUrl=http%3A%2F%2Flocalhost%3A3000%2F");
  }
  return (
    <>
      <Header session={session} />{" "}
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-6 mt-20 ">
        <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
        <p className="text-gray-700 mb-4">
          Welcome to Eazy Folio! By using our services, you agree to the
          following terms and conditions. Please read them carefully.
        </p>

        <h2 className="text-2xl font-bold mb-4">1. Use of Our Service</h2>
        <p className="text-gray-700 mb-4">
          <strong>1.1 Acceptance:</strong> By accessing and using Eazy Folio
          ("the Service"), you agree to comply with these Terms of Service.
        </p>
        <p className="text-gray-700 mb-4">
          <strong>1.2 User Responsibilities:</strong> You are responsible for
          the accuracy and legality of the information you provide when using
          our Service. You agree not to provide any false or misleading
          information.
        </p>
        <p className="text-gray-700 mb-4">
          <strong>1.3 Access:</strong> We strive to ensure continuous
          availability of our Service, but we do not guarantee uninterrupted
          access. We reserve the right to suspend or terminate access to the
          Service at any time for maintenance or security reasons.
        </p>

        <h2 className="text-2xl font-bold mb-4">2. Payment and Subscription</h2>
        <p className="text-gray-700 mb-4">
          <strong>2.1 Subscription Plans:</strong> Eazy Folio offers various
          subscription plans. By subscribing to a plan, you agree to pay the
          applicable fees as described on our website.
        </p>
        <p className="text-gray-700 mb-4">
          <strong>2.2 Non-Refundable Payments:</strong> All payments made for
          our services are non-refundable. By subscribing to our plans, you
          acknowledge and agree to this policy.
        </p>
        <p className="text-gray-700 mb-4">
          <strong>2.3 Automatic Renewal:</strong> Subscription plans may
          automatically renew unless canceled by you. You can manage your
          subscription and cancellation through your account settings.
        </p>

        <h2 className="text-2xl font-bold mb-4">3. User Content and Data</h2>
        <p className="text-gray-700 mb-4">
          <strong>3.1 Ownership:</strong> You retain ownership of any content
          and data you upload or enter into the Service.
        </p>
        <p className="text-gray-700 mb-4">
          <strong>3.2 Use of Data:</strong> We may use your data to provide and
          improve our Service, as outlined in our Privacy Policy.
        </p>

        <h2 className="text-2xl font-bold mb-4">4. Intellectual Property</h2>
        <p className="text-gray-700 mb-4">
          <strong>4.1 Templates:</strong> The templates available through our
          Service are publicly available on GitHub and are used in accordance
          with their respective licenses. We do not sell these templates;
          rather, we offer services that enable you to use them for your
          portfolio.
        </p>
        <p className="text-gray-700 mb-4">
          <strong>4.2 Trademarks:</strong> The Eazy Folio name, logo, and any
          other trademarks or service marks are the property of Eazy Folio. You
          may not use these without our prior written permission.
        </p>

        <h2 className="text-2xl font-bold mb-4">5. Limitation of Liability</h2>
        <p className="text-gray-700 mb-4">
          <strong>5.1 Disclaimer:</strong> Eazy Folio is provided "as is"
          without warranties of any kind, express or implied.
        </p>
        <p className="text-gray-700 mb-4">
          <strong>5.2 Limitation of Liability:</strong> We are not liable for
          any direct, indirect, incidental, or consequential damages arising
          from the use or inability to use our Service.
        </p>

        <h2 className="text-2xl font-bold mb-4">6. Changes to Terms</h2>
        <p className="text-gray-700 mb-4">
          <strong>6.1 Updates:</strong> We may update these Terms of Service
          from time to time. Any changes will be effective upon posting the
          revised terms on our website.
        </p>
        <p className="text-gray-700 mb-4">
          <strong>6.2 Notification:</strong> We may notify you of significant
          changes by email or through a notice on our website.
        </p>

        <h2 className="text-2xl font-bold mb-4">7. Governing Law</h2>
        <p className="text-gray-700 mb-4">
          <strong>7.1 Jurisdiction:</strong> These Terms of Service are governed
          by and construed in accordance with the laws,
          without regard to its conflict of law principles.
        </p>

        <h2 className="text-2xl font-bold mb-4">8. Contact Us</h2>
        <p className="text-gray-700 mb-4">
          If you have any questions or concerns about our Terms of Service,
          please contact us at support@eazyfolio.com.
        </p>
      </div>
    </>
  );
};

export default TermsOfService;

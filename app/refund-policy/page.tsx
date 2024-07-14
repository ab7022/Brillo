"use client"

import Header from "@/components/HomePage/Header";
import { getUser } from "@/components/Sessions";
import { notFound, redirect } from "next/navigation";

const RefundPolicy = async () => {
  try {
    const session = await getUser();
    if (!session) {
      redirect("https://eazyfolio.com/auth/signin?callbackUrl=https%3A%2F%2Feazyfolio.com%2F")
    }
    return (
      <>
        <Header session={session} />
        <div className="max-w-4xl mx-auto py-12 px-4 md:px-6 mt-20">
          <h1 className="text-3xl font-bold mb-6">Refunds/Cancellations Policy</h1>
          <p className="text-gray-700 mb-4">
            At Eazy Folio, we offer various subscription plans to our users. Please note the following refund and cancellation policies for these plans:
          </p>

          <h2 className="text-2xl font-bold mb-4">Non-Refundable Payments</h2>
          <p className="text-gray-700 mb-4">
            All payments made for our services are non-refundable. By subscribing to our plans, you acknowledge and agree to this policy.
          </p>

          <h2 className="text-2xl font-bold mb-4">Cancellations</h2>
          <p className="text-gray-700 mb-4">
            You can cancel your subscription at any time through your account settings. Upon cancellation, you will continue to have access to your subscription until the end of the current billing period, at which point your subscription will not be renewed.
          </p>

          <h2 className="text-2xl font-bold mb-4">Refund Processing Time</h2>
          <p className="text-gray-700 mb-4">
            In the rare event that a refund is granted, it will be processed within 5-7 working days. The refunded amount will be credited back to the original payment method.
          </p>

          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <p className="text-gray-700 mb-4">
            If you have any questions or concerns about our Refunds/Cancellations Policy, please contact us at support@eazyfolio.com.
          </p>
        </div>
      </>
    );
  } catch (error) {
    console.error(error);
    notFound();
  }
};

export default RefundPolicy;

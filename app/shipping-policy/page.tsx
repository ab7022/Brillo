"use client";

import Header from "@/components/HomePage/Header";
import { getUser } from "@/components/Sessions";
import { useSession } from "next-auth/react";
import { notFound, redirect } from "next/navigation";

const ShippingPolicy =  () => {
  const { data: session, status } = useSession();
  
  if (!session && status === "loading") {
    return <div>Loading...</div>;
  }

  if (!session) {
    redirect("https://eazyfolio.com/auth/signin?callbackUrl=https%3A%2F%2Feazyfolio.com%2F");
    return null;
  }
    return (
      <>
        <Header session={session} />
        <div className="max-w-4xl mx-auto py-12 px-4 md:px-6 mt-20">
          <h1 className="text-3xl font-bold mb-6">Shipping Policy</h1>
          <p className="text-gray-700 mb-4">
            At Eazy Folio, we currently do not offer any physical products,
            hence there is no shipping policy applicable. All our services are
            provided digitally.
          </p>

          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <p className="text-gray-700 mb-4">
            If you have any questions or concerns about our shipping policy,
            please contact us at support@eazyfolio.com.
          </p>
        </div>
      </>
    );

};

export default ShippingPolicy;

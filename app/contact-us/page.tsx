"use client";

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Header from "@/components/HomePage/Header";
import { getUser } from "@/components/Sessions";

const ContactUs = () => {
  const [session, setSession] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const fetchSession = async () => {
      try {
        const userSession = await getUser();
        if (!userSession) {
          router.push(
            "https://eazyfolio.com/auth/signin?callbackUrl=https%3A%2F%2Feazyfolio.com%2F"
          );
        } else {
          setSession(userSession);
        }
      } catch (error) {
        console.error(error);
        router.push("/404");
      }
    };

    fetchSession();
  }, [router]);

  if (!session) {
    return null; // or a loading spinner
  }

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
          <strong>Address:</strong> 10/3 2nd main road, Ganganagar, Bangalore-560032
        </p>
      </div>
    </>
  );
};

export default ContactUs;

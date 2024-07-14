"use client"

import Header from "@/components/HomePage/Header";
import { getUser } from "@/components/Sessions";
import { useSession } from "next-auth/react";
import { notFound, redirect } from "next/navigation";

const AboutUs =  () => {
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
        <div className="max-w-4xl mx-auto py-12 px-4 md:px-6 mt-24">
          <h1 className="text-3xl font-bold mb-6">About Us</h1>
          <p className="text-gray-700 mb-4">
            Welcome to Eazy Folio! I'm Abdul Bayees Abuhusaina, the founder and sole developer of Eazy Folio. My mission is to help professionals and creatives showcase their work and achievements through beautifully crafted portfolios.
          </p>
          <h2 className="text-2xl font-bold mb-4">My Mission</h2>
          <p className="text-gray-700 mb-4">
            At Eazy Folio, my mission is to simplify the process of creating and managing professional portfolios. I believe that everyone deserves a platform to highlight their skills, experiences, and accomplishments in a visually appealing and accessible manner.
          </p>
          <h2 className="text-2xl font-bold mb-4">My Values</h2>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li>Innovation: I am committed to using the latest technologies and frameworks to deliver the best possible experience for users.</li>
            <li>Quality: I strive for excellence in everything I do, from user interface design to customer service.</li>
            <li>Accessibility: I aim to make the platform user-friendly and accessible to people of all skill levels.</li>
            <li>Customer Focus: Users are at the heart of everything I do, and I am dedicated to meeting their needs and exceeding their expectations.</li>
          </ul>
          <h2 className="text-2xl font-bold mb-4">About Me</h2>
          <p className="text-gray-700 mb-4">
            I am a passionate developer dedicated to making Eazy Folio the best portfolio builder available. I am constantly working to improve the platform and provide new features that help users succeed.
          </p>
          <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
          <p className="text-gray-700 mb-4">
            If you have any questions, suggestions, or feedback, I'd love to hear from you. Please feel free to reach out to me at <a href="mailto:support@eazyfolio.com" className="text-blue-500 hover:underline">support@eazyfolio.com</a>.
          </p>
        </div>
      </>
    )
};

export default AboutUs;

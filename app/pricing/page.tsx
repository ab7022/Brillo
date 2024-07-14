"use client";

import Header from "@/components/HomePage/Header";
import PricingSection from "@/components/HomePage/PricingSection";
import { getUser } from "@/components/Sessions";
import { useSession } from "next-auth/react";
import { notFound, redirect } from "next/navigation";

const Pricing =  () => {
  const { data: session, status } = useSession();
  
  if (!session && status === "loading") {
    return <div>Loading...</div>;
  }

  if (!session) {
    redirect("https://eazyfolio.com/auth/signin?callbackUrl=https%3A%2F%2Feazyfolio.com%2F");
    return null;
  }
  return(
    <>
    <Header session={session}/>
    <PricingSection/>
</>
  )

};

export default Pricing
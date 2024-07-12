"use client";
import DashboardComponent from "@/components/dashboard";
import HeaderComponent from "@/components/HomePage/Header";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function Dashboard() {
  const { data: session, status } = useSession();
  
  if (!session && status === "loading") {
    return <div>Loading...</div>;
  }

  if (!session) {
    https://eazyfolio.com/auth/signin?callbackUrl=https%3A%2F%2Feazyfolio.com%2F    return null;
  }

  return (
    <>
      <HeaderComponent session={session} />
      <div className="md:py-24 py-20">
        <DashboardComponent session={session} />
      </div>
    </>
  );
}

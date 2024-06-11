"use client";
import Dashboard from "@/components/dashboard";
import Header from "@/components/HomePage/Header";
import { useSession } from "next-auth/react";

export default function dashboard() {
  const { data: session, status } = useSession();
  console.log(session);

  return (
    <>
      <Header session={session} />
      <div className="md:py-24 py-20">
        <Dashboard session={session}/>
      </div>
    </>
  );
}

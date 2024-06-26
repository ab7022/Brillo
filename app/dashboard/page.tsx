"use client";
import Dashboard from "@/components/dashboard";
import Header from "@/components/HomePage/Header";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function dashboard() {
  const { data: session, status } = useSession();
  if (!session && status === "loading") {
    return <div>Loading...</div>;
  }

  if (!session) {
    redirect("/auth/signin?callbackUrl=http%3A%2F%2Flocalhost%3A3000%2F");
    return null
  }
  return (
    <>
      <Header session={session} />
      <div className="md:py-24 py-20">
        <Dashboard session={session} />
      </div>
    </>
  );
}

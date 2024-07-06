import Header from "@/components/HomePage/Header";
import Footer from "@/components/HomePage/Footer";
import Hero from "@/components/HomePage/Hero";
import Templates from "@/components/HomePage/Templates";
import Showcase from "@/components/HomePage/Showcase";
import Pricing from "@/components/HomePage/Pricing";
import { useSession } from "next-auth/react";
import { getUser } from "@/components/Sessions";
import { getServerSession } from "next-auth";
import { NEXT_AUTH_CONFIG } from "@/lib/auth";

// async function getUser() {
//   const session = await getServerSession(NEXT_AUTH_CONFIG);
//   return session;
// }

export default async function Home() {
  const session = await getUser();

  return (
    <div className="">
        <Header session={session} />
        <main className="relative z-10">

        <Hero />
        <Templates />
        {/* <Showcase />
        <Pricing />
        <Footer /> */}
      </main>
    </div>
  );
}

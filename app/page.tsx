import Header from "@/components/HomePage/Header";
import Footer from "@/components/HomePage/Footer";
import Hero from "@/components/HomePage/Hero";
import { Templates } from "@/components/HomePage/Templates";
import FeaturesSection from "@/components/HomePage/FeaturesSection";
import PricingSection from "@/components/HomePage/PricingSection";
import { useSession } from "next-auth/react";
import { getUser } from "@/components/Sessions";
import { getServerSession } from "next-auth";
import { NEXT_AUTH_CONFIG } from "@/lib/auth";
import { SparklesPreview } from "@/components/HomePage/SparklesPreview";
import HowToUseSection from "@/components/HomePage/HowToUseSection";
import { NotificationComponent } from "@/components/HomePage/Notification";

// async function getUser() {
//   const session = await getServerSession(NEXT_AUTH_CONFIG);
//   return session;
// }

export default async function Home() {
  const session = await getUser();

  return (
    <div className="">
      <NotificationComponent />

      <Header session={session} />
      <main className="relative z-10">
        <Hero />
        <Templates />
        <HowToUseSection />
        <FeaturesSection />
        <PricingSection />
        <SparklesPreview />
        <Footer />
      </main>
    </div>
  );
}

import BestSelling from "@/components/BestSelling";
import CTA from "@/components/CTA";
import Explore from "@/components/Explore";
import Hero from "@/components/Hero";
import NewArrival from "@/components/NewArrival";
import Services from "@/components/Services";


export default function Home() {
  return (
    <main className="w-full min-h-screen">
      <Hero />
      <BestSelling />
      <CTA />
      <Explore/>
      <NewArrival />
      <Services />
    </main>
  );
}

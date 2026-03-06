import HomeHero from "@/components/sections/home/HomeHero";
import OurPromise from "@/components/sections/home/OurPromise";
import WhyDifferent from "@/components/sections/home/WhyDifferent";
import Clients from "@/components/sections/home/Clients";
import CredDeck from "@/components/sections/home/CredDeck";
import HomeContent from "@/components/sections/home/HomeContent";
import ServicesPreview from "@/components/sections/home/ServicesPreview";
import Pillars from "@/components/sections/home/Pillars";
import GetInTouch from "@/components/sections/home/GetInTouch";

export default function Home() {
  return (
    <>
      <HomeHero />
      <OurPromise />
      <WhyDifferent />
      <Clients />
      <CredDeck />
      <HomeContent />
      <ServicesPreview />
      <Pillars />
      <GetInTouch />
    </>
  );
}

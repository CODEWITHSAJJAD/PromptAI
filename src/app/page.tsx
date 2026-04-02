import { client, isSanityConfigured } from '@/sanity/lib/client'
import { PAGE_QUERY } from '@/sanity/lib/queries'
import SectionRenderer from '@/components/SectionRenderer'

export default async function Home() {
  if (!isSanityConfigured) return <DefaultHome />;
  const page = await client.fetch(PAGE_QUERY, { slug: 'home' })

  if (!page) {
    return <DefaultHome />;
  }

  return <SectionRenderer sections={page.sections} />;
}

const DefaultHome = () => (
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

// Keep original imports for fallback
import HomeHero from "@/components/sections/home/HomeHero";
import OurPromise from "@/components/sections/home/OurPromise";
import WhyDifferent from "@/components/sections/home/WhyDifferent";
import Clients from "@/components/sections/home/Clients";
import CredDeck from "@/components/sections/home/CredDeck";
import HomeContent from "@/components/sections/home/HomeContent";
import ServicesPreview from "@/components/sections/home/ServicesPreview";
import Pillars from "@/components/sections/home/Pillars";
import GetInTouch from "@/components/sections/home/GetInTouch";

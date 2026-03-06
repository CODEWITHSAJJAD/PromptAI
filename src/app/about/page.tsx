import { AboutHero, AboutPromise } from "@/components/sections/about/AboutHeroContent";
import { AboutPillars, AboutPartners } from "@/components/sections/about/AboutPillarsPartners";
import Founders from "@/components/sections/services/Founders";

export default function AboutPage() {
    return (
        <>
            <AboutHero />
            <AboutPromise />
            <AboutPillars />
            <Founders />
            <AboutPartners />
        </>
    );
}

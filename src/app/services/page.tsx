import ServicesHero from "@/components/sections/services/ServicesHero";
import ServiceDetailCards from "@/components/sections/services/ServiceDetailCards";
import AdoptionDeepDive from "@/components/sections/services/AdoptionDeepDive";
import Founders from "@/components/sections/services/Founders";

export default function ServicesPage() {
    return (
        <>
            <ServicesHero />
            <ServiceDetailCards />
            <AdoptionDeepDive />
            <Founders />
        </>
    );
}

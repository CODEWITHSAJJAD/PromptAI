import AcademyHero from "@/components/sections/academy/AcademyHero";
import AcademyStats from "@/components/sections/academy/AcademyStats";
import AITimeline from "@/components/sections/academy/AITimeline";
import WorkshopBenefits from "@/components/sections/academy/WorkshopBenefits";

export default function AcademyPage() {
    return (
        <main className="bg-white">
            <AcademyHero />
            <AcademyStats />
            <AITimeline />
            <WorkshopBenefits />
        </main>
    );
}

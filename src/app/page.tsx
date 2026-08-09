import HeroSection from "@/components/sections/hero";
import SubHeroSection from "@/components/sections/sub-hero";
import ImpactMarquee from "@/components/sections/impact-marquee";
import Partnerships from "@/components/sections/partnerships";
import Testimonials from "@/components/sections/testimonials";
import SystemStack from "@/components/sections/system-stack";
import MyProjects from "@/components/sections/projects";
import Footer from "@/components/sections/footer";
import TechExperience from "@/components/sections/tech-experience";

export default function Home() {
  return (
    <main className="bg-zinc-950">
      <HeroSection />
      <ImpactMarquee />
      <SubHeroSection />
      <SystemStack />
      <TechExperience />
      <MyProjects />
      <Partnerships />
      <Testimonials />
      <Footer />
    </main>
  );
}

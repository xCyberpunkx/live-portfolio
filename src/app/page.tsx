import Navigation from "@/components/sections/navigation";
import HeroSection from "@/components/sections/hero";
import SubHeroSection from "@/components/sections/sub-hero";
import ImpactMarquee from "@/components/sections/impact-marquee";
import MyProjects from "@/components/sections/projects";
import ChampionCollection from "@/components/sections/champion-collection";
import Partnerships from "@/components/sections/partnerships";
import Footer from "@/components/sections/footer";
import SplashScreen from "@/components/ui/splash-screen";
import SmoothScroll from "@/components/ui/smooth-scroll";
import TechExperience from "@/components/sections/tech-experience";

export default function Home() {
  return (
    <main className="bg-black">
      <SplashScreen />
      <Navigation />
      <SmoothScroll>
        <HeroSection />
        <ImpactMarquee />
        <SubHeroSection />
        <TechExperience />
        <MyProjects />
        <ChampionCollection />
        <Partnerships />
        <Footer />
      </SmoothScroll>
    </main>
  );
}

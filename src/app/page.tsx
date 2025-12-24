import Navigation from "@/components/sections/navigation";
import HeroSection from "@/components/sections/hero";
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
    <main className="bg-deep-midnight selection:bg-neon-cyan selection:text-deep-midnight">
      <SplashScreen />
      <Navigation />
      <SmoothScroll>
        <HeroSection />
        <ImpactMarquee />
        <TechExperience />
        <MyProjects />
        <ChampionCollection />
        <Partnerships />
        <Footer />
      </SmoothScroll>
    </main>
  );
}

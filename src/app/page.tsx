import Navigation from "@/components/sections/navigation";
import HeroSection from "@/components/sections/hero";
import SubHeroSection from "@/components/sections/sub-hero";
import ImpactMarquee from "@/components/sections/impact-marquee";
import SystemStack from "@/components/sections/system-stack";
import MyProjects from "@/components/sections/projects";
import Footer from "@/components/sections/footer";
import SplashScreen from "@/components/ui/splash-screen";
import SmoothScroll from "@/components/ui/smooth-scroll";
import TechExperience from "@/components/sections/tech-experience";
import CustomCursor from "@/components/ui/custom-cursor";
import BackToTop from "@/components/ui/back-to-top";

export default function Home() {
  return (
    <main className="bg-black">
      <SplashScreen />
      <CustomCursor />
      <BackToTop />
      <Navigation />
      <SmoothScroll>
        <HeroSection />
        <ImpactMarquee />
        <SubHeroSection />
        <SystemStack />
        <TechExperience />
        <MyProjects />
        <Footer />
      </SmoothScroll>
    </main>
  );
}

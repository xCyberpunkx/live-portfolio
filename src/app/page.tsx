import Navigation from "@/components/sections/navigation";
import HeroSection from "@/components/sections/hero";
import ImpactMarquee from "@/components/sections/impact-marquee";
import HelmetGallery from "@/components/sections/helmet-gallery";
import ChampionCollection from "@/components/sections/champion-collection";
import Partnerships from "@/components/sections/partnerships";
import Footer from "@/components/sections/footer";
import SplashScreen from "@/components/ui/splash-screen";
import SmoothScroll from "@/components/ui/smooth-scroll";

export default function Home() {
  return (
    <main className="bg-deep-olive selection:bg-neon-lime selection:text-rich-black">
      <SplashScreen />
      <Navigation />
      <SmoothScroll>
        <HeroSection />
        <ImpactMarquee />
        <HelmetGallery />
        <ChampionCollection />
        <Partnerships />
        <Footer />
      </SmoothScroll>
    </main>
  );
}

import { Button } from "@/components/ui/button";
import Image from "next/image";
import HeroSection from "@/components/home/hero-section";
import BgGradient from "@/components/common/bg-gradient";
import DemoSection from "@/components/home/demo-section";
import HowItWorksSection from "@/components/home/how-it-works";
import PricingSection from "@/components/home/pricing-section";
import CTASection from "@/components/home/cta-section";

export default function Home() {
  return (
    <div className="relative w-full">
      <BgGradient />
      <div className="flex flex-col">
      <HeroSection />
      <DemoSection />
      <HowItWorksSection/>
      <PricingSection/>
      <CTASection/>
     </div>
      
      {/*}*/}
      {/*<PricingSection/>}*/}
      {/*<CTASection/>}*/}
    </div>  
  );
}

import NavBar from "../src/components/ui/navigation/NavBar";
import HeroSection from "../src/components/home/HeroSection";
import FeaturesSection from "../src/components/home/FeaturesSection";
import PricingSection from "../src/components/home/PricingSection";
import DemoSection from "../src/components/home/DemoSection";
import EnviornmentalSection from "../src/components/home/EnvironmentalSection";
import FAQSection from "../src/components/home/FAQSection";
import TestimonialSection from "../src/components/home/TestimonialSection";
import ContactUsSection from "../src/components/home/ContactUsSection";

export default function Page() {

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <HeroSection />
      <FeaturesSection />
      <PricingSection />
      <DemoSection />
      <EnviornmentalSection />
      <FAQSection />
      <TestimonialSection/>
      <ContactUsSection/>
    </div>
  );
}

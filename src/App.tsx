import React from "react";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import WhatsAppButton from "./components/layout/WhatsAppButton";
import HeroSection from "./components/sections/HeroSection";
import FeaturesSection from "./components/sections/FeaturesSection";
import HRConsultingSection from "./components/sections/HRConsultingSection";
import DigitalSolutionsSection from "./components/sections/DigitalSolutionsSection";
import WhyChooseUsSection from "./components/sections/WhyChooseUsSection";
import FinalCTASection from "./components/sections/FinalCTASection";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <HRConsultingSection />
      <DigitalSolutionsSection />
      <WhyChooseUsSection />
      <FinalCTASection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
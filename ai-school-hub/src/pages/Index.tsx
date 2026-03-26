import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProductsSection from "@/components/ProductsSection";
import PhilosophySection from "@/components/PhilosophySection";
import SocialProofSection from "@/components/SocialProofSection";
import BlogSection from "@/components/BlogSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import ScheduleCallModal from "@/components/ScheduleCallModal";
import ContactModal from "@/components/ContactModal";

const Index = () => {
  const [showScheduleModal, setShowScheduleModal] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);

  return (
    <>
      <Navbar 
        onScheduleCall={() => setShowScheduleModal(true)} 
        onContactUs={() => setShowContactModal(true)} 
      />
      <main>
        <HeroSection onScheduleCall={() => setShowScheduleModal(true)} />
        <ProductsSection />
        <PhilosophySection />
        <SocialProofSection />
        <BlogSection />
        <CTASection 
          onScheduleCall={() => setShowScheduleModal(true)} 
          onContactUs={() => setShowContactModal(true)} 
        />
      </main>
      <Footer onContactUs={() => setShowContactModal(true)} />
      <ScheduleCallModal open={showScheduleModal} onClose={() => setShowScheduleModal(false)} />
      <ContactModal open={showContactModal} onClose={() => setShowContactModal(false)} />
    </>
  );
};

export default Index;

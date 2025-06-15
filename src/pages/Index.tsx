
import { ArrowRight, Users, TrendingUp, DollarSign, Target, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import AdvocacyPathSection from "@/components/AdvocacyPathSection";
import ResourcesSection from "@/components/ResourcesSection";
import ConsultationCtaSection from "@/components/ConsultationCtaSection"; // New CTA
import TrustedBySection from "@/components/TrustedBySection";
import FinalCtaSection from "@/components/FinalCtaSection"; // This is the "Ready to Bridge" CTA
import Footer from "@/components/Footer";
// Removed ArrowRight, Users, TrendingUp, DollarSign, Target, Shield, Zap as they are not directly used here
// Removed Card, CardContent as they are not directly used here
// Removed JourneyCtaSection and TestimonialsSection as per new Figma sequence

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <StatsSection />
      <AdvocacyPathSection />
      <ResourcesSection />
      <ConsultationCtaSection /> {/* New CTA added in order */}
      <TrustedBySection />
      <FinalCtaSection />
      <Footer />
    </div>
  );
};

export default Index;

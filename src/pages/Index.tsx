import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import StorySection from "@/components/StorySection";
import ProductsSection from "@/components/ProductsSection";
import TestimonialSectionCommunity from "@/components/TestimonialSectionCommunity";
import TestimonialSectionProduct from "@/components/TestimonialSectionProduct";
import UrgencySection from "@/components/UrgencySection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background scroll-smooth">
      <HeroSection />
      <ProblemSection />
      <StorySection />
      <TestimonialSectionCommunity />
      <ProductsSection />  
      <TestimonialSectionProduct />    
      <UrgencySection />
      <FinalCTASection />
      <Footer />
    </div>
  );
};

export default Index;

import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import HolidayTypes from "@/components/home/HolidayTypes";
import { PopularPackages, FamilyPackages, FixedDepartureSection } from "@/components/home/PackagesGrid";
import AboutSection from "@/components/home/AboutSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import BlogSection from "@/components/home/BlogSection";
import Testimonials from "@/components/home/Testimonials";
import ReviewSection from "@/components/home/ReviewSection";
import FAQ from "@/components/home/FAQ";

export const metadata: Metadata = {
  title: "Himmalagari Travels – Your Himalayan Travel Partner",
  description: "Discover Nepal, Bhutan & Tibet with Himmalagari Travels. Bespoke trekking, tours, and adventure packages from Kathmandu.",
};

export default function HomePage() {
  return (
    <div className="overflow-x-hidden">
      <HeroSection />
      <HolidayTypes />
      <PopularPackages />
      <AboutSection />
      <FamilyPackages />
      <WhyChooseUs />
      <BlogSection />
      <Testimonials />
      <ReviewSection />
      <FixedDepartureSection />
      <FAQ />
    </div>
  );
}

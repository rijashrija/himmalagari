import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Services – Himmalagari Travels",
  description: "Explore the travel services offered by Himmalagari Travels – trekking, tours, pilgrimage, adventure, and more.",
};

const services = [
  {
    icon: "fa-mountain",
    title: "Trekking & Hiking",
    desc: "Experience the majestic Himalayan trails with our expert guides. From Everest Base Camp to Annapurna Circuit, we cover all major trekking routes.",
  },
  {
    icon: "fa-plane",
    title: "Tour Packages",
    desc: "Comprehensive Nepal, Bhutan, and Tibet tour packages tailored to your preferences and budget.",
  },
  {
    icon: "fa-person-praying",
    title: "Pilgrimage Tours",
    desc: "Sacred journey to the holy shrines and temples of Nepal and the region with experienced spiritual guides.",
  },
  {
    icon: "fa-parachute-box",
    title: "Adventure Sports",
    desc: "Paragliding, bungee jumping, white water rafting, and more adrenaline-pumping activities.",
  },
  {
    icon: "fa-hotel",
    title: "Accommodation",
    desc: "From luxury hotels to cozy teahouses, we arrange comfortable stays throughout your journey.",
  },
  {
    icon: "fa-car",
    title: "Airport Transfers",
    desc: "Reliable and comfortable airport pickup and drop-off services with experienced drivers.",
  },
];

export default function ServicesPage() {
  return (
    <div className="overflow-x-hidden">
      {/* Page header */}
      <section
        className="relative h-[320px] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/images/everestbasecamp.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl font-bold mb-2">Our Services</h1>
          <p className="text-lg">
            <Link href="/" className="hover:underline">Home</Link> / Services
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className="section-gap py-16 px-6">
        <div className="text-center mb-12">
          <h4 className="font-semibold text-[#1C6408] mb-2">What We Offer</h4>
          <h2 className="green-title">Our <span className="orange-text">Travel Services</span></h2>
        </div>

        <div
          className="grid gap-8 max-w-[1100px] mx-auto"
          style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}
        >
          {services.map((svc) => (
            <div key={svc.title} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow hover:-translate-y-1 transition-transform">
              <div className="w-16 h-16 bg-[#e6f2da] rounded-full flex items-center justify-center mb-6 mx-auto">
                <i className={`fa-solid ${svc.icon} text-[#1C6408] text-2xl`}></i>
              </div>
              <h3 className="text-xl font-bold text-[#1C6408] text-center mb-4">{svc.title}</h3>
              <p className="text-gray-600 text-center text-sm leading-relaxed">{svc.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#1C6408] text-center text-white px-6">
        <h2 className="text-3xl font-bold mb-4">Ready to Plan Your Trip?</h2>
        <p className="text-lg mb-8 opacity-90">Let us create the perfect travel experience for you.</p>
        <Link href="/contact" className="bg-[#94ce94] text-black font-semibold px-8 py-3 rounded-full hover:bg-[#6c8b4a] hover:text-white transition-colors inline-block">
          Contact Us Today
        </Link>
      </section>
    </div>
  );
}

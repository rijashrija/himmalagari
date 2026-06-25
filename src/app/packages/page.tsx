import type { Metadata } from "next";
import Link from "next/link";
import { PackageCard } from "@/components/home/PackagesGrid";

export const metadata: Metadata = {
  title: "Tour Packages – Himmalagari Travels",
  description: "Browse all Nepal, Bhutan, and Tibet tour packages by Himmalagari Travels.",
};

const allPackages = Array(12).fill(null).map((_, i) => ({
  title: "Classic Nepal Tour",
  image: "/assets/images/everestbasecamp.jpg",
  destination: "Nepal",
  accommodation: "Hotels",
  activities: "Tour and Adventure",
  difficulty: "Moderate to Difficult",
  days: "4 days",
  href: "/packages/classic-nepal-tour",
}));

export default function PackagesPage() {
  return (
    <div className="overflow-x-hidden">
      {/* Page header */}
      <section
        className="relative h-[320px] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/images/everestbasecamp.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl font-bold mb-2">Tour Packages</h1>
          <p className="text-lg">
            <Link href="/" className="hover:underline">Home</Link> / Packages
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 px-6 bg-white shadow-sm">
        <div className="max-w-[1100px] mx-auto flex flex-wrap gap-4 items-center">
          <select className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#1C6408]">
            <option>All Destinations</option>
            <option>Nepal</option>
            <option>Bhutan</option>
            <option>Tibet</option>
          </select>
          <select className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#1C6408]">
            <option>All Types</option>
            <option>Adventure</option>
            <option>Family</option>
            <option>Honeymoon</option>
            <option>Luxury</option>
            <option>Pilgrimage</option>
          </select>
          <select className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#1C6408]">
            <option>Any Duration</option>
            <option>1-5 Days</option>
            <option>6-10 Days</option>
            <option>11-15 Days</option>
            <option>16+ Days</option>
          </select>
        </div>
      </section>

      {/* Packages grid */}
      <section className="section-gap py-12 px-6 bg-[#f8f8f8]">
        <div
          className="grid gap-[clamp(24px,2vw,40px)] justify-center w-[90%] mx-auto"
          style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 352px))" }}
        >
          {allPackages.map((pkg, i) => <PackageCard key={i} {...pkg} />)}
        </div>

        <div className="flex justify-center mt-10">
          <button className="inquiry-btn">Load More</button>
        </div>
      </section>
    </div>
  );
}

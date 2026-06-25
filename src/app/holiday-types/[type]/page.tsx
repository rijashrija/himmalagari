import type { Metadata } from "next";
import Link from "next/link";
import { PackageCard } from "@/components/home/PackagesGrid";

type Props = { params: { type: string } };

const typeData: Record<string, { title: string; desc: string; icon: string; color: string }> = {
  adventure: {
    title: "Adventure",
    desc: "Thrilling expeditions, trekking, rock climbing, white water rafting, and more extreme activities for the adventure seeker.",
    icon: "fa-person-hiking",
    color: "#e6f2da",
  },
  honeymoon: {
    title: "Honeymoon",
    desc: "Romantic getaways to scenic destinations with luxury accommodations, private tours, and unforgettable moments.",
    icon: "fa-heart",
    color: "#ffe4e6",
  },
  family: {
    title: "Family",
    desc: "Family-friendly tours designed for all ages with safe, comfortable, and educational experiences.",
    icon: "fa-people-roof",
    color: "#fef3c7",
  },
  luxury: {
    title: "Luxury",
    desc: "Premium 5-star experiences with exclusive amenities, private guides, and helicopter tours.",
    icon: "fa-star",
    color: "#fdf4e7",
  },
  pilgrimage: {
    title: "Pilgrimage",
    desc: "Sacred journeys to Nepal's most revered religious sites, temples, and monasteries.",
    icon: "fa-om",
    color: "#ede9fe",
  },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const data = typeData[params.type] || { title: "Holiday Types", desc: "" };
  return {
    title: `${data.title} Packages – Himmalagari Travels`,
    description: data.desc,
  };
}

const packages = Array(6).fill(null).map((_, i) => ({
  title: "Classic Nepal Tour",
  image: "/assets/images/everestbasecamp.jpg",
  destination: "Nepal",
  accommodation: "Hotels",
  activities: "Tour and Adventure",
  difficulty: "Moderate",
  days: "7 days",
  href: "/packages/classic-nepal-tour",
}));

export default function HolidayTypePage({ params }: Props) {
  const data = typeData[params.type] || {
    title: params.type,
    desc: "Explore our curated selection of packages.",
    icon: "fa-compass",
    color: "#e6f2da",
  };

  return (
    <div className="overflow-x-hidden">
      {/* Page header */}
      <section
        className="relative h-[320px] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/images/everestbasecamp.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center text-white">
          <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: data.color }}>
            <i className={`fa-solid ${data.icon} text-[#1C6408] text-2xl`}></i>
          </div>
          <h1 className="text-4xl font-bold mb-2">{data.title}</h1>
          <p className="text-lg">
            <Link href="/" className="hover:underline">Home</Link> / Holiday Types / {data.title}
          </p>
        </div>
      </section>

      {/* Description */}
      <section className="py-12 px-6 text-center">
        <div className="max-w-[700px] mx-auto">
          <p className="text-gray-600 text-lg leading-relaxed">{data.desc}</p>
        </div>
      </section>

      {/* Packages */}
      <section className="py-12 px-6 bg-[#f8f8f8]">
        <div className="text-center mb-8">
          <h4 className="font-semibold text-[#1C6408] mb-2">{data.title} Packages</h4>
          <h2 className="green-title">Handpicked <span className="orange-text">{data.title}</span> Itineraries</h2>
        </div>
        <div
          className="grid gap-8 justify-center w-[90%] mx-auto"
          style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 352px))" }}
        >
          {packages.map((pkg, i) => <PackageCard key={i} {...pkg} />)}
        </div>
        <div className="flex justify-center mt-8">
          <Link href="/packages" className="inquiry-btn">View All Packages</Link>
        </div>
      </section>

      {/* Other types */}
      <section className="py-12 px-6">
        <div className="max-w-[900px] mx-auto text-center">
          <h3 className="text-2xl font-bold text-[#1C6408] mb-8">Explore Other Holiday Types</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {Object.entries(typeData).filter(([k]) => k !== params.type).map(([key, val]) => (
              <Link
                key={key}
                href={`/holiday-types/${key}`}
                className="flex items-center gap-2 px-6 py-3 rounded-full border-2 border-[#1C6408] text-[#1C6408] font-medium hover:bg-[#1C6408] hover:text-white transition-colors"
              >
                <i className={`fa-solid ${val.icon}`}></i>
                {val.title}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

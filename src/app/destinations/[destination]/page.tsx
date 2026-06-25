import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PackageCard } from "@/components/home/PackagesGrid";

type Props = { params: { destination: string } };

const destinationData: Record<string, { title: string; desc: string; hero: string }> = {
  nepal: {
    title: "Nepal",
    desc: "Home of the Himalayas, Nepal offers trekking, cultural tours, wildlife safaris, and spiritual experiences unlike anywhere else in the world.",
    hero: "/assets/images/everestbasecamp.jpg",
  },
  bhutan: {
    title: "Bhutan",
    desc: "The Land of the Thunder Dragon offers pristine monasteries, stunning landscapes, and a unique culture guided by Gross National Happiness.",
    hero: "/assets/images/everestbasecamp.jpg",
  },
  tibet: {
    title: "Tibet",
    desc: "The Roof of the World — Tibet is home to ancient monasteries, sacred mountains, and the legendary city of Lhasa.",
    hero: "/assets/images/everestbasecamp.jpg",
  },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const dest = destinationData[params.destination] || { title: "Destination", desc: "" };
  return {
    title: `${dest.title} – Himmalagari Travels`,
    description: dest.desc,
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

export default function DestinationPage({ params }: Props) {
  const dest = destinationData[params.destination] || { title: params.destination, desc: "", hero: "/assets/images/everestbasecamp.jpg" };

  return (
    <div className="overflow-x-hidden">
      {/* Hero */}
      <section className="relative h-[420px] flex items-end bg-cover bg-center" style={{ backgroundImage: `url('${dest.hero}')` }}>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="relative z-10 text-white p-8 max-w-[1100px] mx-auto w-full">
          <h1 className="text-5xl font-bold mb-3">{dest.title}</h1>
          <p className="text-lg opacity-90 max-w-[600px]">{dest.desc}</p>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-[1100px] mx-auto">
          <h2 className="green-title text-left mb-8">Why Visit <span className="orange-text">{dest.title}?</span></h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {["Natural Beauty", "Rich Culture", "Adventure Activities"].map((highlight) => (
              <div key={highlight} className="bg-[#e6f2da] rounded-xl p-6 text-center">
                <i className="fa-solid fa-mountain text-[#1C6408] text-3xl mb-4 block"></i>
                <h4 className="font-semibold text-[#1C6408]">{highlight}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="section-gap py-12 px-6 bg-[#f8f8f8]">
        <div className="text-center mb-8">
          <h4 className="font-semibold text-[#1C6408] mb-2">{dest.title} Tours</h4>
          <h2 className="green-title">Popular <span className="orange-text">{dest.title}</span> Packages</h2>
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
    </div>
  );
}

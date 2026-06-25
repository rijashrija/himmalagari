import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Package Details – Himmalagari Travels",
  description: "Detailed itinerary and booking information for this Nepal tour package.",
};

const itinerary = [
  { day: 1, title: "Arrival in Kathmandu", desc: "Arrive at Tribhuvan International Airport. Transfer to hotel. Welcome dinner and orientation." },
  { day: 2, title: "Kathmandu Sightseeing", desc: "Visit Pashupatinath Temple, Boudhanath Stupa, Swayambhunath, and Patan Durbar Square." },
  { day: 3, title: "Fly to Lukla – Trek to Phakding", desc: "Early morning flight to Lukla (2,840m). Trek to Phakding (2,610m)." },
  { day: 4, title: "Trek to Namche Bazaar", desc: "Ascend through the Sagarmatha National Park to Namche Bazaar (3,440m)." },
  { day: 5, title: "Acclimatization Day", desc: "Rest day in Namche. Optional hike to Everest View Hotel." },
];

const includes = ["Airport transfers", "Accommodation (hotel + teahouse)", "All meals during trek", "English-speaking guide", "Porter services", "National park permits", "TIMS card", "Domestic flight (Kathmandu–Lukla–Kathmandu)"];
const excludes = ["International flights", "Travel insurance", "Personal expenses", "Alcoholic beverages", "Tips for guide/porter"];

export default function PackageDetailPage({ params }: { params: { slug: string } }) {
  return (
    <div className="overflow-x-hidden">
      {/* Hero */}
      <section className="relative h-[420px] flex items-end bg-cover bg-center" style={{ backgroundImage: "url('/assets/images/everestbasecamp.jpg')" }}>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="relative z-10 text-white p-8 max-w-[1100px] mx-auto w-full">
          <span className="bg-orange-400 text-black text-sm font-semibold px-4 py-1 rounded-full mb-3 inline-block">POPULAR</span>
          <h1 className="text-4xl font-bold mb-2">Classic Nepal Tour</h1>
          <div className="flex flex-wrap gap-6 text-sm opacity-90">
            <span><i className="fa-solid fa-calendar mr-2"></i>14 Days</span>
            <span><i className="fa-solid fa-location-dot mr-2"></i>Nepal</span>
            <span><i className="fa-solid fa-signal mr-2"></i>Moderate</span>
          </div>
        </div>
      </section>

      <div className="max-w-[1100px] mx-auto px-6 py-12 grid lg:grid-cols-[1fr_340px] gap-10">
        {/* Main content */}
        <div>
          {/* Overview */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#1C6408] mb-4">Overview</h2>
            <p className="text-gray-600 leading-relaxed">
              Experience the wonders of Nepal on this comprehensive tour covering Kathmandu, the Everest region, and
              Chitwan National Park. Our carefully crafted itinerary balances cultural exploration, natural beauty, and
              adventure activities suitable for all fitness levels.
            </p>
          </section>

          {/* Itinerary */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#1C6408] mb-6">Day-by-Day Itinerary</h2>
            <div className="space-y-4">
              {itinerary.map((item) => (
                <div key={item.day} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#1C6408] text-white rounded-full flex items-center justify-center font-bold text-sm">
                    D{item.day}
                  </div>
                  <div className="flex-1 bg-white rounded-xl shadow-sm p-4 border border-gray-100">
                    <h5 className="font-semibold text-[#1C6408] mb-1">{item.title}</h5>
                    <p className="text-gray-500 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Includes / Excludes */}
          <section className="mb-10">
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-[#e6f2da] rounded-xl p-6">
                <h3 className="font-bold text-[#1C6408] mb-4 flex items-center gap-2">
                  <i className="fa-solid fa-circle-check"></i> What's Included
                </h3>
                <ul className="space-y-2">
                  {includes.map((item) => (
                    <li key={item} className="text-sm flex items-center gap-2 text-gray-700">
                      <i className="fa-solid fa-check text-[#1C6408] text-xs"></i> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-red-50 rounded-xl p-6">
                <h3 className="font-bold text-red-600 mb-4 flex items-center gap-2">
                  <i className="fa-solid fa-circle-xmark"></i> What's Excluded
                </h3>
                <ul className="space-y-2">
                  {excludes.map((item) => (
                    <li key={item} className="text-sm flex items-center gap-2 text-gray-700">
                      <i className="fa-solid fa-xmark text-red-400 text-xs"></i> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        </div>

        {/* Booking sidebar */}
        <aside>
          <div className="bg-white rounded-2xl shadow-xl p-6 sticky top-24">
            <div className="text-center mb-6">
              <p className="text-gray-500 text-sm">Starting from</p>
              <p className="text-4xl font-bold text-[#1C6408]">$1,200<span className="text-base font-normal text-gray-500">/person</span></p>
            </div>

            <div className="space-y-3 text-sm text-gray-600 mb-6 bg-[#f8f8f8] rounded-xl p-4">
              <div className="flex justify-between"><span>Duration:</span><span className="font-semibold">14 Days</span></div>
              <div className="flex justify-between"><span>Group Size:</span><span className="font-semibold">2–12 People</span></div>
              <div className="flex justify-between"><span>Difficulty:</span><span className="font-semibold text-[#1C6408]">Moderate</span></div>
              <div className="flex justify-between"><span>Best Season:</span><span className="font-semibold">Mar–May, Sep–Nov</span></div>
            </div>

            <Link
              href="/contact"
              className="w-full bg-[#1C6408] text-white py-3 rounded-full font-semibold hover:bg-[#6c8b4a] transition-colors text-center block mb-3"
            >
              Book This Package
            </Link>
            <Link
              href="/contact"
              className="w-full border-2 border-[#1C6408] text-[#1C6408] py-3 rounded-full font-semibold hover:bg-[#e6f2da] transition-colors text-center block"
            >
              Enquire Now
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
}

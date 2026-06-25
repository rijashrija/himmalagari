import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Fixed Departure Details – Himmalagari Travels",
  description: "Book your fixed departure trip to Nepal with Himmalagari Travels.",
};

export default function FixedDepartureDetailPage({ params }: { params: { slug: string } }) {
  return (
    <div className="overflow-x-hidden">
      {/* Hero */}
      <section className="relative h-[400px] flex items-end bg-cover bg-center" style={{ backgroundImage: "url('/assets/images/everestbasecamp.jpg')" }}>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="relative z-10 text-white p-8 max-w-[1100px] mx-auto w-full">
          <span className="bg-orange-400 text-black text-sm font-semibold px-4 py-1 rounded-full mb-3 inline-block">POPULAR</span>
          <h1 className="text-4xl font-bold mb-2">Classic Nepal Tour</h1>
          <div className="flex flex-wrap gap-6 text-sm opacity-90">
            <span><i className="fa-solid fa-calendar-check mr-2"></i>Start: 22 Aug 2025</span>
            <span><i className="fa-solid fa-calendar-xmark mr-2"></i>End: 26 Aug 2025</span>
            <span><i className="fa-solid fa-users mr-2"></i>12 Seats Available</span>
            <span><i className="fa-solid fa-clock mr-2"></i>4 Days</span>
          </div>
        </div>
      </section>

      {/* Departure info banner */}
      <div className="bg-[#94ce94] py-4 px-6 sticky top-[85px] z-40">
        <div className="max-w-[1100px] mx-auto flex flex-wrap gap-6 justify-between items-center text-sm font-semibold">
          <span>Start Date: 22 Aug 2025</span>
          <span className="bg-white text-[#1C6408] px-4 py-1 rounded-full">10 Days Left to Book</span>
          <span>End Date: 26 Aug 2025</span>
        </div>
      </div>

      <div className="max-w-[1100px] mx-auto px-6 py-12 grid lg:grid-cols-[1fr_340px] gap-10">
        {/* Overview */}
        <div>
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#1C6408] mb-4">Trip Overview</h2>
            <p className="text-gray-600 leading-relaxed">
              Join our fixed departure group tour to Nepal. This 4-day adventure covers the highlights of Kathmandu
              Valley including UNESCO World Heritage Sites, vibrant markets, and cultural experiences.
            </p>
          </section>

          {/* What's included */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#1C6408] mb-4">What&apos;s Included</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {["Airport transfers", "Hotel accommodation", "Daily breakfast", "City tour with guide", "National park entry fees"].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-gray-700">
                  <i className="fa-solid fa-check text-[#1C6408]"></i> {item}
                </div>
              ))}
            </div>
          </section>

          {/* Itinerary */}
          <section>
            <h2 className="text-2xl font-bold text-[#1C6408] mb-6">Itinerary</h2>
            <div className="space-y-4">
              {["Arrival & Kathmandu Valley Tour", "Pashupatinath & Boudhanath", "Swayambhunath & Patan", "Departure"].map((day, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#1C6408] text-white rounded-full flex items-center justify-center font-bold text-sm">D{i + 1}</div>
                  <div className="flex-1 bg-white rounded-xl shadow-sm p-4 border border-gray-100">
                    <h5 className="font-semibold text-[#1C6408]">{day}</h5>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Booking form */}
        <aside>
          <div className="bg-white rounded-2xl shadow-xl p-6 sticky top-[160px]">
            <h3 className="text-xl font-bold text-[#1C6408] mb-2">Reserve Your Spot</h3>
            <p className="text-sm text-chocolate mb-6 bg-orange-50 px-3 py-2 rounded-lg" style={{ color: "chocolate" }}>
              Book before: 25th Aug 2026
            </p>

            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Number of Travellers *</label>
                <input type="number" min={1} max={12} defaultValue={1} className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1C6408]" />
              </div>

              <div className="bg-[#f8f8f8] rounded-xl p-4 text-center">
                <p className="text-sm text-gray-500">Total Amount</p>
                <p className="text-3xl font-bold text-[#1C6408]">$400</p>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Full Name *</label>
                <input type="text" className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none" />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Email *</label>
                <input type="email" className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none" />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Phone *</label>
                <input type="tel" className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none" />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Message</label>
                <textarea rows={3} className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none resize-none"></textarea>
              </div>

              <button type="submit" className="w-full bg-[#1C6408] text-white py-3 rounded-full font-semibold hover:bg-[#6c8b4a] transition-colors">
                Submit Booking
              </button>
            </form>
          </div>
        </aside>
      </div>
    </div>
  );
}

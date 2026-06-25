import type { Metadata } from "next";
import Link from "next/link";
import { FixedDepartureCard } from "@/components/home/PackagesGrid";

export const metadata: Metadata = {
  title: "Fixed Departure – Himmalagari Travels",
  description: "Browse our fixed departure trips to Nepal, Bhutan, and Tibet with guaranteed departure dates.",
};

const fixedDepartures = [
  { title: "Everest Base Camp Trek", image: "/assets/images/everestbasecamp.jpg", startDate: "Mar 15, 2025", endDate: "Mar 28, 2025", seats: 6, bookBefore: "Mar 1, 2025", price: "$1,450", href: "/fixed-departure/ebc-mar" },
  { title: "Annapurna Base Camp", image: "/assets/images/annapurna.jpg", startDate: "Apr 5, 2025", endDate: "Apr 16, 2025", seats: 4, bookBefore: "Mar 22, 2025", price: "$1,200", href: "/fixed-departure/abc-apr" },
  { title: "Bhutan Cultural Tour", image: "/assets/images/bhutan.jpg", startDate: "Oct 10, 2025", endDate: "Oct 18, 2025", seats: 8, bookBefore: "Sep 25, 2025", price: "$2,100", href: "/fixed-departure/bhutan-oct" },
  { title: "Tibet Overland Journey", image: "/assets/images/everestbasecamp.jpg", startDate: "May 20, 2025", endDate: "Jun 1, 2025", seats: 5, bookBefore: "May 5, 2025", price: "$2,400", href: "/fixed-departure/tibet-may" },
  { title: "Langtang Valley Trek", image: "/assets/images/annapurna.jpg", startDate: "Sep 15, 2025", endDate: "Sep 24, 2025", seats: 10, bookBefore: "Sep 1, 2025", price: "$850", href: "/fixed-departure/langtang-sep" },
  { title: "Upper Mustang Trek", image: "/assets/images/bhutan.jpg", startDate: "Oct 25, 2025", endDate: "Nov 8, 2025", seats: 3, bookBefore: "Oct 10, 2025", price: "$1,900", href: "/fixed-departure/mustang-oct" },
];

export default function FixedDeparturePage() {
  return (
    <div className="overflow-x-hidden">
      {/* Page hero */}
      <section className="page-hero" style={{ backgroundImage: "url('/assets/images/everestbasecamp.jpg')" }}>
        <div className="page-hero-content">
          <div className="inline-flex items-center gap-2 bg-white/15 border border-white/25 text-white text-xs font-semibold px-4 py-2 rounded-full mb-4">
            <i className="fa-solid fa-calendar-days" />
            Guaranteed Departures
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-3">Fixed Departure</h1>
          <p className="text-white/70 flex items-center justify-center gap-2 text-sm">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <i className="fa-solid fa-chevron-right text-[9px]" />
            Fixed Departure
          </p>
        </div>
      </section>

      {/* Listing */}
      <section className="py-16 px-5 bg-background">
        <div className="max-w-300 mx-auto">
          <div className="text-center mb-12">
            <span className="section-label"><i className="fa-solid fa-calendar-check" />Scheduled Trips</span>
            <h2 className="section-title">Join a <span className="highlight">Guaranteed</span> Departure</h2>
            <p className="text-gray-500 max-w-lg mx-auto text-[15px] mt-2">Pre-planned dates, expert guides, and a ready-made group of fellow adventurers.</p>
          </div>
          <div className="flex flex-col gap-5">
            {fixedDepartures.map((d, i) => <FixedDepartureCard key={i} {...d} />)}
          </div>
        </div>
      </section>
    </div>
  );
}

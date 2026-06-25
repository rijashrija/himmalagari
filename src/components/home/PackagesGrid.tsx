import Link from "next/link";
import Image from "next/image";

interface PackageCardProps {
  title: string;
  image: string;
  badge?: string;
  destination: string;
  accommodation: string;
  activities: string;
  difficulty: string;
  days: string;
  href: string;
}

export function PackageCard({ title, image, badge, destination, accommodation, activities, difficulty, days, href }: PackageCardProps) {
  return (
    <div className="pkg-card">
      {/* Image */}
      <div className="relative h-55 overflow-hidden">
        <Image src={image} alt={title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 380px" />
        <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />

        {/* Days pill – top right */}
        <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-white/90 backdrop-blur-sm text-primary text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
          <i className="fa-regular fa-clock text-[10px]" />
          {days}
        </div>

        {/* Badge – top left */}
        {badge && (
          <div className="absolute top-3 left-3 badge-orange">{badge}</div>
        )}
      </div>

      {/* Body */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-bold text-[15px] text-gray-900 mb-3 leading-snug">{title}</h3>

        <div className="space-y-0 divide-y divide-gray-50 mb-4 text-[12px]">
          {[
            { icon: "fa-map-pin", label: "Destination", value: destination },
            { icon: "fa-bed", label: "Stay", value: accommodation },
            { icon: "fa-person-hiking", label: "Activity", value: activities },
            { icon: "fa-gauge-high", label: "Difficulty", value: difficulty },
          ].map(({ icon, label, value }) => (
            <div key={label} className="flex items-center justify-between py-2">
              <span className="flex items-center gap-1.5 text-gray-400 font-medium">
                <i className={`fa-solid ${icon} w-3.5 text-primary/70`} />
                {label}
              </span>
              <span className="font-semibold text-gray-700">{value}</span>
            </div>
          ))}
        </div>

        <div className="mt-auto">
          <Link
            href={href}
            className="w-full flex items-center justify-center gap-2 bg-primary text-white text-sm font-semibold py-2.5 rounded-xl hover:bg-primary-light transition-all hover:shadow-md"
          >
            View Details
            <i className="fa-solid fa-arrow-right text-xs" />
          </Link>
        </div>
      </div>
    </div>
  );
}

interface FixedDepartureCardProps {
  title: string;
  image: string;
  startDate: string;
  endDate: string;
  seats: number;
  bookBefore: string;
  price: string;
  href: string;
}

export function FixedDepartureCard({ title, image, startDate, endDate, seats, bookBefore, price, href }: FixedDepartureCardProps) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-[0_12px_40px_rgba(28,100,8,0.13)] transition-all duration-300 hover:-translate-y-1 flex flex-col sm:flex-row">
      <div className="relative h-50 sm:h-auto sm:w-55 shrink-0">
        <Image src={image} alt={title} fill className="object-cover" sizes="220px" />
        <div className="absolute inset-0 bg-linear-to-r from-black/30 to-transparent sm:bg-linear-to-b" />
      </div>
      <div className="p-5 flex flex-col justify-between flex-1">
        <div>
          <h3 className="font-bold text-gray-900 text-[15px] mb-3">{title}</h3>
          <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-[12px]">
            {[
              { icon: "fa-calendar-day", label: "Start", value: startDate },
              { icon: "fa-calendar-check", label: "End", value: endDate },
              { icon: "fa-users", label: "Seats", value: `${seats} left` },
              { icon: "fa-clock", label: "Book Before", value: bookBefore },
            ].map(({ icon, label, value }) => (
              <div key={label} className="flex items-center gap-1.5">
                <i className={`fa-solid ${icon} text-primary/70 w-3.5`} />
                <span className="text-gray-400">{label}:</span>
                <span className="font-semibold text-gray-700">{value}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
          <div>
            <span className="text-[11px] text-gray-400 block">From</span>
            <span className="text-lg font-bold text-primary">{price}</span>
          </div>
          <Link href={href} className="flex items-center gap-1.5 bg-primary text-white text-sm font-semibold px-5 py-2.5 rounded-xl hover:bg-primary-light transition-all hover:shadow-md">
            Book Now
            <i className="fa-solid fa-arrow-right text-xs" />
          </Link>
        </div>
      </div>
    </div>
  );
}

const popularPkgs = [
  { title: "Everest Base Camp Trek", image: "/assets/images/everestbasecamp.jpg", badge: "Best Seller", destination: "Nepal", accommodation: "Tea Houses", activities: "Trekking", difficulty: "Strenuous", days: "14 Days", href: "/packages/everest-base-camp" },
  { title: "Annapurna Circuit Trek", image: "/assets/images/annapurna.jpg", destination: "Nepal", accommodation: "Lodges", activities: "Trekking", difficulty: "Moderate", days: "18 Days", href: "/packages/annapurna-circuit" },
  { title: "Bhutan Cultural Tour", image: "/assets/images/bhutan.jpg", badge: "Popular", destination: "Bhutan", accommodation: "Hotels", activities: "Culture & Tour", difficulty: "Easy", days: "8 Days", href: "/packages/bhutan-tour" },
];

const familyPkgs = [
  { title: "Nepal Family Adventure", image: "/assets/images/nepal-family.jpg", destination: "Nepal", accommodation: "Hotels", activities: "Sightseeing", difficulty: "Easy", days: "7 Days", href: "/packages/nepal-family" },
  { title: "Chitwan Wildlife Safari", image: "/assets/images/chitwan.jpg", badge: "Family Fav", destination: "Nepal", accommodation: "Resort", activities: "Safari", difficulty: "Easy", days: "4 Days", href: "/packages/chitwan-safari" },
  { title: "Pokhara Lakeside Retreat", image: "/assets/images/pokhara.jpg", destination: "Nepal", accommodation: "Hotel", activities: "Relaxation", difficulty: "Easy", days: "5 Days", href: "/packages/pokhara-retreat" },
];

const fixedDeps = [
  { title: "Everest Base Camp Trek", image: "/assets/images/everestbasecamp.jpg", startDate: "Mar 15, 2025", endDate: "Mar 28, 2025", seats: 6, bookBefore: "Mar 1, 2025", price: "$1,450", href: "/fixed-departure/ebc-mar" },
  { title: "Annapurna Base Camp", image: "/assets/images/annapurna.jpg", startDate: "Apr 5, 2025", endDate: "Apr 16, 2025", seats: 4, bookBefore: "Mar 22, 2025", price: "$1,200", href: "/fixed-departure/abc-apr" },
  { title: "Bhutan Cultural Tour", image: "/assets/images/bhutan.jpg", startDate: "Oct 10, 2025", endDate: "Oct 18, 2025", seats: 8, bookBefore: "Sep 25, 2025", price: "$2,100", href: "/fixed-departure/bhutan-oct" },
];

function SectionHeader({ label, title, highlight, accent, sub }: { label: string; title: string; highlight?: string; accent?: string; sub?: string }) {
  return (
    <div className="text-center mb-12">
      <span className="section-label"><i className="fa-solid fa-star" />{label}</span>
      <h2 className="section-title">
        {title} {highlight && <span className="highlight">{highlight}</span>} {accent && <span className="accent">{accent}</span>}
      </h2>
      {sub && <p className="text-gray-500 max-w-lg mx-auto text-[15px] mt-2">{sub}</p>}
    </div>
  );
}

export function PopularPackages() {
  return (
    <section className="py-20 px-5 bg-background">
      <div className="max-w-300 mx-auto">
        <SectionHeader label="Top Picks" title="Most Popular" highlight="Packages" sub="Handcrafted itineraries loved by thousands of travellers." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {popularPkgs.map((p, i) => <PackageCard key={i} {...p} />)}
        </div>
        <div className="flex justify-center mt-10">
          <Link href="/packages" className="btn-primary">
            <i className="fa-solid fa-grid text-sm" />
            View All Packages
          </Link>
        </div>
      </div>
    </section>
  );
}

export function FamilyPackages() {
  return (
    <section className="py-20 px-5 bg-white">
      <div className="max-w-300 mx-auto">
        <SectionHeader label="Family Trips" title="Perfect For" highlight="Families" sub="Safe, comfortable, and memorable experiences for all ages." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {familyPkgs.map((p, i) => <PackageCard key={i} {...p} />)}
        </div>
        <div className="flex justify-center mt-10">
          <Link href="/holiday-types/family" className="btn-outline">
            <i className="fa-solid fa-people-roof text-sm" />
            Explore Family Tours
          </Link>
        </div>
      </div>
    </section>
  );
}

export function FixedDepartureSection() {
  return (
    <section className="py-20 px-5 bg-background">
      <div className="max-w-300 mx-auto">
        <SectionHeader label="Scheduled Trips" title="Fixed" highlight="Departure" accent="Dates" sub="Join a group departure — fixed dates, guaranteed departures." />
        <div className="flex flex-col gap-5">
          {fixedDeps.map((d, i) => <FixedDepartureCard key={i} {...d} />)}
        </div>
        <div className="flex justify-center mt-10">
          <Link href="/fixed-departure" className="btn-primary">
            <i className="fa-solid fa-calendar-days text-sm" />
            View All Departures
          </Link>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import Link from "next/link";

const types = [
  {
    label: "Tours",
    icon: "fa-bus-simple",
    image: "/assets/images/tour.png",
    href: "/holiday-types/adventure",
    desc: "Guided cultural tours across Nepal, Bhutan & Tibet with expert local guides.",
  },
  {
    label: "Trekking",
    icon: "fa-person-hiking",
    image: "/assets/images/trekking.jpg",
    href: "/holiday-types/adventure",
    desc: "Epic mountain trails from Everest Base Camp to Annapurna Circuit.",
  },
  {
    label: "Adventures",
    icon: "fa-parachute-box",
    image: "/assets/images/adventure.jpg",
    href: "/holiday-types/adventure",
    desc: "Rafting, bungee, paragliding, and more extreme thrills in the Himalayas.",
  },
];

export default function HolidayTypes() {
  return (
    <section className="py-20 px-5 bg-white">
      <div className="max-w-300 mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="section-label">
            <i className="fa-solid fa-compass" />
            What We Offer
          </span>
          <h2 className="section-title">
            Choose Your <span className="highlight">Adventure</span> Style
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto text-[15px] leading-relaxed">
            Whether you seek serenity, thrill, or culture — we have the perfect journey crafted for you.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {types.map((t) => (
            <Link
              key={t.label}
              href={t.href}
              className="group relative h-95 md:h-110 block rounded-3xl overflow-hidden"
            >
              <Image
                src={t.image}
                alt={t.label}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              {/* Gradient */}
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

              {/* Top badge */}
              <div className="absolute top-5 left-5 flex items-center gap-2 bg-primary/90 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                <i className={`fa-solid ${t.icon} text-[10px]`} />
                {t.label}
              </div>

              {/* Bottom content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-xl font-bold mb-2">{t.label}</h3>
                <p className="text-white/75 text-sm leading-relaxed mb-4 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  {t.desc}
                </p>
                <div className="flex items-center gap-2 text-accent text-sm font-semibold opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 delay-75">
                  View Trips
                  <i className="fa-solid fa-arrow-right text-xs transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom pill links */}
        <div className="flex flex-wrap justify-center gap-3 mt-10">
          {["Honeymoon", "Family", "Luxury", "Pilgrimage"].map((tag) => (
            <Link
              key={tag}
              href={`/holiday-types/${tag.toLowerCase()}`}
              className="flex items-center gap-2 text-sm font-medium text-primary border border-primary/30 bg-light-green px-5 py-2.5 rounded-full hover:bg-primary hover:text-white transition-all duration-200"
            >
              {tag}
              <i className="fa-solid fa-arrow-right text-xs" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

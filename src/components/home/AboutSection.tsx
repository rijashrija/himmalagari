import Link from "next/link";
import Image from "next/image";

const stats = [
  { num: "15+", label: "Years Active" },
  { num: "12K+", label: "Happy Clients" },
  { num: "150+", label: "Destinations" },
  { num: "98%", label: "Satisfaction" },
];

const highlights = [
  { icon: "fa-shield-halved", text: "Licensed & Government Registered" },
  { icon: "fa-award", text: "Multiple Tourism Awards" },
  { icon: "fa-headset", text: "24/7 Customer Support" },
];

export default function AboutSection() {
  return (
    <section className="py-20 px-5 bg-white overflow-hidden">
      <div className="max-w-300 mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Image column */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden h-105 lg:h-130">
              <Image
                src="/assets/images/about.jpg"
                alt="About Himmalagari Travels"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-linear-to-tr from-primary/30 to-transparent" />
            </div>

            {/* Floating card */}
            <div className="absolute -bottom-5 -right-3 lg:-right-8 bg-white rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.12)] p-5 flex items-center gap-4 max-w-60">
              <div className="w-12 h-12 rounded-xl bg-light-green flex items-center justify-center shrink-0">
                <i className="fa-solid fa-trophy text-primary text-lg" />
              </div>
              <div>
                <p className="font-bold text-gray-900 text-sm">Award Winning</p>
                <p className="text-gray-500 text-xs mt-0.5">Best Travel Agency 2024</p>
              </div>
            </div>

            {/* Decorative blob */}
            <div
              className="absolute -top-6 -left-6 w-32 h-32 rounded-full opacity-20 -z-10"
              style={{ background: "radial-gradient(circle, #1C6408, transparent)" }}
            />
          </div>

          {/* Text column */}
          <div className="order-1 lg:order-2">
            <span className="section-label">
              <i className="fa-solid fa-circle-info" />
              About Us
            </span>
            <h2 className="section-title mb-4">
              Nepal's Most <span className="highlight">Trusted</span> Travel Partner
            </h2>
            <p className="text-gray-500 leading-relaxed text-[15px] mb-5">
              Himmalagari Travels & Expeditions has been crafting unforgettable journeys across the Himalayas since 2009. We combine deep local expertise with personalised service to deliver experiences that go far beyond ordinary tourism.
            </p>
            <p className="text-gray-500 leading-relaxed text-[15px] mb-7">
              From the heights of Everest to the monasteries of Bhutan — every trip we design is a story waiting to unfold.
            </p>

            {/* Highlights */}
            <div className="space-y-3 mb-8">
              {highlights.map(({ icon, text }) => (
                <div key={text} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-light-green flex items-center justify-center shrink-0">
                    <i className={`fa-solid ${icon} text-primary text-sm`} />
                  </div>
                  <span className="text-gray-700 text-[14px] font-medium">{text}</span>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-4 gap-3 mb-8">
              {stats.map(({ num, label }) => (
                <div key={label} className="bg-background rounded-2xl p-4 text-center">
                  <div className="text-xl font-bold text-primary">{num}</div>
                  <div className="text-gray-500 text-[11px] mt-0.5 leading-tight">{label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <Link href="/about" className="btn-primary">
                <i className="fa-solid fa-circle-info text-sm" />
                Learn More
              </Link>
              <Link href="/contact" className="btn-outline">
                <i className="fa-solid fa-phone text-sm" />
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

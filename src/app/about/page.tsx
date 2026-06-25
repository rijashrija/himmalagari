import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us – Himmalagari Travels",
  description: "Learn about Himmalagari Travels, your trusted local travel partner in Kathmandu, Nepal.",
};

const team = {
  executives: [
    { name: "John Doe", role: "CEO & Founder", img: "/assets/images/team1.jpg" },
    { name: "Jane Smith", role: "Operations Manager", img: "/assets/images/team2.jpg" },
    { name: "Ram Bahadur", role: "Head Guide", img: "/assets/images/team3.jpg" },
  ],
  guides: [
    { name: "Pemba Sherpa", role: "Senior Trek Guide", img: "/assets/images/team4.jpg" },
    { name: "Dawa Lama", role: "Cultural Guide", img: "/assets/images/team5.jpg" },
    { name: "Nima Tamang", role: "Adventure Guide", img: "/assets/images/team6.jpg" },
  ],
};

const awards = [
  { img: "/assets/images/affiliation1.png", label: "Affiliate 1" },
  { img: "/assets/images/affiliation2.png", label: "Affiliate 2" },
  { img: "/assets/images/affiliation3.png", label: "Affiliate 3" },
];

export default function AboutPage() {
  return (
    <div className="overflow-x-hidden">
      {/* Page header */}
      <section
        className="relative h-[320px] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/images/everestbasecamp.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl font-bold mb-2">About Us</h1>
          <p className="text-lg">
            <Link href="/" className="hover:underline">Home</Link> / About Us
          </p>
        </div>
      </section>

      {/* About content */}
      <section className="section-gap bg-[#e2fce7] py-20">
        <div className="max-w-[1300px] mx-auto flex flex-col lg:flex-row items-center gap-10 px-6">
          <div
            className="about-text-shape"
          >
            <span className="block text-base mb-3">About Us</span>
            <h2 className="font-bold leading-tight mb-6" style={{ fontSize: "clamp(24px, 4vw, 42px)" }}>
              Journeys Crafted with Care, Trust &amp; Experience
            </h2>
            <p className="text-base leading-relaxed mb-6">
              Your trusted local travel partner based in the heart of Kathmandu, Nepal. We are here to curate your
              memorable and bespoke adventure in the Himalayas. Passionate travel planners and skilled local experts –
              waiting to be part of your journey in cultural immersion, delightful holidays, and safe and eco-friendly
              travel experiences.
            </p>
            <p className="text-base leading-relaxed">
              With over 29 years of experience, we have guided thousands of travelers from around the world through the
              majestic landscapes of Nepal, Bhutan, and Tibet. Our commitment to responsible tourism and personalized
              service sets us apart.
            </p>
          </div>
          <div className="w-full lg:w-[55%] lg:-ml-[120px]">
            <Image src="/assets/images/aboutimg2.jpg" alt="About Himmalagari" width={700} height={500} className="w-full rounded-xl object-cover" />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-gap py-16 px-6 text-center">
        <h4 className="font-semibold text-[#1C6408] mb-2">Our Team</h4>
        <h2 className="green-title mb-10">Meet Our <span className="orange-text">Expert Team</span></h2>

        {/* Tab content – executives shown by default */}
        <div className="flex flex-wrap justify-center gap-8 max-w-[1100px] mx-auto">
          {team.executives.map((member) => (
            <div key={member.name} className="bg-white rounded-2xl shadow-lg overflow-hidden w-[260px]">
              <div className="relative h-[240px]">
                <Image src={member.img} alt={member.name} fill className="object-cover" sizes="260px" />
              </div>
              <div className="p-4">
                <h5 className="font-semibold text-lg text-[#1C6408]">{member.name}</h5>
                <p className="text-sm text-gray-500">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Awards Section */}
      <section id="legal" className="section-gap bg-[#f8f8f8] py-16 px-6 text-center">
        <h4 className="font-semibold text-[#1C6408] mb-2">Recognition</h4>
        <h2 className="green-title mb-10">Awards &amp; <span className="orange-text">Affiliations</span></h2>

        <div className="flex flex-wrap justify-center gap-10 max-w-[900px] mx-auto">
          {awards.map((award) => (
            <div key={award.label} className="bg-white rounded-xl shadow p-6 flex items-center justify-center w-[180px] h-[140px]">
              <Image src={award.img} alt={award.label} width={120} height={80} className="object-contain" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

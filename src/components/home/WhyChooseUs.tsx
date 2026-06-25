import Image from "next/image";

const features = [
  { icon: "fa-trophy", title: "15+ Years Experience", desc: "Decades of crafting seamless journeys across the Himalayas with proven expertise." },
  { icon: "fa-map-location-dot", title: "Local Expertise", desc: "Deep knowledge of every destination ensuring authentic, off-the-beaten-path experiences." },
  { icon: "fa-shield-halved", title: "100% Safe Travel", desc: "Comprehensive safety protocols and 24/7 support throughout your entire journey." },
  { icon: "fa-star", title: "Award Winning", desc: "Recognised by Nepal Tourism Board as one of the best travel agencies in Nepal." },
  { icon: "fa-handshake", title: "Personalised Service", desc: "Every itinerary is tailor-made to match your interests, pace, and budget." },
  { icon: "fa-leaf", title: "Eco-Responsible", desc: "Committed to sustainable tourism that protects Nepal's natural and cultural heritage." },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 px-5 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-72 h-72 rounded-full opacity-[0.04] bg-primary -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-56 h-56 rounded-full opacity-[0.04] bg-primary translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-300 mx-auto relative">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="section-label">
            <i className="fa-solid fa-circle-check" />
            Why Choose Us
          </span>
          <h2 className="section-title">
            What Makes Us <span className="highlight">Different</span>
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto text-[15px] mt-2 leading-relaxed">
            We go beyond booking trips — we create memories that last a lifetime.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon, title, desc }) => (
            <div key={title} className="feature-box group">
              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-light-green flex items-center justify-center mx-auto mb-5 group-hover:bg-primary transition-colors duration-300">
                <i className={`fa-solid ${icon} text-primary text-xl group-hover:text-white transition-colors duration-300`} />
              </div>
              <h3 className="font-bold text-gray-900 text-[15px] mb-2">{title}</h3>
              <p className="text-gray-500 text-[13px] leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        {/* Bottom trust bar */}
        <div className="mt-16 bg-primary rounded-3xl p-8 md:p-10 text-center text-white">
          <h3 className="text-xl md:text-2xl font-bold mb-2">Ready to Start Your Himalayan Adventure?</h3>
          <p className="text-white/70 text-sm mb-6 max-w-md mx-auto">Join thousands of happy travellers who trusted us to deliver their dream journey.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/packages" className="bg-white text-primary font-semibold px-7 py-3 rounded-full text-sm hover:bg-light-green transition-colors">
              <i className="fa-solid fa-binoculars mr-2" />
              Browse Packages
            </a>
            <a href="/contact" className="border-2 border-white/50 text-white font-semibold px-7 py-3 rounded-full text-sm hover:bg-white/15 transition-colors">
              <i className="fa-solid fa-phone mr-2" />
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

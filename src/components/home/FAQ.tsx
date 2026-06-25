"use client";

import { useState } from "react";
import Link from "next/link";

const faqs = [
  {
    q: "What is the best time to trek in Nepal?",
    a: "The best seasons are <strong>March–May</strong> (spring) and <strong>September–November</strong> (autumn). Spring offers blooming rhododendrons and clear skies, while autumn brings crisp visibility and ideal temperatures for high-altitude trekking.",
  },
  {
    q: "Do I need a visa to visit Nepal?",
    a: "Most nationalities can obtain a <strong>visa on arrival</strong> at Tribhuvan International Airport in Kathmandu. You will need a valid passport, a passport-size photo, and the visa fee (USD 30 for 15 days, USD 50 for 30 days). Some nationalities require prior arrangement.",
  },
  {
    q: "What trekking permits do I need for Everest Base Camp?",
    a: "You will need a <strong>TIMS Card</strong> (Trekkers' Information Management System) and a <strong>Sagarmatha National Park Entry Permit</strong>. Our team arranges all necessary permits as part of your trekking package at no extra hassle.",
  },
  {
    q: "How do I stay connected during trekking?",
    a: "NTC and Ncell SIM cards provide mobile coverage on most major trekking routes up to moderate altitudes. Many teahouses along the Everest and Annapurna routes offer <strong>Wi-Fi for a small fee</strong>. We recommend purchasing a local SIM on arrival.",
  },
  {
    q: "What travel insurance do I need?",
    a: "We strongly recommend comprehensive travel insurance that covers <strong>high-altitude trekking, emergency evacuation (helicopter rescue), trip cancellation, and medical expenses</strong>. Always verify your policy covers activities above 5,000m.",
  },
  {
    q: "Can I customise my itinerary?",
    a: "Absolutely — every package we offer can be <strong>fully tailored</strong> to your interests, fitness level, budget, and travel dates. Use our 'Plan Your Trip' form or contact us directly to start building your dream itinerary.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-20 px-5 bg-white">
      <div className="max-w-300 mx-auto">
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Left: header + CTA */}
          <div className="lg:col-span-2">
            <span className="section-label">
              <i className="fa-solid fa-circle-question" />
              FAQ
            </span>
            <h2 className="section-title mb-4">
              Common <span className="highlight">Questions</span>
            </h2>
            <p className="text-gray-500 text-[15px] leading-relaxed mb-8">
              Can't find what you're looking for? Our team is just a message away — we reply within a few hours.
            </p>
            <Link href="/contact" className="btn-primary">
              <i className="fa-solid fa-envelope text-sm" />
              Ask Us Anything
            </Link>

            {/* Quick stats */}
            <div className="mt-10 grid grid-cols-2 gap-3">
              {[
                { num: "< 2h", label: "Avg. response time" },
                { num: "98%", label: "Query resolution rate" },
              ].map(({ num, label }) => (
                <div key={label} className="bg-background rounded-2xl p-4 text-center">
                  <div className="text-lg font-bold text-primary">{num}</div>
                  <div className="text-gray-400 text-[11px] mt-0.5">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: accordion */}
          <div className="lg:col-span-3 space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  open === i
                    ? "border-primary/20 bg-light-green/40"
                    : "border-gray-100 bg-background hover:border-primary/15"
                }`}
              >
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left"
                >
                  <span className={`text-[14px] font-semibold leading-snug ${open === i ? "text-primary" : "text-gray-800"}`}>
                    {faq.q}
                  </span>
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-all ${open === i ? "bg-primary text-white rotate-180" : "bg-white border border-gray-200 text-gray-400"}`}>
                    <i className="fa-solid fa-chevron-down text-[10px]" />
                  </div>
                </button>

                <div
                  className={`transition-all duration-300 ${open === i ? "max-h-64 opacity-100" : "max-h-0 opacity-0"} overflow-hidden`}
                >
                  <div
                    className="px-6 pb-5 text-gray-600 text-[14px] leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: faq.a }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

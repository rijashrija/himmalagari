"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const testimonials = [
  {
    name: "Sarah Mitchell",
    location: "London, UK",
    rating: 5,
    text: "Himmalagari made our Everest Base Camp trek an absolute dream. The guides were incredibly knowledgeable, the logistics were seamless, and we felt safe every step of the way. Truly world-class service.",
    trip: "Everest Base Camp Trek",
    avatar: "/assets/images/testimonial1.jpg",
  },
  {
    name: "Rajesh Sharma",
    location: "Mumbai, India",
    rating: 5,
    text: "Our family trip to Nepal was perfectly organised. The team at Himmalagari went above and beyond to accommodate our young children and elderly parents. Every detail was taken care of — we just enjoyed the journey!",
    trip: "Nepal Family Tour",
    avatar: "/assets/images/testimonial2.jpg",
  },
  {
    name: "David Chen",
    location: "Sydney, Australia",
    rating: 5,
    text: "The Bhutan cultural tour exceeded all expectations. Our guide was passionate, articulate, and incredibly welcoming. The itinerary struck the perfect balance between sightseeing and downtime. Will definitely book again.",
    trip: "Bhutan Cultural Tour",
    avatar: "/assets/images/testimonial3.jpg",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startInterval = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActive((p) => (p + 1) % testimonials.length);
    }, 5000);
  };

  useEffect(() => {
    startInterval();
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, []);

  const goTo = (i: number) => {
    setActive(i);
    startInterval();
  };

  const t = testimonials[active];

  return (
    <section className="py-20 px-5 bg-background relative overflow-hidden">
      {/* Background shapes */}
      <div className="absolute top-10 left-8 w-40 h-40 rounded-full opacity-[0.06] bg-primary" />
      <div className="absolute bottom-10 right-8 w-56 h-56 rounded-full opacity-[0.05] bg-primary" />

      <div className="max-w-300 mx-auto relative">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="section-label">
            <i className="fa-solid fa-comments" />
            Testimonials
          </span>
          <h2 className="section-title">
            What Our <span className="highlight">Travellers</span> Say
          </h2>
        </div>

        {/* Card */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-[0_8px_40px_rgba(0,0,0,0.07)] relative transition-all duration-500">
            {/* Quote mark */}
            <div className="absolute top-6 right-8 text-7xl text-light-green font-serif leading-none select-none">"</div>

            {/* Stars */}
            <div className="flex gap-1 mb-6">
              {Array.from({ length: t.rating }).map((_, i) => (
                <i key={i} className="fa-solid fa-star text-amber-400 text-sm" />
              ))}
            </div>

            {/* Review text */}
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8 relative z-10">
              {t.text}
            </p>

            {/* Trip badge */}
            <div className="inline-flex items-center gap-2 bg-light-green text-primary text-xs font-semibold px-4 py-2 rounded-full mb-6">
              <i className="fa-solid fa-route text-[10px]" />
              {t.trip}
            </div>

            {/* Author */}
            <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
              <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0 ring-2 ring-light-green">
                <Image src={t.avatar} alt={t.name} fill className="object-cover" sizes="48px" />
              </div>
              <div>
                <p className="font-bold text-gray-900 text-[15px]">{t.name}</p>
                <p className="text-gray-400 text-xs flex items-center gap-1">
                  <i className="fa-solid fa-location-dot text-primary" />
                  {t.location}
                </p>
              </div>
              {/* TripAdvisor badge */}
              <div className="ml-auto flex items-center gap-2 bg-[#34e0a1]/10 text-[#00af87] text-[11px] font-semibold px-3 py-1.5 rounded-full">
                <i className="fa-solid fa-circle-check" />
                Verified Review
              </div>
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2.5 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`rounded-full transition-all duration-300 ${
                  i === active
                    ? "w-7 h-2.5 bg-primary"
                    : "w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

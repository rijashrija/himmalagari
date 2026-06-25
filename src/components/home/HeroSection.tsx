"use client";

import Link from "next/link";
import { useState } from "react";

export default function HeroSection() {
  const [destination, setDestination] = useState("");
  const [activity, setActivity] = useState("");
  const [duration, setDuration] = useState("");

  return (
    <section className="relative w-full overflow-hidden" style={{ height: "100svh", minHeight: 560, maxHeight: 900 }}>
      {/* Video background */}
      <div className="absolute inset-0" style={{ pointerEvents: "none" }}>
        <iframe
          src="https://www.youtube.com/embed/xLTCivIB4kU?autoplay=1&mute=1&loop=1&playlist=xLTCivIB4kU&controls=0&showinfo=0&rel=0&modestbranding=1"
          className="absolute w-full h-full"
          style={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%) scale(1.18)",
            pointerEvents: "none",
          }}
          allowFullScreen
          title="Himmalagari – Nepal Travel"
        />
      </div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-linear-to-b from-black/55 via-black/25 to-black/70" />
      <div className="absolute inset-0 bg-linear-to-r from-black/40 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-5 text-center pb-10">
        {/* Label */}
        <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/25 text-white text-xs font-semibold tracking-[2px] uppercase px-4 py-2 rounded-full mb-6 fade-up">
          <i className="fa-solid fa-mountain-sun text-accent" />
          Nepal's Most Trusted Travel Partner
        </div>

        {/* Heading */}
        <h1
          className="text-white text-center fade-up mb-4"
          style={{
            fontFamily: "var(--font-corinthia)",
            fontSize: "clamp(38px, 8vw, 100px)",
            lineHeight: 1.1,
            animationDelay: "0.1s",
            textShadow: "0 2px 30px rgba(0,0,0,0.4)",
          }}
        >
          Welcome to Himmalagari<br />
          <span style={{ fontSize: "clamp(22px, 4.5vw, 56px)", color: "#94ce94", display: "block", marginTop: 4 }}>
            Travels & Expeditions
          </span>
        </h1>

        <p
          className="text-white/80 text-base md:text-lg max-w-140 fade-up mb-8 leading-relaxed"
          style={{ animationDelay: "0.2s" }}
        >
          Discover the magic of the Himalayas — from epic treks to cultural journeys, every adventure starts here.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12 fade-up" style={{ animationDelay: "0.3s" }}>
          <Link
            href="/packages"
            className="flex items-center gap-2 bg-primary text-white font-semibold px-7 py-3.5 rounded-full hover:bg-primary-light transition-all hover:-translate-y-1 hover:shadow-xl text-[15px]"
          >
            <i className="fa-solid fa-binoculars text-sm" />
            Explore Packages
          </Link>
          <Link
            href="/contact"
            className="flex items-center gap-2 bg-white/15 backdrop-blur-sm border-2 border-white/50 text-white font-semibold px-7 py-3.5 rounded-full hover:bg-white/25 transition-all hover:-translate-y-1 text-[15px]"
          >
            <i className="fa-solid fa-phone text-sm" />
            Talk to an Expert
          </Link>
        </div>

        {/* Search bar */}
        <div
          className="w-full max-w-190 fade-up"
          style={{ animationDelay: "0.4s" }}
        >
          <div className="bg-white/12 backdrop-blur-xl border border-white/20 rounded-2xl p-4 md:p-5">
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
              <div className="relative">
                <label className="block text-white/70 text-[10px] font-semibold uppercase tracking-widest mb-1.5 pl-1">Destination</label>
                <div className="relative">
                  <i className="fa-solid fa-map-pin absolute left-3 top-1/2 -translate-y-1/2 text-white/50 text-xs pointer-events-none" />
                  <select
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    className="w-full bg-white/15 border border-white/25 text-white text-sm rounded-xl pl-8 pr-3 py-2.5 focus:outline-none focus:border-white/60 appearance-none cursor-pointer"
                    style={{ colorScheme: "dark" }}
                  >
                    <option value="" style={{ color: "#333" }}>Where to?</option>
                    <option style={{ color: "#333" }}>Nepal</option>
                    <option style={{ color: "#333" }}>Bhutan</option>
                    <option style={{ color: "#333" }}>Tibet</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-white/70 text-[10px] font-semibold uppercase tracking-widest mb-1.5 pl-1">Activity</label>
                <div className="relative">
                  <i className="fa-solid fa-person-hiking absolute left-3 top-1/2 -translate-y-1/2 text-white/50 text-xs pointer-events-none" />
                  <select
                    value={activity}
                    onChange={(e) => setActivity(e.target.value)}
                    className="w-full bg-white/15 border border-white/25 text-white text-sm rounded-xl pl-8 pr-3 py-2.5 focus:outline-none focus:border-white/60 appearance-none cursor-pointer"
                    style={{ colorScheme: "dark" }}
                  >
                    <option value="" style={{ color: "#333" }}>Any activity</option>
                    <option style={{ color: "#333" }}>Trekking</option>
                    <option style={{ color: "#333" }}>Tour</option>
                    <option style={{ color: "#333" }}>Adventure</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-white/70 text-[10px] font-semibold uppercase tracking-widest mb-1.5 pl-1">Duration</label>
                <div className="relative">
                  <i className="fa-regular fa-clock absolute left-3 top-1/2 -translate-y-1/2 text-white/50 text-xs pointer-events-none" />
                  <select
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                    className="w-full bg-white/15 border border-white/25 text-white text-sm rounded-xl pl-8 pr-3 py-2.5 focus:outline-none focus:border-white/60 appearance-none cursor-pointer"
                    style={{ colorScheme: "dark" }}
                  >
                    <option value="" style={{ color: "#333" }}>Any duration</option>
                    <option style={{ color: "#333" }}>1–7 days</option>
                    <option style={{ color: "#333" }}>8–14 days</option>
                    <option style={{ color: "#333" }}>15+ days</option>
                  </select>
                </div>
              </div>

              <button className="bg-primary text-white text-sm font-semibold rounded-xl px-5 py-2.5 hover:bg-primary-light transition-all hover:shadow-lg flex items-center justify-center gap-2 self-end">
                <i className="fa-solid fa-magnifying-glass" />
                Search
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 opacity-60">
        <span className="text-white text-[10px] tracking-[2px] uppercase">Scroll</span>
        <div className="w-px h-6 bg-white/50 animate-bounce" />
      </div>

      {/* Stats bar */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <div className="max-w-225 mx-auto px-5 pb-5">
          <div className="bg-white/10 backdrop-blur-xl border border-white/15 rounded-2xl grid grid-cols-3 divide-x divide-white/15 overflow-hidden">
            {[
              { num: "12K+", label: "Happy Travellers" },
              { num: "150+", label: "Destinations" },
              { num: "15 Yrs", label: "Of Experience" },
            ].map(({ num, label }) => (
              <div key={label} className="flex flex-col items-center py-4 px-3">
                <span className="text-white font-bold text-lg md:text-2xl">{num}</span>
                <span className="text-white/65 text-[11px] md:text-xs mt-0.5">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

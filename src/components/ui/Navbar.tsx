"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

const holidayTypes = [
  { label: "Adventure", icon: "fa-person-hiking" },
  { label: "Honeymoon", icon: "fa-heart" },
  { label: "Family", icon: "fa-people-roof" },
  { label: "Luxury", icon: "fa-star" },
  { label: "Pilgrimage", icon: "fa-om" },
];
const destinations = [
  { label: "Nepal", icon: "fa-mountain" },
  { label: "Bhutan", icon: "fa-torii-gate" },
  { label: "Tibet", icon: "fa-globe-asia" },
];

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [planOpen, setPlanOpen] = useState(false);
  const [holidayOpen, setHolidayOpen] = useState(false);
  const [destOpen, setDestOpen] = useState(false);
  const [mobileHolidayOpen, setMobileHolidayOpen] = useState(false);
  const [mobileDestOpen, setMobileDestOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [planCountryCode, setPlanCountryCode] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const searchRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (searchOpen) searchRef.current?.focus();
  }, [searchOpen]);

  useEffect(() => {
    document.body.style.overflow = menuOpen || planOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen, planOpen]);

  const isTransparent = isHome && !scrolled;

  const linkClass = isTransparent
    ? "text-white/90 hover:text-white text-[14.5px] font-medium transition-colors"
    : "text-gray-700 hover:text-[#1C6408] text-[14.5px] font-medium transition-colors";

  const chevronClass = isTransparent ? "text-white/70" : "text-gray-500";

  return (
    <>
      {/* ── NAV ── */}
      <nav
        className={`
          fixed top-0 left-0 w-full z-50 transition-all duration-300
          ${isTransparent
            ? "bg-black/10 backdrop-blur-md border-b border-white/10"
            : "bg-white shadow-[0_2px_20px_rgba(0,0,0,0.08)]"
          }
        `}
        style={{ height: 72 }}
      >
        <div className="max-w-[1200px] mx-auto h-full flex items-center justify-between px-5 lg:px-8">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center gap-2">
            <Image
              src="/assets/images/logo.png"
              alt="Himmalagari Travels"
              width={72}
              height={54}
              className="w-[62px] h-auto"
              priority
            />
          </Link>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-7">
            <li>
              <Link href="/" className={linkClass}>Home</Link>
            </li>
            <li>
              <Link href="/about" className={linkClass}>About</Link>
            </li>

            {/* Holiday Types */}
            <li
              className="relative"
              onMouseEnter={() => setHolidayOpen(true)}
              onMouseLeave={() => setHolidayOpen(false)}
            >
              <button className={`flex items-center gap-1.5 ${linkClass}`}>
                Holiday Types
                <i className={`fa-solid fa-chevron-down text-[10px] transition-transform ${holidayOpen ? "rotate-180" : ""} ${chevronClass}`} />
              </button>
              <div
                className={`
                  absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[200px]
                  bg-white rounded-2xl py-2 shadow-xl border border-gray-100
                  transition-all duration-200 origin-top
                  ${holidayOpen ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"}
                `}
              >
                {holidayTypes.map((t) => (
                  <Link
                    key={t.label}
                    href={`/holiday-types/${t.label.toLowerCase()}`}
                    className="flex items-center gap-3 px-5 py-2.5 text-gray-700 hover:text-[#1C6408] hover:bg-[#f0f9ec] text-sm font-medium transition-colors"
                  >
                    <i className={`fa-solid ${t.icon} w-4 text-[#1C6408] text-xs`} />
                    {t.label}
                  </Link>
                ))}
              </div>
            </li>

            {/* Destinations */}
            <li
              className="relative"
              onMouseEnter={() => setDestOpen(true)}
              onMouseLeave={() => setDestOpen(false)}
            >
              <button className={`flex items-center gap-1.5 ${linkClass}`}>
                Destinations
                <i className={`fa-solid fa-chevron-down text-[10px] transition-transform ${destOpen ? "rotate-180" : ""} ${chevronClass}`} />
              </button>
              <div
                className={`
                  absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[180px]
                  bg-white rounded-2xl py-2 shadow-xl border border-gray-100
                  transition-all duration-200 origin-top
                  ${destOpen ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"}
                `}
              >
                {destinations.map((d) => (
                  <Link
                    key={d.label}
                    href={`/destinations/${d.label.toLowerCase()}`}
                    className="flex items-center gap-3 px-5 py-2.5 text-gray-700 hover:text-[#1C6408] hover:bg-[#f0f9ec] text-sm font-medium transition-colors"
                  >
                    <i className={`fa-solid ${d.icon} w-4 text-[#1C6408] text-xs`} />
                    {d.label}
                  </Link>
                ))}
              </div>
            </li>

            <li>
              <Link href="/blog" className={linkClass}>Blog</Link>
            </li>
            <li>
              <Link href="/contact" className={linkClass}>Contact</Link>
            </li>
          </ul>

          {/* Right actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setSearchOpen((p) => !p)}
              aria-label="Search"
              className={`
                w-9 h-9 flex items-center justify-center rounded-full transition-all
                ${isTransparent
                  ? "text-white hover:bg-white/15"
                  : "text-gray-600 hover:bg-gray-100"
                }
              `}
            >
              <i className="fa-solid fa-magnifying-glass text-sm" />
            </button>

            <button
              onClick={() => setPlanOpen(true)}
              className="hidden sm:flex items-center gap-2 bg-[#1C6408] text-white text-[13px] font-semibold px-5 py-2.5 rounded-full hover:bg-[#2d8a0e] transition-all hover:-translate-y-px hover:shadow-lg"
            >
              <i className="fa-solid fa-compass text-xs" />
              Plan Your Trip
            </button>

            <button
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              className={`
                w-9 h-9 flex items-center justify-center rounded-full lg:hidden transition-all
                ${isTransparent
                  ? "text-white hover:bg-white/15"
                  : "text-gray-600 hover:bg-gray-100"
                }
              `}
            >
              <i className="fa-solid fa-bars text-sm" />
            </button>
          </div>
        </div>
      </nav>

      {/* ── SEARCH DROPDOWN ── */}
      <div
        className={`
          fixed top-[72px] left-1/2 -translate-x-1/2 z-40 w-full max-w-[680px] px-4
          transition-all duration-300
          ${searchOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-3 pointer-events-none"}
        `}
      >
        <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-5">
          <div className="flex items-center gap-3 mb-4">
            <i className="fa-solid fa-magnifying-glass text-gray-400" />
            <input
              ref={searchRef}
              type="text"
              placeholder="Search destinations, packages, blog posts…"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 text-gray-800 text-[15px] outline-none placeholder:text-gray-400"
            />
            {searchQuery && (
              <button onClick={() => setSearchQuery("")} className="text-gray-400 hover:text-gray-600">
                <i className="fa-solid fa-xmark" />
              </button>
            )}
          </div>
          <div className="grid grid-cols-3 gap-2">
            {["Nepal Trekking", "Bhutan Tours", "Tibet Expedition"].map((q) => (
              <button
                key={q}
                onClick={() => setSearchQuery(q)}
                className="text-xs text-gray-500 bg-gray-50 hover:bg-[#e6f2da] hover:text-[#1C6408] px-3 py-2 rounded-lg transition-colors text-left"
              >
                <i className="fa-solid fa-arrow-trend-up mr-1.5 text-[10px]" />
                {q}
              </button>
            ))}
          </div>
        </div>
      </div>
      {searchOpen && (
        <div className="fixed inset-0 z-30" onClick={() => setSearchOpen(false)} />
      )}

      {/* ── MOBILE MENU ── */}
      {menuOpen && (
        <div className="drawer-overlay" onClick={() => setMenuOpen(false)} />
      )}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
          <Image src="/assets/images/logo.png" alt="Logo" width={52} height={40} className="w-[48px] h-auto" />
          <button
            onClick={() => setMenuOpen(false)}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors"
          >
            <i className="fa-solid fa-xmark" />
          </button>
        </div>

        <div className="px-5 py-4">
          {/* Plan trip CTA */}
          <button
            onClick={() => { setMenuOpen(false); setPlanOpen(true); }}
            className="w-full bg-[#1C6408] text-white font-semibold py-3 rounded-xl text-sm mb-5 flex items-center justify-center gap-2"
          >
            <i className="fa-solid fa-compass text-xs" />
            Plan Your Trip
          </button>

          <nav className="space-y-1">
            {[
              { href: "/", label: "Home", icon: "fa-house" },
              { href: "/about", label: "About Us", icon: "fa-circle-info" },
              { href: "/blog", label: "Blog", icon: "fa-newspaper" },
              { href: "/contact", label: "Contact", icon: "fa-envelope" },
            ].map(({ href, label, icon }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-3 px-3 py-3 rounded-xl text-gray-700 hover:text-[#1C6408] hover:bg-[#f0f9ec] text-[15px] font-medium transition-colors"
              >
                <i className={`fa-solid ${icon} w-4 text-[#1C6408] text-sm`} />
                {label}
              </Link>
            ))}

            {/* Holiday Types */}
            <div>
              <button
                onClick={() => setMobileHolidayOpen((p) => !p)}
                className="w-full flex items-center justify-between px-3 py-3 rounded-xl text-gray-700 hover:bg-[#f0f9ec] text-[15px] font-medium transition-colors"
              >
                <span className="flex items-center gap-3">
                  <i className="fa-solid fa-umbrella-beach w-4 text-[#1C6408] text-sm" />
                  Holiday Types
                </span>
                <i className={`fa-solid fa-chevron-down text-xs text-gray-400 transition-transform ${mobileHolidayOpen ? "rotate-180" : ""}`} />
              </button>
              {mobileHolidayOpen && (
                <div className="mt-1 ml-7 space-y-0.5">
                  {holidayTypes.map((t) => (
                    <Link
                      key={t.label}
                      href={`/holiday-types/${t.label.toLowerCase()}`}
                      onClick={() => setMenuOpen(false)}
                      className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-gray-600 hover:text-[#1C6408] hover:bg-[#f0f9ec] text-sm transition-colors"
                    >
                      <i className={`fa-solid ${t.icon} text-[#1C6408] text-xs w-3.5`} />
                      {t.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Destinations */}
            <div>
              <button
                onClick={() => setMobileDestOpen((p) => !p)}
                className="w-full flex items-center justify-between px-3 py-3 rounded-xl text-gray-700 hover:bg-[#f0f9ec] text-[15px] font-medium transition-colors"
              >
                <span className="flex items-center gap-3">
                  <i className="fa-solid fa-map-location-dot w-4 text-[#1C6408] text-sm" />
                  Destinations
                </span>
                <i className={`fa-solid fa-chevron-down text-xs text-gray-400 transition-transform ${mobileDestOpen ? "rotate-180" : ""}`} />
              </button>
              {mobileDestOpen && (
                <div className="mt-1 ml-7 space-y-0.5">
                  {destinations.map((d) => (
                    <Link
                      key={d.label}
                      href={`/destinations/${d.label.toLowerCase()}`}
                      onClick={() => setMenuOpen(false)}
                      className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-gray-600 hover:text-[#1C6408] hover:bg-[#f0f9ec] text-sm transition-colors"
                    >
                      <i className={`fa-solid ${d.icon} text-[#1C6408] text-xs w-3.5`} />
                      {d.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Contact info */}
          <div className="mt-6 pt-5 border-t border-gray-100 space-y-2">
            <a href="tel:+977-1-4444444" className="flex items-center gap-2.5 text-sm text-gray-500 hover:text-[#1C6408] transition-colors">
              <i className="fa-solid fa-phone text-[#1C6408] text-xs" />
              +977-1-4444444
            </a>
            <a href="mailto:info@himmalagari.com" className="flex items-center gap-2.5 text-sm text-gray-500 hover:text-[#1C6408] transition-colors">
              <i className="fa-solid fa-envelope text-[#1C6408] text-xs" />
              info@himmalagari.com
            </a>
          </div>
        </div>
      </div>

      {/* ── PLAN YOUR TRIP DRAWER ── */}
      {planOpen && (
        <div className="drawer-overlay" onClick={() => setPlanOpen(false)} />
      )}
      <div className={`plan-drawer ${planOpen ? "open" : ""}`}>
        {/* Drawer header */}
        <div className="sticky top-0 z-10 flex items-center justify-between px-7 py-5 bg-white border-b border-gray-100">
          <div>
            <h2 className="text-xl font-bold text-gray-900">
              Plan <span className="text-[#1C6408]">Your Trip</span>
            </h2>
            <p className="text-xs text-gray-500 mt-0.5">Fill in the details and we'll get back to you</p>
          </div>
          <button
            onClick={() => setPlanOpen(false)}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors"
          >
            <i className="fa-solid fa-xmark" />
          </button>
        </div>

        <div className="px-7 py-6">
          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="form-label">Package <span className="text-red-500">*</span></label>
                <select required className="form-field">
                  <option value="">Choose package</option>
                  <option>Nepal</option>
                  <option>Bhutan</option>
                  <option>Tibet</option>
                </select>
              </div>
              <div>
                <label className="form-label">Travel Date <span className="text-red-500">*</span></label>
                <input type="date" required className="form-field" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="form-label">No. of Travellers <span className="text-red-500">*</span></label>
                <input type="number" min="1" placeholder="2" required className="form-field" />
              </div>
              <div>
                <label className="form-label">Budget (USD)</label>
                <input type="text" placeholder="e.g. $1500" className="form-field" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="form-label">Full Name <span className="text-red-500">*</span></label>
                <input type="text" placeholder="Your name" required className="form-field" />
              </div>
              <div>
                <label className="form-label">Email <span className="text-red-500">*</span></label>
                <input type="email" placeholder="you@email.com" required className="form-field" />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <div>
                <label className="form-label">Country <span className="text-red-500">*</span></label>
                <select
                  required
                  onChange={(e) => {
                    const opt = e.target.selectedOptions[0];
                    setPlanCountryCode(opt.getAttribute("data-code") || "");
                  }}
                  className="form-field"
                >
                  <option value="">Select</option>
                  <option data-code="+977">Nepal</option>
                  <option data-code="+91">India</option>
                  <option data-code="+1">USA</option>
                  <option data-code="+44">UK</option>
                  <option data-code="+61">Australia</option>
                </select>
              </div>
              <div>
                <label className="form-label">Code</label>
                <input readOnly value={planCountryCode} className="form-field bg-gray-50 cursor-default" />
              </div>
              <div>
                <label className="form-label">Phone <span className="text-red-500">*</span></label>
                <input type="tel" placeholder="98XXXXXXXX" required className="form-field" />
              </div>
            </div>

            <div>
              <label className="form-label">Message / Tour Details</label>
              <textarea
                rows={4}
                placeholder="Tell us about your travel plans, preferences, or any special requirements…"
                className="form-field resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#1C6408] text-white font-semibold py-3.5 rounded-xl hover:bg-[#2d8a0e] transition-all hover:shadow-lg flex items-center justify-center gap-2"
            >
              <i className="fa-solid fa-paper-plane text-sm" />
              Send Enquiry
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

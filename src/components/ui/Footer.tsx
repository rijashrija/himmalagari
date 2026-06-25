"use client";

import Link from "next/link";
import Image from "next/image";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Packages", href: "/packages" },
  { label: "Fixed Departure", href: "/fixed-departure" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const destinations = [
  { label: "Nepal", href: "/destinations/nepal" },
  { label: "Bhutan", href: "/destinations/bhutan" },
  { label: "Tibet", href: "/destinations/tibet" },
];

const holidayTypes = [
  { label: "Adventure", href: "/holiday-types/adventure" },
  { label: "Honeymoon", href: "/holiday-types/honeymoon" },
  { label: "Family", href: "/holiday-types/family" },
  { label: "Luxury", href: "/holiday-types/luxury" },
  { label: "Pilgrimage", href: "/holiday-types/pilgrimage" },
];

const socials = [
  { icon: "fa-facebook-f", href: "https://facebook.com", label: "Facebook" },
  { icon: "fa-instagram", href: "https://instagram.com", label: "Instagram" },
  { icon: "fa-youtube", href: "https://youtube.com", label: "YouTube" },
  { icon: "fa-x-twitter", href: "https://twitter.com", label: "Twitter" },
  { icon: "fa-tripadvisor", href: "https://tripadvisor.com", label: "TripAdvisor" },
];

export default function Footer() {
  return (
    <footer className="footer-gradient text-white">
      {/* Main footer */}
      <div className="max-w-300 mx-auto px-5 pt-16 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/">
              <Image src="/assets/images/logo.png" alt="Himmalagari Travels" width={90} height={68} className="w-20 h-auto mb-5 brightness-0 invert" />
            </Link>
            <p className="text-white/65 text-sm leading-relaxed mb-6">
              Crafting unforgettable Himalayan experiences since 2009. Your journey is our passion.
            </p>
            {/* Contact */}
            <div className="space-y-2.5 text-sm">
              {[
                { icon: "fa-location-dot", text: "Thamel, Kathmandu, Nepal" },
                { icon: "fa-phone", text: "+977-1-4444444", href: "tel:+97714444444" },
                { icon: "fa-envelope", text: "info@himmalagari.com", href: "mailto:info@himmalagari.com" },
              ].map(({ icon, text, href }) => (
                <div key={text} className="flex items-start gap-2.5">
                  <i className={`fa-solid ${icon} text-accent mt-0.5 text-xs w-3.5 shrink-0`} />
                  {href ? (
                    <a href={href} className="text-white/65 hover:text-white transition-colors">{text}</a>
                  ) : (
                    <span className="text-white/65">{text}</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white text-[14px] mb-5 flex items-center gap-2">
              <span className="w-5 h-0.5 bg-accent inline-block" />
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className="text-white/65 text-sm hover:text-white hover:pl-1 transition-all duration-200 flex items-center gap-1.5">
                    <i className="fa-solid fa-chevron-right text-[9px] text-accent" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h4 className="font-bold text-white text-[14px] mb-5 flex items-center gap-2">
              <span className="w-5 h-0.5 bg-accent inline-block" />
              Destinations
            </h4>
            <ul className="space-y-2.5 mb-6">
              {destinations.map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className="text-white/65 text-sm hover:text-white hover:pl-1 transition-all duration-200 flex items-center gap-1.5">
                    <i className="fa-solid fa-chevron-right text-[9px] text-accent" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
            <h4 className="font-bold text-white text-[14px] mb-4 flex items-center gap-2">
              <span className="w-5 h-0.5 bg-accent inline-block" />
              Holiday Types
            </h4>
            <ul className="space-y-2.5">
              {holidayTypes.map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className="text-white/65 text-sm hover:text-white hover:pl-1 transition-all duration-200 flex items-center gap-1.5">
                    <i className="fa-solid fa-chevron-right text-[9px] text-accent" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter + Social */}
          <div>
            <h4 className="font-bold text-white text-[14px] mb-5 flex items-center gap-2">
              <span className="w-5 h-0.5 bg-accent inline-block" />
              Stay Updated
            </h4>
            <p className="text-white/65 text-sm mb-4">Get travel inspiration and exclusive deals in your inbox.</p>
            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-2.5 mb-8">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full bg-white/10 border border-white/20 text-white placeholder:text-white/40 text-sm rounded-xl px-4 py-2.5 focus:outline-none focus:border-accent transition-colors"
              />
              <button
                type="submit"
                className="w-full bg-accent text-primary-dark font-semibold text-sm py-2.5 rounded-xl hover:bg-white hover:text-primary transition-colors"
              >
                Subscribe
              </button>
            </form>

            {/* Socials */}
            <h4 className="font-bold text-white text-[14px] mb-4 flex items-center gap-2">
              <span className="w-5 h-0.5 bg-accent inline-block" />
              Follow Us
            </h4>
            <div className="flex gap-2 flex-wrap">
              {socials.map(({ icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-accent hover:text-primary-dark text-white flex items-center justify-center text-sm transition-all duration-200 hover:-translate-y-0.5"
                >
                  <i className={`fa-brands ${icon}`} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Affiliations bar */}
      <div className="border-t border-white/10">
        <div className="max-w-300 mx-auto px-5 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/45 text-xs text-center sm:text-left">
            © {new Date().getFullYear()} Himmalagari Travels &amp; Expeditions Pvt. Ltd. · All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/about#legal" className="text-white/45 text-xs hover:text-white/70 transition-colors">Legal</Link>
            <span className="text-white/20">·</span>
            <Link href="/contact" className="text-white/45 text-xs hover:text-white/70 transition-colors">Privacy</Link>
            <span className="text-white/20">·</span>
            <Link href="/contact" className="text-white/45 text-xs hover:text-white/70 transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

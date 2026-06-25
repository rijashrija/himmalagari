import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact Us – Himmalagari Travels",
  description: "Get in touch with Himmalagari Travels. We're here to help plan your dream trip to Nepal, Bhutan, and Tibet.",
};

export default function ContactPage() {
  return (
    <div className="overflow-x-hidden">
      {/* Page header */}
      <section
        className="relative h-[320px] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/images/everestbasecamp.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl font-bold mb-2">Contact Us</h1>
          <p className="text-lg">
            <Link href="/" className="hover:underline">Home</Link> / Contact
          </p>
        </div>
      </section>

      {/* Contact content */}
      <section className="section-gap py-16 px-6">
        <div className="max-w-[1100px] mx-auto grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="green-title text-left mb-8">Get In <span className="orange-text">Touch</span></h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#1C6408] rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="fa-solid fa-location-dot text-white text-lg"></i>
                </div>
                <div>
                  <h5 className="font-semibold mb-1">Office Address</h5>
                  <p className="text-gray-600 text-sm">Suite 04 – 3rd Floor, BHIM Plaza, 329 Bhupi Sadak,<br />Narayanchaur – Naxal, Kathmandu – Nepal</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#1C6408] rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="fa-solid fa-envelope text-white text-lg"></i>
                </div>
                <div>
                  <h5 className="font-semibold mb-1">Email Address</h5>
                  <a href="mailto:incoming@himmalagaritravel.com" className="text-[#1C6408] hover:underline text-sm">
                    incoming@himmalagaritravel.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#1C6408] rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="fa-solid fa-phone text-white text-lg"></i>
                </div>
                <div>
                  <h5 className="font-semibold mb-1">Phone Number</h5>
                  <a href="tel:+9779802369474" className="text-[#1C6408] hover:underline text-sm block">+977 9802369474</a>
                  <a href="tel:+9779802369473" className="text-[#1C6408] hover:underline text-sm block">+977 9802369473</a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-[#1C6408] mb-6">Send a Message</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Full Name *</label>
                  <input type="text" required className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1C6408]" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Email Address *</label>
                  <input type="email" required className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1C6408]" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Phone Number</label>
                <input type="tel" className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1C6408]" />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Subject *</label>
                <input type="text" required className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1C6408]" />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Message *</label>
                <textarea required rows={5} className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1C6408] resize-none"></textarea>
              </div>

              <button type="submit" className="w-full bg-[#1C6408] text-white py-3 rounded-full font-semibold hover:bg-[#6c8b4a] transition-colors">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="mt-12 px-6 pb-16">
        <div className="max-w-[1100px] mx-auto rounded-2xl overflow-hidden shadow-lg h-[400px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.147!2d85.3224!3d27.7172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDQzJzAyLjAiTiA4NcKwMTknMjEuMCJF!5e0!3m2!1sen!2snp!4v1625000000000"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Himmalagari Travels Location"
          />
        </div>
      </section>
    </div>
  );
}

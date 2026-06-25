import Image from "next/image";
import Link from "next/link";

export default function ReviewSection() {
  return (
    <section className="py-16 px-5 bg-white">
      <div className="max-w-300 mx-auto">
        <div className="bg-primary rounded-3xl overflow-hidden">
          <div className="grid md:grid-cols-2 items-center">
            {/* Text */}
            <div className="p-10 md:p-14 text-white">
              <div className="inline-flex items-center gap-2 bg-white/15 text-white/90 text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-6">
                <i className="fa-solid fa-star text-amber-300" />
                Share Your Journey
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-snug">
                Travelled with us?<br />
                <span className="text-accent">Tell the world.</span>
              </h2>
              <p className="text-white/70 text-sm leading-relaxed mb-8 max-w-sm">
                Your honest review helps fellow travellers choose with confidence — and helps us keep improving every trip we craft.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="https://www.tripadvisor.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-white text-primary font-semibold text-sm px-6 py-3 rounded-full hover:bg-light-green transition-colors"
                >
                  <i className="fa-brands fa-tripadvisor" />
                  Review on TripAdvisor
                </Link>
                <Link
                  href="https://www.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-white/15 border border-white/30 text-white font-semibold text-sm px-6 py-3 rounded-full hover:bg-white/25 transition-colors"
                >
                  <i className="fa-brands fa-google" />
                  Review on Google
                </Link>
              </div>
            </div>

            {/* QR / Image side */}
            <div className="relative hidden md:flex flex-col items-center justify-center py-12 px-8 gap-6">
              <div className="absolute inset-0 bg-white/5" />
              <div className="relative bg-white rounded-2xl p-5 shadow-xl z-10">
                <Image
                  src="/assets/images/qr.png"
                  alt="Scan to review"
                  width={160}
                  height={160}
                  className="w-40 h-40"
                />
              </div>
              <p className="text-white/70 text-sm text-center relative z-10">
                Scan to leave a quick review
              </p>
              {/* Floating rating cards */}
              <div className="absolute top-8 right-6 bg-white rounded-xl px-4 py-2.5 shadow-lg text-center">
                <div className="text-xl font-bold text-primary">4.9</div>
                <div className="flex gap-0.5 mt-1">
                  {[1,2,3,4,5].map(i => <i key={i} className="fa-solid fa-star text-amber-400 text-[10px]" />)}
                </div>
                <div className="text-[10px] text-gray-400 mt-0.5">Google Rating</div>
              </div>
              <div className="absolute bottom-8 left-6 bg-white rounded-xl px-4 py-2.5 shadow-lg text-center">
                <div className="text-xl font-bold text-[#00af87]">4.8</div>
                <div className="flex gap-0.5 mt-1">
                  {[1,2,3,4,5].map(i => <i key={i} className="fa-solid fa-star text-amber-400 text-[10px]" />)}
                </div>
                <div className="text-[10px] text-gray-400 mt-0.5">TripAdvisor</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

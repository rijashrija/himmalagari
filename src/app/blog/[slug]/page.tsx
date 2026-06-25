import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog Post – Himmalagari Travels",
  description: "Read our latest travel stories from Nepal, Bhutan, and Tibet.",
};

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  return (
    <div className="overflow-x-hidden">
      {/* Hero */}
      <section className="relative h-[400px] flex items-end bg-cover bg-center" style={{ backgroundImage: "url('/assets/images/everestbasecamp.jpg')" }}>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="relative z-10 text-white p-8 max-w-[900px] mx-auto w-full">
          <span className="text-sm bg-[#94ce94] text-black px-4 py-1 rounded-full mb-3 inline-block">Culture</span>
          <h1 className="text-3xl font-bold mb-3">Worshipping Vehicles</h1>
          <div className="flex gap-6 text-sm opacity-85">
            <span><i className="fa-solid fa-user mr-2"></i>By Admin</span>
            <span><i className="fa-solid fa-calendar mr-2"></i>20th Jan 2023</span>
            <span><i className="fa-solid fa-clock mr-2"></i>5 min read</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-[900px] mx-auto px-6 py-12 grid lg:grid-cols-[1fr_280px] gap-10">
        <article className="prose prose-green max-w-none">
          <p className="text-gray-600 leading-relaxed mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores nesciunt incidunt dicta maxime deserunt
            culpa rerum possimus laborum saepe perspiciatis temporibus, facilis recusandae repudiandae voluptatum.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            Nepal is a country rich in tradition and spirituality. One of the most fascinating customs observed during
            festivals is the practice of blessing vehicles—from motorcycles to trucks—at sacred temples throughout the country.
          </p>
          <Image src="/assets/images/everestbasecamp.jpg" alt="Nepal culture" width={800} height={450} className="w-full rounded-xl mb-6 object-cover" />
          <p className="text-gray-600 leading-relaxed mb-6">
            During Dashain, the biggest festival in Nepal, thousands of people bring their vehicles to Pashupatinath
            Temple and other religious sites to receive blessings. The vehicles are decorated with marigold garlands,
            tika (colored powder), and sacred thread.
          </p>
          <p className="text-gray-600 leading-relaxed">
            This beautiful tradition reflects the deep-rooted belief that divine blessings protect travelers from
            accidents and ensure safe journeys throughout the year.
          </p>

          {/* Author */}
          <div className="mt-10 bg-[#e6f2da] rounded-xl p-6 flex items-center gap-4">
            <div className="w-16 h-16 bg-[#1C6408] rounded-full flex items-center justify-center flex-shrink-0">
              <i className="fa-solid fa-user text-white text-2xl"></i>
            </div>
            <div>
              <h5 className="font-bold text-[#1C6408]">Admin</h5>
              <p className="text-sm text-gray-500">Travel Writer &amp; Nepal Expert at Himmalagari Travels</p>
            </div>
          </div>
        </article>

        {/* Sidebar */}
        <aside className="space-y-8">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h4 className="font-bold text-[#1C6408] mb-4">Recent Posts</h4>
            <ul className="space-y-4">
              {[1, 2, 3].map((i) => (
                <li key={i}>
                  <Link href="/blog/post" className="flex gap-3 group">
                    <Image src="/assets/images/everestbasecamp.jpg" alt="" width={60} height={60} className="rounded-lg object-cover flex-shrink-0 w-[60px] h-[60px]" />
                    <div>
                      <p className="text-sm font-medium group-hover:text-[#1C6408] transition-colors">Worshipping Vehicles</p>
                      <p className="text-xs text-gray-400">20th Jan 2023</p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-[#1C6408] rounded-xl p-6 text-white text-center">
            <h4 className="font-bold mb-2">Plan Your Trip</h4>
            <p className="text-sm opacity-90 mb-4">Let us create a personalized itinerary for you.</p>
            <Link href="/contact" className="bg-[#94ce94] text-black font-semibold px-6 py-2 rounded-full text-sm hover:bg-white transition-colors inline-block">
              Get Started
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
}

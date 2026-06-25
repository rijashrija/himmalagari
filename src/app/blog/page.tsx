import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Travel Blog – Himmalagari Travels",
  description: "Read our latest travel stories, tips, and destination guides for Nepal, Bhutan, and Tibet.",
};

const blogs = Array(9).fill(null).map((_, i) => ({
  title: "Worshipping Vehicles",
  excerpt: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores nesciunt incidunt dicta maxime deserunt.",
  author: "Admin",
  date: "20th Jan 2023",
  image: "/assets/images/everestbasecamp.jpg",
  href: "/blog/worshipping-vehicles",
  category: "Culture",
}));

export default function BlogListPage() {
  return (
    <div className="overflow-x-hidden">
      {/* Page header */}
      <section
        className="relative h-[320px] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/images/everestbasecamp.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl font-bold mb-2">Travel Blog</h1>
          <p className="text-lg">
            <Link href="/" className="hover:underline">Home</Link> / Blog
          </p>
        </div>
      </section>

      {/* Blog grid */}
      <section className="section-gap py-12 px-6 bg-[#f8f8f8]">
        <div className="max-w-[1100px] mx-auto">
          <div
            className="grid gap-8"
            style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 352px))" }}
          >
            {blogs.map((blog, i) => (
              <article key={i} className="package-card text-left">
                <Link href={blog.href} className="block overflow-hidden rounded-t-[22px]">
                  <div className="relative h-[220px] overflow-hidden">
                    <Image src={blog.image} alt={blog.title} fill className="object-cover hover:scale-105 transition-transform duration-500" sizes="360px" />
                  </div>
                </Link>
                <div className="p-6 relative">
                  <span className="text-xs bg-[#e6f2da] text-[#1C6408] px-3 py-1 rounded-full font-medium">{blog.category}</span>
                  <div className="flex justify-between items-start mt-3 mb-3">
                    <p className="text-sm text-gray-500">By {blog.author}</p>
                    <span className="absolute top-0 right-0 bg-[#298e0d] text-white text-xs px-5 py-2 rounded-bl-[14px]">{blog.date}</span>
                  </div>
                  <Link href={blog.href}>
                    <h3 className="font-semibold text-base mb-2 hover:text-[#1C6408] transition-colors">{blog.title}</h3>
                  </Link>
                  <p className="text-xs text-gray-500 mb-4">{blog.excerpt}</p>
                  <hr className="mb-4 border-gray-200" />
                  <Link href={blog.href} className="flex items-center justify-between text-sm font-medium text-[#1C6408]">
                    Continue Reading
                    <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="flex justify-center mt-10">
            <button className="inquiry-btn">Load More</button>
          </div>
        </div>
      </section>
    </div>
  );
}

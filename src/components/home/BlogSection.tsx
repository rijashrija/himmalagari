import Link from "next/link";
import Image from "next/image";

const blogs = [
  { title: "10 Must-See Places in Kathmandu Valley", date: "Jan 12, 2025", cat: "Culture", image: "/assets/images/blog1.jpg", slug: "kathmandu-valley-places", read: "5 min read" },
  { title: "Everest Base Camp: A Complete Trekker's Guide", date: "Feb 3, 2025", cat: "Trekking", image: "/assets/images/blog2.jpg", slug: "ebc-guide", read: "8 min read" },
  { title: "Best Time to Visit Bhutan for Festivals", date: "Mar 18, 2025", cat: "Travel Tips", image: "/assets/images/blog3.jpg", slug: "bhutan-festival-time", read: "4 min read" },
  { title: "Annapurna Circuit vs EBC: Which Trek to Choose?", date: "Apr 5, 2025", cat: "Trekking", image: "/assets/images/blog4.jpg", slug: "annapurna-vs-ebc", read: "6 min read" },
  { title: "Wildlife Safari in Chitwan National Park", date: "Apr 22, 2025", cat: "Wildlife", image: "/assets/images/blog5.jpg", slug: "chitwan-safari", read: "5 min read" },
  { title: "Tibet Overland Tour: What to Expect", date: "May 10, 2025", cat: "Destinations", image: "/assets/images/blog6.jpg", slug: "tibet-overland", read: "7 min read" },
];

const catColors: Record<string, string> = {
  Culture: "bg-purple-100 text-purple-700",
  Trekking: "bg-green-100 text-green-700",
  "Travel Tips": "bg-blue-100 text-blue-700",
  Wildlife: "bg-orange-100 text-orange-700",
  Destinations: "bg-teal-100 text-teal-700",
};

export default function BlogSection() {
  const [featured, ...rest] = blogs;

  return (
    <section className="py-20 px-5 bg-white">
      <div className="max-w-300 mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <span className="section-label">
              <i className="fa-solid fa-newspaper" />
              Travel Blog
            </span>
            <h2 className="section-title mb-0">
              Stories &amp; <span className="highlight">Inspiration</span>
            </h2>
          </div>
          <Link href="/blog" className="btn-outline shrink-0">
            All Articles
            <i className="fa-solid fa-arrow-right text-xs" />
          </Link>
        </div>

        {/* Featured + grid layout */}
        <div className="grid lg:grid-cols-5 gap-6">
          {/* Featured post */}
          <Link href={`/blog/${featured.slug}`} className="lg:col-span-3 group relative rounded-3xl overflow-hidden h-72 lg:h-auto min-h-80 block">
            <Image src={featured.image} alt={featured.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 1024px) 100vw, 60vw" />
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent" />
            <div className="absolute inset-0 p-7 flex flex-col justify-end text-white">
              <span className={`self-start text-xs font-semibold px-3 py-1 rounded-full mb-3 ${catColors[featured.cat] ?? "bg-white/20 text-white"}`}>
                {featured.cat}
              </span>
              <h3 className="text-xl font-bold leading-snug mb-2 group-hover:text-accent transition-colors">{featured.title}</h3>
              <div className="flex items-center gap-3 text-white/60 text-xs">
                <span><i className="fa-regular fa-calendar mr-1" />{featured.date}</span>
                <span><i className="fa-regular fa-clock mr-1" />{featured.read}</span>
              </div>
            </div>
          </Link>

          {/* Side posts */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {rest.slice(0, 4).map((b) => (
              <Link
                key={b.slug}
                href={`/blog/${b.slug}`}
                className="group flex gap-4 bg-background rounded-2xl p-3 hover:bg-light-green transition-colors duration-200"
              >
                <div className="relative w-20 h-20 rounded-xl overflow-hidden shrink-0">
                  <Image src={b.image} alt={b.title} fill className="object-cover transition-transform duration-500 group-hover:scale-110" sizes="80px" />
                </div>
                <div className="flex flex-col justify-between py-0.5 min-w-0">
                  <span className={`self-start text-[10px] font-semibold px-2.5 py-0.5 rounded-full ${catColors[b.cat] ?? "bg-gray-100 text-gray-500"}`}>{b.cat}</span>
                  <h4 className="text-[13px] font-semibold text-gray-800 leading-snug group-hover:text-primary transition-colors line-clamp-2">{b.title}</h4>
                  <span className="text-gray-400 text-[11px]"><i className="fa-regular fa-calendar mr-1" />{b.date}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

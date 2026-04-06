import { MessageSquare } from "lucide-react";
import Link from "next/link";

const cases = [
  {
    img: "https://images.unsplash.com/photo-1589994965851-a8f479c573a9?w=600&q=80",
    date: "Sep. 20, 2018",
    author: "Admin",
    comments: 3,
    title: "Even the all-powerful Pointing has no control about the blind texts",
  },
  {
    img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80",
    date: "Sep. 20, 2018",
    author: "Admin",
    comments: 3,
    title: "Even the all-powerful Pointing has no control about the blind texts",
  },
  {
    img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&q=80",
    date: "Sep. 20, 2018",
    author: "Admin",
    comments: 3,
    title: "Even the all-powerful Pointing has no control about the blind texts",
  },
];

export default function CaseStudiesSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-14">
          <span className="block text-xs font-bold uppercase tracking-[3px] text-[#b99566] mb-3">
            Our latest update
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a2e] mb-4">Case Study</h2>
          <p className="text-gray-600 max-w-xl">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cases.map((c, i) => (
            <div key={i} className="bg-white group hover:shadow-lg transition-shadow duration-300">
              {/* Image */}
              <Link href="/case-studies" className="block overflow-hidden h-56 relative">
                <div
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                  style={{ backgroundImage: `url(${c.img})` }}
                />
              </Link>

              {/* Meta + Title */}
              <div className="flex gap-4 p-6">
                {/* Meta sidebar */}
                <div className="text-xs text-gray-400 space-y-2 shrink-0 border-r border-gray-100 pr-4">
                  <div><Link href="#" className="hover:text-[#b99566] transition-colors">{c.date}</Link></div>
                  <div><Link href="#" className="hover:text-[#b99566] transition-colors">{c.author}</Link></div>
                  <div className="flex items-center gap-1">
                    <MessageSquare className="w-3 h-3" />
                    <Link href="#" className="hover:text-[#b99566] transition-colors">{c.comments}</Link>
                  </div>
                </div>

                {/* Title */}
                <div>
                  <h3 className="text-[#1a1a2e] font-semibold text-sm leading-relaxed hover:text-[#b99566] transition-colors">
                    <Link href="/case-studies">{c.title}</Link>
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

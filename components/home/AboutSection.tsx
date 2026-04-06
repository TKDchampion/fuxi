import { Play, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="py-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row">
          {/* Image / Video */}
          <div className="md:w-5/12 relative min-h-[400px] md:min-h-[500px] overflow-hidden rounded-sm">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=800&q=80)",
              }}
            />
            <div className="absolute inset-0 bg-black/30" />
            <a
              href="https://vimeo.com/45830194"
              target="_blank"
              rel="noreferrer"
              className="absolute inset-0 flex items-center justify-center group"
            >
              <div className="w-16 h-16 rounded-full bg-[#b99566] flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Play className="w-6 h-6 text-white fill-white ml-1" />
              </div>
            </a>
          </div>

          {/* Text */}
          <div className="md:w-7/12 py-16 md:py-20 px-4 sm:px-8 md:pl-16 lg:pl-24">
            <span className="block text-xs font-bold uppercase tracking-[3px] text-[#b99566] mb-3">
              Company Overview
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a2e] mb-6">
              Learned about the Law
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word &ldquo;and&rdquo; and the Little Blind Text should turn around and return to its own, safe country.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-[#1a1a2e] font-semibold border-b-2 border-[#b99566] pb-1 hover:text-[#b99566] transition-colors"
            >
              Learn More <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

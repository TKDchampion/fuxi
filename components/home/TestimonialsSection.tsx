"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80",
    text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    name: "Garreth Smith",
    position: "Marketing Manager",
  },
  {
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
    text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    name: "Sarah Johnson",
    position: "Interface Designer",
  },
  {
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
    text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    name: "Michael Chen",
    position: "UI Designer",
  },
  {
    img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=200&q=80",
    text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    name: "Emma Davis",
    position: "Web Developer",
  },
  {
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&q=80",
    text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    name: "Robert Wilson",
    position: "System Analyst",
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const perPage = 3;
  const maxIndex = testimonials.length - perPage;

  const prev = () => setCurrent((c) => Math.max(0, c - 1));
  const next = () => setCurrent((c) => Math.min(maxIndex, c + 1));

  const visible = testimonials.slice(current, current + perPage);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-14">
          <span className="block text-xs font-bold uppercase tracking-[3px] text-[#b99566] mb-3">
            Testimony
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a2e] mb-4">
            Our satisfied customer says
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {visible.map((t, i) => (
            <div key={i} className="bg-white p-8 pb-10 shadow-sm relative">
              {/* Avatar */}
              <div className="relative w-16 h-16 mb-6">
                <div
                  className="w-16 h-16 rounded-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${t.img})` }}
                />
                <span className="absolute -bottom-2 -right-2 w-8 h-8 bg-[#b99566] rounded-full flex items-center justify-center">
                  <Quote className="w-4 h-4 text-white fill-white" />
                </span>
              </div>

              {/* Quote */}
              <div className="relative">
                <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#b99566]" />
                <p className="pl-4 text-gray-600 text-sm leading-relaxed mb-6">{t.text}</p>
              </div>
              <p className="font-bold text-[#1a1a2e]">{t.name}</p>
              <span className="text-sm text-gray-400">{t.position}</span>
            </div>
          ))}
        </div>

        {/* Controls */}
        <div className="flex justify-center gap-3">
          <button
            onClick={prev}
            disabled={current === 0}
            className="w-10 h-10 border-2 border-gray-300 hover:border-[#b99566] hover:bg-[#b99566] flex items-center justify-center text-gray-500 hover:text-white transition-all disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Previous"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            disabled={current >= maxIndex}
            className="w-10 h-10 border-2 border-gray-300 hover:border-[#b99566] hover:bg-[#b99566] flex items-center justify-center text-gray-500 hover:text-white transition-all disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Next"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}

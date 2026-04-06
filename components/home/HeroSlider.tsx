"use client";

const slides = [
  {
    bg: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1600&q=80",
    title: "伏曦法律事務所",
    desc: "伏於法理之深處，曦於正義之將明；願以法律為器，以理性為衡，以光明為向。",
  },
];

interface HeroSliderProps {
  onAppointmentClick: () => void;
}

export default function HeroSlider({ onAppointmentClick }: HeroSliderProps) {
  return (
    <div className="relative h-screen min-h-[600px] overflow-hidden">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 opacity-100`}>
          {/* Background */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.bg})` }}
          />
          <div className="absolute inset-0 bg-black/60" />

          {/* Content */}
          <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center">
            <div className="w-full md:w-7/12 text-white">
              <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
                {slide.title}
              </h1>
              <p className="text-gray-200 text-base md:text-lg mb-8 leading-relaxed">
                {slide.desc}
              </p>
              <a
                href="https://line.me/ti/p/q7uKgBddsr"
                target="_blank"
                className="border-2 border-white text-white px-8 py-3 font-semibold hover:bg-white hover:text-[#1a1a2e] transition-all duration-300">
                立即諮詢
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

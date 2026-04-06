"use client";

const slides = [
  {
    bg: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1600&q=80",
    title: "Attorneys Fighting For Your Freedom",
    desc: "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
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
              <button
                onClick={onAppointmentClick}
                className="border-2 border-white text-white px-8 py-3 font-semibold hover:bg-white hover:text-[#1a1a2e] transition-all duration-300">
                Make an Appointment
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

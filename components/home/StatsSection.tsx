"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { number: 100, suffix: "", label: "服務客戶" },
  { number: 100, suffix: "", label: "經手案件" },
  { number: 7500, suffix: "萬", label: "累計爭取利益" },
];

function useCountUp(target: number, isVisible: boolean, duration = 2000) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isVisible, target, duration]);
  return count;
}

function StatItem({
  number,
  suffix,
  label,
  isVisible,
}: {
  number: number;
  suffix: string;
  label: string;
  isVisible: boolean;
}) {
  const count = useCountUp(number, isVisible);
  return (
    <div className="text-center px-6">
      <strong className="block text-4xl md:text-5xl font-bold text-white mb-2">
        {count.toLocaleString()}
        {suffix}+
      </strong>
      <span className="text-gray-300 text-sm uppercase tracking-wider">
        {label}
      </span>
    </div>
  );
}

export default function StatsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.3 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="py-24 bg-cover bg-center bg-fixed relative"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1436450412740-6b988f486c6b?w=1600&q=80)",
      }}>
      <div className="absolute inset-0 bg-[#1a1a2e]/80" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* Heading */}
          <div className="lg:w-2/12">
            <span className="block text-xs font-bold uppercase tracking-[3px] text-[#b99566] mb-3">
              Some
            </span>
            <h2 className="text-3xl md:text-2xl font-bold text-white">
              實際數據
            </h2>
          </div>

          {/* Counters */}
          <div className="lg:w-10/12 grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
            {stats.map((s) => (
              <StatItem
                key={s.label}
                number={s.number}
                suffix={s.suffix}
                label={s.label}
                isVisible={isVisible}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

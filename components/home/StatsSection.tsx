"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { number: 60, label: "服務客戶" },
  { number: 60, label: "刑事案件處理" },
  { number: 60, label: "民事案件處理" },
  { number: 60, label: "勝訴案件" },
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
  label,
  isVisible,
}: {
  number: number;
  label: string;
  isVisible: boolean;
}) {
  const count = useCountUp(number, isVisible);
  return (
    <div className="text-center px-6">
      <strong className="block text-4xl md:text-5xl font-bold text-white mb-2">
        {count.toLocaleString()}+
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
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Heading */}
          <div className="lg:w-4/12">
            <span className="block text-xs font-bold uppercase tracking-[3px] text-[#b99566] mb-3">
              Some
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              實際數據
            </h2>
          </div>

          {/* Counters */}
          <div className="lg:w-8/12 grid grid-cols-2 lg:grid-cols-4 gap-8 w-full">
            {stats.map((s) => (
              <StatItem
                key={s.label}
                number={s.number}
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

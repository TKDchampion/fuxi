"use client";

import { X } from "lucide-react";
import Image from "next/image";
import { useEffect } from "react";

export interface PersonDetail {
  type: "person";
  img?: string;
  name: string;
  role: string;
  intro: string;
  background: string;
  expertise: string[];
}

export interface AboutDetail {
  type: "about";
  title: string;
  paragraphs: string[];
}

type DetailData = PersonDetail | AboutDetail;

interface Props {
  data: DetailData | null;
  onClose: () => void;
}

export default function DetailModal({ data, onClose }: Props) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (data) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [data, onClose]);

  if (!data) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/60" />

      <div
        className="relative bg-white w-full max-w-2xl max-h-[90vh] rounded shadow-2xl z-10 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b shrink-0">
          <h5 className="text-lg font-bold text-[#1a1a2e]">
            {data.type === "person" ? data.name : data.title}
          </h5>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="overflow-y-auto px-6 py-6">
          {data.type === "person" ? (
            <div className="flex flex-col sm:flex-row gap-6">
              {/* Photo */}
              <div className="shrink-0 mx-auto sm:mx-0">
                {data.img ? (
                  <div className="relative w-36 h-44 overflow-hidden rounded">
                    <Image
                      src={data.img}
                      alt={data.name}
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                ) : (
                  <div className="w-36 h-44 bg-[#d6cfc6] rounded flex items-end justify-center overflow-hidden">
                    <svg
                      viewBox="0 0 100 100"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4/5"
                    >
                      <circle cx="50" cy="28" r="18" fill="#b99566" />
                      <path
                        d="M10 100 C10 68 30 56 50 56 C70 56 90 68 90 100Z"
                        fill="#b99566"
                      />
                    </svg>
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="flex-1 space-y-5">
                <div>
                  <span className="text-sm font-semibold text-[#b99566] uppercase tracking-wider">
                    {data.role}
                  </span>
                </div>

                <div>
                  <h6 className="text-xs font-bold uppercase tracking-[2px] text-[#1a1a2e] mb-2">
                    自我介紹
                  </h6>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {data.intro}
                  </p>
                </div>

                <div>
                  <h6 className="text-xs font-bold uppercase tracking-[2px] text-[#1a1a2e] mb-2">
                    學經歷背景
                  </h6>
                  <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-line">
                    {data.background}
                  </p>
                </div>

                <div>
                  <h6 className="text-xs font-bold uppercase tracking-[2px] text-[#1a1a2e] mb-2">
                    擅長領域
                  </h6>
                  <div className="flex flex-wrap gap-2">
                    {data.expertise.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1 text-xs bg-[#f5f0ea] text-[#b99566] font-medium rounded-sm"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              {data.paragraphs.map((p, i) => (
                <p key={i} className="text-gray-600 leading-relaxed text-sm">
                  {p}
                </p>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

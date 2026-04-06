"use client";

import { X } from "lucide-react";
import { useEffect } from "react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function AppointmentModal({ isOpen, onClose }: Props) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    if (isOpen) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Modal */}
      <div
        className="relative bg-white w-full max-w-lg rounded shadow-2xl z-10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b">
          <h5 className="text-lg font-bold text-[#1a1a2e]">Request a Quote</h5>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors" aria-label="Close">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="px-6 py-6 space-y-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Full Name</label>
            <input type="text" className="w-full border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:border-[#b99566] transition-colors" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Email</label>
            <input type="email" className="w-full border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:border-[#b99566] transition-colors" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Date</label>
              <input type="date" className="w-full border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:border-[#b99566] transition-colors" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Time</label>
              <input type="time" className="w-full border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:border-[#b99566] transition-colors" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Message</label>
            <textarea rows={5} className="w-full border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:border-[#b99566] transition-colors resize-none" />
          </div>
          <button
            type="button"
            className="bg-[#b99566] text-white px-6 py-2.5 text-sm font-semibold hover:bg-[#9e7d4f] transition-colors"
          >
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
}

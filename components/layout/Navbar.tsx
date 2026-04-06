"use client";

import { useState } from "react";
import { Scale, Menu, X } from "lucide-react";
import { useSectionRefs, SectionKey } from "@/context/SectionRefsContext";

const navLinks: { label: string; section: SectionKey }[] = [
  { label: "Home", section: "home" },
  { label: "About", section: "about" },
  { label: "Practice Areas", section: "practice" },
  { label: "Attorneys", section: "attorneys" },
  { label: "Contact", section: "contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<SectionKey>("home");
  const sectionMapRef = useSectionRefs();

  function scrollToSection(section: SectionKey) {
    sectionMapRef?.current[section]?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    setActiveSection(section);
    setIsOpen(false);
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md overflow-visible h-[74px]">
      <div className="max-w-[960px] mx-auto px-4 h-full flex items-center justify-between">
        {/* Logo badge */}
        <button
          onClick={() => scrollToSection("home")}
          className="logo-badge relative flex-shrink-0 bg-[#b99566] w-[132px] h-[74px] flex flex-col items-center justify-center p-4 text-white z-10 mr-8">
          <span className="font-bold text-base tracking-[3px] uppercase leading-tight">
            PRIMELAW
          </span>
          <Scale className="w-7 h-7 opacity-90 z-10 absolute bottom-[-7px]" />
        </button>

        {/* Desktop nav links */}
        <ul className="hidden lg:flex items-center flex-1">
          {navLinks.map((link) => {
            const active = activeSection === link.section;
            return (
              <li key={link.section}>
                <button
                  onClick={() => scrollToSection(link.section)}
                  className={`px-4 py-2 text-xs font-bold uppercase tracking-[1.5px] transition-colors duration-200 ${
                    active
                      ? "text-[#b99566]"
                      : "text-gray-700 hover:text-[#b99566]"
                  }`}>
                  {link.label}
                </button>
              </li>
            );
          })}
        </ul>

        {/* Mobile toggle */}
        <button
          className="lg:hidden ml-auto text-gray-700 p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation">
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <ul className="flex flex-col py-2">
            {navLinks.map((link) => {
              const active = activeSection === link.section;
              return (
                <li key={link.section}>
                  <button
                    onClick={() => scrollToSection(link.section)}
                    className={`block w-full text-left px-6 py-3 text-sm font-bold uppercase tracking-wider transition-colors ${
                      active
                        ? "text-[#b99566]"
                        : "text-gray-700 hover:text-[#b99566] hover:bg-gray-50"
                    }`}>
                    {link.label}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </header>
  );
}

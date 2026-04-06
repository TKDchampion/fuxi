"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Scale, Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/practice", label: "Practice Areas" },
  { href: "/attorneys", label: "Attorneys" },
  { href: "/pricing", label: "Pricing" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md overflow-visible h-[74px]">
      <div className="max-w-[960px] mx-auto px-4 h-full flex items-center justify-between">

        {/* Logo badge — in flex flow, relative so ::after is anchored to it */}
        <Link
          href="/"
          className="logo-badge relative flex-shrink-0 bg-[#b99566] w-[132px] h-[74px] flex flex-col items-center justify-end pb-2 text-white z-10 mr-8"
        >
          <span className="font-bold text-base tracking-[3px] uppercase leading-tight">
            PRIMELAW
          </span>
          <Scale className="w-7 h-7 mt-1 opacity-90" />
        </Link>

        {/* Desktop nav links — all inline inside the header */}
        <ul className="hidden lg:flex items-center flex-1">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`px-4 py-2 text-xs font-bold uppercase tracking-[1.5px] transition-colors duration-200 ${
                    active ? "text-[#b99566]" : "text-gray-700 hover:text-[#b99566]"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Mobile toggle */}
        <button
          className="lg:hidden ml-auto text-gray-700 p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <ul className="flex flex-col py-2">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`block px-6 py-3 text-sm font-bold uppercase tracking-wider transition-colors ${
                      active
                        ? "text-[#b99566]"
                        : "text-gray-700 hover:text-[#b99566] hover:bg-gray-50"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </header>
  );
}

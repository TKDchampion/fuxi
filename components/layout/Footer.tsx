import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

const usefulLinks = ["Family Law", "Drug Law", "Insurance Law", "Criminal Law", "Business Law"];
const quickLinks = ["About Us", "Practice Areas", "Appointment", "Terms & Conditions", "FAQ"];

export default function Footer() {
  return (
    <footer className="bg-[#1a1a2e] text-gray-300 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <h2 className="text-white text-xl font-bold mb-4">PrimeLaw</h2>
            <p className="text-sm leading-relaxed mb-5">
              Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
            </p>
            <div className="flex gap-3">
              {["𝕏", "f", "in"].map((icon) => (
                <a key={icon} href="#" className="w-9 h-9 rounded-full bg-gray-700 hover:bg-[#b99566] flex items-center justify-center transition-colors text-white text-sm font-bold">
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h2 className="text-white text-lg font-bold mb-5">Useful Links</h2>
            <ul className="space-y-2">
              {usefulLinks.map((item) => (
                <li key={item}>
                  <Link href="#" className="text-sm hover:text-[#b99566] transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#b99566] rounded-full" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-white text-lg font-bold mb-5">Quick Links</h2>
            <ul className="space-y-2">
              {quickLinks.map((item) => (
                <li key={item}>
                  <Link href="#" className="text-sm hover:text-[#b99566] transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#b99566] rounded-full" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-white text-lg font-bold mb-5">Have a Question?</h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#b99566] shrink-0 mt-0.5" />
                <span className="text-sm">203 Fake St. Mountain View, San Francisco, California, USA</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#b99566] shrink-0" />
                <a href="tel:+23923929210" className="text-sm hover:text-[#b99566] transition-colors">+2 392 3929 210</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#b99566] shrink-0" />
                <a href="mailto:info@yourdomain.com" className="text-sm hover:text-[#b99566] transition-colors">info@yourdomain.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-sm text-gray-500">
            Copyright &copy; {new Date().getFullYear()} All rights reserved | This template is made with{" "}
            <span className="text-[#b99566]">♥</span> by{" "}
            <a href="https://colorlib.com" target="_blank" rel="noreferrer" className="hover:text-[#b99566] transition-colors">
              Colorlib
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

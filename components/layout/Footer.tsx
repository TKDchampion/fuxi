import Link from "next/link";
import { MapPin, Phone, Printer, Smartphone } from "lucide-react";

const usefulLinks = [
  "Family Law",
  "Drug Law",
  "Insurance Law",
  "Criminal Law",
  "Business Law",
];
const quickLinks = [
  "About Us",
  "Practice Areas",
  "Appointment",
  "Terms & Conditions",
  "FAQ",
];

export default function Footer() {
  return (
    <footer className="bg-[#1a1a2e] text-gray-300 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
          {/* Brand */}
          <div className="max-w-[390px]">
            <h2 className="text-white text-xl font-bold mb-4">
              伏曦法律事務所
            </h2>
            <p className="text-sm leading-relaxed mb-5">
              伏曦法律事務所致力以清晰溝通與穩健專業陪伴您面對每一次法律抉擇，成為值得長期信賴的法律顧問夥伴
            </p>
            <div className="mt-4">
              <a
                href="https://line.me/ti/p/q7uKgBddsr"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 border border-[#b99566] text-[#b99566] hover:bg-[#b99566] hover:text-white text-xs font-semibold px-4 py-2 rounded-full transition-colors">
                <svg
                  viewBox="0 0 24 24"
                  className="w-4 h-4 fill-current"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
                </svg>
                立即諮詢
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-white text-lg font-bold mb-5">事務所資訊</h2>
            <div className="grid grid-cols-2 gap-x-8 gap-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#b99566] shrink-0 mt-0.5" />
                <span className="text-sm">
                  108009台北市萬華區長沙街二段51號2樓
                </span>
              </div>
              <div className="flex items-start gap-3">
                <Printer className="w-5 h-5 text-[#b99566] shrink-0 mt-0.5" />
                <span className="text-sm">傳真：(02)2389-1537</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#b99566] shrink-0" />
                <a
                  href="tel:+886223883605"
                  className="text-sm hover:text-[#b99566] transition-colors">
                  (02)2388-3605
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Smartphone className="w-5 h-5 text-[#b99566] shrink-0" />
                <a
                  href="tel:+886966913152"
                  className="text-sm hover:text-[#b99566] transition-colors">
                  0966-913-52
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-sm text-gray-500">
            Copyright &copy; {new Date().getFullYear()} All rights reserved |
            This web is made by{" "}
            <a
              href="https://www.linkedin.com/in/giant-wang-3526ba13a/"
              target="_blank"
              rel="giant"
              className="hover:text-[#b99566] transition-colors">
              Giant
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row">
          {/* Map placeholder */}
          <div className="md:w-5/12 min-h-[400px] bg-gray-200 relative overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.8038498631518!2d121.505714!3d25.040729900000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a9b2b2c6965f%3A0xfac3576bdfb7a697!2z5LyP5pum5rOV5b6L5LqL5YuZ5omAKOeOi-aYsee_lOW-i-W4qyk!5e0!3m2!1szh-TW!2stw!4v1775492601552!5m2!1szh-TW!2stw"
              className="relative inset-0 w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Office location map"
            />
          </div>

          {/* Contact Info */}
          <div className="md:w-7/12 py-16 md:py-20 px-4 sm:px-8 md:pl-16 lg:pl-24">
            <div className="mb-10">
              <span className="block text-xs font-bold uppercase tracking-[3px] text-[#b99566] mb-3">
                Contact Information
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a2e]">
                聯絡我們
              </h2>
            </div>

            {/* Phone / Fax / Email */}
            <div className="mb-10 space-y-3">
              <p className="flex gap-3 text-sm">
                <span className="font-semibold text-[#1a1a2e] w-12">手機:</span>
                <span className="text-gray-600">0966-913-526 </span>
              </p>
              <p className="flex gap-3 text-sm">
                <span className="font-semibold text-[#1a1a2e] w-12">Fax:</span>
                <span className="text-gray-600">(02)2389-1537</span>
              </p>
              <p className="flex gap-3 text-sm">
                <span className="font-semibold text-[#1a1a2e] w-12">
                  E-Mail:
                </span>
                <a
                  href="mailto:aronlawyer918@gmail.com"
                  className="text-sm text-[#b99566] hover:underline">
                  aronlawyer918@gmail.com
                </a>
              </p>
            </div>

            {/* Address Info */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-[#1a1a2e]">
                Address Information
              </h3>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#b99566] shrink-0 mt-0.5" />
                <span className="text-sm text-gray-600">
                  108009台北市萬華區長沙街二段51號2樓
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#b99566] shrink-0" />
                <span className="text-sm text-gray-600">(02)2388-3605</span>
              </div>
            </div>

            {/* LINE Add Friend */}
            <div className="mt-8">
              <a
                href="https://line.me/ti/p/q7uKgBddsr"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#06C755] hover:bg-[#05a847] text-white text-sm font-semibold px-5 py-3 rounded-full transition-colors">
                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5 fill-white"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
                </svg>
                立即諮詢
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row">
          {/* Map placeholder */}
          <div className="md:w-5/12 min-h-[400px] bg-gray-200 relative overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.1!2d-122.4194!3d37.7749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQ2JzI5LjYiTiAxMjLCsDI1JzA5LjkiVw!5e0!3m2!1sen!2sus!4v1234567890"
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
                You may Contact Us here
              </h2>
            </div>

            {/* Phone / Fax / Email */}
            <div className="mb-10 space-y-3">
              <p className="flex gap-3 text-sm">
                <span className="font-semibold text-[#1a1a2e] w-12">
                  Phone:
                </span>
                <span className="text-gray-600">(00) 123 - 456 - 789</span>
              </p>
              <p className="flex gap-3 text-sm">
                <span className="font-semibold text-[#1a1a2e] w-12">Fax:</span>
                <span className="text-gray-600">(00) 123 - 456 - 789</span>
              </p>
              <p className="flex gap-3 text-sm">
                <span className="font-semibold text-[#1a1a2e] w-12">
                  E-Mail:
                </span>
                <a
                  href="mailto:info@email.com"
                  className="text-[#b99566] hover:underline">
                  info@email.com
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
                  203 Fake St. Mountain View, San Francisco, California, USA
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#b99566] shrink-0" />
                <span className="text-sm text-gray-600">
                  (00) 123 - 456 - 789
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#b99566] shrink-0" />
                <a
                  href="mailto:info@email.com"
                  className="text-sm text-[#b99566] hover:underline">
                  info@email.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

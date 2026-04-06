import { Users, TrendingUp, Pill, Shield } from "lucide-react";

const services = [
  {
    icon: <Users className="w-8 h-8 text-[#b99566]" />,
    title: "Family Law",
    desc: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.",
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-[#b99566]" />,
    title: "Business Law",
    desc: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.",
  },
  {
    icon: <Pill className="w-8 h-8 text-[#b99566]" />,
    title: "Drug Control Law",
    desc: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.",
  },
  {
    icon: <Shield className="w-8 h-8 text-[#b99566]" />,
    title: "Criminal Law",
    desc: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Quote Form */}
          <div className="lg:w-5/12 xl:w-4/12">
            <div className="bg-[#1a1a2e] p-8 text-white">
              <h3 className="text-xl font-bold mb-6">Request A Quote</h3>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-[#b99566] transition-colors"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-[#b99566] transition-colors"
                />
                <textarea
                  rows={7}
                  placeholder="Message"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-[#b99566] transition-colors resize-none"
                />
                <button
                  type="button"
                  className="bg-[#b99566] text-white px-8 py-3 font-semibold hover:bg-[#9e7d4f] transition-colors duration-300"
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>

          {/* Services Grid */}
          <div className="lg:w-7/12 xl:w-8/12">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {services.map((svc) => (
                <div key={svc.title} className="flex gap-5 p-6 hover:shadow-lg transition-shadow duration-300 border border-gray-100">
                  <div className="flex items-start justify-center shrink-0 w-16 h-16 bg-[#f5ede0] rounded-full">
                    <div className="mt-4">{svc.icon}</div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#1a1a2e] mb-2">{svc.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{svc.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

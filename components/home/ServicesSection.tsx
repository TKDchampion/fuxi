import { Users, TrendingUp, Pill, Shield } from "lucide-react";

const services = [
  {
    icon: <Users className="w-[55px] h-[55px] text-[#b99566]" />,
    title: "Family Law",
    desc: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.",
  },
  {
    icon: <TrendingUp className="w-[55px] h-[55px] text-[#b99566]" />,
    title: "Business Law",
    desc: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.",
  },
  {
    icon: <Pill className="w-[55px] h-[55px] text-[#b99566]" />,
    title: "Drug Control Law",
    desc: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.",
  },
  {
    icon: <Shield className="w-[55px] h-[55px] text-[#b99566]" />,
    title: "Criminal Law",
    desc: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.",
  },
  {
    icon: <Shield className="w-[55px] h-[55px] text-[#b99566]" />,
    title: "Criminal Law1",
    desc: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.",
  },
  {
    icon: <Shield className="w-[55px] h-[55px] text-[#b99566]" />,
    title: "Criminal Law2",
    desc: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Services Grid */}
        <div className="w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {services.map((svc) => (
              <div
                key={svc.title}
                className="flex gap-5 p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start justify-center shrink-0 w-[100px] h-[100px] bg-[#f5ede0] rounded-full">
                  <div className="mt-5">{svc.icon}</div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#1a1a2e] mb-2">
                    {svc.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {svc.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

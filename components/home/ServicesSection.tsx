import { Scale } from "lucide-react";

const services = [
  {
    icon: <Scale className="w-[55px] h-[55px] text-[#b99566]" />,
    title: "民事訴訟代理",
    desc: "處理各類民事訴訟爭議，包含買賣、借貸、侵權、損害賠償、商業糾紛等，提供風險評估與策略規劃，保障您與企業的權益",
  },
  {
    icon: <Scale className="w-[55px] h-[55px] text-[#b99566]" />,
    title: "家事訴訟代理",
    desc: "協助離婚、監護權、扶養費、遺產分割與繼承規劃，兼顧法律權益與家庭關係，以細膩溝通陪伴您度過關鍵時刻",
  },
  {
    icon: <Scale className="w-[55px] h-[55px] text-[#b99566]" />,
    title: "刑事告訴代理與辯護",
    desc: "本所提供偵查程序及審判程序之告訴代理與辯護，確保程序正義與當事人防禦權、利益之維護",
  },
  {
    icon: <Scale className="w-[55px] h-[55px] text-[#b99566]" />,
    title: "刑事陪同偵查",
    desc: "如有遭警方拘提逮補者，本所提供陪同製作警詢筆錄、偵訊陪同之服務，讓您在第一時間有專業人士陪同，並能透過專業律師的協助掌握案情",
  },
  {
    icon: <Scale className="w-[55px] h-[55px] text-[#b99566]" />,
    title: "非訟事件處理",
    desc: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.",
  },
  {
    icon: <Scale className="w-[55px] h-[55px] text-[#b99566]" />,
    title: "企業常年法律顧問",
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

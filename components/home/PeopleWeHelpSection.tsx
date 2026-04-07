import { Scale } from "lucide-react";
import Image from "next/image";

const items = [
  {
    title: "刑事陪同偵訊",
    desc: "在第一時間為您提供有效的辯護策略與建議，並陪同每一位當事人一起經歷所有流程與面對困境。",
  },
  {
    title: "訴訟與非訟案件委托",
    desc: "本所專業團隊在不同領域均有相當之實務經驗，各類型訴訟與非訟業務均由本所專業團隊為您協助。",
  },
  {
    title: "企業法律顧問",
    desc: "協助各大企業建立內部制度，並在遇有法律問題時立即提供協助，本所將全力維護您的商譽！",
  },
];

export default function PeopleWeHelpSection() {
  return (
    <section className="py-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row-reverse -mx-4 sm:-mx-6 lg:-mx-8">
          {/* Image */}
          <div className="md:w-5/12 relative min-h-[400px] md:min-h-[500px]">
            <div className="absolute inset-0">
              <Image
                src="/sheng.jpg"
                alt="sheng"
                fill
                className="object-cover object-center"
              />
            </div>
          </div>

          {/* Text */}
          <div className="md:w-7/12 py-16 md:py-20 px-4 sm:px-8 md:pr-16 lg:pr-24">
            <div className="text-right mb-10">
              <span className="block text-xs font-bold uppercase tracking-[3px] text-[#b99566] mb-3">
                Company Help Intro
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a2e]">
                提供的協助
              </h2>
            </div>

            <div className="space-y-8">
              {items.map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-5 flex-row-reverse">
                  <div className="flex items-center justify-center w-[80px] h-[80px] bg-[#f5ede0] rounded-full shrink-0">
                    <Scale className="w-[40px] h-[40px] text-[#b99566]" />
                  </div>
                  <div className="text-right">
                    <h3 className="text-lg font-bold text-[#1a1a2e] mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.desc}
                    </p>
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

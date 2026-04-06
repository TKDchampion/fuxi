"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import DetailModal, { AboutDetail } from "./DetailModal";

const aboutDetail: AboutDetail = {
  type: "about",
  title: "關於伏曦法律事務所",
  paragraphs: [
    "「伏曦」之名，取自神話傳說中之伏羲氏。相傳伏羲氏教民結網捕魚、狩獵製衣，始造書契，開文明之先，為人類生活與制度之建立奠定重要基礎。伏羲之於人類，不僅在於技術之創，更在於秩序之立與文明之啟。伏曦法律事務所取其名，正寓有於紛亂之中建立秩序、於困境之中指引方向之意義。本所秉持此一信念，致力於以法律專業為基礎，為委託人爭取最佳利益，守護法律所賦予之尊嚴與權利，並期許本所不僅服務特定之人，而能如伏羲氏之引領文明般，陪伴每一位委託人走過艱難之法律道路，在混亂與不安之中，重新找到秩序與方向。",
    "又「曦」字有晨光、曙光之意。多數人踏入法律途徑之時，往往正處於人生之衝突、壓力與不安之中，法律程序漫長而艱辛，常令人身心俱疲。本所之存在，並非僅為處理案件之機構，更希望在委託人面對最困難與黑暗之時，成為一道可以依靠之光。法律或許始於紛爭，但不應終於對立，而應終於秩序、理解與新的開始。本所期許以專業、理性與溫度，陪伴委託人走過最艱困之時刻，使案件不僅獲得解決，更使人得以重新向前。",
    "伏於法理之中，見曦於正義將明之時。",
    "此為「伏曦法律事務所」之名，亦為本所之理念與初衷。",
  ],
};

export default function AboutSection() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section className="py-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row">
            {/* Image */}
            <div className="md:w-5/12 relative min-h-[400px] md:min-h-[500px] overflow-hidden rounded-sm">
              <div className="absolute inset-0">
                <Image
                  src="/fuxi-photo.jpg"
                  alt="fuxi"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </div>

            {/* Text */}
            <div className="md:w-7/12 py-16 md:py-20 px-4 sm:px-8 md:pl-16 lg:pl-24">
              <span className="block text-xs font-bold uppercase tracking-[3px] text-[#b99566] mb-3">
                Company Overview
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a2e] mb-6">
                關於伏曦法律事務所
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                「伏曦」之名，取自神話傳說中之伏羲氏。相傳伏羲氏教民結網捕魚、狩獵製衣，始造書契，開文明之先，為人類生活與制度之建立奠定重要基礎。伏羲之於人類，不僅在於技術之創，更在於秩序之立與文明之啟。伏曦法律事務所取其名，正寓有於紛亂之中建立秩序、於困境之中指引方向之意義。本所秉持此一信念，致力於以法律專業為基礎，為委託人爭取最佳利益，守護法律所賦予之尊嚴與權利，並期許本所不僅服務特定之人，而能如伏羲氏之引領文明般，陪伴每一位委託人走過艱難之法律道路，在混亂與不安之中，重新找到秩序與方向。
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                伏於法理之中，見曦於正義將明之時。
                <span className="font-bold">
                  此為「伏曦法律事務所」之名，亦為本所之理念與初衷。
                </span>
              </p>
              <button
                onClick={() => setOpen(true)}
                className="inline-flex items-center gap-2 text-[#1a1a2e] font-semibold border-b-2 border-[#b99566] pb-1 hover:text-[#b99566] transition-colors">
                完整解說 <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <DetailModal
        data={open ? aboutDetail : null}
        onClose={() => setOpen(false)}
      />
    </>
  );
}

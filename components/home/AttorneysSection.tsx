"use client";

import { useState } from "react";
import DetailModal, { PersonDetail } from "./DetailModal";

const attorneys: PersonDetail[] = [
  {
    type: "person",
    img: "/sheng-blue.jpg",
    backgroundPosition: "center -60px",
    name: "王昱翔",
    role: "主持律師",
    intro:
      "王昱翔律師曾協助當事人在工程履約案件中獲得勝訴判決，為當事人省下新臺幣3,000萬元的違約金、更在政府採購履約爭議案中，協助當事人上訴至最高法院，成功讓最高法院發回更審，重為審理。執業過程中，更協助多名當事人取得不起訴處分、無罪判決，為當事人守住清白！",
    background:
      "恆旭森隆商務法律事務所　實習律師\n恆旭森隆商務法律事務所　受僱律師\n文化大學法律系強學班授課講師\n文化大學法律系課輔講師\n銘傳大學勵學班授課講師\n國家委託研究案專案研究人員\n建立高齡金融消費爭議資料庫專案　助理\n公司行號常年法律顧問\n新北市土城區樂利里法律顧問",
    expertise: [
      "一般民、刑事訴訟",
      "車禍糾紛、消費爭議、損害賠償",
      "傷害、侵占、詐欺及恐嚇",
      "行政訴訟",
      "家事案件",
      "繼承、婚姻事件、親權酌定",
      "不動產爭議",
      "公寓大廈事件",
      "工程履約爭議",
      "非訟案件",
      "強制執行、假扣押、假處分",
      "合約審閱",
    ],
  },
  {
    type: "person",
    img: "/daqing.jpg",
    backgroundPosition: "center -30px",
    name: "劉大慶",
    role: "合作律師",
    intro:
      "劉大慶律師大學畢業即應屆考取律師、法院書記官，並於研究所期間研究契約法爭議(如勞資爭議、消費糾紛、醫療糾紛等)。執業期間，除處理傳統民刑事案件外，主要處理不動產訴訟、繼承遺產等案件，並多次協助委託人達成和解，取得最大利益，同時身兼公職補習班講師，從事民事法教學、掌握實務觀點之變遷，於個案上亦能提供法院之最新看法，以擬定合適之訴訟策略。",
    background:
      "【學歷】\n東吳大學法律系碩士（2022年）\n文化大學法律系學士（2020年）\n\n【經歷】\n高考律師及格（2020年）\n司法特考四等書記官及格（2020年）\n圓邦法律事務所　實習律師\n立勤國際法律事務所　律師\n台北市政府法制局　諮詢律師\n文化大學法律系　兼任講師\n文化、銘傳大學法學加強班講師\n\n【著作】\n《醫療契約責任》，東吳大學碩士論文，2022年\n《民法總則—全彩心智圖表》（修訂），保成，2025年\n《民法物權—全彩心智圖表》（修訂），保成，2025年\n《老師開講—民法物權》，保成，2026年\n《老師開講—民法身分法》，保成，2026年",
    expertise: [
      "不動產訴訟",
      "勞資爭議",
      "消費糾紛",
      "醫療糾紛",
      "繼承、婚姻、子女親權",
      "車禍、借貸、租賃、漏水",
      "一般民、刑事訴訟",
    ],
  },
  {
    type: "person",
    img: "",
    name: "陳聖弘",
    role: "金融顧問",
    intro:
      "具備深厚金融市場實務背景，專精於財務規劃與風險評估，為委託人提供法律與金融交叉領域的專業諮詢服務。",
    background: "【經歷】\n曾擔任銀行高階經理人(協理）",
    expertise: ["財務規劃", "金融法規", "投資風險", "資本市場"],
  },
  {
    type: "person",
    img: "/giant.jpg",
    name: "王俊淵",
    role: "軟體工程師",
    intro:
      "8年軟體系統開發建置經驗，以技術力提升法律服務效能，致力打造安全、高效的數位法律服務平台。",
    background:
      "【學歷】\n國立高雄應用科技大學電機碩士\n\n【經歷】\n資深全端工程師，8年以上經驗，涵蓋 FinTech、FoodTech、SaaS 及 B2B 領域，主導 POS 平台建置，服務 12,000 家門市，每日處理超過 2,500 萬筆交易高流量點餐系統前端改造，頁面載入提升 30%，轉換率提升 15%，架構設計債券交易平台，帶領工程團隊從 2 人擴展至 10 人，共同創辦 Jundoo，主導產品與工程從 0→1，完成 NT$300 萬群眾募資並獲媒體報導\n\n【成就】\n上線 POS 平台，超過 12,000 家門市，日處理交易量超過 2,500 萬筆。\n主導高流量訂單系統的重構，將載入時間降低 30%，轉換率提升 15%。\n設計並架構債券交易平台，並將工程團隊從 2 人擴展至 10 人。\n共同創辦 Jundoo 遊戲平台，募資新台幣 300 萬並獲得媒體曝光。\n創辦Accilex律師工具平台，當日活躍會員100人。",
    expertise: ["系統架構", "資安防護", "法律科技", "數位轉型", "軟體開發"],
  },
];

export default function AttorneysSection() {
  const [selected, setSelected] = useState<PersonDetail | null>(null);

  return (
    <>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <div className="text-center mb-14">
            <span className="block text-xs font-bold uppercase tracking-[3px] text-[#b99566] mb-3">
              FUXI Attorneys
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a2e] mb-4">
              伏曦專業團隊
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto"></p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {attorneys.map((a) => (
              <button
                key={a.name}
                className="group text-left cursor-pointer focus:outline-none"
                onClick={() => setSelected(a)}>
                {/* Photo */}
                <div className="relative overflow-hidden mb-6 h-64">
                  {a.img ? (
                    <div
                      className="absolute inset-0 bg-cover bg-top group-hover:scale-105 transition-transform duration-500"
                      style={{
                        backgroundImage: `url(${a.img})`,
                        backgroundPosition:
                          a.backgroundPosition ?? "center top",
                      }}
                    />
                  ) : (
                    <div className="absolute inset-0 bg-[#d6cfc6] flex items-end justify-center group-hover:scale-105 transition-transform duration-500">
                      <svg
                        viewBox="0 0 100 100"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4/5">
                        <circle cx="50" cy="28" r="18" fill="#b99566" />
                        <path
                          d="M10 100 C10 68 30 56 50 56 C70 56 90 68 90 100Z"
                          fill="#b99566"
                        />
                      </svg>
                    </div>
                  )}
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-[#1a1a2e]/0 group-hover:bg-[#1a1a2e]/20 transition-colors duration-300 flex items-center justify-center">
                    <span className="text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      查看詳細
                    </span>
                  </div>
                </div>

                {/* Info */}
                <h3 className="text-lg font-bold text-[#1a1a2e] mb-1">
                  {a.name}
                </h3>
                <span className="block text-sm text-[#b99566] font-medium mb-2">
                  {a.role}
                </span>
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
                  {a.intro}
                </p>
              </button>
            ))}
          </div>
        </div>
      </section>

      <DetailModal data={selected} onClose={() => setSelected(null)} />
    </>
  );
}

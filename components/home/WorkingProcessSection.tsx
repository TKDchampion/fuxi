const steps = [
  { num: "#01", title: "準備相關資料" },
  { num: "#02", title: "來所面談討論" },
  { num: "#03", title: "案件正式啟動" },
];

export default function WorkingProcessSection() {
  return (
    <section className="py-20 bg-[#f1eae0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <span className="block text-xs font-bold uppercase tracking-[3px] text-[#b99566] mb-4">
            Working Process
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            委託流程
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-base leading-relaxed">
            為了讓您的法律煩惱在第一時間得到有效的解決，請您攜帶與您問題相關的所有資料，並立即與我們聯繫預約面談時間，本所將竭盡為您分析並處理法律問題
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step) => (
            <div
              key={step.num}
              className="bg-white rounded-3xl p-8 flex items-center gap-6">
              <span className="text-2xl font-bold text-[#b99566] shrink-0">
                {step.num}
              </span>
              <h3 className="text-xl font-bold text-black leading-tight">
                {step.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

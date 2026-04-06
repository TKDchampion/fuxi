const steps = [
  { num: "#01", title: "Analyzing Case" },
  { num: "#02", title: "Research & Investigation" },
  { num: "#03", title: "Court of Law Success" },
];

export default function WorkingProcessSection() {
  return (
    <section className="py-20 bg-[#2d3047]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-14">
          <span className="block text-xs font-bold uppercase tracking-[3px] text-[#b99566] mb-3">
            Working Process
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Working Way</h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step) => (
            <div
              key={step.num}
              className="border border-white/10 hover:border-[#b99566] p-8 transition-colors duration-300 group"
            >
              <span className="block text-6xl font-black text-white/10 group-hover:text-[#b99566]/20 transition-colors mb-4 leading-none">
                {step.num}
              </span>
              <h3 className="text-xl font-bold text-white">{step.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

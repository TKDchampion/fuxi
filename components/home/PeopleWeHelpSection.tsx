import { Scale } from "lucide-react";

const items = [
  {
    title: "Fight for Justice",
    desc: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.",
  },
  {
    title: "Best Case Strategy",
    desc: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.",
  },
  {
    title: "Experience Attorneys",
    desc: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.",
  },
];

export default function PeopleWeHelpSection() {
  return (
    <section className="py-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row-reverse -mx-4 sm:-mx-6 lg:-mx-8">
          {/* Image */}
          <div className="md:w-5/12 relative min-h-[400px] md:min-h-[500px]">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1521791055366-0d553872952f?w=800&q=80)",
              }}
            />
          </div>

          {/* Text */}
          <div className="md:w-7/12 py-16 md:py-20 px-4 sm:px-8 md:pr-16 lg:pr-24">
            <div className="text-right mb-10">
              <span className="block text-xs font-bold uppercase tracking-[3px] text-[#b99566] mb-3">
                Company Help Intro
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a2e]">
                The People We Help
              </h2>
            </div>

            <div className="space-y-8">
              {items.map((item) => (
                <div key={item.title} className="flex items-start gap-5 flex-row-reverse">
                  <div className="flex items-center justify-center w-12 h-12 bg-[#f5ede0] rounded-full shrink-0">
                    <Scale className="w-6 h-6 text-[#b99566]" />
                  </div>
                  <div className="text-right">
                    <h3 className="text-lg font-bold text-[#1a1a2e] mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
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

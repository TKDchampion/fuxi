const attorneys = [
  {
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
    name: "David Smith",
    role: "Family Lawyer",
    bio: "I am an ambitious workaholic, but apart from that, pretty simple person.",
  },
  {
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
    name: "Sarah Johnson",
    role: "Consumer Lawyer",
    bio: "I am an ambitious workaholic, but apart from that, pretty simple person.",
  },
  {
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    name: "Michael Chen",
    role: "Criminal Lawyer",
    bio: "I am an ambitious workaholic, but apart from that, pretty simple person.",
  },
  {
    img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&q=80",
    name: "Emma Davis",
    role: "Business Lawyer",
    bio: "I am an ambitious workaholic, but apart from that, pretty simple person.",
  },
];

export default function AttorneysSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-14">
          <span className="block text-xs font-bold uppercase tracking-[3px] text-[#b99566] mb-3">
            Experienced Attorneys
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a2e] mb-4">
            Meet our attorneys
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {attorneys.map((a) => (
            <div key={a.name} className="group">
              {/* Photo */}
              <div className="relative overflow-hidden mb-6 h-64">
                <div
                  className="absolute inset-0 bg-cover bg-center bg-top group-hover:scale-105 transition-transform duration-500"
                  style={{ backgroundImage: `url(${a.img})` }}
                />
              </div>

              {/* Info */}
              <h3 className="text-lg font-bold text-[#1a1a2e] mb-1">
                {a.name}
              </h3>
              <span className="block text-sm text-[#b99566] font-medium mb-2">
                {a.role}
              </span>
              <p className="text-gray-600 text-sm leading-relaxed">{a.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

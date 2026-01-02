const recommendations = [
  {
    name: "Triple Cheese Chicken",
    image: "/Food1.png",
  },
  {
    name: "Pork Skin",
    image: "/Food2.png",
  },
  {
    name: "Lemon Zest Chicken",
    image: "/Food3.png",
  },
  {
    name: "Chicken Feet",
    image: "/Food4.png",
  },
];

export default function ChefsRecommendations() {
  return (
    <section className="relative bg-gradient-to-br from-[#0b0d0f] via-[#14181c] to-[#0b0d0f] py-10">
      <div className="max-w-5xl text-center  mx-auto px-4">
        {/* Title */}
        <h2 className="text-orange-500 mb-10 font-semibold tracking-wide">
          Chef’s Recommendations
        </h2>

        {/* Items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 place-items-center">
          {recommendations.map((item) => (
            <div key={item.name} className="text-center group">
              {/* Image */}
              <div className="w-40 h-40 md:w-44 md:h-44 rounded-full overflow-hidden shadow-2xl mb-5 border border-white/10">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Label */}
              <p className="text-white font-semibold text-lg">
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

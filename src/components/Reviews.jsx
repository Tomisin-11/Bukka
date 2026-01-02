const testimonials = [
  {
    name: "Tarin Houque",
    role: "Customer",
    image: "/Review1.png",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing. Suspendisse varius eros elementum tristique.",
  },
  {
    name: "Tarin Houque",
    role: "Customer",
    image: "/Review2.png",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing. Suspendisse varius eros elementum tristique.",
  },
  {
    name: "Tarin Houque",
    role: "Customer",
    image: "/Review3.png",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing. Suspendisse varius eros elementum tristique.",
  },
];

export default function TestimonialSection() {
  return (
    <section
      className="relative bg-cover bg-center py-24 overflow-hidden"
      style={{ backgroundImage: "url('/test.png')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative text-center text-white px-4">
        <span className="text-orange-500 uppercase tracking-widest text-sm">
          Testimonial
        </span>

        <h2 className="text-4xl font-bold mt-2">
          Our customer says
        </h2>

        <p className="max-w-2xl mx-auto mt-4 text-gray-300">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        {/* Swipe hint */}
        <div className="mt-8 text-sm text-gray-300 md:hidden">
          ← Swipe →
        </div>

        {/* ================= MOBILE SNAP SCROLL ================= */}
        <div className="relative mt-10 -ml-20 md:hidden   overflow-hidden">
          {/* Gradient edges */}
          <div className="pointer-events-none absolute left-5 top-0 h-full w-15 -ml-50 bg-gradient-to-r from-black/60 to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-10 bg-gradient-to-l from-black/60 to-transparent z-10" />

          <div
            className="
              flex gap-4 px-6
              overflow-x-auto
              snap-x snap-mandatory
              scroll-smooth
              scrollbar-hide
            "
            style={{
              touchAction: "pan-x",       // ✅ only this element can move sideways
              overscrollBehaviorX: "contain",
            }}
          >
            {testimonials.map((item, index) => (
              <div
                key={index}
                className="
                  snap-center
                  min-w-[85%]
                  bg-white text-gray-800
                  rounded-xl p-6 shadow-lg
                "
              >
                <div className="flex justify-center mb-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                </div>

                <div className="flex justify-center text-orange-500 mb-3">
                  ★★★★★
                </div>

                <p className="text-sm italic text-gray-600">
                  “{item.text}”
                </p>

                <div className="mt-4">
                  <h4 className="font-semibold">{item.name}</h4>
                  <span className="text-xs text-gray-400">
                    {item.role}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= DESKTOP GRID ================= */}
        <div className="hidden md:grid grid-cols-3 gap-8 max-w-6xl mx-auto mt-16">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white text-gray-800 rounded-xl p-8 shadow-lg"
            >
              <div className="flex justify-center mb-6">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
              </div>

              <div className="flex justify-center text-orange-500 mb-4">
                ★★★★★
              </div>

              <p className="text-sm italic text-gray-600">
                “{item.text}”
              </p>

              <div className="mt-6">
                <h4 className="font-semibold">{item.name}</h4>
                <span className="text-xs text-gray-400">
                  {item.role}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

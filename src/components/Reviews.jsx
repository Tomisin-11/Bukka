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
      className="relative bg-cover bg-center py-24"
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

        {/* COLUMN GRID */}
        <div className="mt-16 max-w-3xl mx-auto flex flex-col gap-8">
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

export default function Service() {
  return (
    <section
      className="relative bg-cover bg-center py-24 brightness-110"
      style={{
        backgroundImage: "url('/Disheii.png')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative max-w-7xl mx-auto px-6 text-center text-white">
        <p className="text-orange-500 font-semibold tracking-wide">
          Service
        </p>

        <h2 className="text-4xl font-bold mt-2">
          What we can do for you

        </h2>

        <p className="max-w-xl mx-auto mt-4 text-white/80">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Suspendisse varius enim in eros elementum tristique.
        </p>

        {/* Centered Grid */}
        <div className="flex justify-center mt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl w-full">
            {[
              {
                title: " ",
                Service: "Buffet Service",
                img: "/Service.png",
              },
              {
                title: " ",
                Service: "Food Delivery",
                img: "/Delivery.png",
              },
              {
                title: " ",
                Service: "Cafeteria",
                img: "/Cafeteria.png",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white text-black rounded-xl relative shadow-lg overflow-hidden"
              >
                {/* Full image */}
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-52 object-cover"
                />

                {/* Price */}
                <span className="absolute top-3 left-3 bg-orange-500 text-white px-3 py-1 rounded-md text-sm font-semibold">
                  {item.Service}
                </span>

                {/* Content */}
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">
                    {item.title}
                  </h3>

                  <p className="text-sm text-gray-600">
                    Tomato, fresh milk, potatos Lorem Ipsum is simply dummy text
                  </p>

                  <button className="mt-4 w-full bg-black text-white  border border-black px-5 py-2 rounded-md text-sm font-medium hover:bg-orange-500 hover:text-white hover:border-orange-500 transition">
                    Order Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

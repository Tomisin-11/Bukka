export default function AboutSection() {
  return (
    <section className="relative bg-[#0b0d0f] py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        
        {/* Left Content */}
        <div>
          <h3 className="text-orange-500 text-sm uppercase tracking-widest mb-3">
            About Us
          </h3>

          <h2 className="text-white text-4xl md:text-5xl font-bold leading-tight mb-6">
            A Modern Take on <br /> Authentic Flavor
          </h2>

          <p className="text-white/80 text-lg leading-relaxed mb-6">
            At Bukka Hut, we bring tradition and innovation together. Every dish
            is crafted with bold flavors, fresh ingredients, and a passion for
            creating unforgettable dining experiences.
          </p>

          <p className="text-white/60 text-base leading-relaxed">
            From comforting classics to exciting new creations, our kitchen
            celebrates culture, creativity, and the joy of good food.
          </p>
        </div>

        {/* Right Image */}
        <div className="relative flex justify-center md:justify-end">
          <img
            src="/jollof.png"
            alt="Signature Dish"
            className="
              w-[580px]
              sm:w-[460px]
              md:w-[520px]
              lg:w-[620px]
              object-contain
              drop-shadow-2xl
            "
          />
        </div>

      </div>
    </section>
  );
}

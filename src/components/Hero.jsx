import React from "react";

export default function Hero() {
  return (
    <section className="relative    w-full h-full overflow-hidden">
      
      {/* BACKGROUND IMAGE */}
      <div
        className="absolute   inset-0 bg-cover w-full bg-center"
        style={{
          backgroundImage: "url('/bg.png')", // replace with your background
        }}
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/50" />

      {/* CONTENT */}
      <div className="relative   mt-50 lg:mt-13 z-10 w-full h-full max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center justify-center gap-16">
        
        {/* LEFT TEXT */}
        <div className="max-w-xl text-orange-500 text-center lg:text-left">
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-4xl  leading-tight">
            Uncover a New World  <br />
            <span className="block mt-2">of Flavor</span>
          </h1>

          <p className="mt-6 text-gray-200 text-base sm:text-lg leading-relaxed max-w-md mx-auto lg:mx-0">
            Step into a culinary space where Korean tradition meets
            exciting new possibilities.
          </p>

          <button className="mt-8 inline-flex items-center justify-center rounded-md bg-orange-500 px-8 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-orange-600 active:scale-95">
            Reserve a Table
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative w-full lg:w-1/2 flex justify-center lg:justify-end">
          <img
            src="/Hero1.png" // dish image
            alt="Korean dish"
            className="w-[340px] sm:w-[440px] lg:w-[620px] object-contain drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}

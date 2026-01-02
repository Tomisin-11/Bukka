export default function ContactSection() {
  return (
    <section className="relative py-24 bg-black text-white">
      {/* background texture */}
      <div className="absolute inset-0 bg-[url('/bg.png')] bg-cover bg-center opacity-40" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT CONTENT */}
          <div>
            <span className="text-orange-500 font-semibold">
              Contact us
            </span>

            <h2 className="text-4xl font-bold mt-2 mb-10">
              Reach to us
            </h2>

            {/* Opening Hours */}
            <div className="mb-10">
              <h4 className="text-orange-500 font-semibold mb-4">
                Opening hours
              </h4>

              <div className="space-y-4 text-sm">
                <div className="flex justify-between border-b border-white/20 pb-2">
                  <span>Mon - Thu</span>
                  <span>10.00 am to 10.00 pm</span>
                </div>
                <div className="flex justify-between border-b border-white/20 pb-2">
                  <span>Fri - Sat</span>
                  <span>8.00 am to 12.00 pm</span>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-orange-500 font-semibold mb-4">
                Contact Info
              </h4>

              <div className="space-y-4 text-sm">
                <div className="flex gap-3 border-b border-white/20 pb-2">
                  <span>📍</span>
                  <span>Lorem Restaurant, est by 123456</span>
                </div>

                <div className="flex gap-3 border-b border-white/20 pb-2">
                  <span>📞</span>
                  <span>26126****, 237318***</span>
                </div>

                <div className="flex gap-3 border-b border-white/20 pb-2">
                  <span>✉️</span>
                  <span>info@example.com</span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT MAP */}
          <div className="w-full h-[420px] rounded-xl overflow-hidden border border-white/10">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps?q=New%20York&output=embed"
              className="w-full h-full"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

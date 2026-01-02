export default function SubscribeSection() {
  return (
    <section className="relative py-15 bg-[#f7f7f5] text-center overflow-hidden">
      {/* background texture */}
      <div className="absolute inset-0 bg-[url('/footer.png')] bg-cover bg-center opacity-40" />

      <div className="relative max-w-3xl mx-auto px-6">
        {/* small heading */}
        <span className="text-orange-500 font-semibold tracking-wide">
          Be updated
        </span>

        {/* main heading */}
        <h2 className="text-5xl font-bold text-gray-700 mt-4">
          Subscribe us
        </h2>

        {/* description */}
        <p className="text-gray-500 mt-6 leading-relaxed">
          Subscribe to our Newsletter to get first Gift voucher by
          <br />
          StartLorem Ipsum is simply dummy
        </p>

        {/* input */}
        <div className="mt-10 flex items-center justify-center">
          <div className="flex w-full max-w-xl bg-white rounded-xl overflow-hidden shadow-sm">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="flex-1 px-6 py-4 text-gray-700 outline-none"
            />
            <button className="bg-Range text-white px-8 font-semibold hover:bg-orange-600 transition">
              Submit
            </button>
          </div>
        </div>

        {/* social icons */}
<div className="mt-12 flex justify-center gap-6">
  {[
    "/twitter.png",
    "/facebook.png",
    "/social.png",
    "/youtube.png",
    "/instagram.png",
  ].map((icon, index) => (
    <img
      key={index}
      src={icon}
      alt="social icon"
      className="
        w-8 h-8
        cursor-pointer
        opacity-80
        hover:opacity-100
        hover:scale-110
        transition
      "
    />
  ))}
</div>


        {/* footer text */}
        <p className="mt-10 text-sm text-gray-500">
          © 2026, All Rights Reserved, Made by{" "}
          <span className="text-orange-500 font-semibold">
            T-Codes
          </span>
        </p>
      </div>
    </section>
  );
}

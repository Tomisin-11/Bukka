const menuItems = [
  {
    name: "Jumbo Shrimp",
    price: "$45",
    desc: "Tomato, fresh milk potatos Lorem Ipsum is simplydummy text of the printingand ipsum is typesettin simply dummy text fresh milk potatos.",
    img: "jumbo.png",
  },
  {
    name: "Fruit Salad",
    price: "$45",
    desc: "Tomato, fresh milk potatos Lorem Ipsum is simplydummy text of the printingand ipsum is typesettin simply dummy text fresh milk potatos.",
    img: "fruit.png",
  },
  {
    name: "Butter Nasta Pani",
    price: "$45",
    desc: "Tomato, fresh milk potatos Lorem Ipsum is simplydummy text of the printingand ipsum is typesettin simply dummy text fresh milk potatos.",
    img: "pasta.png",
  },
  {
    name: "Jumbo Shrimp",
    price: "$45",
    desc: "Tomato, fresh milk potatos Lorem Ipsum is simplydummy text of the printingand ipsum is typesettin simply dummy text fresh milk potatos.",
    img: "jumbo.png",
  },
];



const MenuSection = () => {
  return (
    <section className="w-full bg-[#fff7f2] py-24 px-4">
      <div className="max-w-6xl mx-auto text-center">

        {/* Small heading */}
        <p className="text-orange-600 font-semibold tracking-wide mb-4">
          Explore Our Menu
        </p>

        {/* Main heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-gray-700 mb-6">
          Try Our Specialitis
        </h2>

        {/* Description */}
        <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed mb-14">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique. Duis cursus, mi quis viverra
          ornare,
        </p>

        {/* Menu Buttons */}
        <div className="flex flex-wrap justify-center gap-6">
          <button className="bg-orange-600 text-white px-10 py-4 rounded-lg font-semibold shadow-md hover:bg-orange-700 transition">
            Breakfast
          </button>

          <button className="bg-gray-600 text-white px-10 py-4 rounded-lg font-semibold hover:bg-gray-700 transition">
            Lunch
          </button>

          <button className="bg-gray-600 text-white px-10 py-4 rounded-lg font-semibold hover:bg-gray-700 transition">
            Snacks
          </button>

          <button className="bg-gray-600 text-white px-10 py-4 rounded-lg font-semibold hover:bg-gray-700 transition">
            Drinks
          </button>

          <button className="bg-gray-600 text-white px-10 py-4 rounded-lg font-semibold hover:bg-gray-700 transition">
            Dinner
          </button>
        </div>
      </div>

      <div className="max-w-4x1 mt-20   overflow-none   grid grid-cols-1 lg:grid-cols-3 gap-0 ">

        {/* LEFT — Opening Hours */}
        <div className="bg-white   rounded-2xl p-10 shadow-sm">
          <div className="border   rounded-xl p-8 text-gray-600 text- space-y-10">
            {[
              ["Monday", "10.00 am to 10.00 pm"],
              ["Tuesday", "10.00 am to 10.00 pm"],
              ["Wednesday", "10.00 am to 10.00pm"],
              ["Thursday", "10.00 am to 10.00 pm"],
              ["Friday", "10.00 am to 10.00 pm"],
              ["Saturday", "10.00 am to 10.00 pm"],
              ["Sunday", "Closed"],
            ].map(([day, time]) => (
              <div key={day} className="flex justify-between">
                <span className="flex-1">
                  {day}
                  <span className="mx-1">....</span>
                </span>
                <span>{time}</span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — Menu Items */}
        <div className="lg:col-span-2 ml-5 mt-10 space-y-10">
          {menuItems.map((item, index) => (
            <div key={index} className="space-y-6">
              <div className="flex gap-6">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-16 h-16  rounded-full object-cover"
                />

                <div className="flex-1">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-lg font-semibold text-gray-700">
                      {item.name}
                    </h4>
                    <span className="text-orange-600 font-bold">
                      {item.price}
                    </span>
                  </div>

                  <p className="text-gray-600 text-sm leading-relaxed max-w-xl">
                    {item.desc}
                  </p>
                </div>
              </div>

              {/* dotted divider */}
              <div className="border-b border-dashed border-gray-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;


 
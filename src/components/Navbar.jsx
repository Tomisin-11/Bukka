 
const Navbar = () => {
  return (
    <nav className="absolute fixed top-0 w-full z-50 flex justify-between items-center px-8 py-6 bg-black/40 backdrop-blur-md border-b border-white/10">
      {/* Logo Area */}
      <div className="text-2xl ml-10 font-bold tracking-tighter">
       <img src="Logo.png" className="h-12  text-orange-500"/>
         
      </div>

      {/* Navigation Links */}
      <ul className="hidden md:flex space-x-10 text-[12px] font-medium tracking-[0.2em] text-white">
        <li className="hover:text-orange-500 cursor-pointer transition duration-300">HOME</li>
        <li className="hover:text-orange-500 cursor-pointer transition duration-300">MENU</li>
        <li className="hover:text-orange-500 cursor-pointer transition duration-300">RESERVATIONS</li>
        <li className="hover:text-orange-500 cursor-pointer transition duration-300">CONTACT</li>
      </ul>

      {/* Action Button */}
      <button className="border border-orange-500 text-orange-500 px-6 py-2 text-xs font-bold hover:bg-orange-500 hover:text-black transition duration-300">
        BOOK A TABLE
      </button>
    </nav>
  );
};

export default Navbar;
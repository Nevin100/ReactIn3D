import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
// import Frame402 from "/Frame402.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:mx-30 flex justify-center mb-1 px-4 md:px-10">
      <nav className="flex w-full items-center justify-between py-5 px-2">
        {/* Left Section - Logo */}
        <div className="flex items-center">
          <h1 className="font-semibold md:text-4xl text-2xl m-0">ReactIn3D</h1>
        </div>

        {/* Middle Section - Nav Links */}
        <div className="hidden md:flex items-center gap-10">
          <a
            href="#"
            className="text-xl font-normal hover:text-[#e99b63] transition-colors duration-300"
          >
            Home
          </a>
          <a
            href="#"
            className="text-xl font-normal hover:text-[#e99b63] transition-colors duration-300"
          >
            Features
          </a>
          <a
            href="#"
            className="text-xl font-normal hover:text-[#e99b63] transition-colors duration-300"
          >
            Pricing
          </a>
          <a
            href="#"
            className="text-xl font-normal hover:text-[#e99b63] transition-colors duration-300"
          >
            Blog
          </a>
        </div>

        {/* Right Section - Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <button className="border-2 border-[#e99b63] rounded-full bg-transparent px-6 py-2 text-xl text-[#e99b63] hover:bg-[#e99b63] hover:text-white transition-colors duration-300">
            SIGNIN
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-3xl">
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-transparent shadow-lg md:hidden">
          <div className="flex flex-col items-center gap-6 py-6">
            <a
              href="#"
              className="text-xl font-normal hover:text-[#e99b63] transition-colors duration-300"
            >
              Home
            </a>
            <a
              href="#"
              className="text-xl font-normal hover:text-[#e99b63] transition-colors duration-300"
            >
              Features
            </a>
            <a
              href="#"
              className="text-xl font-normal hover:text-[#e99b63] transition-colors duration-300"
            >
              Pricing
            </a>
            <a
              href="#"
              className="text-xl font-normal hover:text-[#e99b63] transition-colors duration-300"
            >
              Blog
            </a>
            <button className="border-2 border-[#e99b63] rounded-full bg-transparent px-6 py-2 text-xl text-[#e99b63] hover:bg-[#e99b63] hover:text-white transition-colors duration-300">
              SIGNIN
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;

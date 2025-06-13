"use client";
import "boxicons/css/boxicons.min.css";

const Header = () => {
  const toggleDropDownMenu = () => {
    const menu = document.getElementById("mobileMneu");
    if (menu.classList.contains("hidden")) {
      menu.classList.remove("hidden");
    } else {
      menu.classList.add("hidden");
    }
  };

  return (
    <header className="flex justify-between items-center py-4 px-4 lg:px-20 relative">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold m-0">
        ReactIn3D
      </h1>

      <nav className="hidden md:flex items-center gap-12">
        {["COMPANY", "FEATURES", "RESOURCES", "DOCS"].map((item) => (
          <a
            key={item}
            href="#"
            className="text-base tracking-wider transition-colors hover:text-gray-300"
          >
            {item}
          </a>
        ))}
      </nav>

      <button className="hidden md:block text-black bg-neutral-100/15 border-2 border-neutral-900 py-3 px-8 rounded-full border-none font-medium transition-all duration-500 hover:bg-white cursor-pointer z-50">
        SIGNIN
      </button>

      {/* Menu Icon - Mobile Only */}
      <button
        onClick={toggleDropDownMenu}
        className="md:hidden absolute top-4 right-4 text-3xl z-50 p-2"
      >
        <i className="bx bx-menu"></i>
      </button>

      {/* Mobile Menu */}
      <div
        id="mobileMneu"
        className="hidden fixed top-0 bottom-0 right-0 left-0 md:hidden p-5 z-40 bg-black bg-opacity-70 backdrop-blur-md"
      >
        <nav className="flex flex-col gap-6 items-center justify-center h-full">
          {["COMPANY", "FEATURES", "RESOURCES", "DOCS"].map((item) => (
            <a
              key={item}
              href="#"
              className="text-white text-lg tracking-wider hover:text-gray-300"
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;

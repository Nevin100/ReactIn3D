const Header = () => {
  return (
    <header className="flex justify-between items-center py-4 px-4 lg:px-20">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold m-0">
        ReactIn3D
      </h1>

      <nav className="hidden md:flex items-center gap-12">
        <a
          href="#"
          className="text-base tracking-wider transition-colors hover:text=gray-300"
        >
          COMPANY
        </a>
        <a
          href="#"
          className="text-base tracking-wider transition-colors hover:text=gray-300"
        >
          FEATURES
        </a>
        <a
          href="#"
          className="text-base tracking-wider transition-colors hover:text=gray-300"
        >
          RESOURCES
        </a>
        <a
          href="#"
          className="text-base tracking-wider transition-colors hover:text=gray-300"
        >
          DOCS
        </a>
      </nav>

      <button className="hidden md:block text-black bg-neutral-100/15 border-2 border-neutral-900 py-3 px-8 rounded-full border-none font-medium transition-all duration-500 hover:bg-white cursor-pointer z-50 ">
        SIGNIN
      </button>
    </header>
  );
};

export default Header;

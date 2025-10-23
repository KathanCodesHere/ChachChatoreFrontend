import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const NavBarc = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: "Work", path: "/work" },
    { label: "About", path: "/about" },
    { label: "Capabilities", path: "/capabilities" },
    { label: "Contact", path: "/contact" },
    { label: "Switch to Productions", path: "/production" },
  ];

  return (
    <nav className="text-[#f0ecd9] bg-[#1b1b1b] sticky top-0 z-50 shadow-md border-2 m-2 mx-5 rounded-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-2 py-4 font-anton">
        {/* Logo */}
        <Link
          to="/chacha"
          className="text-xl md:text-2xl font-bold tracking-wider uppercase hover:text-[#d93535] transition-colors"
        >
          Chacha Chatore
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-lg font-normal tracking-wider uppercase">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="hover:text-[#d93535] transition-colors duration-300"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Hamburger Icon */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-[#f0ecd9] focus:outline-none text-3xl "
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-[#f0ecd9]/30">
          <div className="flex flex-col items-center space-y-4 py-6 text-lg font-medium ">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className="tracking-wider uppercase font-anton transition-colors duration-300 hover:text-[#d93535]"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBarc;

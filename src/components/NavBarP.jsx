import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const NavBarP = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: "Work", path: "/work" },
    { label: "About", path: "/about" },
    { label: "Capabilities", path: "/services" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <nav className="backdrop-blur-md bg-[#1b1b1b]/90 text-[#fff5eb] sticky top-0 z-50 shadow-lg border border-[#2c2c2c]/70 mx-3 md:mx-8 mt-3 rounded-2xl overflow-hidden">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4 font-anton">
        {/* LOGO */}
        <Link
          to="/production"
          className="flex items-center gap-2 hover:opacity-90 transition"
        >
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#e86b40] to-[#ff9966] flex items-center justify-center font-bold text-white shadow-md">
            CC
          </div>
          <span className="text-xl md:text-2xl uppercase tracking-widest font-bold text-[#fff4e5]">
            Productions
          </span>
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center space-x-8 text-base uppercase tracking-wide">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="relative group transition-all duration-300"
            >
              <span className="group-hover:text-[#e86b40]">{item.label}</span>
              <span className="absolute left-0 bottom-[-3px] w-0 h-[2px] bg-[#e86b40] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}

          {/* Switch Button */}
          <Link
            to="/chacha"
            className="ml-4 px-4 py-2 rounded-md border border-[#e86b40] text-[#e86b40] hover:bg-[#e86b40] hover:text-white font-semibold transition"
          >
            Switch to Chacha Ji
          </Link>
        </div>

        {/* MOBILE MENU ICON */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-[#fff4e5] focus:outline-none text-3xl"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="md:hidden bg-[#1b1b1b]/95 border-t border-[#2c2c2c]/60"
          >
            <div className="flex flex-col items-center space-y-6 py-6 text-lg font-medium tracking-wider">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMenuOpen(false)}
                  className="uppercase hover:text-[#e86b40] transition-colors"
                >
                  {item.label}
                </Link>
              ))}

              {/* CTA in mobile */}
              <Link
                to="/chacha"
                onClick={() => setMenuOpen(false)}
                className="px-4 py-2 rounded-md border border-[#e86b40] text-[#e86b40] hover:bg-[#e86b40] hover:text-white font-semibold transition"
              >
                Switch to Chacha Ji
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default NavBarP;

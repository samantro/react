
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Contact Us", path: "/contact" },
    { name: "Cart", path: "/cart" },
  ];

  const handleLogin = () => {
    setIsLoggedIn((prev) => !prev);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/95 shadow-sm backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 md:px-8">
        
        {/* Logo */}
        <NavLink
          to="/"
          className="flex shrink-0 items-center"
          onClick={() => setIsMenuOpen(false)}
        >
          <img
            src={LOGO_URL}
            alt="Logo"
            className="h-14 w-auto max-w-36 object-contain transition-transform duration-300 hover:scale-105"
          />
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `relative text-sm font-semibold transition-colors duration-200
                after:absolute after:-bottom-2 after:left-0
                after:h-0.5 after:bg-orange-500
                after:transition-all after:duration-300
                ${
                  isActive
                    ? "text-orange-500 after:w-full"
                    : "text-gray-600 hover:text-orange-500 after:w-0 hover:after:w-full"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Desktop Login Button */}
        <div className="hidden md:block">
          <button
            type="button"
            onClick={handleLogin}
            className="rounded-xl bg-orange-500 px-6 py-2.5 text-sm font-semibold text-white shadow-md shadow-orange-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-orange-600 hover:shadow-lg active:scale-95"
          >
            {isLoggedIn ? "Logout" : "Login"}
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="rounded-lg p-2 text-gray-700 transition-colors hover:bg-orange-50 hover:text-orange-500 md:hidden"
        >
          {isMenuOpen ? (
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav
          id="mobile-navigation"
          className="border-t border-gray-100 bg-white px-5 pb-5 pt-3 shadow-lg md:hidden"
        >
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `rounded-lg px-4 py-3 text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? "bg-orange-50 text-orange-600"
                      : "text-gray-600 hover:bg-gray-50 hover:text-orange-500"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            <button
              type="button"
              onClick={() => {
                handleLogin();
                setIsMenuOpen(false);
              }}
              className="mt-3 w-full rounded-xl bg-orange-500 px-5 py-3 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:bg-orange-600 active:scale-95"
            >
              {isLoggedIn ? "Logout" : "Login"}
            </button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;

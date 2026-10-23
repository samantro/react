
import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Contact Us", path: "/contact" },
    { name: "Cart", path: "/cart" },
  ];

  return (
    <footer className="relative overflow-hidden bg-gray-950 text-gray-300">

      {/* Decorative Background */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-orange-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-orange-500/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 pb-8 pt-14 sm:px-8 md:pt-20">

        {/* Main Footer Content */}
        <div className="grid gap-12 border-b border-white/10 pb-12 sm:grid-cols-2 lg:grid-cols-4">

          {/* Brand Section */}
          <div className="sm:col-span-2 lg:col-span-2">
            <Link to="/" className="inline-flex items-center gap-3">
              <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl bg-white p-2">
                <img
                  src={LOGO_URL}
                  alt="Restaurant App Logo"
                  className="h-full w-full object-contain"
                />
              </div>

              <span className="text-2xl font-extrabold tracking-tight text-white">
                Food<span className="text-orange-500">Hub.</span>
              </span>
            </Link>

            <p className="mt-6 max-w-sm text-sm leading-7 text-gray-400">
              Discover delicious food from amazing restaurants.
              Explore your favorite meals, find new flavors,
              and enjoy a delightful food experience.
            </p>

            {/* Brand Tagline */}
            <div className="mt-7 inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/10 px-4 py-2 text-xs font-semibold text-orange-400">
              <span>🍽️</span>
              Good Food. Great Mood.
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-6 text-base font-bold text-white">
              Quick Links
            </h3>

            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="group inline-flex items-center gap-2 text-sm text-gray-400 transition-all duration-200 hover:translate-x-1 hover:text-orange-400"
                  >
                    <span className="text-orange-500 opacity-0 transition-opacity group-hover:opacity-100">
                      →
                    </span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact / Information */}
          <div>
            <h3 className="mb-6 text-base font-bold text-white">
              Get in Touch
            </h3>

            <p className="mb-5 text-sm leading-7 text-gray-400">
              Have questions or feedback? We'd love to hear
              from you.
            </p>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-xl border border-orange-500/30 bg-orange-500/10 px-5 py-3 text-sm font-semibold text-orange-400 transition-all duration-200 hover:border-orange-500 hover:bg-orange-500 hover:text-white"
            >
              Contact Us
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M5 12h14m-6-6 6 6-6 6" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col items-center justify-between gap-5 pt-8 text-center sm:flex-row sm:text-left">

          {/* Copyright */}
          <p className="text-sm text-gray-500">
            © {currentYear}{" "}
            <span className="font-semibold text-gray-300">
              FoodHub.
            </span>{" "}
            All rights reserved.
          </p>

          {/* Footer Tagline */}
          <p className="flex items-center gap-2 text-xs text-gray-500">
            Made with
            <span className="text-base text-orange-500">♥</span>
            for food lovers
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

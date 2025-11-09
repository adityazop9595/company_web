import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

import Logo from "./BitContent/Logo";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [isFixed, setIsFixed] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const navLinks = [
    { name: "Home", link: "/" },
    { name: "Services", link: "/services" },
    // { name: "Pricing", link: "#" },
    { name: "About", link: "/about" },
    { name: "Contact", link: "/contact" },
  ];

  // Handle scroll direction + fix at top
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Fix navbar only after scrolling down a bit
      if (currentScrollY > 100) {
        setIsFixed(true);
        if (currentScrollY > lastScrollY) {
          // scrolling down
          setShowNavbar(false);
        } else {
          // scrolling up
          setShowNavbar(true);
        }
      } else {
        // back to top → reset to original position
        setIsFixed(false);
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`w-full z-50 transition-all duration-500 ease-in-out ${
        isFixed
          ? `fixed top-0 left-0 ${
              showNavbar
                ? "translate-y-0 opacity-100 bg-white/95 backdrop-blur-sm shadow-md"
                : "-translate-y-full opacity-0"
            }`
          : "relative translate-y-0 opacity-100 bg-transparent"
      }`}
    >
      {/* ===== Top Bar ===== */}
      <div className="bg-indigo-600 text-white text-sm hidden lg:block">
        <div className="container max-w-[1400px] mx-auto flex flex-col sm:flex-row items-center justify-between py-2 px-4">
          <div className="flex flex-wrap gap-4 items-center justify-center sm:justify-start">
            {/* <span className="flex items-center gap-2">
              <FaLocationDot /> 1834 Kovar Road
            </span> */}
            <span className="flex items-center gap-2">
              <FaPhoneAlt /> +91 9404900388
            </span>
            <span className="flex items-center gap-2">
              <FaEnvelope /> fushiontech91@gmail.com
            </span>
          </div>

          <div className="flex items-center gap-4 mt-2 sm:mt-0">
            <span className="hidden md:block text-white/90">
              Open Hours 09:00 AM – 04:00 PM | Mon – Sat
            </span>
            {/* <div className="flex gap-3">
              <FaFacebookF className="hover:text-yellow-300 cursor-pointer" />
              <FaTwitter className="hover:text-yellow-300 cursor-pointer" />
              <FaYoutube className="hover:text-yellow-300 cursor-pointer" />
            </div> */}
          </div>
        </div>
      </div>

      {/* ===== Main Navbar ===== */}
      <nav className="bg-white border-b border-b-gray-300">
        <div className="container w-full max-2xl:px-2.5 max-w-[1400px] mx-auto flex items-center justify-between py-3">
          {/* Logo */}
<Logo/>


          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-6 font-medium text-gray-800">
            {navLinks.map((nav, index) => (
              <li key={index}>
                <Link
                  to={nav.link}
                  className="hover:text-indigo-600 transition-colors text-[15px]"
                >
                  {nav.name}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/book-appointment" className="ml-4 px-6 py-2 rounded-full bg-lime-400 font-semibold hover:bg-lime-300 transition-all">
                Get Started
              </Link>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-gray-800 text-2xl"
          >
            ☰
          </button>
        </div>

        {/* ===== Mobile Menu ===== */}
        {open && (
          <div className="lg:hidden bg-white">
            <ul className="flex flex-col gap-3 p-4 text-gray-800 font-medium">
              {navLinks.map((nav, index) => (
                <li key={index}>
                  <Link
                    to={nav.link}
                    onClick={() => setOpen(false)}
                    className="block hover:text-indigo-600 transition-colors"
                  >
                    {nav.name}
                  </Link>
                </li>
              ))}
              <li>
                <button className="w-full mt-2 px-6 py-2 rounded-full bg-lime-400 font-semibold hover:bg-lime-300 transition-all">
                  Start Project
                </button>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;

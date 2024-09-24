import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/ab_logo.svg";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false); // State for menu visibility
  const navigate = useNavigate();

  const handleLinkClick = (event, path) => {
    event.preventDefault();
    window.scrollTo(0, 0);
    navigate(path);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle menu open/close
  };

  return (
    <header className="bg-black bg-opacity-80 top-0 sticky z-10 text-white py-4 px-4 sm:px-16 font-montserrat text-base font-semibold">
      <nav className="container mx-auto flex items-center justify-between">
        <Link to="http://abhyudayiitb.org" target="_blank">
          <img src={logo} alt="Logo" className="h-8 w-auto sm:h-10" />
        </Link>
        <ul className="hidden md:flex justify-end space-x-4 sm:space-x-10">
          <li>
            <Link
              to="/"
              className="hover:text-blue-300 cursor-pointer"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="http://abhyudayiitb.org/competitions.html"
              target="_blank"
              className="hover:text-blue-300"
            >
              Competition
            </Link>
          </li>
          <li>
            <Link
              to="/incentives"
              className="hover:text-blue-300"
              onClick={(event) => handleLinkClick(event, "/incentives")}
            >
              Incentives
            </Link>
          </li>
          <li>
            <Link to="/partners" className="hover:text-blue-300">
              Partners & Sponsors
            </Link>
          </li>
          <li>
            <Link
              to="/#contact"
              className="hover:text-blue-300"
              onClick={() => {
                window.scrollTo({
                  top: document.body.scrollHeight,
                  behavior: "smooth",
                });
              }}
            >
              Contact Us
            </Link>
          </li>
          <li>
            <Link to="/faq" className="hover:text-blue-300">
              FAQs
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Toggle Button */}
        <div className="md:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={toggleMenu}
          >
            {/* Menu Icon */}
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {menuOpen && ( // Conditionally render the mobile menu based on state
        <div className="md:hidden">
          <ul className="space-y-4 mt-4">
            <li>
              <Link
                to="/"
                className="block text-white hover:text-blue-300"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                  setMenuOpen(false); // Close menu after clicking link
                }}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="http://abhyudayiitb.org/competitions.html"
                target="_blank"
                className="block text-white hover:text-blue-300"
                onClick={() => setMenuOpen(false)} // Close menu after clicking link
              >
                Competition
              </Link>
            </li>
            <li>
              <Link
                to="/incentives"
                className="block text-white hover:text-blue-300"
                onClick={(event) => {
                  handleLinkClick(event, "/incentives");
                  setMenuOpen(false); // Close menu after clicking link
                }}
              >
                Incentives
              </Link>
            </li>
            <li>
              <Link
                to="/partners"
                className="block text-white hover:text-blue-300"
                onClick={() => setMenuOpen(false)} // Close menu after clicking link
              >
                Partners & Sponsors
              </Link>
            </li>
            <li>
              <Link
                to="/#contact"
                className="block text-white hover:text-blue-300"
                onClick={() => {
                  window.scrollTo({
                    top: document.body.scrollHeight,
                    behavior: "smooth",
                  });
                  setMenuOpen(false); // Close menu after clicking link
                }}
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                to="/faq"
                className="block text-white hover:text-blue-300"
                onClick={() => setMenuOpen(false)} // Close menu after clicking link
              >
                FAQs
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;

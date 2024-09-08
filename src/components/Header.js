// components/Header.js
import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/ab_logo.svg";

function Header() {
  return (
    <header className="bg-black bg-opacity-80 top-0 sticky z-10 text-white py-4 px-16 font-montserrat text-base font-semibold">
      <nav className="container mx-auto flex items-center justify-between">
        <Link to="http://abhyudayiitb.org" target="_blank">
          <img src={logo} alt="Logo" className="h-10 w-auto" />{" "}
        </Link>
        <ul className="flex justify-end space-x-10">
          <li>
            <Link to="/" className="hover:text-blue-300">
              Home
            </Link>
          </li>
          <li>
            <Link to="/competition" className="hover:text-blue-300">
              Competition
            </Link>
          </li>
          <li>
            <Link to="/incentives" className="hover:text-blue-300">
              Incentives
            </Link>
          </li>
          <li>
            <Link to="/partners" className="hover:text-blue-300">
              Partners & Sponsors
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-blue-300">
              Contact Us
            </Link>
          </li>
          <li>
            <Link to="/faq" className="hover:text-blue-300">
              FAQs
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

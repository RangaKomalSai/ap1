// components/Header.js
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import logo from "../assets/ab_logo.svg";


function Header() {
  const navigate = useNavigate();

  const handleLinkClick = (event, path) => {
    event.preventDefault();
    window.scrollTo(0,0);
    navigate(path);
  };

  return (
    <header className="bg-black bg-opacity-80 top-0 sticky z-10 text-white py-4 px-16 font-montserrat text-base font-semibold">
      <nav className="container mx-auto flex items-center justify-between">
        <Link to="http://abhyudayiitb.org" target="_blank">
          <img src={logo} alt="Logo" className="h-10 w-auto" />{" "}
        </Link>
        <ul className="flex justify-end space-x-10">
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
      </nav>
    </header>
  );
}

export default Header;

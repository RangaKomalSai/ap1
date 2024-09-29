// components/Header.js
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/ab_logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Header({ openNav }) {
  const navigate = useNavigate();

  const handleLinkClick = (event, path) => {
    event.preventDefault();
    window.scrollTo(0, 0);
    navigate(path);
  };

  return (
    <div className="relative">
      <header className="bg-black bg-opacity-80 top-0 fixed z-[100] text-white flex items-center justify-center h-[10vh] w-full font-montserrat text-base font-semibold">
        <nav className="mx-auto flex items-center justify-between w-full px-8 md:px-8 lg:mx-4">
          <Link to="http://abhyudayiitb.org" target="_blank">
            <img
              src={logo}
              alt="Logo"
              className="w-36 md:w-44 lg:w-32 xl:w-48"
            />
          </Link>
          <ul className="lg:flex hidden justify-end items-center space-x-10 text-nowrap md:text-xs lg:text-base xl:text-lg">
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
                to="/competition"
                className="hover:text-blue-300"
                onClick={(event) => handleLinkClick(event, "/competition")}
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
              <Link
                to="/sectors"
                className="hover:text-blue-300"
                onClick={(event) => handleLinkClick(event, "/sectors")}
              >
                Sectors
              </Link>
            </li>
            <li>
              <Link
                to="/partners"
                className="hover:text-blue-300"
                onClick={(event) => handleLinkClick(event, "/partners")}
              >
                Partners
              </Link>
            </li>
            <li>
              <Link
                to="/contactus"
                className="hover:text-blue-300"
                onClick={(event) => handleLinkClick(event, "/contactus")}
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                to="/faqs"
                className="hover:text-blue-300"
                onClick={(event) => handleLinkClick(event, "/faqs")}
              >
                FAQs
              </Link>
            </li>
            <li>
              <div className="flex justify-center md:justify-end items-center w-full">
                <Link to="/register">
                  <button
                    className="bg-[#41BDEE] hover:bg-blue-600 text-white font-extrabold py-1 px-2 rounded-md text-lg"
                  >
                    REGISTER
                  </button>
                </Link>
              </div>
            </li>
          </ul>
          <FontAwesomeIcon
            icon={faBars}
            onClick={openNav}
            className="w-8 h-8 md:w-[2.3rem] md:h-[2.3rem] lg:hidden text-white rotate-180"
          />
        </nav>
      </header>
    </div>
  );
}

export default Header;

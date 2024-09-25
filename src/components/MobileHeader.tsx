import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

type Props = {
  showNav: boolean;
  closeNav: () => void;
};

const MobileHeader = ({ closeNav, showNav }: Props) => {
  const navOpenStyle = showNav ? "translate-x-0" : "translate-x-[-100%]";
  const handleClick = () => {
    closeNav();
  };

  return (
    <div>
      <div
        className={`fixed ${navOpenStyle} top-0 left-0 right-0 bottom-0 transition-all duration-500 z-[1000] bg-black opacity-70 h-screen`}
      ></div>

      <ul
        className={`text-white ${navOpenStyle} top-0 fixed flex items-center justify-center flex-col h-screen transform transition-all duration-300 delay-300 font-montserrat w-4/5 md:w-[60%] bg-primary space-y-14 z-[1009] text-md md:text-2xl`}
      >
        <li>
          <Link to="/" onClick={handleClick}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/competition" onClick={handleClick}>
            Competition
          </Link>
        </li>
        <li>
          <Link to="/incentives" onClick={handleClick}>
            Incentives
          </Link>
        </li>
        <li>
          <Link to="/sectors" onClick={handleClick}>
            Sectors
          </Link>
        </li>
        <li>
          <Link to="/partners" onClick={handleClick}>
            Partners
          </Link>
        </li>
        <li>
          <Link to="/contactus" onClick={handleClick}>
            Contact Us
          </Link>
        </li>
        <li>
          <Link to="/faqs" onClick={handleClick}>
            FAQs
          </Link>
        </li>

        <FontAwesomeIcon
          icon={faXmark}
          onClick={closeNav}
          className="absolute top-[-1.4rem] right-[1.4rem] w-[2.2rem] h-[2.2rem] text-white"
        />
      </ul>
    </div>
  );
};

export default MobileHeader;

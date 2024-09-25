import React, { useState } from "react";
import Header from "./Header.js";
import MobileHeader from "./MobileHeader.tsx";
const ResHeader = () => {
  const [showNav, setShowNav] = useState(false);

  const showNavHandler = () => setShowNav(true);
  const closeNavHandler = () => setShowNav(false);

  return (
    <div>
      <Header openNav={showNavHandler} />
      <MobileHeader showNav={showNav} closeNav={closeNavHandler} />
    </div>
  );
};

export default ResHeader;

import { bool } from "prop-types";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const MenuHidden = ({ isHidden, showMenuHidden }) => {
  return (
    <div
      id="container-menu-sm-hidden"
      className={` ${isHidden ? "hidden" : ""} h-20 w-full`}
    >
      <div className="container-nav h-full w-full flex items-center justify-around font-mono font-semibold text-xl text-white bg-black rounded-md">
        <Link onClick={showMenuHidden} to={"about"}>
          About
        </Link>
        <Link onClick={showMenuHidden} to={"projects"}>
          Projects
        </Link>
        <Link onClick={showMenuHidden} to={"contact"}>
          Contact
        </Link>
      </div>
    </div>
  );
};

function MenuSM() {
  const [hidden, setHidden] = useState();

  const showMenuHidden = () => {
    setHidden(!hidden);
  };

  return (
    <div id="container-menu-sm" className="h-auto w-auto border">
      <MenuHidden isHidden={hidden} showMenuHidden={showMenuHidden} />
      <nav className="h-32 w-full flex flex-row text-2xl font-semibold font-mono">
        <div
          id="container-menu-left"
          className="flex flex-1 items-center justify-center"
        >
          <Link to={"/"}>Home</Link>
        </div>
        <div
          id="container-menu-center"
          className="flex flex-1 items-center justify-center text-3xl"
        >
          <Link to={"/"}>NeroCode</Link>
        </div>
        <div
          id="container-menu-right"
          className="flex flex-1 items-center justify-center"
        >
          <button onClick={showMenuHidden}>Menu</button>
        </div>
      </nav>
    </div>
  );
}

export default MenuSM;

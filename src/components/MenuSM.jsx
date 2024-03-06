import { bool } from "prop-types";
import React, { useState } from "react";
import { Link } from "react-router-dom";

import { FaHome } from "react-icons/fa";
import { TiThMenu } from "react-icons/ti";
import { IoClose } from "react-icons/io5";

const MenuHidden = ({ isHidden, showMenuHidden }) => {
  return (
    <div
      id="container-menu-sm-hidden"
      className={` ${isHidden ? "hidden" : ""} h-36 w-full`}
    >
      <div className="container-nav h-full w-full flex items-center justify-around font-mono font-semibold text-2xl text-white bg-black rounded-md">
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
  const [hidden, setHidden] = useState(true);

  const showMenuHidden = () => {
    setHidden(!hidden);
  };

  return (
    <div id="container-menu-sm" className="h-auto w-auto">
      <MenuHidden isHidden={hidden} showMenuHidden={showMenuHidden} />
      <nav className="h-32 w-full flex flex-row text-2xl font-semibold font-mono">
        <div
          id="container-menu-left"
          className="flex flex-1 items-center justify-center"
        >
          <Link to={"/"}>
            <FaHome size={50} />
          </Link>
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
          <button onClick={showMenuHidden}>
            {hidden ? <TiThMenu size={50} /> : <IoClose size={50} />}
          </button>
        </div>
      </nav>
    </div>
  );
}

export default MenuSM;

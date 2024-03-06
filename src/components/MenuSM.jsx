import React from "react";
import { Link } from "react-router-dom";

function MenuSM() {
  return (
    <>
      <h1>Menu</h1>
      <nav>
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/contact"}>Contact</Link>
      </nav>
    </>
  );
}

export default MenuSM;

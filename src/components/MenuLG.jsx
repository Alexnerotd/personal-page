import React from "react";
import { Link } from "react-router-dom";

import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";

function MenuLG() {
  return (
    <div className="container-menu-lg h-auto w-full">
      <nav className="h-36 w-full flex items-center justify-around font-semibold text-3xl font-mono border-b">
        <div
          id="container-menu-left"
          className="flex flex-1 items-center justify-center"
        >
          <Link className="text-5xl font-extrabold">NeroCode</Link>
        </div>
        <div
          id="container-menu-center"
          className="flex flex-1 items-center justify-around"
        >
          <Link
            to={"about"}
            className="hover:underline mr-5 active:underline focus:underline"
          >
            About
          </Link>
          <Link
            to={"projects"}
            className="hover:underline mr-5 active:underline focus:underline"
          >
            Projects
          </Link>
          <Link
            to={"contact"}
            className="hover:underline mr-5 active:underline focus:underline"
          >
            Contact
          </Link>
        </div>
        <div
          id="container-menu-right"
          className="flex flex-1 items-center justify-center gap-10 mt-5"
        >
          <Link>
            <FaGithubSquare size={60} />
          </Link>
          <Link>
            <FaLinkedin size={60} />
          </Link>
          <Link>
            <FaFacebookSquare size={60} />
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default MenuLG;

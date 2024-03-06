import React, { useEffect, useState } from "react";
import { Outlet } from "react-router";
import MenuSM from "../components/MenuSM";
import Home from "./Home";
import MenuLG from "../components/MenuLG";

function Layout() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleSize = () => {
      const width = window.innerWidth;
      setWidth(width);
    };

    window.addEventListener("resize", handleSize);

    return () => {
      window.removeEventListener("resize", handleSize);
    };
  }, []);
  return (
    <>
      <header>{width < 1000 ? <MenuSM /> : <MenuLG />}</header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </>
  );
}

export default Layout;

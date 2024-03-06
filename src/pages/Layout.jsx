import React from "react";
import { Outlet } from "react-router";
import MenuSM from "../components/MenuSM";
import Home from "./Home";

function Layout() {
  return (
    <>
      <header>
        <MenuSM />
      </header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </>
  );
}

export default Layout;

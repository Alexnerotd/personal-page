import React from "react";
import { Outlet } from "react-router";
import HomeSM from "../components/HomeSM";

function Home() {
  return (
    <>
      <div id="container-main-home">
        <HomeSM />
      </div>
      <Outlet />
    </>
  );
}

export default Home;

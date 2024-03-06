import React from "react";

import "../styles/homesm.css";

function HomeSM() {
  return (
    <div
      id="content-main-home"
      className="w-full flex justify-center h-36 mt-5"
    >
      <section
        id="section-main"
        className="bg-white border text-center rounded h-full w-80 flex flex-col items-center justify-center p-3"
      >
        <h1 className="font-mono text-3xl font-bold mb-5">
          My work is your best solution.
        </h1>
        <h2 className="flex gap-2 text-2xl font-bold font-mono">
          <p id="text-full" className="text-cyan-500">
            Full
          </p>
          <p id="text-stack" className="text-green-500">
            Stack
          </p>
          <p id="text-developer" className="text-blue-500">
            Developer
          </p>
        </h2>
      </section>
    </div>
  );
}

export default HomeSM;

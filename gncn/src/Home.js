import React from "react";
import Navbar from "./Navbar";
function index() {
  return (
    <div>
      {/* <Navbar /> */}
      <div className="hero">
        <div className="imagText">
          <h3 style={{ color: "white" }}>Hello in </h3>
          <h1 style={{ color: "white" }}>Communicate with your doctor</h1>
          <button>Start</button>
        </div>
      </div>
    </div>
  );
}

export default index;

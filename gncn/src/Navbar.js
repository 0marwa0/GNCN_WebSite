import React from "react";
import { BrowserRouter, Link } from "react-router-dom";

function index() {
  return (
    <div>
      <nav>
        <ul>
          <li id="lbl"> Remote Doctor Consultation</li>

          <li style={{ paddingRight: "13em" }}>
            <Link to="/doctors">Doctors</Link>
          </li>
          <li>
            <Link to="/">HOME</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default index;

import React from "react";
const index = () => {
  return (
    <div>
      <p id="hdr">CONTACT YOUR DOCTOR</p>
      <section>
        <div
          style={{ margin: "5em", marginLeft: "15em", position: "absolute" }}
        >
          <i className="fa fa-phone" style={{ fontSize: "14px" }}></i>
          <a href=""> 111-222-333</a>
          <br />
          <i className="fa fa-envelope" style={{ fontSize: "14px" }}></i>
          <a href=""> example@example.com</a>
          <br />
          <i className="fa fa-clock-o" style={{ fontSize: "14px" }}></i>
          <span> Mon-Fri 8:00 - 19:00</span>
        </div>
      </section>

      <section>
        <div id="formdiv">
          <form method="post">
            <input
              className="inpt"
              type="text"
              name="Name"
              placeholder="Name"
            />
            <input
              className="inpt"
              type="text"
              name="Phone"
              placeholder="Phone"
            />
            <br />
            <br />
            <input
              className="inpt"
              size="50"
              type="email"
              name="Email"
              placeholder="Email Address"
            />
            <br />
            <br />
            <textarea
              className="inpt"
              style={{ resize: "none" }}
              rows="5"
              cols="52"
              placeholder="Message"
            />
            <br />
            <br />
            <button>Contact Us</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default index;

import React from "react";
import { Link } from "react-router-dom";
import "../core/Navbar.css";
const Navbar = () => {
  return (
    <>
      <div id="header">
        <div className="row mx-5 pt-2">
          <div className="col-6 logo">
            {/* <h3 id="logo">My<span className="light-blue">job</span></h3> */}
            <Link to="/">
              <h4 id="logo">
                My<span className="light-blue">job</span>
              </h4>
            </Link>
          </div>
          <div className="col-6 buttonToggle">
            <Link to="/" class="float-right">
              <button className="btn btn-primary mb-2 bg-transparent">Login/Signup</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;

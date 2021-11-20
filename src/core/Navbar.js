import React, { useEffect, useState } from "react";
import {
  Link,
  useHistory,
  useLocation,
  withRouter,
  Redirect,
} from "react-router-dom";
import { isAuthenticated, signout } from "../auth";
import "../core/Navbar.css";
import ToastMessage from "./ToestMessage";
const Navbar = () => {
  let history = useHistory();
  // let location = useLocation();
  // useEffect(() => {
  // }, [location]);
  return (
    <>
      <div id="header">
        <div className="row mx-5 pt-2">
          <div className="col-6 logo">
            {/* <h3 id="logo">My<span className="light-blue">job</span></h3> */}
            <Link to="/">
              <h4 className="font-weight-bold" id="logo">
                My<span className="light-blue">job</span>
              </h4>
            </Link>
          </div>
          <div className="col-6 buttonToggle">
            {/* {console.log("isAuth" + isAuthenticated())} */}
            {isAuthenticated() ? (
              <Link to="/" class="float-right float-right">
                <button
                  className="btn btn-primary mb-2 bg-transparent "
                  onClick={() =>
                    signout(() => {
                      history.push("/");
                      <Redirect to="/" />;
                      // <ToastMessage toastfun={true} />;
                    })
                  }
                >
                  Logout
                </button>
              </Link>
            ) : (
              <Link to="/signin" class="float-right">
                <button className="btn btn-primary mb-2 bg-transparent">
                  Login/Signup
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;

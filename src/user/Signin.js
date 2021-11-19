import React, { useState } from "react";
import { Link } from "react-router-dom";
import { signin } from "../auth";
import "../user/Signin.css";

function Singin() {
  const [errors, setErrors] = useState({
    emailError: "",
    passwordError: "",
  });
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const { emailError, passwordError } = errors;
  const { email, password } = values;
  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const clickSubmit = (event) => {
    event.preventDefault();
    //send to server
    signin({ email, password }).then((data) => {
      // console.log("data" + JSON.stringify(data));
      if (data.message) {
        setErrors({
          message: data.message,
        });
      } else {
        data.errors.map((e) => {
          if ("email" in e) {
            return setErrors({ emailError: Object.values(e)[0] });
          } else if ("password" in e) {
            return setErrors({ passwordError: Object.values(e)[0] });
          }
          return "";
        });
      }

      setValues({
        email: "",
        password: "",
      });
    });
  };

  return (
    <>
      <div className="container-fluid section1">
        <div className="row justify-content-center section1row">
          <div className="col-md-5 signinformsection ">
            <form className="bg-white p-4 text-dark round ">
              <h4 className="">Login</h4>

              <div className="form-group">
                <label for="inputEmail">Email address*</label>
                <input
                  type="email"
                  className="form-control form-control-lg"
                  value={email}
                  onChange={handleChange("email")}
                  id="inputEmail"
                  aria-describedby="emailHelp"
                  placeholder="Enter your email"
                />
                <small>
                  {emailError ? (
                    <label for="inputName" className="text-danger">
                      {emailError}
                    </label>
                  ) : (
                    ""
                  )}
                </small>
              </div>
              <div className="form-group">
                <label for="inputPassword">Password*</label>
                <input
                  type="password"
                  className="form-control form-control-lg"
                  value={password}
                  onChange={handleChange("password")}
                  id="inputPassword"
                  aria-describedby="passwordHelp"
                  placeholder="Enter your password"
                />
                <small>
                  {passwordError ? (
                    <label for="inputName" className="text-danger">
                      {passwordError}
                    </label>
                  ) : (
                    ""
                  )}
                </small>
              </div>

              <div className="row p-4 ">
                <div className="col center">
                  <button
                    type="submit"
                    onClick={clickSubmit}
                    className="btn pl-4 pr-4 btn-primary btn-lg mb-5 center "
                  >
                    Login
                  </button>
                  <p>
                    New to MyJobs?
                    <span>
                      <Link className="text-primary" to="/signup">
                        Create an account
                      </Link>
                    </span>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="container-fluid signinSection2"></div>
    </>
  );
}

export default Singin;

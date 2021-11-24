import React, { useState } from "react";
import { Link, useHistory, Redirect } from "react-router-dom";
import { authenticate, isAuthenticated, signup } from "../auth";
import Navbar from "../core/Navbar";
import "../user/Signup.css";

function Signup() {
  var history = useHistory();

  const [errors, setErrors] = useState({
    message: "",
    nameError: "",
    emailError: "",
    passwordError: "",
    confirmPasswordError: "",
  });
  const [values, setValues] = useState({
    email: "",
    userRole: "",
    password: "",
    confirmPassword: "",
    name: "",
    skills: "",
    referToDashboard: false,
  });

  const [toggleBtn, settoggleBtn] = useState({
    toggle1: "btn btn-outline-primary m-2 toggleBtn active",
    toggle2: "btn btn-outline-primary m-2 toggleBtn",
  });
  var eError = "";
  var nError = "";
  var pError = "";
  var cError = "";
  const { message, nameError, emailError, passwordError,confirmPasswordError } = errors;
  const {
    email,
    userRole,
    password,
    confirmPassword,
    name,
    skills,
    referToDashboard,
  } = values;
  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const clickSubmit = (event) => {
    event.preventDefault();
    //send to server
    signup({ email, userRole, password, confirmPassword, name, skills }).then(
      (data) => {
        // console.log("data" + JSON.stringify(data));
        if (data.message) {
          setErrors({
            message: data.message,
          });
        } else if (data.errors) {
          data.errors.map((e) => {
            if ("email" in e) {
              eError = Object.values(e)[0];
            }
            if ("name" in e) {
              nError = Object.values(e)[0];
            }
            if ("password" in e) {
              pError = Object.values(e)[0];
            }
            if ("confirmPassword" in e) {
              cError = Object.values(e)[0];
            }
            return "";
          });
          setErrors({
            emailError: eError,
            nameError: nError,
            passwordError: pError,
            confirmPasswordError: cError,
          });
        } else {
          authenticate(data, () => {
            setValues({ ...values, referToDashboard: true });
            setValues({
              email: "",
              userRole: "",
              password: "",
              confirmPassword: "",
              name: "",
              skills: "",
            });
          });
        }
      }
    );
  };

  const redirectUser = () => {
    if (referToDashboard && isAuthenticated().data.userRole === 1) {
      history.push("/candidatedashboard");
      return <Redirect to="/candidatedashboard" />;
    }
    if (referToDashboard && isAuthenticated().data.userRole === 0) {
      history.push("/recruiterdashboard");
      return <Redirect to="/recruiterdashboard" />;
    }
  };

  return (
    <>
      {" "}
      <Navbar />
      <div className="container-fluid section1">
        <div className="row justify-content-center section1row">
          <div className="col-md-5 signupformsection ">
            <form className="bg-white p-4 text-dark round ">
              <h4 className="">Signup</h4>
              {message ? <p className="text-danger m-0">{message}</p> : ""}
              <label for="btnToggle" className="mt-4">
                I'm a*
              </label>
              <br />
              <div id="btnToggle" className="row">
                <button
                  type="button"
                  onClick={() => {
                    setValues({ ...values, userRole: 0 });
                    settoggleBtn({
                      toggle1: "btn btn-outline-primary m-2 active toggleBtn",
                      toggle2: "btn btn-outline-primary m-2 toggleBtn",
                    });
                  }}
                  className={toggleBtn.toggle1}
                >
                  Recruiter
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setValues({ ...values, userRole: 1 });
                    settoggleBtn({
                      toggle1: "btn btn-outline-primary m-2 toggleBtn",
                      toggle2: "btn btn-outline-primary active m-2 toggleBtn",
                    });
                  }}
                  className={toggleBtn.toggle2}
                >
                  Candidate
                </button>
              </div>

              <div className="form-group">
                <label for="inputName">Full Name*</label>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  value={name}
                  onChange={handleChange("name")}
                  id="inputName"
                  aria-describedby="nameHelp"
                  placeholder="Enter your full name"
                />
                <small>
                  {nameError ? (
                    <label for="inputName" className="text-danger">
                      {nameError}
                    </label>
                  ) : (
                    ""
                  )}
                </small>
              </div>
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
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="inputPassword">Password*</label>
                  <input
                    type="password"
                    class="form-control form-control-lg"
                    value={password}
                    onChange={handleChange("password")}
                    id="inputPassword"
                    placeholder="Enter your password"
                  />
                </div>
                <div class="form-group col-md-6">
                  <label for="inputPassword4">Confirm Password*</label>
                  <input
                    type="password"
                    class="form-control form-control-lg"
                    value={confirmPassword}
                    onChange={handleChange("confirmPassword")}
                    id="ConfirmInputPassword"
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
                    {confirmPasswordError ? (
                      <label for="inputName" className="text-danger">
                        {confirmPasswordError}
                      </label>
                    ) : (
                      ""
                    )}
                  </small>
                </div>
              </div>
              <div className="form-group">
                <label for="inputName">Skills</label>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  value={skills}
                  onChange={handleChange("skills")}
                  id="inputSkill"
                  aria-describedby="skillHelp"
                  placeholder="Enter comma seprated skills"
                />
              </div>
              <div className="row p-4 ">
                <div className="col center">
                  <button
                    type="submit"
                    onClick={clickSubmit}
                    className="btn pl-4 pr-4 btn-primary btn-lg mb-5 center "
                  >
                    Signup
                  </button>
                  <p>
                    Have an account?{" "}
                    <span>
                      <Link className="text-primary" to="/signin">
                        Login
                      </Link>
                    </span>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="container-fluid signupSection2"></div>
      {redirectUser()}
    </>
  );
}

export default Signup;

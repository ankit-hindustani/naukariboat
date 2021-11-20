import React, { useState } from "react";
import { Link,useHistory,Redirect } from "react-router-dom";
import { authenticate, signup } from "../auth";
import "../user/Signup.css";

function Signup() {
  var history = useHistory();

  const [errors, setErrors] = useState({
    message: "",
    nameError: "",
    emailError: "",
    passwordError: "",
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
  //change userRole to Integer
  values.userRole = Number(values.userRole);
  const { message, nameError, emailError, passwordError } = errors;
  const { email, userRole, password, confirmPassword, name, skills,referToDashboard } = values;
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
        }else if(data.errors){
          data.errors.map((e) => {
            if ("email" in e) {
              return setErrors({ emailError: Object.values(e)[0] });
            } else if ("name" in e) {
              return setErrors({ nameError: Object.values(e)[0] });
            } else if ("password" in e) {
              return setErrors({ passwordError: Object.values(e)[0] });
            }
            return "";
          });
        }else {
          authenticate(data, () => {
            setValues({ ...values,referToDashboard:true });
          });
        }

        setValues({
          email: "",
          userRole: "",
          password: "",
          confirmPassword: "",
          name: "",
          skills: "",
        });
      }
    );
  };

  const redirectUser = () => {
    if (referToDashboard) {
      history.push("/dashboard");
        return <Redirect to="/dashboard" />
    }
  };

  return (
    <>
      <div className="container-fluid section1">
        <div className="row justify-content-center section1row">
          <div className="col-md-5 signupformsection ">
            <form className="bg-white p-4 text-dark round ">
              <h4 className="">Signup</h4>
              {message?<p className="text-danger m-0">{message}</p>:""}
              <label for="btnToggle" className="mt-4">
                I'm a*
              </label>
              <br />
              <div
                id="btnToggle"
                class="btn-group"
                role="group"
                aria-label="Basic radio toggle button group"
              >
                <input
                  type="radio"
                  class="btn-check hideCircle"
                  value="1"
                  onChange={handleChange("userRole")}
                  name="role"
                  id="btnradioRecruiter"
                  autocomplete="off"
                />
                <label class="btn btn-outline-primary mr-3" for="btnradio1">
                  Recruiter
                </label>

                <input
                  type="radio"
                  class="btn-check hideCircle"
                  value="0"
                  onChange={handleChange("userRole")}
                  name="role"
                  id="btnradioCandidate"
                  autocomplete="off"
                />
                <label class="btn btn-outline-primary" for="btnradio3">
                  Candidate
                </label>
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
                  {nameError?<label for="inputName" className="text-danger">
                    {nameError}</label>:""}
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
                {emailError?<label for="inputName" className="text-danger">
                    {emailError}</label>:""}
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
                  {passwordError?<label for="inputName" className="text-danger">
                    {passwordError}</label>:""}
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

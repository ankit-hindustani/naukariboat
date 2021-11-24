import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { authenticate, resetPassword } from "../auth";
import Navbar from "../core/Navbar";
import "../user/ForgetPassword.css";

function ForgetPassword() {
  const [errors, setErrors] = useState({
    message: "",
  });
  const [values, setValues] = useState({
    email: "",
    referToDashboard: false,
  });

  const { message } = errors;
  const { email, referToDashboard } = values;
  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const clickSubmit = (event) => {
    event.preventDefault();
    //send to server

    resetPassword(email).then((data) => {
      console.log("data" + JSON.stringify(data));
      if (data.message) {
        setErrors({
          message: data.message,
        });
      } else {
        authenticate(data, () => {
          setValues({ ...values, referToDashboard: true });
        });
      }

      setValues({
        email: "",
      });
    });
  };

  const redirectUser = () => {
    if (referToDashboard) {
      return <Redirect to="/resetpassword" />;
    }
  };
  return (
    <>
      <Navbar />
      <div className="container-fluid section1">
        <div className="row justify-content-center section1row">
          <div className="col-md-5 formsection ">
            <form className="bg-white p-4 text-dark round ">
              <h4 className="">Forget your password?</h4>
              {message ? <p className="text-danger m-0">{message}</p> : ""}
              <small class="form-text pt-3 pb-3">
                Enter the email associated with your account and we'll send you
                instructions to reset your password.{" "}
              </small>
              <div className="form-group">
                <label for="inputEmail">Email address</label>
                <input
                  type="email"
                  className="form-control form-control-lg"
                  id="inputEmail"
                  value={email}
                  onChange={handleChange("email")}
                  aria-describedby="emailHelp"
                  placeholder="Enter your email"
                />
              </div>

              <div className="row p-4 ">
                <div className="col center">
                  <button
                    type="submit"
                    onClick={clickSubmit}
                    className="btn pl-4 pr-4 btn-primary btn-lg mb-5 center "
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="container-fluid forgetSection2"></div>
      {redirectUser()}
    </>
  );
}

export default ForgetPassword;

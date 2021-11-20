import React, { useState } from "react";
import { Link } from "react-router-dom";
import { isAuthenticated, updatePassword } from "../auth";
import Navbar from "../core/Navbar";
import "../user/ResetPassword.css";

function ResetPassword() {
  const [errors, setErrors] = useState({
    message: "",
    success: false,
  });
  const [values, setValues] = useState({
    password: "",
    confirmPassword: "",
    referToDashboard: false,
  });

  const { message, success } = errors;
  const { password, confirmPassword } = values;
  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };
  const token = isAuthenticated().data.token;

  const clickSubmit = (event) => {
    event.preventDefault();
    //sending to server
    updatePassword({ password, confirmPassword, token }).then((data) => {
      // console.log("data" + JSON.stringify(data));
      if (data.message) {
        setErrors({
          message: data.message,
          success: data.success,
        });
      } else {
        setValues({ ...values });
      }

      setValues({
        password: "",
        confirmPassword: "",
      });
    });
  };

  // const redirectUser = () => {
  //   if (referToDashboard) {
  //     history.push("/dashboard");
  //     return <Redirect to="/dashboard" />;
  //   }
  // };

  return (
    <><Navbar/>
      <div className="container-fluid section1">
        <div className="row justify-content-center section1row">
          <div className="col-md-5 formsection ">
            <form className="bg-white p-4 text-dark round ">
              <h4 className="">Reset your password</h4>
              {success ? (
                message ? (
                  <p className="text-success m-0">{message} <Link className="text-primary" to="/signin">Signin</Link></p>
                ) : (
                  ""
                )
              ) : message ? (
                <p className="text-danger m-0">{message}</p>
              ) : (
                ""
              )}
              {}

              <div className="form-group">
                <label for="inputPassword">New Password</label>
                <input
                  type="password"
                  className="form-control form-control-lg"
                  value={password}
                  onChange={handleChange("password")}
                  id="password"
                  placeholder="Password"
                />
              </div>
              <div className="form-group">
                <label for="confirmPassword">Confirm New Password</label>
                <input
                  type="password"
                  className="form-control form-control-lg"
                  value={confirmPassword}
                  onChange={handleChange("confirmPassword")}
                  id="confirmPassword"
                  placeholder="Password"
                />
              </div>

              <div className="row p-4 ">
                <div className="col center">
                  <button
                    type="submit"
                    onClick={clickSubmit}
                    className="btn pl-4 pr-4 btn-primary btn-lg mb-5 center "
                  >
                    Reset
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="container-fluid resetSection2"></div>
    </>
  );
}

export default ResetPassword;

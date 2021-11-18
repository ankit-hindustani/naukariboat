import React from "react";
import { Link } from "react-router-dom";
import "../user/ForgetPassword.css";

function ForgetPassword() {
  return (
    <>
      <div className="container-fluid section1">
        <div className="row justify-content-center section1row">
          <div className="col-md-5 formsection ">
            <form className="bg-white p-4 text-dark round ">
            <h4 className="">Forget your password?</h4>
            <small class="form-text pt-3 pb-3">Enter the email associated with your account and we'll send you instructions to reset your password. </small>
              <div className="form-group">
                <label for="inputEmail">Email address</label>
                <input
                  type="email"
                  className="form-control form-control-lg"
                  id="inputEmail"
                  aria-describedby="emailHelp"
                  placeholder="Enter your email"
                />
              </div>
              
              
              <div className="row p-4 ">
                <div className="col center">
                <button type="submit" className="btn pl-4 pr-4 btn-primary btn-lg mb-5 center ">
                 Submit 
              </button>
                </div>
            </div>
            </form>
            
          </div>
        </div>
      </div>
      <div className="container-fluid forgetSection2"></div>
    </>
  );
}

export default ForgetPassword;

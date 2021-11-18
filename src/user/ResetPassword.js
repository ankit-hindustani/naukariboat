import React from "react";
import { Link } from "react-router-dom";
import "../user/ResetPassword.css";

function ResetPassword() {
  return (
    <>
      <div className="container-fluid section1">
        <div className="row justify-content-center section1row">
          <div className="col-md-5 formsection ">
            <form className="bg-white p-4 text-dark round ">
            <h4 className="">Reset your password</h4>
              <div className="form-group">
                <label for="inputPassword">New Password</label>
                <input
                  type="password"
                  className="form-control form-control-lg"
                  id="inputPassword"
                  placeholder="Password"
                />
              </div>
              <div className="form-group">
                <label for="inputPassword">Confirm New Password</label>
                <input
                  type="password"
                  className="form-control form-control-lg"
                  id="inputPassword"
                  placeholder="Password"
                />
              </div>
              
              <div className="row p-4 ">
                <div className="col center">
                <button type="submit" className="btn pl-4 pr-4 btn-primary btn-lg mb-5 center ">
                 Reset 
              </button>
                </div>
            </div>
            </form>
            
          </div>
        </div>
      </div>
      <div className="container-fluid signSection2"></div>
    </>
  );
}

export default ResetPassword;

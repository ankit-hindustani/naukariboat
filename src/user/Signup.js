import React from "react";
import { Link } from "react-router-dom";
import "../user/Signup.css";

function Signup() {
  return (
    <>
      <div className="container-fluid section1">
        <div className="row justify-content-center section1row">
          <div className="col-md-5 formsection ">
            <form className="bg-white p-4 text-dark round ">
              <h4 className="">Signup</h4>
              <div className="form-group">
                <label for="inputName">Full Name*</label>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  id="inputName"
                  aria-describedby="nameHelp"
                  placeholder="Enter your full name"
                />
              </div>
              <div className="form-group">
                <label for="inputEmail">Email address*</label>
                <input
                  type="email"
                  className="form-control form-control-lg"
                  id="inputEmail"
                  aria-describedby="emailHelp"
                  placeholder="Enter your email"
                />
              </div>
              <div class="form-row">
                <div class="form-group col-md-6">
                <label for="inputPassword">Password*</label>
                  <input
                    type="password"
                    class="form-control form-control-lg"
                    id="inputPassword"
                    placeholder="Enter your password"
                  />
                </div>
                <div class="form-group col-md-6">
                  <label for="inputPassword4">Confirm Password*</label>
                  <input
                    type="password"
                    class="form-control form-control-lg"
                    id="ConfirmInputPassword"
                    placeholder="Enter your password"
                  />
                </div>
              </div>
              <div className="form-group">
                <label for="inputName">Skills</label>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  id="inputSkill"
                  aria-describedby="skillHelp"
                  placeholder="Enter comma seprated skills"
                />
              </div>
              <div className="row p-4 ">
                <div className="col center">
                  <button
                    type="submit"
                    className="btn pl-4 pr-4 btn-primary btn-lg mb-5 center "
                  >
                    Signup
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

export default Signup;

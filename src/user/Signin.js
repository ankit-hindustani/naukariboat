import React from "react";
import { Link } from "react-router-dom";
import "../user/Signin.css";

function Singin() {
  return (
    <>
      <div className="container-fluid section1">
        <div className="row justify-content-center section1row">
          <div className="col-md-5 formsection ">
            <form className="bg-white p-4 text-dark round ">
            <h4 className="">Login</h4>

              <div className="form-group">
                <label for="inputEmail">Email address</label>
                <input
                  type="email"
                  className="form-control form-control-lg"
                  id="inputEmail"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
              </div>
              <div className="form-group">
                <label for="inputPassword">Password</label>
                <Link to="/forgetpassword" className="float-right text-primary">Forget your password?</Link>
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
                 Login 
              </button>
                    <p>New to MyJobs?<span ><Link className="text-primary" to="/signup">Create an account</Link></span></p>
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

export default Singin;

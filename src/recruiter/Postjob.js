import React, { useState } from "react";
import { Link, useHistory, Redirect } from "react-router-dom";
import { isAuthenticated, postjob } from "../auth";
import Navbar from "../core/Navbar";
import "../recruiter/Postjob.css";

function Postjob() {
  var history = useHistory();
  const [errors, setErrors] = useState({
    message: "",
    titleError: "",
    descriptionError: "",
    locationError: "",
  });
  const [values, setValues] = useState({
    title: "",
    description: "",
    location: "",
    referToDashboard: false,
  });

  const { message, titleError, descriptionError, locationError } = errors;
  const { title, description, location, referToDashboard } = values;
  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const clickSubmit = (event) => {
    event.preventDefault();
    //send to server
    postjob({ title, description, location }).then((data) => {
    //   console.log("data response" + JSON.stringify(data));
      if (data.message) {
        setErrors({
          message: data.message,
        });
      } else if (data.errors) {
        data.errors.map((e) => {
          if ("title" in e) {
            setErrors({ titleError: Object.values(e)[0] });
          }
          if ("description" in e) {
            setErrors({ descriptionError: Object.values(e)[0] });
          }
          if ("location" in e) {
            setErrors({ locationError: Object.values(e)[0] });
          }
          return "";
        });
      } else if(data.success){
        setValues({ ...values, referToDashboard: true });
      }

      setValues({
        title: "",
        description: "",
        location: "",
      });
    });
  };

  const redirectUser = () => {
    if (referToDashboard && isAuthenticated().data.userRole === 0) {
      history.push("/recruiterdashboard");
      return <Redirect to="/recruiterdashboard" />;
    }
  };

  return (
    <>
    <Navbar/>
      <div className="container-fluid section1">
        <div className="row justify-content-center section1row">
          <div className="col-md-5 postJobSection ">
            <form className="bg-white p-4 text-dark round ">
              <h4 className="">Post a job</h4>
              <div className="form-group">
                <label for="inputtitle">Job title*</label>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  value={title}
                  onChange={handleChange("title")}
                  id="inputtitle"
                  aria-describedby="titleHelp"
                  placeholder="Enter job title"
                />
                <small>
                  {titleError ? (
                    <label for="inputName" className="text-danger">
                      {titleError}
                    </label>
                  ) : (
                    ""
                  )}
                </small>
              </div>
              <div className="form-group">
                <label for="inputDescription">description*</label>
                <textarea
                  class="form-control form-control-lg"
                  id="inputDescription"
                  value={description}
                  onChange={handleChange("description")}
                  placeholder="Enter job description"
                  rows="3"
                ></textarea>
                <small>
                  {descriptionError ? (
                    <label for="inputName" className="text-danger">
                      {descriptionError}
                    </label>
                  ) : (
                    ""
                  )}
                </small>
              </div>
              <div className="form-group">
                <label for="inputTitle">Location*</label>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  value={location}
                  onChange={handleChange("location")}
                  id="inputLocation"
                  aria-describedby="titleHelp"
                  placeholder="Enter location"
                />
                <small>
                  {locationError ? (
                    <label for="inputName" className="text-danger">
                      {locationError}
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
                    Post
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="container-fluid postJobSection2"></div>
      {redirectUser()}
    </>
  );
}

export default Postjob;

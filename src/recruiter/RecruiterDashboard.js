import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { isAuthenticated } from "../auth";
import { API } from "../config";
import Navbar from "../core/Navbar";
import "../recruiter/RecruiterDashboard.css";
import ApplicationModel from "./ApplicationModel";

function RecruiterDashboard() {
  const [data, setData] = useState(null);
  const [applicantsData, setapplicantsData] = useState(null);
  const [applicantsLoading, setapplicantsLoading] = useState(true);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pageNum, setPageNum] = useState(1);
  const [message, setMessage] = useState(null);
  const [applicantsMessage, setapplicantsMessage] = useState(null);
  const [modalShow, setModalShow] = useState(false);
    useEffect(() => {
      fetch(`${API}/recruiters/jobs?page=${pageNum}`, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: isAuthenticated().data.token,
        },
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          // console.log("data recruiter response = " + data);
          if (data.data) {
            setData(data.data.data);
          } else if (data.message) {
            setMessage(data.message);
            setData(null);
          } else if (data.name) {
            setError(data.name);
          }
        })
        .catch((err) => {
          console.log("err= " + err);
        })
        .finally(() => {
          setLoading(false);
        });
    }, [pageNum]);

  const fetchApplicants = (id) => {
    fetch(`${API}/recruiters/jobs/${id}/candidates`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: isAuthenticated().data.token,
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // console.log("data applicants response = " + data);
        if (data.data) {
          setapplicantsData(data.data);
        } else if (data.message) {
          setapplicantsMessage(data.message);
          setapplicantsData(null);
        } else if (data.name) {
          setError(data.name);
        }
      })
      .catch((err) => {
        console.log("err= " + err);
      })
      .finally(() => {
        setapplicantsLoading(false);
      });
  };

  return (
    <>
      <Navbar />
      <div className="container-fluid dashSection1">
        <div className="container pt-2">
          <div className="row  pb-4">
            <div className="col-6">
              <h5 className="text-white font-weight-bold">Job posted by you</h5>
            </div>
            <div className="col-6 float-right">
              <div className="float-right">
                <Link
                  to="/postjob"
                  className="text-secondary font-weight-bold "
                >
                  Post a Job
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid section2">
        <div className="container jobContainer">
          <div className="row justify-content-center">
            {loading ? <h4>Loading...</h4> : ""}

            {data ? (
              data.map((data) => {
                return (
                  <div className="col-md-3 m-2 p-4 bg-white rounded">
                    <div>
                      <h5 className="row light-blue pr-3">{data.title}</h5>
                    </div>
                    <div className="row">
                      <p className="text-justify textTruncate">
                        {data.description}
                      </p>
                    </div>
                    <div className="row">
                      <div className="col-6">
                        <i className="fa fa-map-marker-alt text-primary"></i>{" "}
                        {data.location}
                      </div>
                      <div className="col-6">
                        <button
                          className="btn btn-info btn-sm"
                          onClick={() => {
                            setModalShow(true);
                            fetchApplicants(data.id);
                            
                          }}
                        >
                          View Applications
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : message ? (
              <h4 className="text-muted">{message}</h4>
            ) : (
              ""
            )}

            {!data && !message ? (
              <div className="container">
                <div className="row mt-5 pt-5 justify-content-center">
                  <div className="">
                    <i class="fas fa-edit text-muted fa-6x "></i>
                  </div>
                </div>

                <div className="row">
                  <div className="m-auto pt-3">
                    <h5 className="text-muted ">
                      Your posted jobs will show here!
                    </h5>
                  </div>
                </div>
                <div className="row">
                  <div className="m-auto pt-3">
                    <Link to="/postjob">
                      <button className="btn btn-info">Post a Job</button>
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="container">
          <div className="row justify-content-center">
            {/* modal start */}

            <ApplicationModel
              show={modalShow}
              onHide={() => setModalShow(false)}
              data={applicantsData}
              message={applicantsMessage}
              loading={applicantsLoading}
              
            />

            {/* modal end */}
            <div className="">
              <button
                className="btn btn-primary"
                onClick={() => {
                  if (pageNum > 1) {
                    setPageNum(pageNum - 1);
                  }
                }}
              >
                {"<"}
              </button>
              <i>current page {pageNum}</i>
              <button
                className="btn btn-primary"
                onClick={() => {
                  setPageNum(pageNum + 1);
                }}
              >
                {">"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RecruiterDashboard;

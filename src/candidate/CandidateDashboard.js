import React, { useEffect, useState } from "react";
import { API } from "../config";
import "../candidate/CandidateDashboard.css";
import Navbar from "../core/Navbar";

function CandidateDashboard() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pageNum, setPageNum] = useState(1);
  const [message, setMessage] = useState(null);
  useEffect(() => {
    fetch(`${API}/jobs?page=${pageNum}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data.data) {
          console.log("data= " + data.data);
          setData(data.data);
        } else if (data.message) {
          setMessage(data.message);
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
  return (
    <>
    <Navbar/>
      <div className="container-fluid dashSection1">
        <div className="container pt-2">
          <div className="row  pb-4">
            <h5 className="text-white font-weight-bold">All jobs</h5>
          </div>
        </div>
      </div>
      <div className="container-fluid section2">
        <div className="container jobContainer">
          <div className="row justify-content-center">
            {loading ? <h4>Loading...</h4> : ""}
            {message ? <h4>{message}</h4> : ""}


            {data?data.map((data)=>{
                return <div className="col-md-3 m-2 p-4 bg-white rounded">
              <div>
                <h5 className="row light-blue pr-3">{data.title}</h5>
              </div>
              <div className="row">
                <p className="text-justify textTruncate">
                 {data.description}
                </p>
                
              </div>
              <div className="row">
                    <div className="col-6"><i className="fa fa-map-marker-alt text-primary"></i> {data.location}</div>
                    <div className="col-6">
                        <button className="btn btn-info btn-sm">View Applicatants</button>
                    </div>
                </div>
            </div>
            }):""}
            


          </div>
        </div>
        <div className="container">
          <div className="row justify-content-center pl-5">
            <div className="col-md-3 ">
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

export default CandidateDashboard;

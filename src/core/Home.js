import React from "react";
import { Link } from "react-router-dom";
import "../core/Home.css";

import ladyImg from "../images/lady-computer-2-copy-1.jpg";
import amara from "../images/amara.png";
import goldline from "../images/goldline.png";
import hexa from "../images/hexa.png";
import lightai from "../images/lighai.jpg";
import kanba from "../images/kanba.png";
import liva from "../images/liva.png";
import solaytic from "../images/solaytic.png";
import velocity from "../images/velocity.png";
import ztos from "../images/ztos.png";

function Home() {
  return (
    <>
      <div className="container-fluid section1">
        <div className="container pt-4">
          <div className="row mt-5 section1row">
            <div className="col-md-6">
              <h1 className="display-4">Welocome to</h1>
              <h1 className="font-weight-bold display-4">
                My<span className="light-blue">Jobs</span>
              </h1>
              <Link to="/signup">
                <button className="btn btn-info btn-lg mr-3 mt-3 mb-3">
                  Get Started
                </button>
              </Link>
            </div>
            <div className=" col-md-6 marginNagetive">
              <img
                src={ladyImg}
                className="shadow img-fluid rounded"
                alt="picute"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid section2 pt-5">
        <div className="container pt-5">
          <div className="row pl-3">
            <h4 className="text-secondary font-weight-bold">Why us</h4>
          </div>
          <div className="row justify-content-between">
            <div className="col-md-3 m-3 p-5 bg-white rounded">
              <div>
                <h4 className="row light-blue pr-3">Get More Visibiltiy</h4>
              </div>
              <div className="row">
                <p className="text-justify">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Sapiente eaque qui libero nobis adipisci, nihil voluptatem non
                  velit explicabo porro.
                </p>
              </div>
            </div>
            <div className="col-md-3  m-3  p-5 bg-white rounded">
              <div className="row ">
                <h4 className="row light-blue">Organise Your Condidate</h4>
              </div>
              <div className="row">
                <p className="text-justify">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Facilis magnam ipsum, eum mollitia doloribus harum saepe
                  obcaecati vel dolores magni.
                </p>
              </div>
            </div>
            <div className="col-md-3  m-3 p-5 bg-white rounded">
              <div className="row">
                <h4 className="row light-blue">Verify Their Availity</h4>
              </div>
              <div className="row">
                <p className="text-justify">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perspiciatis architecto harum velit! Repellat tempora
                  reiciendis laborum praesentium distinctio aut dolores?.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container pt-5 pb-5">
          <div className="row pl-3 ">
            <h4 className="text-secondary font-weight-bold">
              Companies Who Trust Us
            </h4>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-2 m-2">
              <img src={amara} className="img-fluid companyImg" alt="amara" />
            </div>
            <div className="col-md-2 m-2">
              <img
                src={goldline}
                className="img-fluid companyImg"
                alt="goldline"
              />
            </div>
            <div className="col-md-2 m-2">
              <img src={hexa} className="img-fluid companyImg" alt="hexa" />
            </div>
            <div className="col-md-2 m-2">
              <img
                src={lightai}
                className="img-fluid companyImg"
                alt="lightai"
              />
            </div>
            <div className="col-md-2 m-2">
              <img src={kanba} className="img-fluid companyImg" alt="kanba" />
            </div>
            <div className="col-md-2 m-2">
              <img src={liva} className="img-fluid companyImg" alt="liva" />
            </div>
            <div className="col-md-2 m-2">
              <img
                src={solaytic}
                className="img-fluid companyImg"
                alt="solaytic"
              />
            </div>
            <div className="col-md-2 m-2">
              <img
                src={velocity}
                className="img-fluid companyImg"
                alt="velocity"
              />
            </div>
            <div className="col-md-2 m-2">
              <img src={ztos} className="img-fluid companyImg" alt="ztos" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;

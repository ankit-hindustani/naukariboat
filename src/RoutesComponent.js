import React from "react";
import { BrowserRouter,Routes, Route } from "react-router-dom";
import App from "./App";
import Home from "./core/Home";
import Navbar from "./core/Navbar";
import ResetPassword from "./user/ResetPassword";
import Singin from "./user/Signin";
import Signup from "./user/Signup";

//Switch to Routes in V6.
const RoutesComponent = () => {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/"  element={<Home/>} />
        <Route path="/signin"  element={<Singin/>} />
        <Route path="/signup"  element={<Signup/>} />
        <Route path="/resetpassword"  element={<ResetPassword/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesComponent;

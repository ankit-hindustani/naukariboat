import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./App";
import CandidateRoute from "./auth/PrivateRoute";
import RecruiterRoute from "./auth/RecruiterRoute";
import CandidateDashboard from "./candidate/CandidateDashboard";
import Home from "./core/Home";
import Navbar from "./core/Navbar";
import Postjob from "./recruiter/Postjob";
import RecruiterDashboard from "./recruiter/RecruiterDashboard";
import ForgetPassword from "./user/ForgetPassword";
import ResetPassword from "./user/ResetPassword";
import Singin from "./user/Signin";
import Signup from "./user/Signup";

//Switch to Routes in V6.
const RoutesComponent = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/signin" exact component={Singin} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/forgetpassword" exact component={ForgetPassword} />
        
        <CandidateRoute path="/resetpassword" exact component={ResetPassword} />
        <CandidateRoute path="/candidatedashboard" exact component={CandidateDashboard} />
        <RecruiterRoute path="/resetpassword" exact component={ResetPassword} />
        <RecruiterRoute path="/recruiterdashboard" exact component={RecruiterDashboard} />
        <RecruiterRoute path="/postjob" exact component={Postjob} />

      

      </Switch>
      
    </BrowserRouter>
  );
};

export default RoutesComponent;

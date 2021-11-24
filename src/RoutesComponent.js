import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CandidateRoute from "./auth/CandidateRoute";
import PrivateRoute from "./auth/PrivateRoute";
import RecruiterRoute from "./auth/RecruiterRoute";
import CandidateDashboard from "./candidate/CandidateDashboard";
import Home from "./core/Home";
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
      {/* <Navbar /> */}
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/signin" exact component={Singin} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/forgetpassword" exact component={ForgetPassword} />
        
        <PrivateRoute path="/resetpassword" exact component={ResetPassword} />

        <CandidateRoute path="/candidatedashboard" exact component={CandidateDashboard} />
        
        <RecruiterRoute path="/recruiterdashboard" exact component={RecruiterDashboard} />
        <RecruiterRoute path="/postjob" exact component={Postjob} />

      

      </Switch>
      
    </BrowserRouter>
  );
};

export default RoutesComponent;

import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./App";
import PrivateRoute from "./auth/PrivateRoute";
import Home from "./core/Home";
import Navbar from "./core/Navbar";
import Dashboard from "./user/Dashboard";
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
        <Route path="/resetpassword" exact component={ResetPassword} />
        <Route path="/forgetpassword" exact component={ForgetPassword} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
      </Switch>
      
    </BrowserRouter>
  );
};

export default RoutesComponent;

import React, { Component } from "react";
import { Redirect, Route } from "react-router";
import { isAuthenticated } from ".";

const RecruiterRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated() && isAuthenticated().data.userRole === 0 ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{ pathname: "/signin", state: { from: props.location } }}
        />
      )
    }
  />
);

export default RecruiterRoute;

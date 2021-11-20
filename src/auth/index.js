import { API } from "../config";

export const signup = (user) => {
  return fetch(`${API}/auth/register`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log("err" + err);
    });
};

export const signin = (user) => {
  return fetch(`${API}/auth/login`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log("err" + err);
    });
};

export const resetPassword = (email) => {
  return fetch(`${API}/auth/resetpassword?email=${email}`)
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log("err" + err);
    });
};

export const updatePassword = (user) => {
  return fetch(`${API}/auth/resetpassword`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log("err" + err);
    });
};

export const authenticate = (data, cb) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("jwt", JSON.stringify(data));
    cb();
  }
};

export const signout = (cb) => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("jwt");
    cb();
  }
};

export const isAuthenticated = () => {
  if (typeof window == "undefined") {
    return false;
  }
  if (localStorage.getItem("jwt")) {
    return JSON.parse(localStorage.getItem("jwt"));
  } else {
    return false;
  }
};

import React, { useState } from "react";
import { axiosWithAuth } from "../components/axiosWithAuth";

const Login = ({ history }) => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const [isFetching, setIsFetching] = useState(false);
  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const login = (e) => {
    e.preventDefault();
    setIsFetching(true);

    axiosWithAuth()
      .post("/login", credentials)
      .then((res) => {
        localStorage.setItem("token", res.data.payload);
        history.push("/protected");
      });
  };

  return (
    <>
      <div>
        <h1>Welcome to the Bubble App!</h1>
        <form onSubmit={login}>
          <input
            type="text"
            name="username"
            placeholder="usernam . ."
            value={credentials.username}
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="password . ."
            value={credentials.password}
            onChange={handleChange}
          />
          <button>LogIn</button>
          {isFetching && "Loading"}
        </form>
      </div>
    </>
  );
};

export default Login;
